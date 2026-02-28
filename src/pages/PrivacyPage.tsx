import { Layout } from "@/components/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: February 2026</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-8">Information We Collect</h2>
          <p className="text-muted-foreground">We collect information you provide directly, such as your email address, ZIP code, and form submissions. We also collect usage data through standard analytics.</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-6">How We Use Your Information</h2>
          <p className="text-muted-foreground">We use your information to provide our services, send newsletter updates you've opted into, and match you with local professionals when requested.</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-6">Data Sharing</h2>
          <p className="text-muted-foreground">We do not sell your personal information. We may share data with vetted service professionals only when you explicitly request a pro match.</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-6">Photos</h2>
          <p className="text-muted-foreground">Photos uploaded for diagnosis are processed for analysis purposes only and are not stored permanently or shared with third parties.</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-6">Contact</h2>
          <p className="text-muted-foreground">For privacy questions, contact us through our contact page.</p>
        </div>
      </section>
    </Layout>
  );
}
