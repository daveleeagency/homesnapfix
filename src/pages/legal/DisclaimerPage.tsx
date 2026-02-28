import { Layout } from "@/components/Layout";

export default function DisclaimerPage() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container max-w-2xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Disclaimer</h1>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              The information provided by HomeSnapFix is for educational and informational purposes only.
              It does not constitute professional engineering, structural, electrical, plumbing, or safety advice.
            </p>
            <p>
              AI-generated diagnoses are approximations based on image analysis and should not be treated as
              definitive assessments. Always verify findings with a licensed professional before undertaking
              any repairs that could affect structural integrity, electrical systems, or personal safety.
            </p>
            <p>
              If you suspect structural damage, gas leaks, mold contamination, or electrical hazards,
              contact a licensed professional immediately. Do not rely solely on this tool for
              safety-critical decisions.
            </p>
            <p>
              HomeSnapFix assumes no liability for damages resulting from actions taken based on
              information provided by this platform.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
