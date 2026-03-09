import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import {
  Loader2, FileDown, ArrowRight, LogOut, Camera, Clock, ShieldCheck,
  Wrench, AlertTriangle, BookOpen, RefreshCw, Search, Home
} from "lucide-react";
import type { User } from "@supabase/supabase-js";

/* ── Risk badge styling ── */
const riskBadgeStyle: Record<string, string> = {
  Low: "bg-green-100 text-green-800 border-green-200",
  Moderate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  High: "bg-orange-100 text-orange-800 border-orange-200",
  Critical: "bg-red-100 text-red-800 border-red-200",
};

const riskIcon: Record<string, string> = {
  Low: "🟢",
  Moderate: "🟡",
  High: "🟠",
  Critical: "🔴",
};

/* ── Suggested next action by risk level ── */
function getNextAction(riskLevel: string, damageType?: string): { label: string; to: string; variant: "default" | "outline" } {
  if (riskLevel === "Critical" || riskLevel === "High") {
    return { label: "Find a Pro", to: "/pros", variant: "default" };
  }
  if (damageType === "electrical" || damageType === "structural") {
    return { label: "Find a Pro", to: "/pros", variant: "default" };
  }
  return { label: "View DIY Guides", to: "/diy", variant: "outline" };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

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
      if (!session) { navigate("/auth"); return; }
      setUser(session.user);

      const { data: prof } = await supabase.from("profiles").select("*").eq("user_id", session.user.id).single();
      setProfile(prof);

      const { data: diag } = await supabase.from("diagnoses").select("*").eq("user_id", session.user.id).order("created_at", { ascending: false }).limit(20);
      setDiagnoses(diag || []);

      if (prof?.role === "contractor") {
        const { data: contractorData } = await supabase.from("contractors").select("id").eq("user_id", session.user.id).single();
        if (contractorData) {
          const { data: leadData } = await supabase.from("leads").select("*").eq("contractor_id", contractorData.id).order("created_at", { ascending: false }).limit(20);
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
  const firstName = profile?.display_name?.split(" ")[0] || user?.email?.split("@")[0] || "there";

  return (
    <Layout>
      <SEOHead title="Dashboard - HomeSnapFix" description="View your saved diagnoses, track home issues, and manage your HomeSnapFix account." />

      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">

          {/* ── Header ── */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                {isContractor ? "Contractor Dashboard" : `Welcome back, ${firstName}`}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {isContractor
                  ? "Manage incoming leads and job requests."
                  : diagnoses.length > 0
                    ? `You have ${diagnoses.length} saved diagnosis${diagnoses.length !== 1 ? "es" : ""}.`
                    : "Start by uploading a photo of a home issue."
                }
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {isContractor ? "Contractor" : "Homeowner"}
              </Badge>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="mr-1.5 h-3.5 w-3.5" /> Log Out
              </Button>
            </div>
          </div>

          {/* ── Homeowner Quick Actions ── */}
          {!isContractor && (
            <div className="grid gap-3 sm:grid-cols-3 mb-10">
              {[
                { icon: Camera, label: "New Diagnosis", sub: "Upload a photo", to: "/diagnose", accent: true },
                { icon: ShieldCheck, label: "Find a Pro", sub: "Get matched locally", to: "/pros", accent: false },
                { icon: BookOpen, label: "DIY Guides", sub: "Step-by-step help", to: "/diy", accent: false },
              ].map((action) => (
                <Card
                  key={action.label}
                  className={`group cursor-pointer transition-all hover:shadow-md ${action.accent ? "border-primary/30 bg-primary/5" : ""}`}
                  onClick={() => navigate(action.to)}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.accent ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{action.label}</p>
                      <p className="text-xs text-muted-foreground">{action.sub}</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* ── Diagnosis History ── */}
          {!isContractor && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground">
                  <Clock className="h-5 w-5 text-muted-foreground" /> Your Diagnoses
                </h2>
                {diagnoses.length > 0 && (
                  <Button asChild variant="outline" size="sm">
                    <Link to="/diagnose"><Camera className="mr-1.5 h-3.5 w-3.5" /> New</Link>
                  </Button>
                )}
              </div>

              {diagnoses.length === 0 ? (
                /* ── Premium Empty State ── */
                <Card className="border-dashed border-2 border-muted-foreground/20">
                  <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-5">
                      <Home className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      No diagnoses yet
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Upload a photo of any home issue — a crack, stain, leak, or discoloration — and get
                      an AI-powered assessment in under 30 seconds.
                    </p>
                    <Button asChild size="lg" className="mt-6">
                      <Link to="/diagnose">
                        <Camera className="mr-2 h-4 w-4" /> Start Your First Assessment
                      </Link>
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">Free • No account setup required</p>
                  </CardContent>
                </Card>
              ) : (
                /* ── Diagnosis Cards ── */
                <div className="space-y-3">
                  {diagnoses.map((d) => {
                    const resultData = typeof d.result_data === "object" ? d.result_data : {};
                    const nextAction = getNextAction(d.risk_level, d.damage_type);
                    const riskScore = d.risk_score || 0;

                    return (
                      <Card key={d.id} className="group transition-all hover:shadow-md">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            {/* Main info */}
                            <Link
                              to={`/results/${d.analysis_id}`}
                              state={d.result_data}
                              className="flex-1 p-4 sm:p-5"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                    <span className="text-base">{riskIcon[d.risk_level] || "⚪"}</span>
                                    <h3 className="text-sm font-semibold text-foreground truncate">
                                      {d.issue_detected}
                                    </h3>
                                    <Badge className={`text-[10px] px-1.5 py-0 ${riskBadgeStyle[d.risk_level] || ""}`}>
                                      {d.risk_level}
                                    </Badge>
                                  </div>

                                  {/* Meta row */}
                                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" /> {formatDate(d.created_at)}
                                    </span>
                                    <span>Risk Score: <strong className="text-foreground">{riskScore}</strong>/100</span>
                                    {d.damage_type && (
                                      <span className="capitalize">{d.damage_type.replace("_", " ")}</span>
                                    )}
                                    {d.insurance_tier && (
                                      <span>Insurance: {d.insurance_tier}</span>
                                    )}
                                  </div>
                                </div>
                                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                              </div>
                            </Link>

                            {/* Actions sidebar */}
                            <div className="flex items-center gap-2 border-t px-4 py-2.5 sm:border-l sm:border-t-0 sm:py-0 sm:px-4 bg-muted/30">
                              <Button asChild variant="ghost" size="sm" className="h-8 text-xs">
                                <Link to={`/report/${d.analysis_id}`} state={d.result_data}>
                                  <FileDown className="mr-1 h-3 w-3" /> Report
                                </Link>
                              </Button>
                              <Button asChild variant={nextAction.variant} size="sm" className="h-8 text-xs">
                                <Link to={nextAction.to}>
                                  {nextAction.label}
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ── Contractor: Incoming Leads ── */}
          {isContractor && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Search className="h-5 w-5 text-muted-foreground" /> Incoming Leads
                </CardTitle>
              </CardHeader>
              <CardContent>
                {leads.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted mb-4">
                      <Wrench className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">No leads yet</h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      When homeowners in your service area request a pro match, their leads will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {leads.map((lead) => (
                      <div key={lead.id} className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/30">
                        <div>
                          <p className="text-sm font-semibold text-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {lead.issue_type} • ZIP {lead.zip} • Prefers {lead.preferred_contact}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {formatDate(lead.created_at)}
                            {lead.budget_range && ` • Budget: ${lead.budget_range}`}
                          </p>
                        </div>
                        <Badge variant="outline" className="capitalize">{lead.status}</Badge>
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
