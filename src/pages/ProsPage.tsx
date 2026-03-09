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
import { ArrowRight, CheckCircle, Loader2, Wrench, Star, Clock, ShieldCheck, MapPin, Camera } from "lucide-react";

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
      toast({ title: "Consent Required", description: "Please agree to be contacted to submit your request.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
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
      toast({ title: "Submission Failed", description: "Could not submit your request. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <SEOHead
          title="Request Received - HomeSnapFix"
          description="Your professional match request has been received. Expect to be contacted shortly."
          noindex={true}
        />
        <section className="flex min-h-[60vh] items-center justify-center py-16">
          <div className="container max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mt-6 font-serif text-3xl font-bold text-foreground">Request Received</h1>
            <p className="mt-3 text-muted-foreground">
              {matchedPros.length > 0
                ? `We've matched you with ${matchedPros.length} qualified professional${matchedPros.length > 1 ? "s" : ""}. Expect contact within 24 hours.`
                : "We'll connect you with a qualified local professional shortly."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="outline">
                <Link to="/diy"><Wrench className="mr-2 h-4 w-4" /> Browse DIY Guides</Link>
              </Button>
              <Button asChild>
                <Link to="/diagnose"><Camera className="mr-2 h-4 w-4" /> New Diagnosis</Link>
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
        title="Find a Local Home Repair Pro - HomeSnapFix"
        description="Get matched with vetted local contractors for plumbing, electrical, HVAC, roofing, and more. Free professional matching service."
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Find a Local Pro
            </h1>
            <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
              Tell us about your issue and we'll match you with qualified local professionals. This service is free — no obligation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="pro-name">Full Name *</Label>
                        <Input id="pro-name" placeholder="John Smith" autoComplete="name" value={form.name} onChange={set("name")} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pro-email">Email Address *</Label>
                        <Input id="pro-email" type="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={set("email")} required />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="pro-phone">Phone Number *</Label>
                        <Input id="pro-phone" type="tel" placeholder="(555) 123-4567" autoComplete="tel" value={form.phone} onChange={set("phone")} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pro-zip">ZIP Code *</Label>
                        <Input id="pro-zip" placeholder="12345" autoComplete="postal-code" value={form.zip} onChange={set("zip")} required maxLength={5} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pro-issue">Issue Type *</Label>
                      <Select value={form.issueType} onValueChange={(v) => setForm((f) => ({ ...f, issueType: v }))}>
                        <SelectTrigger id="pro-issue"><SelectValue placeholder="Select the type of issue" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="hvac">HVAC / Heating & Cooling</SelectItem>
                          <SelectItem value="roofing">Roofing</SelectItem>
                          <SelectItem value="exterior">Exterior / Foundation</SelectItem>
                          <SelectItem value="interior">Interior / General</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="pro-budget">Budget Range</Label>
                        <Select value={form.budgetRange} onValueChange={(v) => setForm((f) => ({ ...f, budgetRange: v }))}>
                          <SelectTrigger id="pro-budget"><SelectValue placeholder="Estimated budget" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">Under $500</SelectItem>
                            <SelectItem value="500-1000">$500 – $1,000</SelectItem>
                            <SelectItem value="1000-5000">$1,000 – $5,000</SelectItem>
                            <SelectItem value="5000-plus">$5,000+</SelectItem>
                            <SelectItem value="unsure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pro-contact">Preferred Contact</Label>
                        <Select value={form.preferredContact} onValueChange={(v) => setForm((f) => ({ ...f, preferredContact: v }))}>
                          <SelectTrigger id="pro-contact"><SelectValue placeholder="How to reach you" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pro-notes">Describe the Issue</Label>
                      <Textarea id="pro-notes" value={form.notes} onChange={set("notes")} placeholder="Tell us more about what you're experiencing..." rows={3} />
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border bg-muted/30 p-3">
                      <Checkbox id="pro-consent" checked={consent} onCheckedChange={(v) => setConsent(!!v)} className="mt-0.5" />
                      <Label htmlFor="pro-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        I agree to be contacted about my home repair request. I understand this is a free matching service with no obligation.
                      </Label>
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={loading}>
                      {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Request"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We may refer to licensed professionals. We do not guarantee or endorse any contractor's work.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Matched Pros Sidebar */}
            <div className="lg:col-span-2">
              <Card className="sticky top-24">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Matched Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  {!form.zip || !form.issueType ? (
                    <div className="rounded-lg border border-dashed p-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        Enter your ZIP code and issue type to see available pros in your area.
                      </p>
                    </div>
                  ) : matchLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </div>
                  ) : matchedPros.length === 0 ? (
                    <div className="rounded-lg border border-dashed p-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        No matches found in this area yet. Submit your request and we'll find a qualified professional.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {matchedPros.map((pro, i) => (
                        <div key={pro.id} className="rounded-lg border p-3 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm font-semibold text-foreground">{pro.business_name}</p>
                              <p className="text-xs text-muted-foreground">{pro.contact_name}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">#{i + 1}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Star className="h-3 w-3 text-primary" /> {pro.rating}
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-3 w-3" /> {pro.response_speed_hours}h response
                            </span>
                            {pro.license_verified && (
                              <span className="flex items-center gap-1 text-primary">
                                <ShieldCheck className="h-3 w-3" /> Licensed
                              </span>
                            )}
                            {pro.insured && (
                              <span className="flex items-center gap-1 text-primary">
                                <ShieldCheck className="h-3 w-3" /> Insured
                              </span>
                            )}
                          </div>
                          {pro.bio && <p className="text-xs text-muted-foreground line-clamp-2">{pro.bio}</p>}
                          <div className="flex flex-wrap gap-1">
                            {pro.specialties?.slice(0, 3).map((s: string) => (
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
