import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { diyPosts } from "@/data/diyPosts";
import {
  Camera,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { DIYCategory } from "@/types";

export interface CategoryHubData {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  icon: LucideIcon;
  heading: string;
  intro: string;
  bluf: string;
  symptoms: string[];
  causes: string[];
  urgency: { text: string; items: string[] };
  diyVsPro: { diy: string[]; pro: string[] };
  safetyNote?: string;
  relatedCategories: DIYCategory[];
}

export function CategoryHubPage({ data }: { data: CategoryHubData }) {
  const relatedPosts = diyPosts.filter((p) =>
    data.relatedCategories.includes(p.category)
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://homesnapfix.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "DIY Guides", item: "https://homesnapfix.lovable.app/diy" },
      { "@type": "ListItem", position: 3, name: data.heading, item: `https://homesnapfix.lovable.app/issues/${data.slug}` },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title={data.seoTitle}
        description={data.seoDescription}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "DIY Guides", href: "/diy" },
              { label: data.heading },
            ]}
          />

          {/* BLUF */}
          <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <h2 className="mb-2 text-base font-semibold text-foreground">Quick Summary</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{data.bluf}</p>
          </div>

          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            {data.heading}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{data.intro}</p>

          {/* Symptoms */}
          <section className="mt-10">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              Common Symptoms Homeowners Notice
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
              What Usually Causes These Issues
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
              When to Act Quickly
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{data.urgency.text}</p>
            <div className="mt-4 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-destructive">
                <AlertTriangle className="h-4 w-4" /> Seek professional help promptly if you notice:
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
              DIY or Call a Pro?
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="p-5">
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" /> You Can Likely Handle It If:
                  </p>
                  <ul className="space-y-2">
                    {data.diyVsPro.diy.map((item, i) => (
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
                    <AlertTriangle className="h-4 w-4 text-destructive" /> Call a Licensed Professional If:
                  </p>
                  <ul className="space-y-2">
                    {data.diyVsPro.pro.map((item, i) => (
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

          {/* Safety Note */}
          {data.safetyNote && (
            <div className="mt-6 rounded-lg border bg-muted/30 p-4 text-xs text-muted-foreground italic">
              <strong className="not-italic text-foreground">Important:</strong> {data.safetyNote}
            </div>
          )}

          {/* Related Guides */}
          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
                Related Repair Guides
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Detailed step-by-step instructions for specific issues in this category.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedPosts.map((post) => (
                  <Link key={post.slug} to={`/diy/${post.slug}`}>
                    <Card className="group h-full transition-shadow hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge variant="outline">{post.difficulty}</Badge>
                        </div>
                        <h3 className="mt-2 font-serif text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readingTime}</span>
                          <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" /> {post.diySteps.length} steps</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-12 rounded-lg border bg-secondary/30 p-8 text-center">
            <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              Not sure how serious your issue is?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Upload a photo and get a free AI-assisted assessment with severity estimates and repair guidance.
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
              HomeSnapFix provides educational guidance only. It is not a substitute for a licensed inspection.
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
