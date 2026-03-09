import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { diyPosts } from "@/data/diyPosts";
import { Camera, ArrowLeft, AlertTriangle, ShieldCheck, Clock, BarChart3, ExternalLink } from "lucide-react";

export default function DIYArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = diyPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <SEOHead
          title="Article Not Found"
          description="The DIY repair guide you're looking for doesn't exist."
          noindex={true}
        />
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="font-serif text-3xl font-bold text-foreground">Article Not Found</h1>
            <p className="mt-2 text-muted-foreground">The guide you're looking for doesn't exist.</p>
            <Button asChild className="mt-6"><Link to="/diy"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Guides</Link></Button>
          </div>
        </section>
      </Layout>
    );
  }

  // HowTo Schema for DIY guides
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.title,
    description: post.excerpt,
    totalTime: post.readingTime,
    tool: post.toolsNeeded.map((t) => ({ "@type": "HowToTool", name: t.name })),
    step: post.diySteps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.description,
      position: s.step,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://homesnapfix.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "DIY Guides", item: "https://homesnapfix.lovable.app/diy" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://homesnapfix.lovable.app/diy/${post.slug}` },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title={`${post.title} - DIY Repair Guide`}
        description={post.excerpt}
        ogType="article"
        article={{
          section: post.category,
        }}
      />
      {[howToSchema, breadcrumbSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <article className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <Breadcrumbs items={[{ label: "DIY Guides", href: "/diy" }, { label: post.title }]} />

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{post.category}</Badge>
            <Badge variant="outline">{post.difficulty}</Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {post.readingTime}</span>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">{post.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{post.excerpt}</p>

          {/* Symptoms */}
          <Card className="mt-8">
            <CardHeader><CardTitle className="text-lg">Symptoms</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {post.symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Likely Causes */}
          <Card className="mt-4">
            <CardHeader><CardTitle className="text-lg">Likely Causes</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {post.likelyCauses.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />{c}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* DIY Steps */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-primary" /> DIY Repair Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {post.diySteps.map((s) => (
                  <AccordionItem key={s.step} value={`step-${s.step}`}>
                    <AccordionTrigger>Step {s.step}: {s.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{s.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="mt-4">
            <CardHeader><CardTitle className="text-lg">Tools &amp; Materials</CardTitle></CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {post.toolsNeeded.map((t, i) => {
                  const hasRealLink = t.affiliateLink && !t.affiliateLink.startsWith("#") && t.affiliateLink !== "";
                  return hasRealLink ? (
                    <a key={i} href={t.affiliateLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50">
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground">{t.name} <ExternalLink className="h-3 w-3 text-muted-foreground" /></span>
                      <span className="text-sm text-muted-foreground">{t.price}</span>
                    </a>
                  ) : (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-3 bg-muted/10">
                      <span className="text-sm font-medium text-foreground">{t.name}</span>
                      <span className="text-sm text-muted-foreground">{t.price}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-muted-foreground italic">
                Product suggestions are for reference. Search your preferred retailer for best prices.
              </p>
            </CardContent>
          </Card>

          {/* Safety */}
          <Card className="mt-4 border-primary/20 bg-primary/5">
            <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><ShieldCheck className="h-5 w-5 text-primary" /> Safety Notes</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {post.safetyNotes.map((n, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{n}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Mistakes to Avoid */}
          {post.mistakesToAvoid && post.mistakesToAvoid.length > 0 && (
            <Card className="mt-4 border-destructive/20 bg-destructive/5">
              <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><AlertTriangle className="h-5 w-5 text-destructive" /> Common Mistakes to Avoid</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {post.mistakesToAvoid.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />{m}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* When to Call a Pro */}
          <Card className="mt-4">
            <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><AlertTriangle className="h-5 w-5 text-destructive" /> When to Call a Pro</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {post.whenToCallAPro.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />{w}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* FAQs */}
          {post.faqs.length > 0 && (
            <Card className="mt-4">
              <CardHeader><CardTitle className="text-lg">Frequently Asked Questions</CardTitle></CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {post.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger>{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1">
              <Link to="/diagnose"><Camera className="mr-2 h-4 w-4" /> Try AI Photo Diagnosis</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/pros">Find a Local Pro</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
}
