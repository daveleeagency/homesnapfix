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
