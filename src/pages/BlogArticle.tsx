import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, ChevronLeft, ChevronRight, ArrowLeft, BookOpen } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts, blogCategories, blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishDate,
    "dateModified": post.updatedDate || post.publishDate,
    "author": {
      "@type": "Organization",
      "name": "HomeSnapFix"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HomeSnapFix",
      "url": "https://homesnapfix.lovable.app"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://homesnapfix.lovable.app/blog/${post.slug}`
    },
    "articleSection": blogCategories[post.category].label,
    "wordCount": post.content.split(/\s+/).length
  };

  // Extract FAQ if present in content
  const faqMatch = post.content.match(/## Frequently Asked Questions([\s\S]*?)(?=## |$)/);
  let faqSchema = null;
  
  if (faqMatch) {
    const faqContent = faqMatch[1];
    const questions = faqContent.match(/### ([^\n]+)\n\n([^#]+)/g);
    
    if (questions && questions.length > 0) {
      const faqItems = questions.map((q) => {
        const match = q.match(/### ([^\n]+)\n\n([\s\S]+)/);
        if (match) {
          return {
            "@type": "Question",
            "name": match[1].trim(),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": match[2].trim().replace(/\n+/g, " ")
            }
          };
        }
        return null;
      }).filter(Boolean);

      if (faqItems.length > 0) {
        faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems
        };
      }
    }
  }

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        canonical={`https://homesnapfix.lovable.app/blog/${post.slug}`}
        ogType="article"
        article={{
          publishedTime: post.publishDate,
          modifiedTime: post.updatedDate,
          section: blogCategories[post.category].label,
        }}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <article className="bg-background">
        {/* Header */}
        <div className="bg-gradient-to-b from-secondary/30 to-background">
          <div className="container py-8 md:py-12">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: blogCategories[post.category].label, href: `/blog?category=${post.category}` },
                { label: post.title },
              ]}
            />

            <div className="mx-auto max-w-3xl">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">
                  {blogCategories[post.category].label}
                </Badge>
                {post.isPillar && (
                  <Badge variant="outline">
                    <BookOpen className="mr-1 h-3 w-3" />
                    Pillar Article
                  </Badge>
                )}
              </div>

              <h1 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="mb-6 text-lg text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishDate)}
                </span>
                {post.updatedDate && post.updatedDate !== post.publishDate && (
                  <span className="flex items-center gap-1">
                    Updated: {formatDate(post.updatedDate)}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="mt-12 mb-4 font-serif text-2xl font-bold text-foreground first:mt-0">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 mb-3 font-serif text-xl font-semibold text-foreground">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 leading-relaxed text-foreground/90">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4 ml-6 list-disc space-y-2 text-foreground/90">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-4 ml-6 list-decimal space-y-2 text-foreground/90">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  a: ({ href, children }) => {
                    const isInternal = href?.startsWith("/");
                    if (isInternal) {
                      return (
                        <Link to={href || "#"} className="text-primary hover:underline">
                          {children}
                        </Link>
                      );
                    }
                    return (
                      <a
                        href={href}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    );
                  },
                  blockquote: ({ children }) => (
                    <blockquote className="my-4 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                      return (
                        <code className="block overflow-x-auto rounded-lg bg-secondary p-4 text-sm">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="rounded bg-secondary px-1.5 py-0.5 text-sm">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="my-4 overflow-x-auto rounded-lg bg-secondary p-4">
                      {children}
                    </pre>
                  ),
                  hr: () => <hr className="my-8 border-border" />,
                  table: ({ children }) => (
                    <div className="my-4 overflow-x-auto">
                      <table className="w-full border-collapse border border-border">
                        {children}
                      </table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-border bg-secondary px-4 py-2 text-left font-semibold">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-border px-4 py-2">{children}</td>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Author/Trust Box */}
            <div className="mt-12 rounded-lg border bg-secondary/30 p-6">
              <h3 className="mb-2 font-semibold text-foreground">About This Article</h3>
              <p className="text-sm text-muted-foreground">
                This article is part of HomeSnapFix's homeowner resource library. Our content is
                researched and written to help homeowners identify issues, understand repair options,
                and make informed decisions. We focus on practical, honest guidance.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> This is educational content, not a substitute for
                professional inspection or repair advice. Every home situation is different —
                when in doubt, consult a licensed professional.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
              {prevPost ? (
                <a
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="line-clamp-1">{prevPost.title}</span>
                </a>
              ) : (
                <div />
              )}
              {nextPost && (
                <a
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:text-right"
                >
                  <span className="line-clamp-1">{nextPost.title}</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="border-t bg-secondary/20">
            <div className="container py-12">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Related Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Card key={related.slug} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <Badge variant="secondary" className="mb-2 w-fit text-xs">
                        {blogCategories[related.category].label}
                      </Badge>
                      <CardTitle className="line-clamp-2 font-serif text-lg">
                        <a
                          href={`/blog/${related.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {related.title}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {related.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {related.readingTime} min read
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="border-t">
          <div className="container py-8">
            <Button variant="outline" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
}
