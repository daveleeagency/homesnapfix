import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, Loader2, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { IssueClusters } from "@/components/IssueClusters";
import { DiagnoseJsonLd } from "@/components/DiagnoseJsonLd";
import type { IssueCard } from "@/data/issueClusters";

const riskColors: Record<IssueCard["riskLevel"], string> = {
  Low: "bg-green-100 text-green-800 border-green-200",
  Moderate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  High: "bg-red-100 text-red-800 border-red-200",
};

export default function DiagnosePage() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<IssueCard | null>(null);
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  const handleFile = useCallback((f: File) => {
    setFile(f);
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
    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
      if (API_BASE) {
        const formData = new FormData();
        formData.append("photo", file);
        if (selectedIssue) formData.append("category", selectedIssue.category);
        if (zip) formData.append("zip", zip);
        const res = await fetch(`${API_BASE}/api/analyze`, { method: "POST", body: formData });
        if (!res.ok) throw new Error("Analysis failed");
      }
      await new Promise((r) => setTimeout(r, 1500));
      const analysisId = Date.now().toString(36);
      navigate(`/results/${analysisId}`);
    } catch {
      toast({ title: "Analysis Error", description: "Could not analyze the photo. Please try again.", variant: "destructive" });
      setLoading(false);
    }
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

              <div className="mt-4">
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
        </div>
      </section>
    </Layout>
  );
}
