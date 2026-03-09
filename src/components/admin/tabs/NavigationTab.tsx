import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2, Save, Plus, Trash2, GripVertical } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

export function NavigationTab() {
  const [items, setItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase
      .from("site_settings")
      .select("value")
      .eq("key", "navigation")
      .maybeSingle()
      .then(({ data }) => {
        if (data && Array.isArray(data.value)) {
          setItems(data.value as unknown as NavItem[]);
        }
        setLoading(false);
      });
  }, []);

  const updateItem = (index: number, field: keyof NavItem, value: string) => {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  };

  const addItem = () => {
    setItems((prev) => [...prev, { label: "", href: "/" }]);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("site_settings")
      .update({ value: items as any })
      .eq("key", "navigation");
    if (error) {
      toast({ title: "Error saving", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Saved", description: "Navigation links updated." });
    }
    setSaving(false);
  };

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Navigation Links</CardTitle>
        <CardDescription>Manage the header navigation links. Changes take effect on the next site load.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border bg-background p-3">
            <GripVertical className="h-4 w-4 shrink-0 text-muted-foreground" />
            <div className="grid flex-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Label</Label>
                <Input value={item.label} onChange={(e) => updateItem(i, "label", e.target.value)} placeholder="Page Name" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">URL</Label>
                <Input value={item.href} onChange={(e) => updateItem(i, "href", e.target.value)} placeholder="/page-path" />
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => removeItem(i)} className="shrink-0 text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button variant="outline" onClick={addItem}>
          <Plus className="mr-2 h-4 w-4" /> Add Link
        </Button>
        <div>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            Save Navigation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
