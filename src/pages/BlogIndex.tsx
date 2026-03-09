import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Search, Clock, Calendar, ChevronRight, BookOpen, Star } from "lucide-react";
import { blogPosts, blogCategories, getFeaturedPost, BlogCategory } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");

  const featuredPost = getFeaturedPost();

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort(
      (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }, [filteredPosts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "HomeSnapFix Blog",
    "description": "Practical guidance for homeowners on spotting damage, understanding repairs, and making smart decisions about home maintenance.",
    "url": "https://homesnapfix.lovable.app/blog",
    "publisher": {
      "@type": "Organization",
      "name": "HomeSnapFix",
      "url": "https://homesnapfix.lovable.app"
    },
    "blogPost": blogPosts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "url": `https://homesnapfix.lovable.app/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "dateModified": post.updatedDate || post.publishDate
    }))
  };

  return (
    <Layout>
      <SEOHead
        title="Blog — Home Repair Guidance, Damage Signs & Maintenance Tips"
        description="Practical articles for homeowners: how to spot water damage, when to call a pro, common repair mistakes, and seasonal maintenance advice from HomeSnapFix."
        canonical="https://homesnapfix.lovable.app/blog"
        ogType="website"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-secondary/30 to-background">
        <div className="container py-12 md:py-16">
          <Breadcrumbs items={[{ label: "Blog" }]} />

          {/* Hero Section */}
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="mr-1 h-3 w-3" />
              Homeowner Resources
            </Badge>
            <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              HomeSnapFix Blog
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Practical guidance on spotting home damage early, understanding what repairs really cost, and knowing when you can fix it yourself vs when to call a professional. Written for homeowners, not contractors.
            </p>
          </div>

          {/* Featured Article */}
          {featuredPost && selectedCategory === "all" && searchQuery === "" && (
            <Card className="mb-12 overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 md:py-10 lg:px-10 lg:py-12">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge className="bg-primary/90">
                    <Star className="mr-1 h-3 w-3" />
                    Featured Guide
                  </Badge>
                  {featuredPost.isPillar && (
                    <Badge variant="outline">Comprehensive Guide</Badge>
                  )}
                </div>
                <h2 className="mb-4 font-serif text-xl font-bold leading-snug text-foreground sm:text-2xl md:text-3xl">
                  <Link to={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featuredPost.publishDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readingTime} min read
                  </span>
                  <Badge variant="secondary">
                    {blogCategories[featuredPost.category].label}
                  </Badge>
                </div>
                <Button asChild size="lg">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    Read Full Guide
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          )}

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                All Topics
              </Button>
              {Object.entries(blogCategories).map(([key, { label }]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(key as BlogCategory)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {sortedPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col transition-shadow hover:shadow-lg">
                  <CardHeader className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {blogCategories[post.category].label}
                      </Badge>
                      {post.isPillar && (
                        <Badge variant="outline" className="text-xs">
                          Guide
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2 font-serif text-lg">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3 mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime} min
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                No articles found matching your search.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}

          {/* Internal Links Section */}
          <div className="mt-16 rounded-lg border bg-card p-6 md:p-8">
            <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
              Explore HomeSnapFix
            </h2>
            <p className="mb-6 text-muted-foreground">
              Our blog is just one part of the toolkit. Use these resources to diagnose issues, learn repairs, and find help:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                to="/diagnose"
                className="group rounded-lg border bg-background p-4 transition-colors hover:border-primary"
              >
                <h3 className="font-medium text-foreground group-hover:text-primary">
                  AI Diagnosis Tool
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Upload a photo for instant damage assessment
                </p>
              </Link>
              <Link
                to="/diy"
                className="group rounded-lg border bg-background p-4 transition-colors hover:border-primary"
              >
                <h3 className="font-medium text-foreground group-hover:text-primary">
                  DIY Repair Guides
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Step-by-step instructions for common repairs
                </p>
              </Link>
              <Link
                to="/issues/plumbing"
                className="group rounded-lg border bg-background p-4 transition-colors hover:border-primary"
              >
                <h3 className="font-medium text-foreground group-hover:text-primary">
                  Issue Guides
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  In-depth coverage of common home problems
                </p>
              </Link>
              <Link
                to="/pros"
                className="group rounded-lg border bg-background p-4 transition-colors hover:border-primary"
              >
                <h3 className="font-medium text-foreground group-hover:text-primary">
                  Find a Pro
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Connect with licensed contractors near you
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
