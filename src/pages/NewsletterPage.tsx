import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { Mail, Bell, TrendingDown, Shield } from "lucide-react";

const benefits = [
  { icon: Bell, title: "Seasonal Alerts", desc: "Know exactly what to check each month before small issues become big bills." },
  { icon: Shield, title: "Hidden Repair Warnings", desc: "Spot the signs most homeowners miss — before they turn costly." },
  { icon: TrendingDown, title: "Cost-Saving Tips", desc: "Practical advice to maintain your home on a budget." },
];

export default function NewsletterPage() {
  return (
    <Layout>
      <SEOHead
        title="Monthly Home Maintenance Newsletter - Free Alerts"
        description="Join thousands of homeowners who stay ahead of repairs with our free monthly newsletter. Get seasonal alerts, cost-saving tips, and hidden repair warnings."
      />
      <section className="py-16 md:py-24">
        <div className="container max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Mail className="h-7 w-7 text-primary" />
          </div>
          <h1 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Monthly Home Maintenance Alerts
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Join thousands of homeowners who stay ahead of repairs with our free monthly newsletter.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <b.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="mt-3 font-serif text-sm font-semibold text-foreground">{b.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-md">
            <NewsletterCapture variant="inline" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
