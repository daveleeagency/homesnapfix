import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

export default function TermsPage() {
  return (
    <Layout>
      <SEOHead
        title="Terms of Service - HomeSnapFix"
        description="Terms and conditions for using HomeSnapFix AI home diagnosis tool, including user responsibilities, content licensing, and liability limitations."
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-2xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>

          <div className="mt-8 space-y-6 text-muted-foreground">
            <div>
              <p className="leading-relaxed">
                By accessing or using HomeSnapFix ("the Service"), you agree to be bound by these Terms of Service. Please read them carefully before using the Service.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By using HomeSnapFix, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, please do not use the Service.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Description of Service</h2>
              <p className="leading-relaxed">
                HomeSnapFix provides AI-powered home maintenance guidance for educational purposes only. The Service analyzes photos of home issues and provides informational assessments. It is not a licensed home inspection, engineering assessment, or professional advice of any kind.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">User Responsibilities</h2>
              <p className="leading-relaxed">
                You agree to:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Use the Service responsibly and lawfully</li>
                <li>Not rely solely on AI-generated results for safety-critical decisions</li>
                <li>Consult licensed professionals for structural, electrical, gas, or safety concerns</li>
                <li>Provide accurate information when submitting forms</li>
                <li>Not upload content that is illegal, harmful, or violates third-party rights</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">User Content</h2>
              <p className="leading-relaxed">
                By uploading photos or other content, you grant HomeSnapFix a limited, non-exclusive license to process that content solely for the purpose of providing the Service. You retain ownership of your content. Photos are not stored permanently unless explicitly stated.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                The Service is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or that AI-generated results will be accurate or complete.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="leading-relaxed">
                HomeSnapFix and its creators are not liable for any direct, indirect, incidental, special, or consequential damages arising from the use of or inability to use the Service, including but not limited to property damage, personal injury, or financial loss resulting from actions taken based on information provided by the Service.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Third-Party Services</h2>
              <p className="leading-relaxed">
                HomeSnapFix may connect you with third-party contractors or service providers. We do not employ, endorse, or guarantee the work of any third party. Any agreement with a contractor is between you and that contractor.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Affiliate Links</h2>
              <p className="leading-relaxed">
                Some product recommendations may include affiliate links. Purchases made through these links may earn us a commission at no additional cost to you. We only recommend products we believe are genuinely useful.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Contact</h2>
              <p className="leading-relaxed">
                For questions about these terms, please use our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
