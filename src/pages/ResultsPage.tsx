import { useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle, AlertTriangle, FileDown, ArrowRight, ShieldCheck, Gauge, Wrench, AlertOctagon, ChevronDown, Info } from "lucide-react";
import { ResultsJsonLd } from "@/components/ResultsJsonLd";
import type { DiagnosisResponse } from "@/types";

const fallbackResult: DiagnosisResponse = {
  analysis_id: "demo",
  issue_detected: "Hairline Drywall Crack",
  probable_causes: ["Normal house settling", "Temperature fluctuation"],
  summary: "This appears to be a common hairline crack in drywall, likely caused by normal house settling.",
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
  ],
  risk: { risk_score: 26, risk_level: "Low", urgency: "Non-urgent — repair at convenience", safety_warnings: [] },
  insurance: { insurance_flag: false, likelihood_tier: "Maintenance", reason: "Gradual wear and tear is typically excluded.", disclaimer_required: true },
  warranty: { warranty_likely: false, explanation: "" },
  geo_notice: null,
  global_disclaimer: "This AI tool provides informational guidance only and does not replace licensed professional evaluation.",
};

// ── Cause / Damage labels ──
const causeLabels: Record<string, string> = {
  sudden_accidental: "Sudden Accidental",
  weather: "Weather Event",
  gradual_wear: "Gradual Wear & Tear",
  maintenance_neglect: "Maintenance Neglect",
  manufacturer_defect: "Manufacturer Defect",
  unknown: "Unknown / Under Investigation",
};
const damageLabels: Record<string, string> = {
  water: "Water Damage",
  fire: "Fire / Heat Damage",
  structural: "Structural Damage",
  mechanical: "Mechanical Failure",
  electrical: "Electrical Hazard",
  cosmetic: "Cosmetic / Surface",
};

// ── Risk Banner Styles ──
function getRiskBanner(score: number) {
  if (score >= 85) return { bg: "bg-destructive/10 border-destructive/30", text: "text-destructive", label: "Immediate Action Recommended", icon: "🔴" };
  if (score >= 60) return { bg: "bg-orange-50 border-orange-300", text: "text-orange-700", label: "Prompt Attention Needed", icon: "🟠" };
  if (score >= 30) return { bg: "bg-yellow-50 border-yellow-300", text: "text-yellow-700", label: "Advisory — Schedule Repair", icon: "🟡" };
  return { bg: "bg-green-50 border-green-300", text: "text-green-700", label: "Informational — Low Urgency", icon: "🟢" };
}

const riskLevelBadge: Record<string, string> = {
  Low: "bg-green-100 text-green-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  High: "bg-orange-100 text-orange-800",
  Critical: "bg-red-100 text-red-800",
};

const insuranceTierBadge: Record<string, string> = {
  "Likely Covered": "bg-green-100 text-green-800",
  "Possibly Covered": "bg-yellow-100 text-yellow-800",
  "Unlikely": "bg-orange-100 text-orange-800",
  "Maintenance": "bg-muted text-muted-foreground",
};

const riskScoreColor = (score: number) => {
  if (score >= 80) return "text-destructive";
  if (score >= 60) return "text-orange-600";
  if (score >= 35) return "text-yellow-600";
  return "text-green-600";
};

export default function ResultsPage() {
  const { analysisId } = useParams();
  const location = useLocation();
  const result: DiagnosisResponse & { cause_type?: string; damage_type?: string } =
    (location.state as any) || fallbackResult;
  const [riskOpen, setRiskOpen] = useState(false);

  const banner = getRiskBanner(result.risk.risk_score);

  return (
    <Layout>
      <ResultsJsonLd
        issueTitle={result.issue_detected}
        summary={result.summary}
        diySteps={result.diy_steps}
        productLinks={result.product_links}
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <p className="mb-2 text-center text-sm text-muted-foreground">Analysis #{analysisId}</p>
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Your Diagnosis Results
          </h1>

          <div className="mt-8 space-y-6">

            {/* ── Dynamic Risk Banner ── */}
            <div className={`flex items-center gap-3 rounded-lg border p-4 ${banner.bg}`}>
              <span className="text-2xl">{banner.icon}</span>
              <div>
                <p className={`font-semibold ${banner.text}`}>{banner.label}</p>
                <p className={`text-sm ${banner.text} opacity-80`}>{result.risk.urgency}</p>
              </div>
            </div>

            {/* ── Issue + Risk Score Card ── */}
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <CardTitle className="font-serif text-2xl">{result.issue_detected}</CardTitle>
                  <Badge className={riskLevelBadge[result.risk.risk_level]}>{result.risk.risk_level} Risk</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{result.summary}</p>

                {/* Risk Score Gauge */}
                <div className="flex items-center gap-4 rounded-lg border bg-muted/20 p-4">
                  <Gauge className={`h-8 w-8 shrink-0 ${riskScoreColor(result.risk.risk_score)}`} />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-bold ${riskScoreColor(result.risk.risk_score)}`}>
                        {result.risk.risk_score}
                      </span>
                      <span className="text-sm text-muted-foreground">/ 100 risk score</span>
                    </div>
                    {/* Risk bar */}
                    <div className="mt-2 h-2 w-full rounded-full bg-muted">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          result.risk.risk_score >= 80 ? "bg-destructive" :
                          result.risk.risk_score >= 60 ? "bg-orange-500" :
                          result.risk.risk_score >= 35 ? "bg-yellow-500" : "bg-green-500"
                        }`}
                        style={{ width: `${result.risk.risk_score}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Probable Causes */}
                {result.probable_causes.length > 0 && (
                  <div>
                    <p className="mb-1 text-sm font-medium text-foreground">Probable Causes</p>
                    <ul className="space-y-1">
                      {result.probable_causes.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Safety Warnings */}
                {result.risk.safety_warnings.length > 0 && (
                  <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3">
                    <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-destructive">
                      <AlertOctagon className="h-4 w-4" /> Safety Warnings
                    </p>
                    <ul className="space-y-1">
                      {result.risk.safety_warnings.map((w, i) => (
                        <li key={i} className="text-sm text-destructive/80">• {w}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Expandable: Why we assessed this risk */}
                {(result.cause_type || result.damage_type) && (
                  <Collapsible open={riskOpen} onOpenChange={setRiskOpen}>
                    <CollapsibleTrigger asChild>
                      <button className="flex w-full items-center gap-2 rounded-lg border bg-muted/10 p-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/30">
                        <Info className="h-4 w-4 shrink-0" />
                        Why we assessed this risk level
                        <ChevronDown className={`ml-auto h-4 w-4 shrink-0 transition-transform ${riskOpen ? "rotate-180" : ""}`} />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 rounded-lg border bg-muted/5 p-4 text-sm text-muted-foreground space-y-2">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs font-medium text-foreground uppercase tracking-wide">Cause Type</p>
                          <p>{causeLabels[result.cause_type || "unknown"] || result.cause_type}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground uppercase tracking-wide">Damage Type</p>
                          <p>{damageLabels[result.damage_type || "cosmetic"] || result.damage_type}</p>
                        </div>
                      </div>
                      <p className="text-xs italic">
                        Risk score is calculated using: severity weight (40%) + damage type weight (30%) + cause type weight (30%).
                        This assessment is algorithmic and informational only.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </CardContent>
            </Card>

            {/* ── DIY Repair Steps ── */}
            <Card>
              <CardHeader><CardTitle className="text-lg">DIY Repair Steps</CardTitle></CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {result.diy_steps.map((s) => (
                    <AccordionItem key={s.step} value={`step-${s.step}`}>
                      <AccordionTrigger>Step {s.step}: {s.title}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{s.description}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* ── When to Call a Pro ── */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-destructive" /> When to Call a Pro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.when_to_call_pro.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* ── Insurance Insight — Conditional ── */}
            {result.insurance.insurance_flag && (
              <Card className="border-border/50 bg-muted/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ShieldCheck className="h-5 w-5 text-primary" /> Insurance Coverage Insight
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge className={insuranceTierBadge[result.insurance.likelihood_tier]}>
                    {result.insurance.likelihood_tier}
                  </Badge>

                  {result.insurance.likelihood_tier === "Likely Covered" && (
                    <p className="text-sm text-muted-foreground">
                      This appears consistent with sudden accidental damage. Depending on your policy, homeowners insurance may apply.
                    </p>
                  )}
                  {result.insurance.likelihood_tier === "Possibly Covered" && (
                    <p className="text-sm text-muted-foreground">{result.insurance.reason}</p>
                  )}

                  {result.geo_notice && (
                    <p className="text-xs text-muted-foreground italic">{result.geo_notice}</p>
                  )}

                  <div className="space-y-1 border-t pt-3 text-xs text-muted-foreground/70">
                    <p>We are not an insurance carrier.</p>
                    <p>Coverage determinations depend on individual policy language, exclusions, and state regulations.</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Maintenance notice when insurance doesn't apply */}
            {!result.insurance.insurance_flag && result.insurance.likelihood_tier === "Maintenance" && (
              <Card className="border-border/50 bg-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" /> Routine Maintenance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This type of issue is typically considered routine maintenance and is generally not covered by homeowners insurance policies.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* ── Warranty Insight ── */}
            {result.warranty.warranty_likely && (
              <Card className="border-border/50 bg-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wrench className="h-5 w-5 text-primary" /> Home Warranty Insight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{result.warranty.explanation}</p>
                </CardContent>
              </Card>
            )}

            {/* ── Tools & Materials ── */}
            {result.product_links.length > 0 && (
              <Card>
                <CardHeader><CardTitle className="text-lg">Tools &amp; Materials</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {result.product_links.map((p, i) => (
                      <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50">
                        <span className="text-sm font-medium text-foreground">{p.name}</span>
                        {p.price && <span className="text-sm text-muted-foreground">{p.price}</span>}
                      </a>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground italic">
                    Some links may be affiliate links. We may earn a commission at no extra cost to you.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* ── Global Disclaimer Framework (4 levels) ── */}
            <div className="rounded-lg border bg-muted/10 p-4 space-y-2 text-xs text-muted-foreground/70">
              <p className="font-medium text-muted-foreground">{result.global_disclaimer}</p>
              <p>Coverage determinations depend on individual policy language, exclusions, and state regulations.</p>
              <p>We are not an insurance carrier.</p>
              <p>We may refer to licensed professionals. We do not guarantee work quality.</p>
            </div>

            {/* ── Action Buttons ── */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline" className="flex-1">
                <Link to={`/report/${analysisId}`}>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Report (PDF)
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/pros">
                  Get Matched with a Pro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
