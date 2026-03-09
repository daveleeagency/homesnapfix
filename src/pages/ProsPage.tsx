import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, CheckCircle, Loader2, Wrench, Star, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function ProsPage() {
  const location = useLocation();
  const diagnosisData = location.state as any;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [matchedPros, setMatchedPros] = useState<any[]>([]);
  const [matchLoading, setMatchLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    zip: diagnosisData?.zip || "",
    issueType: diagnosisData?.category || "",
    budgetRange: "", preferredContact: "", notes: "",
  });
  const [consent, setConsent] = useState(false);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  // Auto-match pros when ZIP and issueType are set
  useEffect(() => {
    if (form.zip && form.issueType) {
      setMatchLoading(true);
      supabase.functions.invoke("match-pros", {
        body: {
          zip: form.zip,
          specialty: form.issueType,
          risk_level: diagnosisData?.risk?.risk_level || "Moderate",
        },
      }).then(({ data }) => {
        setMatchedPros(data?.pros || []);
      }).finally(() => setMatchLoading(false));
    }
  }, [form.zip, form.issueType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({ title: "Consent Required", description: "Please agree to be contacted.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      // Save lead to database
      const topPro = matchedPros[0];
      const { error } = await supabase.from("leads").insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        zip: form.zip,
        issue_type: form.issueType,
        budget_range: form.budgetRange,
        preferred_contact: form.preferredContact || "email",
        notes: form.notes,
        contractor_id: topPro?.id || null,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast({ title: "Submission Error", description: "Could not submit your request. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <SEOHead
          title="Request Received - Professional Match Pending"
          description="Your home repair request has been received. We're matching you with qualified local professionals."
          noindex={true}
        />
        <section className="py-20">
          <div className="container max-w-lg text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mt-6 font-serif text-3xl font-bold text-foreground">Request Received!</h1>
            <p className="mt-2 text-muted-foreground">
              {matchedPros.length > 0
                ? `We've matched you with ${matchedPros.length} qualified professional${matchedPros.length > 1 ? "s" : ""}. Expect contact shortly.`
                : "We'll connect you with a vetted local professional shortly."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="outline">
                <Link to="/diy"><Wrench className="mr-2 h-4 w-4" /> Try DIY First</Link>
              </Button>
              <Button asChild>
                <Link to="/diagnose">New Diagnosis <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title="Find a Local Home Repair Professional - Get Matched"
        description="Get matched with vetted local contractors for plumbing, electrical, HVAC, roofing, and more. Free professional matching service."
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Get Matched with a Pro
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Tell us about your issue and we'll match you with top-rated local professionals.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div><Label htmlFor="name">Full Name</Label><Input id="name" value={form.name} onChange={set("name")} required /></div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={set("email")} required /></div>
                    <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" value={form.phone} onChange={set("phone")} required /></div>
                    <div><Label htmlFor="zip">ZIP Code</Label><Input id="zip" value={form.zip} onChange={set("zip")} required /></div>
                    <div>
                      <Label>Issue Type</Label>
                      <Select value={form.issueType} onValueChange={(v) => setForm((f) => ({ ...f, issueType: v }))}>
                        <SelectTrigger><SelectValue placeholder="Select issue type" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="hvac">HVAC</SelectItem>
                          <SelectItem value="roofing">Roofing</SelectItem>
                          <SelectItem value="exterior">Exterior / Foundation</SelectItem>
                          <SelectItem value="interior">Interior</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Budget Range</Label>
                      <Select value={form.budgetRange} onValueChange={(v) => setForm((f) => ({ ...f, budgetRange: v }))}>
                        <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-1000">$500 – $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 – $5,000</SelectItem>
                          <SelectItem value="5000-plus">$5,000+</SelectItem>
                          <SelectItem value="unsure">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Preferred Contact</Label>
                      <Select value={form.preferredContact} onValueChange={(v) => setForm((f) => ({ ...f, preferredContact: v }))}>
                        <SelectTrigger><SelectValue placeholder="How should we reach you?" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="text">Text</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div><Label htmlFor="notes">Additional Notes</Label><Textarea id="notes" value={form.notes} onChange={set("notes")} placeholder="Describe the issue..." rows={3} /></div>
                    <div className="flex items-start gap-2">
                      <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(!!v)} />
                      <Label htmlFor="consent" className="text-sm text-muted-foreground leading-tight">
                        I agree to be contacted about my home repair request. I understand this is a free matching service.
                      </Label>
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={loading}>
                      {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Request"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center italic">
                      We may refer to licensed professionals. We do not guarantee work quality.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Matched Pros Sidebar */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  {!form.zip || !form.issueType ? (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      Enter your ZIP and issue type to see matched pros.
                    </p>
                  ) : matchLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </div>
                  ) : matchedPros.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No matches found for this area yet. Submit your request and we'll find someone.
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {matchedPros.map((pro, i) => (
                        <div key={pro.id} className="rounded-lg border p-3 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm font-semibold">{pro.business_name}</p>
                              <p className="text-xs text-muted-foreground">{pro.contact_name}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">#{i + 1}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Star className="h-3 w-3 text-yellow-500" /> {pro.rating}
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-3 w-3" /> {pro.response_speed_hours}h response
                            </span>
                            {pro.license_verified && (
                              <span className="flex items-center gap-1 text-green-600">
                                <ShieldCheck className="h-3 w-3" /> Licensed
                              </span>
                            )}
                            {pro.insured && (
                              <span className="flex items-center gap-1 text-green-600">
                                <ShieldCheck className="h-3 w-3" /> Insured
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">{pro.bio}</p>
                          <div className="flex flex-wrap gap-1">
                            {pro.specialties?.map((s: string) => (
                              <Badge key={s} variant="secondary" className="text-[10px]">{s}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            Match score: {pro.match_score}%
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
