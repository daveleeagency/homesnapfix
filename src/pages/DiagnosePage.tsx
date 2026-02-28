import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Upload, FileDown, ArrowRight, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import type { DiagnosisResult } from "@/types";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

const mockResult: DiagnosisResult = {
  issueTitle: "Hairline Drywall Crack",
  severity: "low",
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

export default function DiagnosePage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setResult(null);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  }, [handleFile]);

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    try {
      if (API_BASE) {
        const formData = new FormData();
        formData.append("photo", file);
        if (category) formData.append("category", category);
        if (zip) formData.append("zip", zip);
        const res = await fetch(`${API_BASE}/api/analyze`, { method: "POST", body: formData });
        if (!res.ok) throw new Error("Analysis failed");
        const data = await res.json();
        setResult(data);
      } else {
        // Mock response
        await new Promise((r) => setTimeout(r, 2000));
        setResult(mockResult);
      }
    } catch {
      toast({ title: "Analysis Error", description: "Could not analyze the photo. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!result) return;
    if (!API_BASE) {
      toast({ title: "PDF Not Configured", description: "PDF generation is not configured yet. Set VITE_API_BASE_URL to enable." });
      return;
    }
    setPdfLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/pdf/report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result,
          ctaUrl: `${window.location.origin}/pros`,
          diyHubUrl: `${window.location.origin}/diy`,
        }),
      });
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "HomeSnapFix-Report.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      toast({ title: "PDF Error", description: "Could not generate PDF. Please try again.", variant: "destructive" });
    } finally {
      setPdfLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            AI Home Diagnosis
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Upload a photo of the issue and get instant guidance.
          </p>

          {/* Upload area */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <div
                className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 p-8 transition-colors hover:border-primary/50"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => document.getElementById("photo-input")?.click()}
              >
                {preview ? (
                  <img src={preview} alt="Upload preview" className="max-h-48 rounded-lg object-contain" />
                ) : (
                  <>
                    <Upload className="mb-3 h-10 w-10 text-muted-foreground" />
                    <p className="text-sm font-medium text-muted-foreground">
                      Drag & drop a photo, or click to browse
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Supports JPG, PNG, HEIC</p>
                  </>
                )}
                <input
                  id="photo-input"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                  }}
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Issue category (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="interior">Interior</SelectItem>
                    <SelectItem value="exterior">Exterior</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="hvac">HVAC</SelectItem>
                    <SelectItem value="roofing">Roofing</SelectItem>
                    <SelectItem value="deck">Deck / Patio</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="ZIP code (optional)" value={zip} onChange={(e) => setZip(e.target.value)} />
              </div>

              <Button className="mt-4 w-full" size="lg" onClick={handleAnalyze} disabled={!file || loading}>
                {loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
                ) : (
                  <><Camera className="mr-2 h-4 w-4" /> Analyze Photo</>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
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

              {/* Quick Tips */}
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><CheckCircle className="h-5 w-5 text-primary" /> Instant Guidance</CardTitle></CardHeader>
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

              {/* DIY Steps */}
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

              {/* When to Call a Pro */}
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><AlertTriangle className="h-5 w-5 text-warning" /> When to Call a Pro</CardTitle></CardHeader>
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

              {/* Tools & Materials */}
              {result.productLinks.length > 0 && (
                <Card>
                  <CardHeader><CardTitle className="text-lg">Tools & Materials</CardTitle></CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {result.productLinks.map((p, i) => (
                        <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50">
                          <span className="text-sm font-medium text-foreground">{p.name}</span>
                          {p.price && <span className="text-sm text-muted-foreground">{p.price}</span>}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={handleDownloadPdf} disabled={pdfLoading} variant="outline" className="flex-1">
                  {pdfLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileDown className="mr-2 h-4 w-4" />}
                  Download Report (PDF)
                </Button>
                <Button asChild className="flex-1">
                  <Link to="/pros">
                    Get Matched with a Pro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
