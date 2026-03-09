import { useState } from "react";
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
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Loader2, Wrench, Camera, Info } from "lucide-react";

export default function ProsPage() {
  const location = useLocation();
  const diagnosisData = location.state as any;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    zip: diagnosisData?.zip || "",
    issueType: diagnosisData?.category || "",
    budgetRange: "", preferredContact: "", notes: "",
  });
  const [consent, setConsent] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({ title: "Consent Required", description: "Please agree to the request submission terms to continue.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        zip: form.zip,
        issue_type: form.issueType,
        budget_range: form.budgetRange,
        preferred_contact: form.preferredContact || "email",
        notes: form.notes,
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
          description="Your professional match request has been received."
          noindex={true}
        />
        <section className="flex min-h-[60vh] items-center justify-center py-16">
          <div className="container max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mt-6 font-serif text-3xl font-bold text-foreground">Request Received</h1>
            <p className="mt-3 text-muted-foreground">
              We'll work to connect you with a qualified local professional. Matching depends on availability in your area — we'll follow up if we find a good fit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="outline">
                <Link to="/diy"><Wrench className="mr-2 h-4 w-4" /> Browse Repair Guides</Link>
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
        description="Request a free match with local contractors for plumbing, electrical, HVAC, roofing, and more. No obligation."
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Find a Local Pro
            </h1>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Tell us about your issue and we'll try to match you with a qualified local professional. This is a free service with no obligation.
            </p>
          </div>

          {/* Trust / Expectations Block */}
          <div className="mb-8 rounded-lg border bg-secondary/30 p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">How this works</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>This is a <strong>free request-matching service</strong> with no obligation to hire.</li>
                  <li>Matching depends on contractor availability in your area — we cannot guarantee a match for every request.</li>
                  <li>HomeSnapFix does not perform repair services directly.</li>
                  <li>HomeSnapFix does not guarantee, endorse, or warranty any specific contractor or their work.</li>
                  <li>Any hiring decision is between you and the contractor.</li>
                </ul>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
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

                {/* Consent Section */}
                <div className="space-y-3 rounded-lg border p-4">
                  <p className="text-sm font-medium text-foreground">Consent & Communication</p>

                  {/* Required: Request submission consent */}
                  <div className="flex items-start gap-3">
                    <Checkbox id="pro-consent" checked={consent} onCheckedChange={(v) => setConsent(!!v)} className="mt-0.5" />
                    <Label htmlFor="pro-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to submit this request to HomeSnapFix for the purpose of being matched with a local repair professional. I understand this is a free service with no obligation to hire. <span className="text-foreground font-medium">Required.</span>
                    </Label>
                  </div>

                  {/* Optional: SMS consent */}
                  <div className="flex items-start gap-3">
                    <Checkbox id="pro-sms-consent" checked={smsConsent} onCheckedChange={(v) => setSmsConsent(!!v)} className="mt-0.5" />
                    <Label htmlFor="pro-sms-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to receive text messages from HomeSnapFix about my home repair request, including updates, scheduling, and service-related follow-up at the mobile number I provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for help. Consent is not a condition of purchase.
                    </Label>
                  </div>

                  {/* Optional: Email consent */}
                  <div className="flex items-start gap-3">
                    <Checkbox id="pro-email-consent" checked={emailConsent} onCheckedChange={(v) => setEmailConsent(!!v)} className="mt-0.5" />
                    <Label htmlFor="pro-email-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I agree to receive emails from HomeSnapFix about my repair request, helpful homeowner resources, and related service offers. I understand I can unsubscribe at any time using the link in any email.
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Request"}
                </Button>

                {/* Bottom disclosure */}
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  By submitting, you agree to our{" "}
                  <Link to="/legal/terms" className="underline hover:text-foreground">Terms of Service</Link> and{" "}
                  <Link to="/legal/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
                  Matching with a contractor is not guaranteed and depends on availability. HomeSnapFix does not perform repair services and does not endorse or guarantee any contractor's work. All hiring decisions are yours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
