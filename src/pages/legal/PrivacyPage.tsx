import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

export default function PrivacyPage() {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy - HomeSnapFix"
        description="Learn how HomeSnapFix collects, uses, and protects your personal information including photos, contact details, and usage data."
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-2xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>

          <div className="mt-8 space-y-6 text-muted-foreground">
            <div>
              <p className="leading-relaxed">
                HomeSnapFix ("we," "our," or "us") respects your privacy. This policy explains how we collect, use, and protect the information you share with us when using our website and services.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you voluntarily provide, including:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Email addresses and ZIP codes submitted through forms</li>
                <li>Contact details when requesting professional matches</li>
                <li>Photos uploaded for AI diagnosis</li>
                <li>Usage data and analytics (anonymized)</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">How We Use Your Information</h2>
              <p className="leading-relaxed">
                Your information is used to:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Provide AI-generated diagnosis results</li>
                <li>Match you with local service professionals</li>
                <li>Deliver newsletter content you've subscribed to</li>
                <li>Improve our services and user experience</li>
              </ul>
              <p className="mt-2 text-sm font-medium">We do not sell your personal data to third parties.</p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Photo Data</h2>
              <p className="leading-relaxed">
                Photos uploaded for diagnosis are processed by our AI system to generate results. Photos are not stored permanently and are not used for advertising or sold to third parties.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable security measures to protect your data, including encrypted connections and secure data storage. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Your Rights</h2>
              <p className="leading-relaxed">
                You may request access to, correction of, or deletion of your personal data by contacting us through our contact page. We will respond to such requests within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Contact</h2>
              <p className="leading-relaxed">
                For privacy-related questions or concerns, please use our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
