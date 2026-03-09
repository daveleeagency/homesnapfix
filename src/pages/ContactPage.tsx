import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, Mail } from "lucide-react";

const WEBHOOK = import.meta.env.VITE_LEAD_WEBHOOK_URL || "";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!WEBHOOK) {
      toast({ title: "Temporarily Unavailable", description: "Contact form is temporarily unavailable. Please try again later.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form, createdAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      toast({ title: "Error", description: "Could not send message. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <SEOHead
          title="Message Sent - We'll Be In Touch"
          description="Your message has been received. We'll respond as soon as possible."
          noindex={true}
        />
        <section className="py-20 text-center">
          <div className="container max-w-lg">
            <CheckCircle className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-serif text-3xl font-bold text-foreground">Message Sent!</h1>
            <p className="mt-2 text-muted-foreground">We'll get back to you as soon as possible.</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title="Contact HomeSnapFix - Questions & Feedback"
        description="Have questions about HomeSnapFix? Contact us for support, feedback, or general inquiries."
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-lg">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">Contact Us</h1>
          <p className="mt-2 text-center text-muted-foreground">Have a question or feedback? We'd love to hear from you.</p>
          <Card className="mt-8">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><Label htmlFor="name">Name</Label><Input id="name" value={form.name} onChange={set("name")} required /></div>
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={set("email")} required /></div>
                <div><Label htmlFor="message">Message</Label><Textarea id="message" value={form.message} onChange={set("message")} required rows={5} /></div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : <><Mail className="mr-2 h-4 w-4" /> Send Message</>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
