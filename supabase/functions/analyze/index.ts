const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ============================
// Risk helpers
// ============================

function scoreToLevel(s: number) { return s >= 80 ? "Critical" : s >= 60 ? "High" : s >= 35 ? "Moderate" : "Low"; }
function scoreToUrgency(s: number) { return s >= 80 ? "Immediate action required — safety risk" : s >= 60 ? "Address within 24–48 hours" : s >= 35 ? "Schedule repair within 1–2 weeks" : "Non-urgent — repair at convenience"; }

function evaluateInsurance(cause: string, damage: string) {
  const likely = ["sudden_accidental", "weather"];
  const excluded = ["maintenance_neglect", "gradual_wear"];
  const coverable = ["water", "fire", "structural"];
  if (likely.includes(cause) && coverable.includes(damage))
    return { insurance_flag: true, likelihood_tier: "Likely Covered", reason: "Sudden accidental or weather-related event causing property damage.", disclaimer_required: true };
  if (excluded.includes(cause))
    return { insurance_flag: false, likelihood_tier: "Maintenance", reason: "Gradual wear and tear is typically excluded from homeowners insurance.", disclaimer_required: true };
  return { insurance_flag: true, likelihood_tier: "Possibly Covered", reason: "Coverage depends on policy language and cause determination.", disclaimer_required: true };
}

function checkWarranty(cat: string) {
  const wCats = ["hvac", "plumbing", "electrical"];
  return wCats.includes(cat.toLowerCase())
    ? { warranty_likely: true, explanation: "Mechanical breakdowns are commonly covered by home warranty plans, not homeowners insurance." }
    : { warranty_likely: false, explanation: "" };
}

const REGULATED = ["CA","TX","FL","NY","IL","PA","OH","GA"];
function geoNotice(st: string | null) {
  if (!st) return null;
  return REGULATED.includes(st.toUpperCase())
    ? "Insurance coverage varies significantly by state. Consult a licensed agent in your state."
    : "Coverage terms vary by policy and state regulations.";
}

// ============================
// AI Gateway
// ============================

const AI_GATEWAY_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";

// Step 1: Classify image — is it home-related? What does it show?
async function classifyImage(
  imageBase64: string,
  mimeType: string,
  apiKey: string,
): Promise<{ is_home_issue: boolean; image_label: string; detected_categories: string[]; confidence: number; details: string }> {
  const res = await fetch(AI_GATEWAY_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        {
          role: "system",
          content: `You are a strict home-issue image classifier. Respond with ONLY valid JSON — no markdown, no code fences, no explanation.

{
  "is_home_issue": boolean,
  "image_label": "concise description of what the photo shows",
  "detected_categories": ["roofing","plumbing","hvac","electrical","exterior","interior","appliance"],
  "confidence": 0.0-1.0,
  "details": "brief description of visible damage, material, location"
}

Rules:
- is_home_issue = true ONLY if the image clearly shows part of a home, building interior/exterior, home systems, appliances, or damage to a residential structure.
- is_home_issue = false for: vehicles (cars, motorcycles, boats), people, pets, food, landscapes without buildings, screenshots, documents, random objects not related to home maintenance.
- detected_categories should list applicable home categories from this set: roofing, plumbing, hvac, electrical, exterior, interior, appliance, structural, fire, water_damage.
- Be specific in image_label — e.g. "water stain on drywall ceiling", "rusted pipe joint under sink", "cracked vinyl siding panel".`,
        },
        {
          role: "user",
          content: [
            { type: "image_url", image_url: { url: `data:${mimeType};base64,${imageBase64}` } },
            { type: "text", text: "Classify this image. Is it a home issue?" },
          ],
        },
      ],
      max_tokens: 400,
      temperature: 0.1,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Classification gateway error:", res.status, errText);
    throw new Error("Image classification failed");
  }

  const data = await res.json();
  let content = (data.choices?.[0]?.message?.content || "").trim();
  if (content.startsWith("```")) content = content.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
  return JSON.parse(content);
}

// Step 2: Generate full diagnosis from the photo
async function generateDiagnosis(
  imageBase64: string,
  mimeType: string,
  imageLabel: string,
  detectedCategories: string[],
  selectedIssueHint: string | null,
  description: string,
  apiKey: string,
): Promise<{
  issue_detected: string;
  probable_causes: string[];
  summary: string;
  diy_steps: { step: number; title: string; description: string }[];
  when_to_call_pro: string[];
  product_links: { name: string; url: string; price?: string }[];
  safety_warnings: string[];
  risk_score: number;
  cause_type: string;
  damage_type: string;
  category: string;
}> {
  const hintInstruction = selectedIssueHint && selectedIssueHint !== "default"
    ? `The user pre-selected the issue "${selectedIssueHint}" — use this as a hint but trust the photo more. If the photo clearly shows something different, diagnose what the photo shows.`
    : "The user did not pre-select an issue. Diagnose based entirely on the photo.";

  const descriptionNote = description ? `The user also described: "${description}"` : "";

  const res = await fetch(AI_GATEWAY_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        {
          role: "system",
          content: `You are a professional home inspector AI. You analyze photos of home issues and provide actionable diagnostic guidance.

Given a photo that has been classified as: "${imageLabel}" with categories: [${detectedCategories.join(", ")}].
${hintInstruction}
${descriptionNote}

Respond with ONLY valid JSON (no markdown, no code fences):
{
  "issue_detected": "specific issue name, e.g. 'Ceiling Water Stain from Roof Leak'",
  "probable_causes": ["cause 1 specific to THIS photo", "cause 2", "cause 3"],
  "summary": "2-3 sentence assessment specific to what is visible in this photo. Reference specific visual indicators you see.",
  "diy_steps": [
    {"step":1,"title":"action title","description":"detailed instruction"},
    {"step":2,"title":"action title","description":"detailed instruction"},
    {"step":3,"title":"action title","description":"detailed instruction"}
  ],
  "when_to_call_pro": ["specific condition 1", "specific condition 2", "specific condition 3"],
  "product_links": [{"name":"product name","url":"#","price":"$XX"}],
  "safety_warnings": ["warning if applicable"],
  "risk_score": 0-100,
  "cause_type": "sudden_accidental|gradual_wear|maintenance_neglect|manufacturer_defect|weather|unknown",
  "damage_type": "water|fire|structural|mechanical|electrical|cosmetic",
  "category": "roofing|plumbing|hvac|electrical|exterior|interior"
}

CRITICAL RULES:
- Your diagnosis MUST be specific to what you see in the photo. Never give generic advice.
- risk_score: 0-30 cosmetic/minor, 30-60 moderate needs attention, 60-80 urgent, 80-100 emergency/safety hazard.
- cause_type must be one of the exact enum values listed above.
- diy_steps should have 3-5 steps, each with specific actionable instructions.
- product_links: suggest 1-3 relevant products with realistic prices.
- Be concise but specific. Reference visible damage characteristics.`,
        },
        {
          role: "user",
          content: [
            { type: "image_url", image_url: { url: `data:${mimeType};base64,${imageBase64}` } },
            { type: "text", text: "Generate a complete home diagnosis for this photo." },
          ],
        },
      ],
      max_tokens: 1500,
      temperature: 0.4,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Diagnosis gateway error:", res.status, errText);
    throw new Error("Diagnosis generation failed");
  }

  const data = await res.json();
  let content = (data.choices?.[0]?.message?.content || "").trim();
  if (content.startsWith("```")) content = content.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "");
  return JSON.parse(content);
}

// ============================
// Mismatch detection
// ============================

const CATEGORY_MAP: Record<string, string[]> = {
  "storm-roof": ["roofing", "exterior"],
  "roof-gradual": ["roofing", "exterior", "water_damage"],
  "storm-hail": ["roofing", "exterior"],
  "storm-siding": ["exterior"],
  "storm-gutter": ["exterior"],
  "water-burst": ["plumbing", "water_damage"],
  "water-slab": ["plumbing", "structural"],
  "water-heater": ["plumbing", "appliance"],
  "water-sewer": ["plumbing"],
  "water-pressure": ["plumbing"],
  "hvac-ac": ["hvac", "appliance"],
  "hvac-furnace": ["hvac", "appliance"],
  "hvac-refrigerant": ["hvac"],
  "hvac-thermostat": ["hvac", "electrical"],
  "hvac-energy": ["hvac"],
  "elec-breaker": ["electrical"],
  "elec-burn": ["electrical", "fire"],
  "elec-flicker": ["electrical"],
  "elec-outlet": ["electrical"],
  "elec-co": ["electrical", "fire"],
  "struct-hairline": ["structural", "exterior"],
  "struct-major": ["structural", "exterior"],
  "struct-crawl": ["structural", "water_damage"],
  "struct-termite": ["structural", "exterior"],
  "struct-mold": ["interior", "water_damage"],
  "appl-fridge": ["appliance", "hvac"],
  "appl-dishwasher": ["appliance", "plumbing"],
  "appl-washer": ["appliance", "plumbing", "water_damage"],
  "appl-dryer": ["appliance", "fire"],
  "appl-garage": ["appliance", "exterior"],
};

const ISSUE_LABELS: Record<string, string> = {
  "storm-roof": "Roof Leak (Post-Storm)",
  "roof-gradual": "Roof Leak (Gradual)",
  "storm-hail": "Hail Damage",
  "storm-siding": "Siding Damage",
  "storm-gutter": "Gutter Overflow",
  "water-burst": "Burst Pipe",
  "water-slab": "Slab Leak",
  "water-heater": "Water Heater Failure",
  "water-sewer": "Sewer Backup",
  "water-pressure": "Low Water Pressure",
  "hvac-ac": "AC Not Cooling",
  "hvac-furnace": "Furnace Not Heating",
  "hvac-refrigerant": "Refrigerant Leak",
  "hvac-thermostat": "Thermostat Failure",
  "hvac-energy": "Energy Bill Spike",
  "elec-breaker": "Breaker Tripping",
  "elec-burn": "Burning Smell",
  "elec-flicker": "Flickering Lights",
  "elec-outlet": "Dead Outlets",
  "elec-co": "Carbon Monoxide Alarm",
  "struct-hairline": "Foundation Cracks (Hairline)",
  "struct-major": "Major Foundation Shift",
  "struct-crawl": "Crawlspace Moisture",
  "struct-termite": "Termite Damage",
  "struct-mold": "Mold Growth",
  "appl-fridge": "Refrigerator Not Cooling",
  "appl-dishwasher": "Dishwasher Leak",
  "appl-washer": "Washer Overflow",
  "appl-dryer": "Dryer Overheating",
  "appl-garage": "Garage Door Failure",
};

function detectMismatch(
  selectedIssue: string,
  detectedCategories: string[],
  imageLabel: string,
): { mismatch: boolean; mismatch_reason: string } {
  if (!selectedIssue || selectedIssue === "default") {
    return { mismatch: false, mismatch_reason: "" };
  }

  const expectedCats = CATEGORY_MAP[selectedIssue] || [];
  if (expectedCats.length === 0) return { mismatch: false, mismatch_reason: "" };

  const detectedLower = detectedCategories.map(c => c.toLowerCase());
  const hasOverlap = expectedCats.some(ec => detectedLower.some(dc => dc.includes(ec) || ec.includes(dc)));

  if (!hasOverlap && detectedLower.length > 0) {
    const issueLabel = ISSUE_LABELS[selectedIssue] || selectedIssue;
    return {
      mismatch: true,
      mismatch_reason: `You selected "${issueLabel}" but the photo appears to show: ${imageLabel} (detected categories: ${detectedCategories.join(", ")}). The photo doesn't match the selected issue.`,
    };
  }

  return { mismatch: false, mismatch_reason: "" };
}

// ============================
// Handler
// ============================

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const requestId = crypto.randomUUID().slice(0, 12);
  const timestamp = new Date().toISOString();

  try {
    let selectedIssue = "default";
    let stateCode: string | null = null;
    let description = "";
    let photoBase64: string | null = null;
    let photoMimeType = "image/jpeg";
    let mode = "select"; // "select" or "ai_detect"

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      selectedIssue = (formData.get("selected_issue") as string) || "default";
      const zip = (formData.get("zip") as string) || "";
      description = (formData.get("description") as string) || "";
      mode = (formData.get("mode") as string) || "select";
      stateCode = zip ? zip.substring(0, 2) : null;

      const photo = formData.get("photo") as File | null;
      if (photo && photo.size > 0) {
        const arrayBuffer = await photo.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        let binary = "";
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        photoBase64 = btoa(binary);
        photoMimeType = photo.type || "image/jpeg";
      }
    } else {
      const body = await req.json();
      selectedIssue = body.issue_id || body.selected_issue || "default";
      stateCode = body.state_code || null;
      description = body.description || "";
      mode = body.mode || "select";
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");

    // If no photo or no API key, return an error
    if (!photoBase64) {
      return new Response(JSON.stringify({
        request_id: requestId,
        timestamp,
        image_valid: false,
        image_label: "no photo provided",
        mismatch: false,
        mismatch_reason: "",
        error: "no_photo",
        message: "Please upload a photo of the home issue.",
      }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!apiKey) {
      return new Response(JSON.stringify({
        request_id: requestId,
        timestamp,
        error: "configuration_error",
        message: "AI analysis is not configured.",
      }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ── Step 1: Classify the image ──
    console.log(`[${requestId}] Classifying image...`);
    let classification;
    try {
      classification = await classifyImage(photoBase64, photoMimeType, apiKey);
    } catch (err) {
      console.error(`[${requestId}] Classification failed:`, err);
      return new Response(JSON.stringify({
        request_id: requestId,
        timestamp,
        image_valid: false,
        image_label: "classification failed",
        mismatch: false,
        mismatch_reason: "",
        error: "classification_failed",
        message: "Could not analyze the image. Please try again with a clearer photo.",
      }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log(`[${requestId}] Classification result:`, JSON.stringify(classification));

    // ── Step 2: Home relevance gate ──
    if (!classification.is_home_issue) {
      return new Response(JSON.stringify({
        request_id: requestId,
        timestamp,
        image_valid: false,
        image_label: classification.image_label,
        mismatch: false,
        mismatch_reason: "",
        error: "not_home_issue",
        message: `This photo doesn't appear to be a home issue. It looks like: ${classification.image_label}. Please upload a photo of the affected home area.`,
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ── Step 3: Mismatch detection ──
    const issueHint = mode === "ai_detect" ? null : selectedIssue;
    const mismatchResult = detectMismatch(
      mode === "ai_detect" ? "" : selectedIssue,
      classification.detected_categories,
      classification.image_label,
    );

    // ── Step 4: Generate real AI diagnosis ──
    console.log(`[${requestId}] Generating diagnosis...`);
    let diagnosis;
    try {
      diagnosis = await generateDiagnosis(
        photoBase64,
        photoMimeType,
        classification.image_label,
        classification.detected_categories,
        issueHint,
        description,
        apiKey,
      );
    } catch (err) {
      console.error(`[${requestId}] Diagnosis generation failed:`, err);
      return new Response(JSON.stringify({
        request_id: requestId,
        timestamp,
        error: "diagnosis_failed",
        message: "Could not generate diagnosis. Please try again.",
      }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log(`[${requestId}] Diagnosis generated: ${diagnosis.issue_detected}`);

    // ── Build full response ──
    const riskScore = Math.max(0, Math.min(100, diagnosis.risk_score || 30));
    const riskLevel = scoreToLevel(riskScore);
    const insurance = evaluateInsurance(diagnosis.cause_type || "unknown", diagnosis.damage_type || "cosmetic");
    const warranty = checkWarranty(diagnosis.category || "general");

    const response = {
      request_id: requestId,
      timestamp,
      analysis_id: requestId,
      image_valid: true,
      image_label: classification.image_label,
      mismatch: mismatchResult.mismatch,
      mismatch_reason: mismatchResult.mismatch_reason,
      issue_detected: diagnosis.issue_detected,
      probable_causes: diagnosis.probable_causes || [],
      summary: diagnosis.summary || "",
      diy_steps: diagnosis.diy_steps || [],
      when_to_call_pro: diagnosis.when_to_call_pro || [],
      product_links: diagnosis.product_links || [],
      risk: {
        risk_score: riskScore,
        risk_level: riskLevel,
        urgency: scoreToUrgency(riskScore),
        safety_warnings: diagnosis.safety_warnings || [],
      },
      insurance,
      warranty,
      geo_notice: geoNotice(stateCode),
      cause_type: diagnosis.cause_type || "unknown",
      damage_type: diagnosis.damage_type || "cosmetic",
      global_disclaimer: "This AI tool provides informational guidance only and does not replace licensed professional evaluation.",
    };

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(`[${requestId}] Unhandled error:`, err);
    return new Response(
      JSON.stringify({ request_id: requestId, timestamp, error: "Analysis failed", message: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
