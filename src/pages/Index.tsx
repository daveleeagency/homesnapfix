import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  Thermometer,
  AlertTriangle,
  CheckCircle,
  ClipboardList,
  DollarSign,
} from "lucide-react";

/* ── FAQ Data ── */
const homepageFaqs = [
  {
    q: "What is HomeSnapFix?",
    a: "HomeSnapFix is a free tool that lets homeowners upload a photo of a home problem — like a crack, leak, water stain, or HVAC symptom — and receive an AI-assisted assessment. It estimates severity, explains likely causes, and helps you decide whether to fix it yourself or hire a professional. It is not a licensed home inspection.",
  },
  {
    q: "How accurate is the AI photo assessment?",
    a: "The AI assessment is designed to help you understand what you're likely dealing with and what questions to ask — not to replace a professional inspection. It works best on visible, surface-level damage shown in a clear, well-lit photo. Treat the results as an informed starting point, not a final diagnosis.",
  },
  {
    q: "Is HomeSnapFix free to use?",
    a: "Yes. The photo assessment tool is completely free. You can upload a photo, receive a severity estimate, and download a basic report — no account required.",
  },
  {
    q: "What types of home issues can HomeSnapFix assess?",
    a: "The tool can assess a wide range of visible home problems: water stains, drywall or foundation cracks, mold and moisture signs, roof damage, electrical warning signs, HVAC symptoms, and exterior damage. It works best on clear, well-lit photos of the affected area.",
  },
  {
    q: "When should I use HomeSnapFix before calling a contractor?",
    a: "Any time you're unsure whether an issue is urgent, DIY-fixable, or worth a service call. The assessment helps you understand what you may be dealing with before spending money on a professional visit — and helps you ask better questions when you do.",
  },
];

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

/* ── Data ── */

const trustPoints = [
  { icon: ShieldCheck, label: "AI-assisted visual issue review" },
  { icon: AlertTriangle, label: "Repair urgency signals" },
  { icon: FileText, label: "Save and print reports" },
  { icon: HelpCircle, label: "Helpful before calling a contractor" },
];

const steps = [
  {
    num: "1",
    title: "Upload a Photo",
    desc: "Take a picture of the crack, stain, leak, or damage. We accept JPG, PNG, and HEIC from any phone or camera.",
    icon: Camera,
  },
  {
    num: "2",
    title: "Get a Repair Assessment",
    desc: "Our AI reviews the image and estimates the likely issue, how urgent it appears, and what kind of repair may be needed.",
    icon: Search,
  },
  {
    num: "3",
    title: "Decide Your Next Step",
    desc: "Follow a DIY repair guide if the fix is manageable, or request a match with a local professional if it's beyond DIY.",
    icon: Wrench,
  },
];

const benefits = [
  {
    icon: AlertTriangle,
    heading: "Understand how serious it might be",
    body: "Get a severity estimate based on what the AI sees in your photo. Know whether the issue looks minor, moderate, or worth addressing quickly — so you can prioritize instead of guessing.",
  },
  {
    icon: CheckCircle,
    heading: "Know whether to DIY or call a pro",
    body: "Every assessment includes clear guidance on whether the repair is likely something you can handle yourself, or whether it's safer and smarter to bring in a licensed professional.",
  },
  {
    icon: ClipboardList,
    heading: "Get organized before spending money",
    body: "Download a printable report with the diagnosis, repair steps, and tool list. Use it as a reference when shopping for materials or when talking to a contractor.",
  },
  {
    icon: DollarSign,
    heading: "Reduce uncertainty and wasted visits",
    body: "Use the free assessment as a first step before scheduling a paid contractor visit. You'll have a better idea of what's wrong and what questions to ask.",
  },
];

const useCases = [
  {
    title: "Roof Leaks & Storm Damage",
    desc: "Missing shingles, ceiling stains after rain, or attic moisture — upload a photo to estimate severity and find out if it's a temporary patch or a pro-level repair.",
    icon: Home,
    slug: "roof-leaks",
  },
  {
    title: "Plumbing Leaks & Water Damage",
    desc: "Water stains on walls or ceilings, dripping pipes, or a sudden spike in your water bill — get guidance on what's likely causing it and how urgent it is.",
    icon: Droplets,
    slug: "water-stains",
  },
  {
    title: "Cracks in Drywall or Foundation",
    desc: "Hairline settling cracks are common and usually cosmetic. Wider or diagonal cracks may signal structural movement. Get a severity estimate from a photo.",
    icon: Layers,
    slug: "drywall-cracks",
  },
  {
    title: "Mold, Moisture & Indoor Air Quality",
    desc: "Visible mold patches, musty smells, or condensation on windows — find out if it's surface-level cleanup or a sign of a deeper moisture problem.",
    icon: Thermometer,
    slug: "mold-spots",
  },
  {
    title: "Electrical Outlet & Panel Issues",
    desc: "Dead outlets, tripping breakers, or warm cover plates — learn which checks are safe to do yourself and which ones require a licensed electrician.",
    icon: Zap,
    slug: "electrical-outlets",
  },
  {
    title: "HVAC & Airflow Problems",
    desc: "Weak airflow, unusual sounds, ice on coils, or uneven room temperatures — get a first assessment and know when a filter change won't cut it.",
    icon: Wind,
    slug: "hvac-issues",
  },
];

/* ── Page ── */

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="AI Home Repair Assessment — Upload a Photo, Know Your Next Step"
        description="Upload a photo of a home issue and get a free AI-assisted repair assessment. Understand severity, get DIY guidance, and know when to hire a pro — before calling a contractor."
      />

      {/* ── AEO: Answer-first summary (visible, concise, machine-readable) ── */}
      <section className="border-b bg-muted/40 py-4">
        <div className="container">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">HomeSnapFix</strong> is a free tool that lets homeowners upload a photo of a home issue — like a crack, leak, stain, or HVAC symptom — and receive an AI-assisted repair assessment. It estimates severity, suggests DIY steps when appropriate, and tells you when to call a licensed professional. It is not a licensed inspection.
          </p>
        </div>
      </section>

      {/* ── Hero ── */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Understand your home issue before you spend money on it
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Upload a photo of a crack, leak, stain, or damage. Get an AI-assisted assessment that estimates severity, suggests repairs, and helps you decide whether to fix it yourself or hire a professional.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              <Link to="/diagnose">
                <Camera className="mr-2 h-5 w-5" />
                Upload a Photo — Free Assessment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Trust / Value Strip ── */}
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

      {/* ── How It Works ── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">
            Three steps. Under five minutes. No account required.
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

      {/* ── Key Benefits ── */}
      <section className="border-t bg-accent/30 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Why Homeowners Use HomeSnapFix
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            A free first step that helps you make better repair decisions.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <Card key={b.heading} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <b.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-foreground">{b.heading}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Common Issues You Can Assess
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">
            Upload a photo of any of these problems and get a free assessment with repair guidance.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <Link key={uc.slug} to={`/diy/${uc.slug}`}>
                <Card className="group h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <uc.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{uc.title}</h3>
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

      {/* ── Bottom CTA ── */}
      <section className="border-t bg-secondary/30 py-16">
        <div className="container text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Not sure what's wrong? Start with a photo.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Upload a picture of the issue, get a free AI-assisted assessment, and find out whether it's a simple fix or time to call a professional. No account needed.
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
          <p className="mt-6 text-xs text-muted-foreground">
            HomeSnapFix provides AI-assisted educational guidance only. It is not a substitute for a licensed home inspection. For structural, electrical, gas, or safety concerns, always consult a licensed professional.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
