import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Camera,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  ShieldAlert,
  Info,
} from "lucide-react";

export interface IssueDetailData {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  heading: string;
  bluf: string;
  meaning: string;
  symptoms: string[];
  causes: string[];
  urgency: { text: string; items: string[] };
  diy: string[];
  callPro: string[];
  safety?: string;
  insurance?: string;
  faqs?: { q: string; a: string }[];
  relatedIssues: { label: string; href: string }[];
  parentCategory: { label: string; href: string };
}

export function IssueDetailPage({ data }: { data: IssueDetailData }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://homesnapfix.lovable.app/" },
      { "@type": "ListItem", position: 2, name: data.parentCategory.label, item: `https://homesnapfix.lovable.app${data.parentCategory.href}` },
      { "@type": "ListItem", position: 3, name: data.heading, item: `https://homesnapfix.lovable.app/issues/${data.slug}` },
    ],
  };

  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  return (
    <Layout>
      <SEOHead title={data.seoTitle} description={data.seoDescription} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <Breadcrumbs
            items={[
              { label: data.parentCategory.label, href: data.parentCategory.href },
              { label: data.heading },
            ]}
          />

          {/* BLUF */}
          <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <h2 className="mb-2 text-base font-semibold text-foreground">Bottom Line</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{data.bluf}</p>
          </div>

          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            {data.heading}
          </h1>

          {/* What This Means */}
          <section className="mt-8">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              What This Issue May Mean
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{data.meaning}</p>
          </section>

          {/* Signs & Symptoms */}
          <section className="mt-10">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              Common Signs and Symptoms
            </h2>
            <ul className="mt-4 space-y-2">
              {data.symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </section>

          {/* Causes */}
          <section className="mt-10">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              Common Causes
            </h2>
            <ul className="mt-4 space-y-2">
              {data.causes.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* Urgency */}
          <section className="mt-10">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              How Urgent Is It?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{data.urgency.text}</p>
            <div className="mt-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-destructive">
                <AlertTriangle className="h-4 w-4" /> Act quickly if you notice:
              </p>
              <ul className="space-y-1">
                {data.urgency.items.map((item, i) => (
                  <li key={i} className="text-sm text-destructive/80">• {item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* DIY vs Pro */}
          <section className="mt-10">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              DIY or Call a Professional?
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="p-5">
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> When DIY May Be Reasonable
                  </p>
                  <ul className="space-y-2">
                    {data.diy.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <AlertTriangle className="h-4 w-4 text-destructive" /> When to Call a Professional
                  </p>
                  <ul className="space-y-2">
                    {data.callPro.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Safety */}
          {data.safety && (
            <div className="mt-6 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <span><strong className="text-foreground">Safety Note:</strong> {data.safety}</span>
              </p>
            </div>
          )}

          {/* Insurance */}
          {data.insurance && (
            <div className="mt-4 rounded-lg border bg-muted/30 p-4">
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                <span><strong className="text-foreground">Insurance Relevance:</strong> {data.insurance}</span>
              </p>
            </div>
          )}

          {/* FAQs */}
          {data.faqs && data.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="mt-4 w-full">
                {data.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* Related Issues */}
          {data.relatedIssues.length > 0 && (
            <section className="mt-10">
              <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                Related Issues
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {data.relatedIssues.map((issue) => (
                  <Link
                    key={issue.href}
                    to={issue.href}
                    className="rounded-full border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {issue.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-12 rounded-lg border bg-secondary/30 p-8 text-center">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              Want to understand your specific situation?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Upload a photo and get a free AI-assisted assessment with severity estimates and practical next steps.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="shadow-lg">
                <Link to="/diagnose">
                  <Camera className="mr-2 h-5 w-5" />
                  Upload a Photo — Free Assessment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/pros">
                  Find a Local Pro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              HomeSnapFix provides educational guidance only. It is not a substitute for a licensed home inspection.
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
