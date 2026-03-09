import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, Search, Camera, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <SEOHead
        title="Page Not Found - HomeSnapFix"
        description="The page you're looking for doesn't exist. Return to HomeSnapFix to diagnose home issues or browse repair guides."
        noindex={true}
      />
      <section className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="container max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-muted">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="mt-6 font-serif text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="mt-3 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/diagnose">
                <Camera className="mr-2 h-4 w-4" /> Start Diagnosis
              </Link>
            </Button>
          </div>
          <div className="mt-8 rounded-lg border bg-muted/30 p-4">
            <p className="text-sm font-medium text-foreground">Looking for something specific?</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
              <Link to="/diy" className="text-primary hover:underline">Repair Guides</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/pros" className="text-primary hover:underline">Find a Pro</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/about" className="text-primary hover:underline">About</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/contact" className="text-primary hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
