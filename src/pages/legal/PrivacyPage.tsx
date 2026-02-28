import { Layout } from "@/components/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container max-w-2xl">
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              HomeSnapFix respects your privacy. This policy explains how we collect, use, and protect
              the information you share with us.
            </p>
            <h2 className="pt-4 font-serif text-xl font-semibold text-foreground">Information We Collect</h2>
            <p>
              We collect information you voluntarily provide, including email addresses, ZIP codes,
              contact details submitted through our forms, and photos uploaded for diagnosis.
            </p>
            <h2 className="pt-4 font-serif text-xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>
              Your information is used to provide diagnosis results, match you with local professionals,
              deliver newsletter content, and improve our services. We do not sell your personal data.
            </p>
            <h2 className="pt-4 font-serif text-xl font-semibold text-foreground">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your data. However, no method of
              transmission over the internet is 100% secure.
            </p>
            <h2 className="pt-4 font-serif text-xl font-semibold text-foreground">Contact</h2>
            <p>
              For privacy-related questions, please use our contact page.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
