import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Shield, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <SEOHead
        title="About HomeSnapFix - AI Home Maintenance Intelligence Platform"
        description="HomeSnapFix helps homeowners identify home repair issues through AI photo analysis. Learn how we provide educational guidance for confident repair decisions."
      />
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* BLUF Section - Answer-First for AEO */}
          <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <h2 className="mb-3 text-lg font-semibold text-foreground">What HomeSnapFix Does</h2>
            <p className="mb-2 text-muted-foreground">
              HomeSnapFix is an AI-powered home maintenance intelligence platform that helps homeowners identify repair issues through photo analysis. We provide:
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
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
                <span>Educational information only—not a substitute for licensed inspections</span>
              </li>
            </ul>
          </div>

          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">About HomeSnapFix</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            HomeSnapFix is an AI-powered home maintenance intelligence platform built for everyday homeowners. We help you understand what's wrong with your home—and decide what to do about it—before spending money on contractor visits or panic-buying unnecessary repairs.
          </p>
          
          {/* E-E-A-T: Clear Positioning */}
          <div className="mt-8 rounded-lg border bg-muted/20 p-5">
            <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Our Approach</h2>
            <p className="text-muted-foreground">
              We combine computer vision AI with practical home repair knowledge to provide first-pass visual assessments. Our goal is to help you ask better questions, understand urgency levels, and make informed decisions about DIY vs. professional help. We are transparent about what we are—and what we are not.
            </p>
          </div>

          {/* What We Are NOT */}
          <div className="mt-6 rounded-lg border border-destructive/20 bg-destructive/5 p-5">
            <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">What We Are NOT</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Not a licensed inspector.</strong> We do not replace professional engineering, structural, electrical, or plumbing inspections.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Not definitive.</strong> AI assessments are approximations based on visual analysis. Always verify with a pro for safety-critical issues.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Not a contractor service.</strong> We may refer you to pros, but we do not employ or guarantee their work.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span><strong>Not insurance or legal advice.</strong> Insurance insights are general information only.</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Camera, title: "Snap & Know", desc: "Upload a photo, get a clear diagnosis — no guesswork required." },
              { icon: Heart, title: "DIY First", desc: "We empower homeowners with step-by-step guides before recommending a pro." },
              { icon: Shield, title: "Trust First", desc: "Transparent disclaimers, honest guidance, and no aggressive sales tactics." },
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

          <div className="mt-10 space-y-4 text-muted-foreground">
            <p>Our mission is simple: make home maintenance less stressful and more accessible. Whether you're a first-time homeowner or managing a rental property, HomeSnapFix gives you the confidence to understand what's wrong, decide what to do, and take action.</p>
            <p>We're building a world where every homeowner has a trusted advisor in their pocket — powered by AI, grounded in real expertise, and always honest about what requires professional help.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
