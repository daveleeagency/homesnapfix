import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Camera, Upload, Loader2, X, AlertTriangle, AlertOctagon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { IssueClusters } from "@/components/IssueClusters";
import { DiagnoseJsonLd } from "@/components/DiagnoseJsonLd";
import { supabase } from "@/integrations/supabase/client";
import type { IssueCard } from "@/data/issueClusters";

const riskColors: Record<IssueCard["riskLevel"], string> = {
  Low: "bg-green-100 text-green-800 border-green-200",
  Moderate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  High: "bg-red-100 text-red-800 border-red-200",
};

interface ImagePreCheck {
  image_valid: boolean;
  image_label: string;
  mismatch: boolean;
  mismatch_reason: string;
}

export default function DiagnosePage() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<IssueCard | null>(null);
  const [zip, setZip] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [mismatchWarning, setMismatchWarning] = useState<ImagePreCheck | null>(null);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setImageError(null);
    setMismatchWarning(null);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  }, [handleFile]);

  const sendAnalysis = async (forceContine = false) => {
    if (!file) return;
    setLoading(true);
    setImageError(null);
    if (!forceContine) setMismatchWarning(null);

    try {
      // Build FormData
      const formData = new FormData();
      formData.append("photo", file);
      formData.append("selected_issue", selectedIssue?.id || "default");
      if (zip) formData.append("zip", zip);
      if (description) formData.append("description", description);

      // Call edge function with FormData via fetch (supabase.functions.invoke doesn't support FormData natively)
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

      const res = await fetch(`${supabaseUrl}/functions/v1/analyze`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${supabaseKey}`,
          "apikey": supabaseKey,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Analysis failed");
      const data = await res.json();

      // Pre-check: image_valid
      if (data.image_valid === false) {
        setImageError(
          "This photo doesn't appear to be a home issue. Please upload a photo of the affected area (ceiling stain, leak, outlet, HVAC unit, etc.)."
        );
        setLoading(false);
        return;
      }

      // Pre-check: mismatch (only show if not forcing continue)
      if (data.mismatch === true && !forceContine) {
        setMismatchWarning({
          image_valid: true,
          image_label: data.image_label,
          mismatch: true,
          mismatch_reason: data.mismatch_reason,
        });
        setLoading(false);
        return;
      }

      // Save to diagnosis history if logged in
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        await supabase.from("diagnoses").insert({
          user_id: session.user.id,
          analysis_id: data.analysis_id,
          issue_detected: data.issue_detected,
          risk_score: data.risk?.risk_score || 0,
          risk_level: data.risk?.risk_level || "Low",
          insurance_tier: data.insurance?.likelihood_tier,
          cause_type: data.cause_type,
          damage_type: data.damage_type,
          result_data: data,
        });
      }

      navigate(`/results/${data.analysis_id}`, { state: data });
    } catch {
      toast({ title: "Analysis Error", description: "Could not analyze the photo. Please try again.", variant: "destructive" });
      setLoading(false);
    }
  };

  const handleAnalyze = () => sendAnalysis(false);
  const handleContinueAnyway = () => sendAnalysis(true);

  const handleChangeIssue = () => {
    setSelectedIssue(null);
    setMismatchWarning(null);
  };

  return (
    <Layout>
      <DiagnoseJsonLd />
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            AI Home Diagnosis
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Select an issue, upload a photo, and get instant guidance.
          </p>

          {/* Image Error Banner */}
          {imageError && (
            <Alert variant="destructive" className="mt-6">
              <AlertOctagon className="h-4 w-4" />
              <AlertTitle>Invalid Photo</AlertTitle>
              <AlertDescription>{imageError}</AlertDescription>
            </Alert>
          )}

          {/* Mismatch Warning Banner */}
          {mismatchWarning && (
            <Alert className="mt-6 border-yellow-300 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-700" />
              <AlertTitle className="text-yellow-800">Photo Mismatch</AlertTitle>
              <AlertDescription className="text-yellow-700">
                <p className="mb-3">
                  Your selected issue is <strong>{selectedIssue?.title}</strong>, but the photo looks like{" "}
                  <strong>{mismatchWarning.image_label}</strong>.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={handleChangeIssue}>
                    Change Issue
                  </Button>
                  <Button size="sm" onClick={handleContinueAnyway} disabled={loading}>
                    {loading ? <Loader2 className="mr-1 h-3 w-3 animate-spin" /> : null}
                    Continue Anyway
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Step 1: Issue Selection */}
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold text-foreground">Step 1: What's the issue?</h2>
            {selectedIssue ? (
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{selectedIssue.title}</p>
                    <p className="text-xs text-muted-foreground">{selectedIssue.snippet}</p>
                  </div>
                  <Badge className={`shrink-0 text-[10px] ${riskColors[selectedIssue.riskLevel]}`}>
                    {selectedIssue.riskLevel}
                  </Badge>
                  <Button size="icon" variant="ghost" onClick={() => setSelectedIssue(null)} aria-label="Change issue">
                    <X className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <IssueClusters onSelect={setSelectedIssue} />
            )}
          </div>

          {/* Step 2: Photo + ZIP */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">Step 2: Upload a photo</h2>
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
                    <p className="text-sm font-medium text-muted-foreground">Drag & drop a photo, or click to browse</p>
                    <p className="mt-1 text-xs text-muted-foreground">Supports JPG, PNG, HEIC</p>
                  </>
                )}
                <input
                  id="photo-input"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
                />
              </div>

              <div className="mt-4 space-y-3">
                <Input placeholder="ZIP code (optional)" value={zip} onChange={(e) => setZip(e.target.value)} />
                <Input placeholder="Describe the issue (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
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
        </div>
      </section>
    </Layout>
  );
}
