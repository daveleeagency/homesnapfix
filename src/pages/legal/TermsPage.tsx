import { Layout } from "@/components/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container max-w-2xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Terms of Service</h1>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              By using HomeSnapFix, you agree to the following terms. Please read them carefully.
            </p>
            <h2 className="pt-4 font-serif text-xl font-semibold text-foreground">Use of Service</h2>
            <p>
              HomeSnapFix provides AI-powered home maintenance guidance for educational purposes.
              You agree to use the service responsibly and not rely on it for safety-critical decisions
              without professional verification.
            </p>
            <h2 className="pt-4 font-serif text-xl font-semibold text-foreground">User Content</h2>
            <p>
              By uploading photos, you grant HomeSnapFix a limited license to process them for
              diagnosis purposes. Photos are not stored permanently unless explicitly stated.
            </p>
            <h2 className="pt-4 font-serif text-xl font-semibold text-foreground">Limitation of Liability</h2>
            <p>
              HomeSnapFix is not liable for any damages arising from the use of our platform,
              including but not limited to property damage, personal injury, or financial loss
              resulting from actions taken based on our guidance.
            </p>
            <h2 className="pt-4 font-serif text-xl font-semibold text-foreground">Affiliate Links</h2>
            <p>
              Some product recommendations include affiliate links. Purchases made through these
              links may earn us a commission at no additional cost to you.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
