import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Loader2, Wrench } from "lucide-react";

const WEBHOOK = import.meta.env.VITE_LEAD_WEBHOOK_URL || "";

export default function ProsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", zip: "", issueType: "", budgetRange: "", preferredContact: "", notes: "",
  });
  const [consent, setConsent] = useState(false);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({ title: "Consent Required", description: "Please agree to be contacted.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const payload = {
        type: "pro_lead",
        ...form,
        sourcePage: "/pros",
        createdAt: new Date().toISOString(),
      };
      if (WEBHOOK) {
        const res = await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Submission failed");
      }
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
        <section className="py-20">
          <div className="container max-w-lg text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mt-6 font-serif text-3xl font-bold text-foreground">Request Received!</h1>
            <p className="mt-2 text-muted-foreground">We'll connect you with a vetted local professional shortly.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="outline">
                <Link to="/diy"><Wrench className="mr-2 h-4 w-4" /> Try DIY First</Link>
              </Button>
              <Button asChild>
                <Link to="/app">Try AI Diagnosis <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container max-w-lg">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Get Matched with a Pro
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Tell us about your issue and we'll connect you with a vetted local professional — fast and free.
          </p>

          <Card className="mt-8">
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
                      <SelectItem value="foundation">Foundation</SelectItem>
                      <SelectItem value="drywall">Drywall / Interior</SelectItem>
                      <SelectItem value="exterior">Exterior / Siding</SelectItem>
                      <SelectItem value="deck">Deck / Patio</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
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
                  <Label>Preferred Contact Method</Label>
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
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
