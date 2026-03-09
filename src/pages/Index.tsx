import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Search,
  Wrench,
  ArrowRight,
  ShieldCheck,
  FileText,
  History,
  HelpCircle,
  Droplets,
  Home,
  Zap,
  Wind,
  Layers,
  Bug,
} from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Upload a Photo",
    desc: "Take a picture of the crack, stain, leak, or damage you're concerned about.",
    icon: Camera,
  },
  {
    num: "2",
    title: "Get an AI Assessment",
    desc: "Our AI analyzes the image and estimates what the issue is, how serious it looks, and what to do next.",
    icon: Search,
  },
  {
    num: "3",
    title: "DIY or Hire a Pro",
    desc: "Get actionable guidance — handle it yourself with a repair guide, or connect with a local professional.",
    icon: Wrench,
  },
];

const trustPoints = [
  { icon: ShieldCheck, label: "AI-assisted visual assessment" },
  { icon: FileText, label: "Printable repair reports" },
  { icon: History, label: "Save your diagnosis history" },
  { icon: HelpCircle, label: "Guidance before calling a contractor" },
];

const useCases = [
  {
    title: "Water Stains on Ceiling",
    desc: "Is it a roof leak or condensation? Find out before paying for a visit.",
    icon: Droplets,
    slug: "water-stains",
  },
  {
    title: "Cracks in Drywall or Foundation",
    desc: "Cosmetic settling or structural concern? Get a severity estimate.",
    icon: Layers,
    slug: "drywall-cracks",
  },
  {
    title: "Electrical or HVAC Problems",
    desc: "Know whether it's safe to troubleshoot or time to call a licensed pro.",
    icon: Zap,
    slug: "electrical-outlets",
  },
  {
    title: "Roof & Exterior Damage",
    desc: "Assess storm damage, missing shingles, or gutter issues from a photo.",
    icon: Home,
    slug: "roof-leaks",
  },
  {
    title: "Deck Rot & Wood Decay",
    desc: "Surface wear or structural risk? Upload a photo to find out.",
    icon: Bug,
    slug: "deck-rot",
  },
  {
    title: "HVAC & Airflow Issues",
    desc: "Unusual sounds, weak airflow, or ice buildup — get a first assessment.",
    icon: Wind,
    slug: "hvac-issues",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            See what's wrong with your home — before calling a contractor
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Upload a photo. Get an AI repair assessment. Know whether it's a DIY fix or time to hire a pro.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              <Link to="/diagnose">
                <Camera className="mr-2 h-5 w-5" />
                Upload Photo — It's Free
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">
                How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust / Value Strip */}
      <section className="border-y bg-secondary/30 py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPoints.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <t.icon className="h-5 w-5 text-primary" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">
            Get from problem to solution in under 5 minutes.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/diagnose">
                <Camera className="mr-2 h-5 w-5" />
                Start Your Free Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits / Value Proposition */}
      <section className="border-t bg-accent/30 py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            The Problem HomeSnapFix Solves
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Three common frustrations homeowners face — and how we help.
          </p>
          <div className="mt-8 space-y-4 text-left">
            {[
              {
                q: "You don't know how serious the issue is",
                a: "Get a severity estimate based on visual analysis — so you know whether to act now or monitor it over time.",
              },
              {
                q: "You're not sure if it's DIY or pro-level",
                a: "Every assessment includes a clear recommendation: handle it yourself, or call a licensed professional.",
              },
              {
                q: "You want guidance before paying for a contractor visit",
                a: "Use our free assessment as a first step — then decide whether to DIY or request a pro quote.",
              },
            ].map((item) => (
              <Card key={item.q}>
                <CardContent className="p-5">
                  <p className="text-sm font-semibold text-foreground">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Use Cases */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            What You Can Diagnose
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">
            Common home issues our AI can help you assess.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <Link key={uc.slug} to={`/diy/${uc.slug}`}>
                <Card className="group h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <uc.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-sm font-semibold text-foreground">{uc.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{uc.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-secondary/30 py-16">
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Ready to assess your home issue?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Upload a photo, get an AI assessment, and know your next step — all free.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/diagnose">
                <Camera className="mr-2 h-5 w-5" />
                Upload Photo — Free Assessment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pros">
                Find a Local Pro
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
