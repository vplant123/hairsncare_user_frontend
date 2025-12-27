import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useRouteSEO } from '../hooks/useRouteSEO';

const DEFAULT_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hairs N Cares",
  "url": "https://www.hairsncares.com/",
  "logo": "https://www.hairsncares.com/assets/img/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "telephone": "+919136028327",
    "areaServed": "IN",
    "availableLanguage": "English"
  }
};

const SEO = ({
  title,
  description,
  keywords,
  ogImage = '/assets/img/logo.png',
  canonicalUrl,
  structuredData = DEFAULT_STRUCTURED_DATA,
  useRouteData = true,
  robots = "index, follow"
}) => {

  const routeSEO = useRouteSEO();

  const currentUrl = canonicalUrl 
    || `https://www.hairsncares.com${routeSEO?.path || ''}`;

  const pageTitle = useRouteData ? (routeSEO?.title || title || "Hairs N Cares") : (title || "Hairs N Cares");
  const pageDescription = useRouteData ? (routeSEO?.description || description || "Hair care & treatment experts") : (description || "Hair care & treatment experts");
  const pageKeywords = useRouteData ? (routeSEO?.keywords || keywords || "") : (keywords || "");

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="HairsnCares" />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={currentUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="HairsnCares" />
      <meta property="og:image" content={`https://www.hairsncares.com${ogImage}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`https://www.hairsncares.com${ogImage}`} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
