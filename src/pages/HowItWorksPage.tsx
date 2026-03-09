import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Search, Wrench, FileDown, Users, ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const steps = [
  { icon: Camera, title: "1. Upload a Photo", desc: "Take a picture of the issue — a crack, stain, leak, discoloration, or anything that concerns you. Our system accepts JPG, PNG, and HEIC from any device. Better lighting and closer angles produce better results." },
  { icon: Search, title: "2. Get an AI Assessment", desc: "Our AI analyzes your photo and identifies the likely issue, estimates a severity level, and provides a confidence score. You'll get a clear, plain-English summary in seconds — not a technical report you need a contractor to decode." },
  { icon: Wrench, title: "3. Review DIY Steps (If Appropriate)", desc: "For issues that are safe to address yourself, you'll receive step-by-step guidance, a list of tools and materials, and important safety notes. We're honest about what's DIY-friendly and what isn't." },
  { icon: FileDown, title: "4. Save Your Report", desc: "Download a clean 1-page PDF with your diagnosis summary, repair steps, and tool list. Useful for your own records, sharing with a spouse, or bringing to a contractor consultation." },
  { icon: Users, title: "5. Find a Professional (If Needed)", desc: "If the issue is beyond DIY — or if you'd simply prefer professional help — you can request a match with a local contractor. We never pressure you toward this option." },
];

const faqs = [
  { q: "Is HomeSnapFix free to use?", a: "Yes. The core diagnosis tool — uploading a photo and receiving an AI assessment — is free. You can also download your report and browse repair guides at no cost." },
  { q: "How long does a diagnosis take?", a: "Most diagnoses are returned in under 30 seconds. Complex images or high server load may take slightly longer." },
  { q: "What kind of photos work best?", a: "Clear, well-lit photos taken from 1–3 feet away produce the best results. Include the full area of concern and, if possible, a reference point for scale (like a coin or ruler). Avoid blurry, dark, or heavily filtered images." },
  { q: "Can I upload multiple photos of the same issue?", a: "Currently, the tool analyzes one photo per diagnosis. For complex issues, try uploading the clearest photo first. You can run multiple diagnoses if needed." },
  { q: "Should I trust the AI result completely?", a: "No — and we don't want you to. Our AI gives you a starting point for understanding, not a final verdict. Always verify with a licensed professional for safety-critical issues, structural concerns, or anything involving electrical or gas systems." },
  { q: "What happens to my photos after upload?", a: "Your photos are processed for diagnosis purposes only. We do not sell, share, or use your images for advertising." },
];

export default function HowItWorksPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title="How HomeSnapFix Works - AI Home Diagnosis in 5 Steps"
        description="Upload a photo, get an AI assessment, follow DIY steps, or find a pro. Learn exactly how HomeSnapFix helps homeowners understand home repair issues in minutes."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* BLUF */}
          <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Quick Answer: How It Works</h2>
            <p className="text-muted-foreground">
              Upload a photo of a home issue → AI analyzes it and estimates severity → Get DIY repair steps or find a local professional. The entire process takes under 5 minutes and is free. Results are educational — always verify serious concerns with a licensed professional.
            </p>
          </div>

          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">How HomeSnapFix Works</h1>
          <p className="mx-auto mt-3 max-w-xl text-center text-lg text-muted-foreground">
            From photo to understanding in minutes. Here's exactly what happens when you use HomeSnapFix.
          </p>

          {/* Steps */}
          <div className="mt-12 space-y-6">
            {steps.map((s) => (
              <Card key={s.title}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Box */}
          <div className="mt-10 rounded-lg border border-primary/20 bg-card p-6">
            <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" /> What You Can Expect From Us
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">✓</span>
                <span><strong>Honest assessments.</strong> We won't inflate severity to scare you into paying for something. If it looks minor, we'll say so.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">✓</span>
                <span><strong>Clear limitations.</strong> Every result includes a confidence score. If the AI isn't sure, we tell you — and recommend getting a professional opinion.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">✓</span>
                <span><strong>Safety first.</strong> For electrical, structural, gas, or mold issues, we default to recommending professional help. We'd rather be overly cautious than put you at risk.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">✓</span>
                <span><strong>No pressure.</strong> Finding a contractor through HomeSnapFix is always optional. We'll never push you toward paid services.</span>
              </li>
            </ul>
          </div>

          {/* Important Limitations */}
          <div className="mt-6 rounded-lg border border-destructive/20 bg-destructive/5 p-6">
            <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground">
              <AlertTriangle className="h-5 w-5 text-destructive" /> Important Limitations
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              HomeSnapFix is an educational tool — not a professional inspection service. Please keep these limitations in mind:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• AI can only assess what's visible in your photo. Hidden damage behind walls, under floors, or in inaccessible areas cannot be detected.</li>
              <li>• Results are pattern-based estimates, not engineering conclusions. Severity ratings reflect visual appearance only.</li>
              <li>• Poor photo quality (blurry, dark, distant) will reduce accuracy.</li>
              <li>• This tool does not replace licensed inspectors, engineers, electricians, plumbers, or any certified professional.</li>
              <li>• If you suspect an immediate safety hazard — gas leak, electrical fire risk, structural collapse — stop using any app and call emergency services.</li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/diagnose">Try It Now — Upload a Photo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="mt-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
