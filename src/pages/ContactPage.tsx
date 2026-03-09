import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, Mail, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
      toast({
        title: "Contact Form Unavailable",
        description: "Our contact form is temporarily unavailable. Please try again later or email us directly.",
        variant: "destructive",
      });
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
      toast({
        title: "Message Failed",
        description: "Could not send your message. Please try again or contact us another way.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <SEOHead
          title="Message Sent - HomeSnapFix"
          description="Your message has been received. We'll respond as soon as possible."
          noindex={true}
        />
        <section className="flex min-h-[60vh] items-center justify-center py-16">
          <div className="container max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mt-6 font-serif text-3xl font-bold text-foreground">Message Sent</h1>
            <p className="mt-3 text-muted-foreground">
              Thanks for reaching out! We'll get back to you as soon as possible.
            </p>
            <Button asChild className="mt-6">
              <Link to="/">
                Return Home <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title="Contact Us - HomeSnapFix"
        description="Have questions about HomeSnapFix? Contact us for support, feedback, or general inquiries. We typically respond within 1-2 business days."
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-lg">
          <div className="text-center mb-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Contact Us</h1>
            <p className="mt-2 text-muted-foreground">
              Have a question, feedback, or suggestion? We'd love to hear from you.
            </p>
          </div>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your Name</Label>
                  <Input
                    id="contact-name"
                    placeholder="John Smith"
                    autoComplete="name"
                    value={form.name}
                    onChange={set("name")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={form.email}
                    onChange={set("email")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={set("message")}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
              <p className="mt-4 text-xs text-center text-muted-foreground">
                We typically respond within 1-2 business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
