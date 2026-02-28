import type { CauseType, DamageType, RiskLevel, InsuranceTier, RiskAssessment, InsuranceInsight, WarrantyInsight } from "@/types";

// ============================
// Severity Weights
// ============================

const SEVERITY_WEIGHTS: Record<string, number> = {
  Low: 20,
  Moderate: 50,
  High: 75,
  Critical: 100,
};

const CAUSE_WEIGHTS: Record<CauseType, number> = {
  sudden_accidental: 80,
  weather: 90,
  gradual_wear: 20,
  maintenance_neglect: 10,
  manufacturer_defect: 50,
  unknown: 40,
};

const DAMAGE_WEIGHTS: Record<DamageType, number> = {
  fire: 90,
  structural: 85,
  water: 80,
  electrical: 75,
  mechanical: 40,
  cosmetic: 15,
};

// ============================
// Risk Score Calculator
// ============================

export function calculateRiskScore(
  severityLevel: string,
  causeType: CauseType,
  damageType: DamageType
): number {
  const severity = SEVERITY_WEIGHTS[severityLevel] ?? 50;
  const cause = CAUSE_WEIGHTS[causeType];
  const damage = DAMAGE_WEIGHTS[damageType];

  return Math.round(severity * 0.4 + damage * 0.3 + cause * 0.3);
}

export function scoreToRiskLevel(score: number): RiskLevel {
  if (score >= 80) return "Critical";
  if (score >= 60) return "High";
  if (score >= 35) return "Moderate";
  return "Low";
}

export function scoreToUrgency(score: number): string {
  if (score >= 80) return "Immediate action required — safety risk";
  if (score >= 60) return "Address within 24–48 hours";
  if (score >= 35) return "Schedule repair within 1–2 weeks";
  return "Non-urgent — repair at convenience";
}

export function buildRiskAssessment(
  severityLevel: string,
  causeType: CauseType,
  damageType: DamageType,
  safetyWarnings: string[] = []
): RiskAssessment {
  const score = calculateRiskScore(severityLevel, causeType, damageType);
  return {
    risk_score: score,
    risk_level: scoreToRiskLevel(score),
    urgency: scoreToUrgency(score),
    safety_warnings: safetyWarnings,
  };
}

// ============================
// Insurance Classifier
// ============================

export function evaluateInsurance(
  causeType: CauseType,
  damageType: DamageType
): InsuranceInsight {
  const likelyCauses: CauseType[] = ["sudden_accidental", "weather"];
  const excludedCauses: CauseType[] = ["maintenance_neglect", "gradual_wear"];
  const coverableDamage: DamageType[] = ["water", "fire", "structural"];

  if (likelyCauses.includes(causeType) && coverableDamage.includes(damageType)) {
    return {
      insurance_flag: true,
      likelihood_tier: "Likely Covered",
      reason: "Sudden accidental or weather-related event causing property damage.",
      disclaimer_required: true,
    };
  }

  if (excludedCauses.includes(causeType)) {
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

// ============================
// Warranty Check
// ============================

export function checkWarranty(issueCategory: string): WarrantyInsight {
  const warrantyCategories = ["hvac", "plumbing", "electrical"];
  const mechanicalKeywords = ["appliance", "mechanical", "failure"];

  const isWarranty =
    warrantyCategories.includes(issueCategory.toLowerCase()) ||
    mechanicalKeywords.some((kw) => issueCategory.toLowerCase().includes(kw));

  if (isWarranty) {
    return {
      warranty_likely: true,
      explanation:
        "Mechanical breakdowns are commonly covered by home warranty plans, not homeowners insurance.",
    };
  }

  return { warranty_likely: false, explanation: "" };
}

// ============================
// Geo Disclaimer
// ============================

const REGULATED_STATES = ["CA", "TX", "FL", "NY", "IL", "PA", "OH", "GA"];

export function getGeoNotice(stateCode: string | null): string | null {
  if (!stateCode) return null;
  if (REGULATED_STATES.includes(stateCode.toUpperCase())) {
    return "Insurance coverage varies significantly by state. Consult a licensed agent in your state.";
  }
  return "Coverage terms vary by policy and state regulations.";
}
