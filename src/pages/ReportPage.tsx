import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileDown, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export default function ReportPage() {
  const { analysisId } = useParams();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!API_BASE) {
      toast({
        title: "PDF Not Configured",
        description: "PDF generation is not configured yet. Set VITE_API_BASE_URL to enable.",
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/pdf/report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analysisId }),
      });
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `HomeSnapFix-Report-${analysisId}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      toast({ title: "Success", description: "Your report has been downloaded." });
    } catch {
      toast({ title: "PDF Error", description: "Could not generate PDF. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="flex min-h-[60vh] items-center justify-center py-12">
        <div className="container max-w-md">
          <Card>
            <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
              <FileDown className="h-16 w-16 text-primary" />
              <div>
                <h1 className="font-serif text-2xl font-bold text-foreground">Download Your Report</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get a PDF summary of your diagnosis for analysis #{analysisId}.
                </p>
              </div>
              <Button size="lg" className="w-full" onClick={handleDownload} disabled={loading}>
                {loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating PDF...</>
                ) : (
                  <><FileDown className="mr-2 h-4 w-4" /> Download Report (PDF)</>
                )}
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to={`/results/${analysisId}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Results
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
