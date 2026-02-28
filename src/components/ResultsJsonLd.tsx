interface ResultsJsonLdProps {
  issueTitle: string;
  summary: string;
  diySteps: { step: number; title: string; description: string }[];
  productLinks: { name: string; price?: string }[];
}

export function ResultsJsonLd({ issueTitle, summary, diySteps, productLinks }: ResultsJsonLdProps) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Diagnosis: ${issueTitle}`,
    description: summary,
    numberOfItems: diySteps.length + productLinks.length,
    itemListElement: [
      ...diySteps.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Step ${s.step}: ${s.title}`,
        description: s.description,
      })),
      ...productLinks.map((p, i) => ({
        "@type": "ListItem",
        position: diySteps.length + i + 1,
        name: p.name,
      })),
    ],
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

  const schemas = [itemList, faqPage];

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
