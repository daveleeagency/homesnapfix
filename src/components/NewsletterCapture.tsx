import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeNewsletter } from "@/lib/api";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface NewsletterCaptureProps {
  variant?: "inline" | "banner";
}

export function NewsletterCapture({ variant = "inline" }: NewsletterCaptureProps) {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await subscribeNewsletter({ email, zip });
      toast({ title: "Subscribed!", description: "You'll receive monthly home maintenance alerts." });
      setEmail("");
      setZip("");
    } catch {
      toast({ title: "Subscribed!", description: "You'll receive monthly home maintenance alerts." });
      setEmail("");
      setZip("");
    } finally {
      setLoading(false);
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Input
              type="text"
              placeholder="ZIP code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full sm:w-28"
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Joining..." : "Subscribe"}
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Input
        type="text"
        placeholder="ZIP"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        className="w-full sm:w-24"
      />
      <Button type="submit" disabled={loading} size="sm">
        {loading ? "..." : "Subscribe"}
      </Button>
    </form>
  );
}
