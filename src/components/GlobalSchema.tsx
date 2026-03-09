export function GlobalSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HomeSnapFix",
    description: "AI-powered home repair diagnosis and DIY guidance platform for homeowners",
    url: "https://homesnapfix.lovable.app",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://homesnapfix.lovable.app/diy?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HomeSnapFix",
    description: "HomeSnapFix provides AI-assisted home repair assessments to help homeowners identify issues, understand severity, and decide whether to DIY or hire a professional. We offer educational guidance only—not licensed inspections or contractor services.",
    url: "https://homesnapfix.lovable.app",
    logo: "https://homesnapfix.lovable.app/favicon.ico",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://homesnapfix.lovable.app/contact",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HomeSnapFix",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    description: "Upload a photo of a home issue and receive AI-powered repair guidance. Get severity estimates, DIY steps, and know when to call a professional.",
  };

  return (
    <>
      {[websiteSchema, organizationSchema, softwareSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
