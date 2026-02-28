import { issueClusters } from "@/data/issueClusters";

export function DiagnoseJsonLd() {
  const allIssues = issueClusters.flatMap((c) => c.issues);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Common Home Issues",
    numberOfItems: allIssues.length,
    itemListElement: allIssues.map((issue, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: issue.title,
      description: issue.snippet,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is HomeSnapFix a substitute for a licensed home inspector?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. HomeSnapFix provides educational guidance only. Always consult a licensed professional for structural, electrical, or safety concerns.",
        },
      },
      {
        "@type": "Question",
        name: "Should I attempt electrical repairs myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Electrical work can be dangerous. If you suspect faulty wiring, a burning smell, or a panel issue, contact a licensed electrician immediately.",
        },
      },
      {
        "@type": "Question",
        name: "When should I call emergency services for a home issue?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call 911 or your local emergency number if you smell gas, see active fire or sparking, experience flooding near electrical panels, or suspect structural collapse.",
        },
      },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HomeSnapFix",
    description: "AI-powered home diagnosis and DIY guidance platform.",
    url: "https://homesnapfix.com",
  };

  const schemas = [itemList, faqPage, localBusiness];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
