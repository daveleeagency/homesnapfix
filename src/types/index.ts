// ============================
// Diagnosis Decision Logic Types
// ============================

export type CauseType =
  | "sudden_accidental"
  | "gradual_wear"
  | "maintenance_neglect"
  | "manufacturer_defect"
  | "weather"
  | "unknown";

export type DamageType =
  | "water"
  | "fire"
  | "structural"
  | "mechanical"
  | "electrical"
  | "cosmetic";

export type RiskLevel = "Low" | "Moderate" | "High" | "Critical";

export type InsuranceTier =
  | "Likely Covered"
  | "Possibly Covered"
  | "Unlikely"
  | "Maintenance";

// ============================
// Risk Assessment
// ============================

export interface RiskAssessment {
  risk_score: number; // 0–100
  risk_level: RiskLevel;
  urgency: string;
  safety_warnings: string[];
}

// ============================
// Insurance Insight
// ============================

export interface InsuranceInsight {
  insurance_flag: boolean;
  likelihood_tier: InsuranceTier;
  reason: string;
  disclaimer_required: boolean;
}

// ============================
// Warranty Insight
// ============================

export interface WarrantyInsight {
  warranty_likely: boolean;
  explanation: string;
}

// ============================
// Full Diagnosis Response (Production-Grade)
// ============================

export interface DiagnosisResponse {
  analysis_id: string;
  issue_detected: string;
  probable_causes: string[];
  summary: string;
  diy_steps: { step: number; title: string; description: string }[];
  when_to_call_pro: string[];
  product_links: { name: string; url: string; price?: string }[];
  risk: RiskAssessment;
  insurance: InsuranceInsight;
  warranty: WarrantyInsight;
  geo_notice: string | null;
  global_disclaimer: string;
}

// ============================
// Legacy types (kept for compatibility)
// ============================

export interface DiagnosisResult {
  issueTitle: string;
  severity: "low" | "medium" | "high" | "critical";
  confidence: number;
  summary: string;
  quickTips: string[];
  diySteps: { step: number; title: string; description: string }[];
  whenToCallAPro: string[];
  productLinks: { name: string; url: string; price?: string }[];
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  zip: string;
  issueType: string;
  budgetRange: string;
  preferredContact: "phone" | "email" | "text";
  consent: boolean;
}

export interface NewsletterSubscriber {
  email: string;
  zip: string;
}

export interface DIYArticle {
  slug: string;
  title: string;
  category: DIYCategory;
  heroImage: string;
  symptoms: string[];
  causes: string[];
  diySteps: { step: number; title: string; description: string }[];
  toolsNeeded: { name: string; affiliateUrl?: string; price?: string }[];
  safetyNotes: string[];
  whenToCallAPro: string[];
}

export type DIYCategory =
  | "Interior"
  | "Exterior"
  | "Plumbing"
  | "Electrical"
  | "HVAC"
  | "Roofing"
  | "Deck/Patio";
