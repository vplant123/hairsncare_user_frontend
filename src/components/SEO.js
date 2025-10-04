import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useRouteSEO } from '../hooks/useRouteSEO';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/assets/img/logo.png',
  canonicalUrl,
  structuredData,
  useRouteData = true 
}) => {
  const routeSEO = useRouteSEO();
  const currentUrl = canonicalUrl || `https://www.hairsncares.com${routeSEO.path}`;
  
  // Use route data by default, but allow override with props
  const pageTitle = useRouteData ? (routeSEO.title || title) : title;
  const pageDescription = useRouteData ? (routeSEO.description || description) : description;
  const pageKeywords = useRouteData ? (routeSEO.keywords || keywords) : keywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="HairsnCares" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="HairsnCares" />
      <meta property="og:image" content={`https://www.hairsncares.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`https://www.hairsncares.com${ogImage}`} />
      <meta name="twitter:site" content="@hairsncares" />

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;