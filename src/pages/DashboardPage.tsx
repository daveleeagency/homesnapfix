import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, FileDown, ArrowRight, LogOut, Camera, Clock, ShieldCheck } from "lucide-react";
import type { User } from "@supabase/supabase-js";

const riskColors: Record<string, string> = {
  Low: "bg-green-100 text-green-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  High: "bg-orange-100 text-orange-800",
  Critical: "bg-red-100 text-red-800",
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [diagnoses, setDiagnoses] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);

      // Fetch profile
      const { data: prof } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", session.user.id)
        .single();
      setProfile(prof);

      // Fetch diagnoses
      const { data: diag } = await supabase
        .from("diagnoses")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false })
        .limit(20);
      setDiagnoses(diag || []);

      // If contractor, fetch leads
      if (prof?.role === "contractor") {
        const { data: contractorData } = await supabase
          .from("contractors")
          .select("id")
          .eq("user_id", session.user.id)
          .single();
        if (contractorData) {
          const { data: leadData } = await supabase
            .from("leads")
            .select("*")
            .eq("contractor_id", contractorData.id)
            .order("created_at", { ascending: false })
            .limit(20);
          setLeads(leadData || []);
        }
      }

      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/auth");
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  const isContractor = profile?.role === "contractor";

  return (
    <Layout>
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foreground">
                {isContractor ? "Contractor Dashboard" : "My Dashboard"}
              </h1>
              <p className="text-muted-foreground">
                Welcome, {profile?.display_name || user?.email}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{isContractor ? "Contractor" : "Homeowner"}</Badge>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Log Out
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          {!isContractor && (
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate("/diagnose")}>
                <CardContent className="flex items-center gap-3 p-4">
                  <Camera className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">New Diagnosis</p>
                    <p className="text-xs text-muted-foreground">Snap & analyze</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate("/pros")}>
                <CardContent className="flex items-center gap-3 p-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">Find a Pro</p>
                    <p className="text-xs text-muted-foreground">Get matched</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => navigate("/diy")}>
                <CardContent className="flex items-center gap-3 p-4">
                  <FileDown className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium">DIY Guides</p>
                    <p className="text-xs text-muted-foreground">Fix it yourself</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Diagnosis History (Homeowner) */}
          {!isContractor && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5" /> Diagnosis History
                </CardTitle>
              </CardHeader>
              <CardContent>
                {diagnoses.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No diagnoses yet.</p>
                    <Button asChild className="mt-3" size="sm">
                      <Link to="/diagnose">Run Your First Diagnosis <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {diagnoses.map((d) => (
                      <Link
                        key={d.id}
                        to={`/results/${d.analysis_id}`}
                        state={d.result_data}
                        className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium">{d.issue_detected}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(d.created_at).toLocaleDateString()} • Score: {d.risk_score}
                          </p>
                        </div>
                        <Badge className={`text-xs ${riskColors[d.risk_level] || ""}`}>{d.risk_level}</Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Contractor: Incoming Leads */}
          {isContractor && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Incoming Leads</CardTitle>
              </CardHeader>
              <CardContent>
                {leads.length === 0 ? (
                  <p className="text-center py-8 text-muted-foreground">No leads assigned yet.</p>
                ) : (
                  <div className="space-y-3">
                    {leads.map((lead) => (
                      <div key={lead.id} className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="text-sm font-medium">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {lead.issue_type} • ZIP {lead.zip} • {lead.preferred_contact}
                          </p>
                        </div>
                        <Badge variant="outline">{lead.status}</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
}
