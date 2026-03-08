import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Camera, Upload, Loader2, X, AlertTriangle, AlertOctagon, Sparkles, ListChecks } from "lucide-react";
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

type DiagnoseMode = "select" | "ai_detect";

export default function DiagnosePage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<DiagnoseMode>("select");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<IssueCard | null>(null);
  const [zip, setZip] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  // Mismatch dialog state
  const [mismatchOpen, setMismatchOpen] = useState(false);
  const [mismatchData, setMismatchData] = useState<{
    image_label: string;
    mismatch_reason: string;
    pendingResult: any;
  } | null>(null);

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
    setMismatchOpen(false);
    setMismatchData(null);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  }, [handleFile]);

  const clearPhoto = () => {
    setFile(null);
    setPreview(null);
    setImageError(null);
    setMismatchOpen(false);
    setMismatchData(null);
  };

  const navigateToResults = async (data: any) => {
    // Save to diagnosis history if logged in
    try {
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
    } catch {
      // Non-critical
    }
    navigate(`/results/${data.analysis_id}`, { state: data });
  };

  const sendAnalysis = async () => {
    if (!file) return;
    setLoading(true);
    setImageError(null);
    setMismatchOpen(false);
    setMismatchData(null);

    try {
      const formData = new FormData();
      formData.append("photo", file);
      formData.append("selected_issue", mode === "select" ? (selectedIssue?.id || "default") : "default");
      formData.append("mode", mode);
      if (zip) formData.append("zip", zip);
      if (description) formData.append("description", description);

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

      const res = await fetch(`${supabaseUrl}/functions/v1/analyze`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${supabaseKey}`,
          apikey: supabaseKey,
        },
        body: formData,
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        throw new Error(errBody?.message || "Analysis failed");
      }

      const data = await res.json();

      // Gate 1: Invalid image
      if (data.image_valid === false) {
        setImageError(
          `This photo doesn't appear to be a home issue (it looks like: ${data.image_label}). Please upload a photo of the affected home area (ceiling stain, leak, outlet, HVAC unit, pipe, roof, etc.).`
        );
        setLoading(false);
        // Scroll to error banner
        setTimeout(() => {
          document.getElementById("image-error-banner")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
        return;
      }

      // Gate 2: Mismatch — show dialog
      if (data.mismatch === true) {
        setMismatchData({
          image_label: data.image_label,
          mismatch_reason: data.mismatch_reason,
          pendingResult: data,
        });
        setMismatchOpen(true);
        setLoading(false);
        return;
      }

      // Gate 3: All clear
      await navigateToResults(data);
    } catch (err: any) {
      toast({
        title: "Analysis Error",
        description: err?.message || "Could not analyze the photo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleContinueAnyway = async () => {
    if (mismatchData?.pendingResult) {
      setMismatchOpen(false);
      await navigateToResults(mismatchData.pendingResult);
    }
  };

  const handleChangeIssue = () => {
    setSelectedIssue(null);
    setMismatchOpen(false);
    setMismatchData(null);
  };

  return (
    <Layout>
      <DiagnoseJsonLd />

      {/* Mismatch Dialog */}
      <Dialog open={mismatchOpen} onOpenChange={setMismatchOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Photo Mismatch Detected
            </DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-relaxed">
              You selected: <strong>{selectedIssue?.title}</strong>, but the photo looks like:{" "}
              <strong>{mismatchData?.image_label}</strong>.
              {mismatchData?.mismatch_reason && (
                <span className="mt-2 block text-xs text-muted-foreground">
                  {mismatchData.mismatch_reason}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={handleChangeIssue}>
              Change Issue
            </Button>
            <Button onClick={handleContinueAnyway}>
              Continue Anyway
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            AI Home Diagnosis
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Upload a photo and get instant, AI-powered guidance.
          </p>

          {/* Mode Toggle */}
          <div className="mt-8 flex items-center justify-center gap-2 rounded-lg border bg-muted/30 p-1">
            <button
              onClick={() => setMode("select")}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                mode === "select"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ListChecks className="h-4 w-4" />
              I'll choose the issue
            </button>
            <button
              onClick={() => { setMode("ai_detect"); setSelectedIssue(null); }}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                mode === "ai_detect"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              Let AI detect from photo
            </button>
          </div>

          {/* Image Error Banner */}
          {imageError && (
            <Alert id="image-error-banner" variant="destructive" className="mt-6 animate-in fade-in slide-in-from-top-2 border-2 border-destructive shadow-lg">
              <AlertOctagon className="h-4 w-4" />
              <AlertTitle>Invalid Photo</AlertTitle>
              <AlertDescription>
                <p className="mb-3">{imageError}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={clearPhoto}>
                    Upload a Different Photo
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => navigate(-1)}>
                    Back
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Step 1: Issue Selection (only in "select" mode) */}
          {mode === "select" && (
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
          )}

          {mode === "ai_detect" && (
            <div className="mt-8">
              <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">AI Detection Mode</p>
                  <p className="text-xs text-muted-foreground">
                    Upload a photo and our AI will identify the issue automatically. No need to pre-select.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Photo + ZIP */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                {mode === "select" ? "Step 2: Upload a photo" : "Upload a photo"}
              </h2>
              <div
                className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 p-8 transition-colors hover:border-primary/50"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => document.getElementById("photo-input")?.click()}
              >
                {preview ? (
                  <div className="relative">
                    <img src={preview} alt="Upload preview" className="max-h-48 rounded-lg object-contain" />
                    <button
                      onClick={(e) => { e.stopPropagation(); clearPhoto(); }}
                      className="absolute -right-2 -top-2 rounded-full bg-destructive p-1 text-destructive-foreground shadow-sm hover:bg-destructive/90"
                      aria-label="Remove photo"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
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
                <Input placeholder="ZIP code (optional — for regional guidance)" value={zip} onChange={(e) => setZip(e.target.value)} />
                <Textarea
                  placeholder="Describe what you're seeing (optional — helps AI accuracy)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                  className="resize-none"
                />
              </div>

              <Button
                className="mt-4 w-full"
                size="lg"
                onClick={sendAnalysis}
                disabled={!file || loading || (mode === "select" && !selectedIssue)}
              >
                {loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing photo with AI...</>
                ) : (
                  <><Camera className="mr-2 h-4 w-4" /> Analyze Photo</>
                )}
              </Button>

              {mode === "select" && !selectedIssue && file && (
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Select an issue above to continue, or{" "}
                  <button onClick={() => setMode("ai_detect")} className="text-primary underline">
                    let AI detect it
                  </button>.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
