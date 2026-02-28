import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Search, Wrench, FileDown, Users, ArrowRight } from "lucide-react";

const steps = [
  { icon: Camera, title: "1. Upload a Photo", desc: "Snap a picture of the issue — a crack, stain, leak, or anything that concerns you. Our system accepts JPG, PNG, and HEIC from any device." },
  { icon: Search, title: "2. Get an AI Diagnosis", desc: "Our AI analyzes your photo and identifies the likely issue, severity level, and confidence score. You'll get a clear, non-alarmist summary in seconds." },
  { icon: Wrench, title: "3. Follow DIY Steps", desc: "Receive step-by-step repair instructions, a list of tools and materials (with links), and important safety notes — all tailored to the diagnosis." },
  { icon: FileDown, title: "4. Download a Report", desc: "Save a clean 1-page PDF report with your diagnosis, repair steps, and tool list. Great for reference or sharing with a contractor." },
  { icon: Users, title: "5. Or Find a Pro", desc: "If the issue is beyond DIY, get matched with a vetted local professional. Just fill out a quick form — it's fast and free." },
];

export default function HowItWorksPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">How It Works</h1>
          <p className="mx-auto mt-3 max-w-xl text-center text-lg text-muted-foreground">
            From photo to fix in minutes. Here's how HomeSnapFix helps you take control of home repairs.
          </p>

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

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/diagnose">Start Diagnosing <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
