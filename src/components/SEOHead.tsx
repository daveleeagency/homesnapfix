import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogType?: string;
  ogImage?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

export function SEOHead({
  title = "HomeSnapFix - AI Home Repair Diagnosis & DIY Guidance",
  description = "Upload a photo of a home issue and get instant AI-powered repair assessment. Know whether to DIY or hire a pro before calling a contractor.",
  canonical,
  noindex = false,
  ogType = "website",
  ogImage = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ccefdee4-385b-48e3-88ca-2e33e144de73/id-preview-82440c0d--a8bc2a9e-2ac6-4ff3-88e1-d00ab5aafb09.lovable.app-1772293108826.png",
  article,
}: SEOHeadProps) {
  const fullTitle = title.includes("HomeSnapFix") ? title : `${title} | HomeSnapFix`;
  const currentUrl = canonical || window.location.href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="HomeSnapFix" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article meta */}
      {article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
        </>
      )}
    </Helmet>
  );
}
