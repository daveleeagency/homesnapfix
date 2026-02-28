import type { DiagnosisResult, Lead, NewsletterSubscriber } from "@/types";

const API_BASE = "/api";

export async function analyzeDiagnosis(
  photo: File,
  category?: string,
  zip?: string
): Promise<DiagnosisResult> {
  const formData = new FormData();
  formData.append("photo", photo);
  if (category) formData.append("category", category);
  if (zip) formData.append("zip", zip);

  const res = await fetch(`${API_BASE}/analyze`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Analysis failed");
  return res.json();
}

export async function downloadReport(data: DiagnosisResult): Promise<Blob> {
  const res = await fetch(`${API_BASE}/pdf/report`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      ctaUrl: `${window.location.origin}/pros`,
      diyHubUrl: `${window.location.origin}/diy`,
    }),
  });
  if (!res.ok) throw new Error("PDF generation failed");
  return res.blob();
}

export async function submitLead(lead: Lead): Promise<{ success: boolean }> {
  const res = await fetch(`${API_BASE}/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error("Lead submission failed");
  return res.json();
}

export async function subscribeNewsletter(
  subscriber: NewsletterSubscriber
): Promise<{ success: boolean }> {
  const res = await fetch(`${API_BASE}/newsletter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subscriber),
  });
  if (!res.ok) throw new Error("Newsletter subscription failed");
  return res.json();
}
