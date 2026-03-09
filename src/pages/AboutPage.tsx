import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Heart, Shield, CheckCircle, AlertTriangle, Brain, Eye, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const aboutFaqs = [
  { q: "Is HomeSnapFix a licensed home inspection service?", a: "No. HomeSnapFix is an educational tool that uses AI image analysis to help homeowners understand potential issues. It is not a substitute for a licensed home inspection, engineering assessment, or any professional evaluation." },
  { q: "How accurate is the AI diagnosis?", a: "Our AI provides a first-pass visual assessment based on patterns in your photo. Accuracy varies by image quality, lighting, and issue complexity. We display a confidence score with every result so you can gauge reliability. Always verify with a professional for safety-critical concerns." },
  { q: "Who should use HomeSnapFix?", a: "HomeSnapFix is built for everyday homeowners, renters, property managers, and first-time buyers who want to better understand a visible home issue before deciding on next steps — whether that's a DIY fix or calling a contractor." },
  { q: "Does HomeSnapFix sell my data or photos?", a: "No. Uploaded photos are used solely for generating your diagnosis. We do not sell user data or images to third parties." },
  { q: "Can I use HomeSnapFix results for an insurance claim?", a: "HomeSnapFix reports are for personal reference and education only. They are not professional inspections and should not be submitted as documentation for insurance claims. Contact your insurance provider and a licensed adjuster for claims." },
];

export default function AboutPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title="About HomeSnapFix - AI Home Maintenance Intelligence Platform"
        description="HomeSnapFix helps homeowners identify home repair issues through AI photo analysis. Learn about our methodology, what we do and don't do, and how to use results responsibly."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* BLUF Section */}
          <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <h2 className="mb-3 text-lg font-semibold text-foreground">What HomeSnapFix Does</h2>
            <p className="mb-3 text-muted-foreground">
              HomeSnapFix is a free AI-powered tool that helps homeowners visually assess home repair issues from a photo. Upload a picture of a crack, stain, leak, or other concern, and get an educational summary of what it might be, how serious it could be, and what to do next.
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Visual severity assessments for common home issues</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>DIY repair guidance with step-by-step instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Clear thresholds for when to call a licensed professional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Educational information only — not a substitute for licensed inspections</span>
              </li>
            </ul>
          </div>

          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">About HomeSnapFix</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            HomeSnapFix exists because most homeowners face the same problem: you notice something wrong — a stain on the ceiling, a crack in the wall, a musty smell — and you have no idea if it's cosmetic or catastrophic. You don't know whether to grab a sponge or call an emergency contractor.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            We built HomeSnapFix to close that gap. It's a free tool that uses AI image analysis to give you a plain-English starting point — not a final answer, but a first step toward understanding what you're looking at and what to do about it.
          </p>

          {/* Who It's For */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl font-bold text-foreground">Who It's For</h2>
            <p className="mt-3 text-muted-foreground">
              HomeSnapFix is designed for everyday people, not contractors or engineers. If any of these describe you, this tool was built with you in mind:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span><strong>First-time homeowners</strong> who aren't sure what's normal wear and what's a real problem.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span><strong>Renters</strong> trying to document issues or decide whether to notify a landlord.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span><strong>Property managers</strong> triaging maintenance requests before dispatching a crew.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span><strong>DIY-minded homeowners</strong> who want to fix things themselves when it's safe to do so.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span><strong>Anyone preparing for a home inspection</strong> who wants to understand visible issues in advance.</span></li>
            </ul>
          </div>

          {/* Methodology */}
          <div className="mt-10 rounded-lg border bg-card p-6">
            <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-foreground">
              <Brain className="h-6 w-6 text-primary" /> How Our AI Works
            </h2>
            <p className="mt-3 text-muted-foreground">
              When you upload a photo, here's what happens behind the scenes:
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">1</div>
                <div>
                  <p className="font-medium text-foreground">Image Analysis</p>
                  <p className="text-sm text-muted-foreground">Our AI model examines your photo for visual patterns — discoloration, texture, shape, location, and extent of the visible issue.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">2</div>
                <div>
                  <p className="font-medium text-foreground">Pattern Matching</p>
                  <p className="text-sm text-muted-foreground">The model compares what it sees against known categories of home issues — water damage, mold, structural cracks, electrical discoloration, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">3</div>
                <div>
                  <p className="font-medium text-foreground">Severity Estimation</p>
                  <p className="text-sm text-muted-foreground">Based on the visual analysis, the system estimates a severity level (low, moderate, high, critical) and provides a confidence score. Higher confidence means the image closely matches a known pattern.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">4</div>
                <div>
                  <p className="font-medium text-foreground">Actionable Summary</p>
                  <p className="text-sm text-muted-foreground">You receive a plain-English summary: what the issue likely is, what might have caused it, whether DIY repair is reasonable, and when you should call a professional instead.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Interpret Results */}
          <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-6">
            <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground">
              <Eye className="h-5 w-5 text-primary" /> How to Interpret Your Results
            </h2>
            <p className="mt-3 text-muted-foreground">
              Think of HomeSnapFix results the way you'd think of a symptom checker for your body — it's a starting point for understanding, not a diagnosis you should act on blindly.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><strong>Confidence score:</strong> A higher score means the image closely matches a known pattern. A lower score means the AI is less certain — take the result as a possibility, not a conclusion.</li>
              <li><strong>Severity level:</strong> This reflects visual severity only. It does not account for hidden damage behind walls, under floors, or in areas the photo doesn't show.</li>
              <li><strong>DIY vs. Pro recommendation:</strong> We err on the side of caution. If there's any doubt about safety, we'll recommend calling a professional.</li>
              <li><strong>"When to call a pro":</strong> If you see this recommendation, take it seriously. Some issues — electrical, structural, gas-related — are genuinely dangerous to handle without training.</li>
            </ul>
          </div>

          {/* What We Are NOT */}
          <div className="mt-8 rounded-lg border border-destructive/20 bg-destructive/5 p-6">
            <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-foreground">
              <AlertTriangle className="h-5 w-5 text-destructive" /> What HomeSnapFix Is NOT
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Being transparent about our limitations is part of being trustworthy. Here's what we are not:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-destructive">✗</span>
                <span><strong>Not a licensed inspection.</strong> We do not replace professional home inspections, engineering assessments, or any licensed evaluation. Our tool provides educational guidance only.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-destructive">✗</span>
                <span><strong>Not definitive.</strong> AI assessments are approximations based on visual patterns. They cannot detect hidden damage, structural issues behind walls, or problems that aren't visible in a photo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-destructive">✗</span>
                <span><strong>Not a contractor or repair service.</strong> We may help you find a local professional, but we do not employ, endorse, or guarantee any contractor's work.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-destructive">✗</span>
                <span><strong>Not insurance or legal advice.</strong> Any information about insurance coverage is general in nature. Contact your insurance provider directly for claims guidance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-destructive">✗</span>
                <span><strong>Not a safety guarantee.</strong> If you suspect a gas leak, electrical hazard, structural failure, or any immediate danger, leave the area and call emergency services. Do not rely on any app.</span>
              </li>
            </ul>
          </div>

          {/* Values */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Camera, title: "Snap & Understand", desc: "Upload a photo and get a clear, jargon-free explanation of what you might be dealing with." },
              { icon: Heart, title: "DIY When Safe", desc: "We give you honest guidance on what you can handle — and when it's smarter to call a pro." },
              { icon: Shield, title: "Honest by Default", desc: "No fake urgency, no scare tactics, no upselling. Just straightforward information you can trust." },
            ].map((v) => (
              <Card key={v.title}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-3 font-serif text-base font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission */}
          <div className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="font-serif text-2xl font-bold text-foreground">Our Mission</h2>
            <p>
              We believe every homeowner deserves to understand what's happening in their home — without needing a contractor on speed dial or an engineering degree. HomeSnapFix is built to be the calm, knowledgeable friend who helps you figure out what you're looking at, what it might mean, and what to do next.
            </p>
            <p>
              We're committed to being genuinely useful: that means being honest about what AI can and can't do, never creating false urgency, and always recommending professional help when safety is on the line.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="mt-4">
              {aboutFaqs.map((faq, i) => (
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
