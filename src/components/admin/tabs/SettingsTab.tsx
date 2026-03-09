import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2, Save } from "lucide-react";

export function SettingsTab() {
  const [ctaText, setCtaText] = useState("");
  const [ctaLink, setCtaLink] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    Promise.all([
      supabase.from("site_settings").select("value").eq("key", "cta_text").maybeSingle(),
      supabase.from("site_settings").select("value").eq("key", "cta_link").maybeSingle(),
    ]).then(([textRes, linkRes]) => {
      if (textRes.data) setCtaText(JSON.parse(JSON.stringify(textRes.data.value)));
      if (linkRes.data) setCtaLink(JSON.parse(JSON.stringify(linkRes.data.value)));
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const [r1, r2] = await Promise.all([
      supabase.from("site_settings").update({ value: JSON.stringify(ctaText) as any }).eq("key", "cta_text"),
      supabase.from("site_settings").update({ value: JSON.stringify(ctaLink) as any }).eq("key", "cta_link"),
    ]);
    if (r1.error || r2.error) {
      toast({ title: "Error saving", description: (r1.error || r2.error)?.message, variant: "destructive" });
    } else {
      toast({ title: "Saved", description: "CTA settings updated." });
    }
    setSaving(false);
  };

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Call-to-Action Settings</CardTitle>
        <CardDescription>Configure the primary CTA button across the site.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-w-md space-y-2">
          <Label htmlFor="cta-text">CTA Button Text</Label>
          <Input id="cta-text" value={ctaText} onChange={(e) => setCtaText(e.target.value)} placeholder="Get Free Diagnosis" />
        </div>
        <div className="max-w-md space-y-2">
          <Label htmlFor="cta-link">CTA Button Link</Label>
          <Input id="cta-link" value={ctaLink} onChange={(e) => setCtaLink(e.target.value)} placeholder="/diagnose" />
        </div>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
}
