import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail, Loader2, CheckCircle } from "lucide-react";

const WEBHOOK = import.meta.env.VITE_LEAD_WEBHOOK_URL || "";

interface NewsletterCaptureProps {
  variant?: "inline" | "banner";
  sourcePage?: string;
}

export function NewsletterCapture({ variant = "inline", sourcePage = "unknown" }: NewsletterCaptureProps) {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (!WEBHOOK) {
      toast({ title: "Temporarily Unavailable", description: "Subscription is temporarily unavailable. Please try again later.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const payload = {
        type: "newsletter",
        email,
        zip,
        sourcePage,
        createdAt: new Date().toISOString(),
      };
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setSuccess(true);
      toast({ title: "Subscribed!", description: "You'll receive monthly home maintenance alerts." });
      setEmail("");
      setZip("");
    } catch {
      toast({ title: "Error", description: "Could not subscribe. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    const successContent = (
      <div className="flex items-center gap-2 text-sm text-primary">
        <CheckCircle className="h-4 w-4" />
        <span>You're subscribed! Check your inbox.</span>
      </div>
    );

    if (variant === "banner") {
      return (
        <section className="bg-primary/5 py-16">
          <div className="container text-center">{successContent}</div>
        </section>
      );
    }
    return successContent;
  }

  if (variant === "banner") {
    return (
      <section className="bg-primary/5 py-16">
        <div className="container text-center">
          <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Get monthly home maintenance alerts
          </h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Seasonal tips, hidden repair warnings, and cost-saving advice delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Input
              type="text"
              placeholder="ZIP code"
              aria-label="ZIP code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full sm:w-28"
              maxLength={5}
            />
            <Button type="submit" disabled={loading} className="w-full sm:w-auto">
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Joining...</> : "Subscribe"}
            </Button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <Input
        type="email"
        placeholder="Your email"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Input
        type="text"
        placeholder="ZIP"
        aria-label="ZIP code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        className="w-full sm:w-24"
        maxLength={5}
      />
      <Button type="submit" disabled={loading} size="sm" className="w-full sm:w-auto">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
      </Button>
    </form>
  );
}
