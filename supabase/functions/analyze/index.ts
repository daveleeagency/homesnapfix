const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ============================
// Weight tables
// ============================

const SEVERITY_WEIGHTS: Record<string, number> = {
  Low: 20,
  Moderate: 50,
  High: 75,
  Critical: 100,
};

const CAUSE_WEIGHTS: Record<string, number> = {
  sudden_accidental: 80,
  weather: 90,
  gradual_wear: 20,
  maintenance_neglect: 10,
  manufacturer_defect: 50,
  unknown: 40,
};

const DAMAGE_WEIGHTS: Record<string, number> = {
  fire: 90,
  structural: 85,
  water: 80,
  electrical: 75,
  mechanical: 40,
  cosmetic: 15,
};

// ============================
// Engine functions
// ============================

function calculateRiskScore(severity: string, cause: string, damage: string) {
  const s = SEVERITY_WEIGHTS[severity] ?? 50;
  const c = CAUSE_WEIGHTS[cause] ?? 40;
  const d = DAMAGE_WEIGHTS[damage] ?? 40;
  return Math.round(s * 0.4 + d * 0.3 + c * 0.3);
}

function scoreToLevel(score: number) {
  if (score >= 80) return "Critical";
  if (score >= 60) return "High";
  if (score >= 35) return "Moderate";
  return "Low";
}

function scoreToUrgency(score: number) {
  if (score >= 80) return "Immediate action required — safety risk";
  if (score >= 60) return "Address within 24–48 hours";
  if (score >= 35) return "Schedule repair within 1–2 weeks";
  return "Non-urgent — repair at convenience";
}

function evaluateInsurance(cause: string, damage: string) {
  const likely = ["sudden_accidental", "weather"];
  const excluded = ["maintenance_neglect", "gradual_wear"];
  const coverable = ["water", "fire", "structural"];

  if (likely.includes(cause) && coverable.includes(damage)) {
    return {
      insurance_flag: true,
      likelihood_tier: "Likely Covered",
      reason: "Sudden accidental or weather-related event causing property damage.",
      disclaimer_required: true,
    };
  }
  if (excluded.includes(cause)) {
    return {
      insurance_flag: false,
      likelihood_tier: "Maintenance",
      reason: "Gradual wear and tear is typically excluded from homeowners insurance.",
      disclaimer_required: true,
    };
  }
  return {
    insurance_flag: true,
    likelihood_tier: "Possibly Covered",
    reason: "Coverage depends on policy language and cause determination.",
    disclaimer_required: true,
  };
}

function checkWarranty(category: string) {
  const warrantyCategories = ["hvac", "plumbing", "electrical"];
  if (warrantyCategories.includes(category.toLowerCase())) {
    return {
      warranty_likely: true,
      explanation: "Mechanical breakdowns are commonly covered by home warranty plans, not homeowners insurance.",
    };
  }
  return { warranty_likely: false, explanation: "" };
}

const REGULATED_STATES = ["CA", "TX", "FL", "NY", "IL", "PA", "OH", "GA"];

function getGeoNotice(state: string | null) {
  if (!state) return null;
  if (REGULATED_STATES.includes(state.toUpperCase())) {
    return "Insurance coverage varies significantly by state. Consult a licensed agent in your state.";
  }
  return "Coverage terms vary by policy and state regulations.";
}

// ============================
// Mock issue database (maps issue IDs to full analysis)
// ============================

const ISSUE_DATABASE: Record<string, {
  issue_detected: string;
  probable_causes: string[];
  summary: string;
  diy_steps: { step: number; title: string; description: string }[];
  when_to_call_pro: string[];
  product_links: { name: string; url: string; price?: string }[];
  safety_warnings: string[];
  severity: string;
  cause_type: string;
  damage_type: string;
  category: string;
}> = {
  "storm-roof": {
    issue_detected: "Wind-Damaged Roof Shingles",
    probable_causes: ["High winds during storm", "Aged or brittle shingles", "Improper installation"],
    summary: "Missing or lifted shingles expose the roof deck to water intrusion. This is commonly covered by homeowners insurance when caused by a named weather event.",
    diy_steps: [
      { step: 1, title: "Inspect safely from ground", description: "Use binoculars to assess visible damage. Do not climb onto a damaged roof." },
      { step: 2, title: "Tarp exposed areas", description: "If safe, secure a tarp over exposed sections to prevent water intrusion." },
      { step: 3, title: "Document damage", description: "Photograph all damage for insurance documentation." },
    ],
    when_to_call_pro: ["Multiple shingles missing", "Visible deck damage", "Active leak into attic"],
    product_links: [{ name: "Roof Tarp Kit", url: "#", price: "$25" }],
    safety_warnings: ["Do not climb onto a wet or damaged roof", "Watch for downed power lines near roof"],
    severity: "High",
    cause_type: "weather",
    damage_type: "structural",
    category: "roofing",
  },
  "default": {
    issue_detected: "Hairline Drywall Crack",
    probable_causes: ["Normal house settling", "Temperature fluctuation", "Minor foundation movement"],
    summary: "This appears to be a common hairline crack in drywall, likely caused by normal house settling. It is cosmetic and can be repaired with basic tools and joint compound.",
    diy_steps: [
      { step: 1, title: "Clean the crack", description: "Use a utility knife to widen the crack slightly, then brush away dust." },
      { step: 2, title: "Apply mesh tape", description: "Place self-adhesive fiberglass mesh tape over the crack." },
      { step: 3, title: "Apply joint compound", description: "Spread a thin layer of joint compound over the tape. Let dry 24 hours." },
      { step: 4, title: "Sand and paint", description: "Sand smooth, prime, and paint to match." },
    ],
    when_to_call_pro: ["Crack is wider than 1/4 inch", "Crack is diagonal from door/window corners", "Crack returns after repair"],
    product_links: [
      { name: "Drywall Knife Set", url: "#", price: "$12" },
      { name: "Joint Compound", url: "#", price: "$10" },
      { name: "Mesh Tape", url: "#", price: "$5" },
    ],
    safety_warnings: [],
    severity: "Low",
    cause_type: "gradual_wear",
    damage_type: "cosmetic",
    category: "interior",
  },
};

// ============================
// Handler
// ============================

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const issueId = body.issue_id || "default";
    const zip = body.zip || "";
    const stateCode = body.state_code || null;

    const issue = ISSUE_DATABASE[issueId] || ISSUE_DATABASE["default"];

    const riskScore = calculateRiskScore(issue.severity, issue.cause_type, issue.damage_type);

    const response = {
      analysis_id: crypto.randomUUID().slice(0, 12),
      issue_detected: issue.issue_detected,
      probable_causes: issue.probable_causes,
      summary: issue.summary,
      diy_steps: issue.diy_steps,
      when_to_call_pro: issue.when_to_call_pro,
      product_links: issue.product_links,
      risk: {
        risk_score: riskScore,
        risk_level: scoreToLevel(riskScore),
        urgency: scoreToUrgency(riskScore),
        safety_warnings: issue.safety_warnings,
      },
      insurance: evaluateInsurance(issue.cause_type, issue.damage_type),
      warranty: checkWarranty(issue.category),
      geo_notice: getGeoNotice(stateCode),
      global_disclaimer: "This AI tool provides informational guidance only and does not replace licensed professional evaluation.",
    };

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Analysis failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
