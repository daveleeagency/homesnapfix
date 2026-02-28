import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">About HomeSnapFix</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            HomeSnapFix is an AI-powered home maintenance intelligence platform built for everyday homeowners. We believe no one should panic over a crack in the wall or a stain on the ceiling — and no one should overpay for repairs they could learn to handle themselves.
          </p>

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
