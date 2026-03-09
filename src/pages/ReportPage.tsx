import { useParams, Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Camera, ArrowRight, BookOpen } from "lucide-react";
import type { DiagnosisResponse } from "@/types";

const causeLabels: Record<string, string> = {
  sudden_accidental: "Sudden Accidental",
  weather: "Weather Event",
  gradual_wear: "Gradual Wear & Tear",
  maintenance_neglect: "Maintenance Neglect",
  manufacturer_defect: "Manufacturer Defect",
  unknown: "Unknown",
};
const damageLabels: Record<string, string> = {
  water: "Water Damage", fire: "Fire / Heat", structural: "Structural",
  mechanical: "Mechanical", electrical: "Electrical", cosmetic: "Cosmetic",
};

function RiskGauge({ score }: { score: number }) {
  const color = score >= 80 ? "hsl(var(--destructive))" : score >= 60 ? "#f97316" : score >= 35 ? "#eab308" : "#22c55e";
  const label = score >= 80 ? "Critical" : score >= 60 ? "High" : score >= 35 ? "Moderate" : "Low";
  return (
    <div className="flex items-center gap-5">
      <div className="relative h-24 w-24 shrink-0">
        <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none" stroke="hsl(var(--muted))" strokeWidth="2.5" />
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none" stroke={color} strokeWidth="2.5"
            strokeDasharray={`${score}, 100`} strokeLinecap="round" />
        </svg>
        <span className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold" style={{ color }}>{score}</span>
          <span className="text-[10px] text-muted-foreground">/ 100</span>
        </span>
      </div>
      <div>
        <p className="text-lg font-bold text-foreground">{label} Risk</p>
        <p className="text-sm text-muted-foreground">Overall risk score</p>
      </div>
    </div>
  );
}

export default function ReportPage() {
  const { analysisId } = useParams();
  const location = useLocation();
  const data: (DiagnosisResponse & { cause_type?: string; damage_type?: string }) | null =
    (location.state as any) || null;

  if (!data) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <div className="container max-w-lg">
            <h1 className="font-serif text-2xl font-bold text-foreground">Report Not Available</h1>
            <p className="mt-2 text-muted-foreground">
              This report is no longer available. Run a new diagnosis to generate a fresh report.
            </p>
            <Button asChild className="mt-6">
              <Link to="/diagnose">Start New Diagnosis</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const handlePrint = () => window.print();
  const reportDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <Layout>
      {/* ── Toolbar (hidden in print) ── */}
      <div className="container max-w-3xl py-4 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link to={`/results/${analysisId}`} state={data}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Results
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/diagnose"><Camera className="mr-1.5 h-3.5 w-3.5" /> New Diagnosis</Link>
            </Button>
            <Button size="sm" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" /> Print / Save as PDF
            </Button>
          </div>
        </div>
      </div>

      {/* ── Print-optimized report ── */}
      <article className="container max-w-3xl pb-12 print:max-w-none print:px-10 print:py-0 print:text-[11pt]">

        {/* ════ Page 1: Summary ════ */}
        <div className="print:break-after-page">
          {/* Header */}
          <header className="border-b-2 border-foreground/10 pb-5 mb-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-primary">HomeSnapFix</p>
                <h1 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Home Issue Assessment
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  AI-generated first-step repair summary — not a licensed inspection.
                </p>
              </div>
              <div className="hidden text-right text-xs text-muted-foreground sm:block">
                <p>{reportDate}</p>
                <p className="font-mono">#{analysisId}</p>
              </div>
            </div>
          </header>

          {/* Issue title + Summary */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              {data.issue_detected}
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">{data.summary}</p>
          </section>

          {/* Risk + Key facts grid */}
          <section className="mb-8 rounded-lg border bg-card p-5">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <RiskGauge score={data.risk.risk_score} />
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Urgency</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">{data.risk.urgency}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Insurance Outlook</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">{data.insurance.likelihood_tier}</p>
                </div>
                {data.cause_type && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Likely Cause</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{causeLabels[data.cause_type] || data.cause_type}</p>
                  </div>
                )}
                {data.damage_type && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Damage Type</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{damageLabels[data.damage_type] || data.damage_type}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Safety Warnings */}
          {data.risk.safety_warnings.length > 0 && (
            <section className="mb-8 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
              <h3 className="text-sm font-bold text-destructive mb-2">⚠ Safety Warnings — Read Before Proceeding</h3>
              <ul className="space-y-1.5 text-sm text-destructive/90">
                {data.risk.safety_warnings.map((w, i) => <li key={i} className="flex items-start gap-2"><span className="mt-0.5 shrink-0">•</span><span>{w}</span></li>)}
              </ul>
            </section>
          )}

          {/* Probable Causes */}
          <section className="mb-8">
            <h3 className="text-base font-bold text-foreground mb-3">Probable Causes</h3>
            <ul className="space-y-2">
              {data.probable_causes.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ════ Page 2: DIY Steps + When to Call Pro ════ */}
        <div className="print:break-after-page">
          <section className="mb-8">
            <h3 className="text-base font-bold text-foreground mb-4">
              DIY Repair Steps
            </h3>
            <p className="mb-4 text-xs text-muted-foreground italic">
              These steps are for educational reference. If you're unsure about any step, consult a licensed professional.
            </p>
            <div className="space-y-4">
              {data.diy_steps.map((s) => (
                <div key={s.step} className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{s.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* When to Call a Pro */}
          <section className="mb-8 rounded-lg border border-destructive/20 bg-destructive/5 p-5">
            <h3 className="text-base font-bold text-foreground mb-3">
              When to Stop DIY and Call a Professional
            </h3>
            <ul className="space-y-2">
              {data.when_to_call_pro.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-destructive shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tools & Materials */}
          {data.product_links.length > 0 && (
            <section className="mb-8">
              <h3 className="text-base font-bold text-foreground mb-3">Tools & Materials You May Need</h3>
              <div className="grid grid-cols-2 gap-2">
                {data.product_links.map((p, i) => (
                  <div key={i} className="flex justify-between rounded-lg border bg-card px-3 py-2 text-sm">
                    <span className="font-medium text-foreground">{p.name}</span>
                    {p.price && <span className="text-muted-foreground">{p.price}</span>}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground italic">
                Suggestions for reference. Search your preferred retailer for availability and pricing.
              </p>
            </section>
          )}

          {/* Warranty */}
          {data.warranty.warranty_likely && (
            <section className="mb-8 rounded-lg border bg-muted/20 p-4">
              <h3 className="text-sm font-bold text-foreground mb-1">Home Warranty Note</h3>
              <p className="text-sm text-muted-foreground">{data.warranty.explanation}</p>
            </section>
          )}
        </div>

        {/* ════ Page 3: Insurance + Disclaimers + Actions ════ */}
        <div>
          {/* Insurance Insight */}
          {data.insurance.insurance_flag && (
            <section className="mb-8 rounded-lg border bg-card p-5">
              <h3 className="text-base font-bold text-foreground mb-2">Insurance Coverage Insight</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Tier:</span>
                <span className="text-sm font-medium text-foreground">{data.insurance.likelihood_tier}</span>
              </div>
              <p className="text-sm text-muted-foreground">{data.insurance.reason}</p>
              {data.geo_notice && (
                <p className="mt-2 text-xs text-muted-foreground italic">{data.geo_notice}</p>
              )}
              <p className="mt-3 text-xs text-muted-foreground/70">
                This is general information, not insurance advice. Contact your provider for coverage specifics.
              </p>
            </section>
          )}

          {/* How to Use This Report */}
          <section className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-5 print:bg-transparent">
            <h3 className="text-base font-bold text-foreground mb-2">How to Use This Report</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• <strong>As a personal reference:</strong> Save this report for your records to track the issue over time.</li>
              <li>• <strong>Before calling a contractor:</strong> Share this summary so they understand the issue before arriving.</li>
              <li>• <strong>To discuss with your household:</strong> Use it to explain the issue clearly to a spouse or roommate.</li>
              <li>• <strong>Not as a formal inspection:</strong> This is an AI-generated first look — always verify with a pro for safety-critical issues.</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section className="border-t pt-6 space-y-2 text-xs text-muted-foreground/70">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Legal Disclaimers</h3>
            <p>{data.global_disclaimer}</p>
            <p>This report is AI-generated for educational purposes only. It does not constitute a licensed home inspection, engineering assessment, or professional advice of any kind.</p>
            <p>Insurance coverage depends on individual policy language, exclusions, and state regulations. We are not an insurance carrier or agent.</p>
            <p>Contractor referrals, if any, are provided as a convenience. We do not employ, endorse, or guarantee any contractor's work.</p>
            <p>If you suspect a safety hazard, stop and contact emergency services or a licensed professional immediately.</p>
          </section>

          {/* Footer */}
          <footer className="mt-8 border-t pt-4 text-center text-xs text-muted-foreground">
            <p className="font-medium">HomeSnapFix — AI Home Issue Assessment</p>
            <p className="mt-0.5">Report generated {reportDate} • Analysis #{analysisId}</p>
            <p className="mt-0.5">© {new Date().getFullYear()} HomeSnapFix. For informational purposes only.</p>
          </footer>

          {/* Action buttons (hidden in print) */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
            <Button asChild variant="outline" className="flex-1">
              <Link to="/diagnose">
                <Camera className="mr-2 h-4 w-4" /> Run Another Diagnosis
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/diy">
                <BookOpen className="mr-2 h-4 w-4" /> Browse DIY Guides
              </Link>
            </Button>
            <Button asChild className="flex-1">
              <Link to="/pros">
                Find a Pro <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
}
