import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import {
  Camera,
  Search,
  Wrench,
  ArrowRight,
  Droplets,
  Flame,
  Zap,
  Bug,
  Home,
  Layers,
  Wind,
  Shield,
} from "lucide-react";

const commonIssues = [
  { title: "Drywall Cracks", slug: "drywall-cracks", icon: Layers, desc: "Hairline to structural cracks" },
  { title: "Water Stains", slug: "water-stains", icon: Droplets, desc: "Ceiling and wall discoloration" },
  { title: "Roof Leaks", slug: "roof-leaks", icon: Home, desc: "Missing shingles and leaks" },
  { title: "Deck Rot", slug: "deck-rot", icon: Bug, desc: "Wood decay and soft spots" },
  { title: "HVAC Issues", slug: "hvac-issues", icon: Wind, desc: "Heating and cooling problems" },
  { title: "Foundation Cracks", slug: "foundation-cracks", icon: Shield, desc: "Settling and structural shifts" },
  { title: "Electrical Outlets", slug: "electrical-outlets", icon: Zap, desc: "Faulty or dead outlets" },
  { title: "Mold Spots", slug: "mold-spots", icon: Flame, desc: "Visible mold and mildew growth" },
];

const steps = [
  { num: "1", title: "Upload a Photo", desc: "Snap or upload a picture of the issue.", icon: Camera },
  { num: "2", title: "Get a Diagnosis", desc: "AI analyzes the image and identifies the problem.", icon: Search },
  { num: "3", title: "Fix or Find a Pro", desc: "Follow DIY steps or get matched with a professional.", icon: Wrench },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Snap a photo. Get clear home repair guidance.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Instant DIY steps + optional pro help. No guesswork, no panic.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/diagnose">
                <Camera className="mr-2 h-4 w-4" />
                Upload a Photo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/diy">Browse DIY Fixes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t bg-secondary/30 py-16">
        <div className="container">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            How It Works
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Common Home Issues
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">
            Browse guides for the most frequent problems homeowners face.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commonIssues.map((issue) => (
              <Link key={issue.slug} to={`/diy/${issue.slug}`}>
                <Card className="group h-full transition-shadow hover:shadow-md">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                      <issue.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <h3 className="mt-3 font-serif text-base font-semibold text-foreground">
                      {issue.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">{issue.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Intelligence Teaser */}
      <section className="border-t bg-accent/30 py-16">
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Your Home Intelligence Hub
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Personalized maintenance alerts, seasonal checklists, and proactive risk awareness — all
            powered by AI that learns about your home.
          </p>
          <Button asChild className="mt-6" size="lg">
            <Link to="/maintenance-calendar">
              Get Your Home Intelligence
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Pro Matching Banner */}
      <section className="py-16">
        <div className="container">
          <Card className="overflow-hidden border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:flex-row md:text-left">
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Need a vetted professional?
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Get matched with trusted local pros — fast and free.
                </p>
              </div>
              <Button asChild size="lg">
                <Link to="/pros">
                  Get Matched
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterCapture variant="banner" />
    </Layout>
  );
};

export default Index;
