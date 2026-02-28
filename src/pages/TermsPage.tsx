import { Layout } from "@/components/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: February 2026</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-8">Acceptance of Terms</h2>
          <p className="text-muted-foreground">By using HomeSnapFix, you agree to these terms. If you do not agree, please do not use the service.</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-6">Service Description</h2>
          <p className="text-muted-foreground">HomeSnapFix provides AI-powered home maintenance guidance, DIY repair content, and professional matching services. Our content is educational and informational only.</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-6">Disclaimer</h2>
          <p className="text-muted-foreground">HomeSnapFix is not a substitute for professional engineering, structural, electrical, or safety advice. Always consult a licensed professional for serious concerns including structural damage, gas leaks, or electrical hazards.</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-6">Affiliate Links</h2>
          <p className="text-muted-foreground">Some links on our site are affiliate links. We may earn a commission at no extra cost to you. This does not influence our recommendations.</p>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-6">Limitation of Liability</h2>
          <p className="text-muted-foreground">HomeSnapFix is provided "as is" without warranties. We are not liable for damages resulting from the use of our platform or following our guidance.</p>
        </div>
      </section>
    </Layout>
  );
}
