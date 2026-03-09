import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Loader2, Download, RefreshCw, Mail, Phone } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  zip: string;
  issue_type: string;
  budget_range: string | null;
  preferred_contact: string | null;
  notes: string | null;
  status: string;
  created_at: string;
}

export function LeadsTab() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Error loading leads", description: error.message, variant: "destructive" });
    }
    setLeads((data as Lead[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchLeads(); }, []);

  const exportCSV = () => {
    if (leads.length === 0) {
      toast({ title: "No leads to export" });
      return;
    }
    const headers = ["Name", "Email", "Phone", "ZIP", "Issue Type", "Budget", "Preferred Contact", "Notes", "Status", "Date"];
    const rows = leads.map((l) => [
      l.name,
      l.email,
      l.phone || "",
      l.zip,
      l.issue_type,
      l.budget_range || "",
      l.preferred_contact || "",
      (l.notes || "").replace(/,/g, ";").replace(/\n/g, " "),
      l.status,
      new Date(l.created_at).toLocaleDateString(),
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.map((c) => `"${c}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Exported", description: `${leads.length} leads exported to CSV.` });
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    }
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "pending": return "secondary";
      case "contacted": return "default";
      case "closed": return "outline";
      default: return "secondary";
    }
  };

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Leads</CardTitle>
          <CardDescription>{leads.length} total lead{leads.length !== 1 ? "s" : ""} from Find a Pro requests.</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={fetchLeads}>
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
          <Button variant="outline" size="sm" onClick={exportCSV}>
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {leads.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">No leads yet.</p>
        ) : (
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="rounded-lg border p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-foreground">{lead.name}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{lead.email}</span>
                      {lead.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{lead.phone}</span>}
                      <span>ZIP: {lead.zip}</span>
                    </div>
                  </div>
                  <Badge variant={statusColor(lead.status)}>{lead.status}</Badge>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Badge variant="outline">{lead.issue_type}</Badge>
                  {lead.budget_range && <Badge variant="outline">{lead.budget_range}</Badge>}
                  {lead.preferred_contact && <Badge variant="outline">Contact: {lead.preferred_contact}</Badge>}
                </div>
                {lead.notes && <p className="text-sm text-muted-foreground">{lead.notes}</p>}
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{new Date(lead.created_at).toLocaleString()}</p>
                  <div className="flex gap-1">
                    {lead.status !== "contacted" && (
                      <Button variant="ghost" size="sm" onClick={() => updateStatus(lead.id, "contacted")}>Mark Contacted</Button>
                    )}
                    {lead.status !== "closed" && (
                      <Button variant="ghost" size="sm" onClick={() => updateStatus(lead.id, "closed")}>Close</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
