import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ title, description, keywords, ogImage, canonicalUrl }) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = title || 'HairsNcares';

    // Update meta description
    updateOrCreateMetaTag('name', 'description', description);
    
    // Update meta keywords
    updateOrCreateMetaTag('name', 'keywords', keywords);
    
    // Update Open Graph tags
    updateOrCreateMetaTag('property', 'og:title', title);
    updateOrCreateMetaTag('property', 'og:description', description);
    updateOrCreateMetaTag('property', 'og:url', window.location.href);
    updateOrCreateMetaTag('property', 'og:type', 'website');
    
    if (ogImage) {
      updateOrCreateMetaTag('property', 'og:image', ogImage);
    }
    
    // Update Twitter Card tags
    updateOrCreateMetaTag('name', 'twitter:title', title);
    updateOrCreateMetaTag('name', 'twitter:description', description);
    updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
    
    if (ogImage) {
      updateOrCreateMetaTag('name', 'twitter:image', ogImage);
    }
    
    // Update or create canonical URL
    updateOrCreateLinkTag('canonical', canonicalUrl || window.location.href);
    
    // Add structured data for better SEO
    updateStructuredData(title, description);
    
  }, [title, description, keywords, ogImage, canonicalUrl, location]);

  const updateOrCreateMetaTag = (attribute, name, content) => {
    if (!content) return;
    
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  };

  const updateOrCreateLinkTag = (rel, href) => {
    if (!href) return;
    
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (link) {
      link.setAttribute('href', href);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    }
  };

  const updateStructuredData = (title, description) => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]#page-schema');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": window.location.href,
      "mainEntity": {
        "@type": "Organization",
        "name": "Hairs N Cares",
        "url": "https://www.hairsncares.com/",
        "logo": "https://www.hairsncares.com/assets/img/logo.png"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'page-schema';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything
};

export default SEOHead;