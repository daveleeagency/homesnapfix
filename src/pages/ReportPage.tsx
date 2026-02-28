import { useParams, Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
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

const fallback: DiagnosisResponse = {
  analysis_id: "demo",
  issue_detected: "Sample Issue",
  probable_causes: ["Sample cause"],
  summary: "This is a sample report.",
  diy_steps: [{ step: 1, title: "Step 1", description: "Do the thing." }],
  when_to_call_pro: ["Call a pro if needed"],
  product_links: [],
  risk: { risk_score: 50, risk_level: "Moderate", urgency: "Schedule repair within 1–2 weeks", safety_warnings: [] },
  insurance: { insurance_flag: false, likelihood_tier: "Maintenance", reason: "Not covered.", disclaimer_required: true },
  warranty: { warranty_likely: false, explanation: "" },
  geo_notice: null,
  global_disclaimer: "This AI tool provides informational guidance only.",
};

function RiskGauge({ score }: { score: number }) {
  const color = score >= 80 ? "#ef4444" : score >= 60 ? "#f97316" : score >= 35 ? "#eab308" : "#22c55e";
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none" stroke={color} strokeWidth="3"
            strokeDasharray={`${score}, 100`} strokeLinecap="round" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold" style={{ color }}>
          {score}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium">Risk Score</p>
        <p className="text-xs text-muted-foreground">out of 100</p>
      </div>
    </div>
  );
}

export default function ReportPage() {
  const { analysisId } = useParams();
  const location = useLocation();
  const data: DiagnosisResponse & { cause_type?: string; damage_type?: string } =
    (location.state as any) || fallback;

  const handlePrint = () => window.print();

  return (
    <Layout>
      {/* Print button — hidden in print */}
      <div className="container max-w-3xl py-4 print:hidden flex items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <Link to={`/results/${analysisId}`}><ArrowLeft className="mr-2 h-4 w-4" /> Back to Results</Link>
        </Button>
        <Button size="sm" onClick={handlePrint}>
          <Printer className="mr-2 h-4 w-4" /> Print / Save as PDF
        </Button>
      </div>

      {/* Print-optimized report */}
      <article className="container max-w-3xl pb-12 print:max-w-none print:px-8 print:py-0">

        {/* ── Page 1: Header + Risk ── */}
        <div className="print:break-after-page">
          <header className="border-b pb-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-serif text-3xl font-bold text-foreground">HomeSnapFix</h1>
                <p className="text-sm text-muted-foreground">AI Home Diagnosis Report</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>Analysis #{analysisId}</p>
                <p>{new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              </div>
            </div>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-1">{data.issue_detected}</h2>
            <p className="text-muted-foreground">{data.summary}</p>
          </section>

          <section className="mb-8 flex flex-wrap gap-8 items-start">
            <RiskGauge score={data.risk.risk_score} />
            <div className="flex-1 min-w-[200px] space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Risk Level</p>
                  <p className="font-semibold">{data.risk.risk_level}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Urgency</p>
                  <p className="font-semibold">{data.risk.urgency}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Insurance Tier</p>
                  <p className="font-semibold">{data.insurance.likelihood_tier}</p>
                </div>
                {data.cause_type && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Cause Type</p>
                    <p className="font-semibold">{causeLabels[data.cause_type] || data.cause_type}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {data.risk.safety_warnings.length > 0 && (
            <section className="mb-8 rounded border border-destructive/30 bg-destructive/5 p-4">
              <h3 className="text-sm font-bold text-destructive mb-2">⚠ Safety Warnings</h3>
              <ul className="space-y-1 text-sm text-destructive/80">
                {data.risk.safety_warnings.map((w, i) => <li key={i}>• {w}</li>)}
              </ul>
            </section>
          )}

          <section className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-2">Probable Causes</h3>
            <ul className="space-y-1">
              {data.probable_causes.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                  {c}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ── Page 2: DIY + When to Call Pro ── */}
        <div className="print:break-after-page">
          <section className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">DIY Repair Steps</h3>
            <div className="space-y-4">
              {data.diy_steps.map((s) => (
                <div key={s.step} className="border-l-2 border-primary/30 pl-4">
                  <p className="text-sm font-semibold text-foreground">Step {s.step}: {s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-2">When to Call a Professional</h3>
            <ul className="space-y-1">
              {data.when_to_call_pro.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {data.warranty.warranty_likely && (
            <section className="mb-8 rounded border bg-muted/20 p-4">
              <h3 className="text-sm font-bold text-foreground mb-1">Home Warranty Insight</h3>
              <p className="text-sm text-muted-foreground">{data.warranty.explanation}</p>
            </section>
          )}

          {data.product_links.length > 0 && (
            <section className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-2">Recommended Tools & Materials</h3>
              <div className="grid grid-cols-2 gap-2">
                {data.product_links.map((p, i) => (
                  <div key={i} className="flex justify-between rounded border p-2 text-sm">
                    <span>{p.name}</span>
                    {p.price && <span className="text-muted-foreground">{p.price}</span>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ── Page 3: Insurance + Disclaimers ── */}
        <div>
          {data.insurance.insurance_flag && (
            <section className="mb-8 rounded border bg-muted/10 p-4">
              <h3 className="text-sm font-bold text-foreground mb-2">Insurance Coverage Insight</h3>
              <p className="text-sm text-muted-foreground mb-1">
                <span className="font-medium">Tier:</span> {data.insurance.likelihood_tier}
              </p>
              <p className="text-sm text-muted-foreground">{data.insurance.reason}</p>
              {data.geo_notice && (
                <p className="mt-2 text-xs text-muted-foreground italic">{data.geo_notice}</p>
              )}
            </section>
          )}

          <section className="border-t pt-6 space-y-2 text-xs text-muted-foreground">
            <h3 className="text-sm font-bold text-foreground mb-2">Legal Disclaimers</h3>
            <p>{data.global_disclaimer}</p>
            <p>Coverage determinations depend on individual policy language, exclusions, and state regulations.</p>
            <p>We are not an insurance carrier.</p>
            <p>We may refer to licensed professionals. We do not guarantee work quality.</p>
          </section>

          <footer className="mt-8 border-t pt-4 text-xs text-muted-foreground text-center">
            <p>AI-generated informational report. Not a licensed inspection.</p>
            <p>Generated {new Date().toISOString()} • Analysis #{analysisId}</p>
            <p className="mt-1">© {new Date().getFullYear()} HomeSnapFix. All rights reserved.</p>
          </footer>
        </div>
      </article>
    </Layout>
  );
}
