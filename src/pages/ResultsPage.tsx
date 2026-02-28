import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, AlertTriangle, FileDown, ArrowRight, ShieldCheck } from "lucide-react";
import { ResultsJsonLd } from "@/components/ResultsJsonLd";

const mockResult = {
  issueTitle: "Hairline Drywall Crack",
  severity: "low" as const,
  confidence: 0.87,
  summary: "This appears to be a common hairline crack in drywall, likely caused by normal house settling. It is cosmetic and can be repaired with basic tools and joint compound.",
  quickTips: [
    "This is likely cosmetic — no immediate danger.",
    "Monitor the crack for changes over the next few weeks.",
    "A simple patch should hold if the crack isn't growing.",
  ],
  diySteps: [
    { step: 1, title: "Clean the crack", description: "Use a utility knife to widen the crack slightly, then brush away dust." },
    { step: 2, title: "Apply mesh tape", description: "Place self-adhesive fiberglass mesh tape over the crack." },
    { step: 3, title: "Apply joint compound", description: "Spread a thin layer of joint compound over the tape. Let dry 24 hours." },
    { step: 4, title: "Sand and paint", description: "Sand smooth, prime, and paint to match." },
  ],
  whenToCallAPro: [
    "Crack is wider than 1/4 inch",
    "Crack is diagonal from door/window corners",
    "Crack returns after repair",
  ],
  productLinks: [
    { name: "Drywall Knife Set", url: "#affiliate", price: "$12" },
    { name: "Joint Compound", url: "#affiliate", price: "$10" },
    { name: "Mesh Tape", url: "#affiliate", price: "$5" },
  ],
};

const severityColors: Record<string, string> = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-orange-100 text-orange-800",
  critical: "bg-red-100 text-red-800",
};

export default function ResultsPage() {
  const { analysisId } = useParams();
  const result = mockResult;

  return (
    <Layout>
      <ResultsJsonLd
        issueTitle={result.issueTitle}
        summary={result.summary}
        diySteps={result.diySteps}
        productLinks={result.productLinks}
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <p className="mb-2 text-center text-sm text-muted-foreground">Analysis #{analysisId}</p>
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Your Diagnosis Results
          </h1>

          <div className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <CardTitle className="font-serif text-2xl">{result.issueTitle}</CardTitle>
                  <Badge className={severityColors[result.severity]}>{result.severity} severity</Badge>
                  <Badge variant="outline">{Math.round(result.confidence * 100)}% confidence</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{result.summary}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary" /> Instant Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.quickTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">DIY Repair Steps</CardTitle></CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {result.diySteps.map((s) => (
                    <AccordionItem key={s.step} value={`step-${s.step}`}>
                      <AccordionTrigger>Step {s.step}: {s.title}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{s.description}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-destructive" /> When to Call a Pro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.whenToCallAPro.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Insurance Cross-Sell Block */}
            <Card className="border-border/50 bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ShieldCheck className="h-5 w-5 text-primary" /> Unexpected Repair Costs?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If the issue was caused by storm, sudden pipe failure, or accidental damage, homeowners insurance may help offset costs depending on your policy.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to="/insurance/home-coverage-guide">Learn What's Typically Covered</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to="/insurance/home-coverage-guide">Compare Home &amp; Auto Bundling Options</Link>
                  </Button>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground/70 italic">
                  <p>We are not an insurance provider.</p>
                  <p>Coverage depends on individual policy.</p>
                  <p>This tool provides informational guidance only.</p>
                </div>
              </CardContent>
            </Card>

            {result.productLinks.length > 0 && (
              <Card>
                <CardHeader><CardTitle className="text-lg">Tools &amp; Materials</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {result.productLinks.map((p, i) => (
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
