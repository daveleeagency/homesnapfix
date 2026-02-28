import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { diyPosts } from "@/data/diyPosts";
import { Search, Clock, BarChart3, Camera } from "lucide-react";
import type { DIYCategory } from "@/types";

const categories: DIYCategory[] = ["Interior", "Exterior", "Plumbing", "Electrical", "HVAC", "Roofing", "Deck/Patio"];

export default function DIYHub() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<DIYCategory | "All">("All");

  const filtered = useMemo(() => {
    return diyPosts.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <h1 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            DIY Repair Guides
          </h1>
          <p className="mx-auto mt-2 max-w-lg text-center text-muted-foreground">
            Step-by-step guides for the most common home repairs. Know when to fix it yourself and when to call a pro.
          </p>

          {/* Search + Filters */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search guides..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("All")}
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Post Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link key={post.slug} to={`/diy/${post.slug}`}>
                <Card className="group h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <Badge variant="outline">{post.difficulty}</Badge>
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readingTime}</span>
                      <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" /> {post.diySteps.length} steps</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-muted-foreground">No guides found. Try a different search or category.</p>
          )}

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Can't find your issue?</p>
            <Button asChild className="mt-3">
              <Link to="/diagnose"><Camera className="mr-2 h-4 w-4" /> Try AI Photo Diagnosis</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
