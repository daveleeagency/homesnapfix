import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Upload, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function DiagnosePage() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);

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
        if (category) formData.append("category", category);
        if (zip) formData.append("zip", zip);
        const res = await fetch(`${API_BASE}/api/analyze`, { method: "POST", body: formData });
        if (!res.ok) throw new Error("Analysis failed");
      }
      // Navigate to results with a mock ID (real app would use the response ID)
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
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            AI Home Diagnosis
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Upload a photo of the issue and get instant guidance.
          </p>

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
        </div>
      </section>
    </Layout>
  );
}
