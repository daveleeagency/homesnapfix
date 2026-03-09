import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";

export default function DisclaimerPage() {
  return (
    <Layout>
      <SEOHead
        title="Disclaimer - HomeSnapFix"
        description="Important disclaimers about HomeSnapFix AI home diagnosis tool. Understand the limitations of AI-based home assessments and when to consult a licensed professional."
      />
      <section className="py-12 md:py-20">
        <div className="container max-w-2xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Disclaimer</h1>

          <div className="mt-8 space-y-6 text-muted-foreground">
            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Educational Purpose Only</h2>
              <p>
                HomeSnapFix is an educational tool designed to help homeowners better understand visible home issues. The information provided — including AI-generated assessments, severity estimates, DIY guidance, and repair suggestions — is for general informational and educational purposes only.
              </p>
              <p className="mt-2">
                It does not constitute professional engineering, structural, electrical, plumbing, HVAC, or safety advice of any kind.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">AI Limitations</h2>
              <p>
                Our AI analyzes photos using pattern recognition to estimate what an issue might be. These assessments are approximations — not definitive diagnoses. Accuracy depends on image quality, lighting, angle, and the nature of the issue.
              </p>
              <p className="mt-2">
                The AI cannot detect hidden damage behind walls, under floors, inside pipes, or in any area not visible in the uploaded photo. A "low severity" result does not guarantee an issue is minor, and a "high severity" result does not confirm a specific cause.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Not a Substitute for Professional Inspection</h2>
              <p>
                HomeSnapFix does not replace a licensed home inspector, structural engineer, electrician, plumber, HVAC technician, mold remediation specialist, or any other certified professional. Always verify AI-generated findings with a qualified professional before:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Undertaking repairs that could affect structural integrity</li>
                <li>Working with electrical systems or gas lines</li>
                <li>Addressing suspected mold contamination</li>
                <li>Making decisions that affect personal safety</li>
                <li>Filing insurance claims or making purchasing decisions</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Safety Warning</h2>
              <p>
                If you suspect structural damage, gas leaks, electrical hazards, mold contamination, or any condition that poses an immediate risk to health or safety — stop, leave the affected area, and contact emergency services or a licensed professional immediately. Do not rely on any app or website for safety-critical decisions.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Contractor Referrals</h2>
              <p>
                HomeSnapFix may help connect users with local contractors or service professionals. We do not employ, certify, endorse, or guarantee the work of any third-party contractor. Any agreement you enter into with a contractor is between you and that contractor. HomeSnapFix is not a party to such agreements and assumes no liability for the quality, safety, or outcome of any work performed.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Insurance Information</h2>
              <p>
                Any references to insurance coverage, deductibles, or claims processes are general educational information only. HomeSnapFix does not provide insurance advice, does not act as an insurance agent or adjuster, and does not guarantee that any issue will or will not be covered by your policy. Contact your insurance provider directly for coverage questions.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p>
                HomeSnapFix, its creators, and its affiliates assume no liability for damages, injuries, losses, or costs resulting from actions taken — or not taken — based on information provided by this platform. Use of this tool is at your own risk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
