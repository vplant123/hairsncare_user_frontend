// SEO Utility Functions
export const updateMetaTags = (title, description, keywords, image = null) => {
  // Update document title
  document.title = title || "HairsnCares";

  // Update meta description
  updateMetaTag("description", description);

  // Update meta keywords
  updateMetaTag("keywords", keywords);

  // Update Open Graph tags
  updateMetaTag("og:title", title);
  updateMetaTag("og:description", description);
  updateMetaTag("og:url", window.location.href);
  if (image) {
    updateMetaTag("og:image", image);
  }

  // Update Twitter Card tags
  updateMetaTag("twitter:title", title);
  updateMetaTag("twitter:description", description);
  if (image) {
    updateMetaTag("twitter:image", image);
  }
};

const updateMetaTag = (name, content) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  } else {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }
};

export const updateOpenGraphTag = (property, content) => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  } else {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }
};

export const updateTwitterTag = (name, content) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  } else {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }
};

// SEO-friendly URL generation
export const generateSEOFriendlyURL = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Canonical URL generation
export const generateCanonicalURL = (path) => {
  const baseURL = "https://www.hairsncares.com";
  return `${baseURL}${path}`;
};

// Structured data helpers
export const generateProductSchema = (product) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "HairsnCares",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HairsnCares",
    url: "https://www.hairsncares.com",
    logo: "https://www.hairsncares.com/assets/img/logo.png",
    description: "Expert hair loss treatment and scalp care solutions",
    sameAs: [
      "https://www.facebook.com/hairsncares",
      "https://www.instagram.com/hairsncares",
      "https://twitter.com/hairsncares",
    ],
  };
};

// export const generateLocalBusinessSchema = () => {
//   return {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "name": "HairsnCares",
//     "description": "Expert hair loss treatment and scalp care solutions",
//     "url": "https://www.hairsncares.com",
//     "telephone": "+91-XXXXXXXXXX",
//     "email": "info@hairsncares.com",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Your Street Address",
//       "addressLocality": "Your City",
//       "addressRegion": "Your State",
//       "postalCode": "Your PIN Code",
//       "addressCountry": "IN"
//     },
//     "geo": {
//       "@type": "GeoCoordinates",
//       "latitude": "YOUR_LATITUDE",
//       "longitude": "YOUR_LONGITUDE"
//     },
//     "openingHours": "Mo-Fr 09:00-18:00",
//     "priceRange": "₹₹",
//     "image": "https://www.hairsncares.com/assets/img/logo.png",
//     "sameAs": [
//       "https://www.facebook.com/hairsncares",
//       "https://www.instagram.com/hairsncares",
//       "https://twitter.com/hairsncares"
//     ]
//   };
// };
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HairsnCares",
    description: "Expert hair loss treatment and scalp care solutions",
    url: "https://www.hairsncares.com",
    telephone: "+91-9136028327",
    email: "hairsncares@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-102, New Link Rd, Opposite Infinity Mall",
      addressLocality: "Malad West",
      addressRegion: "Maharashtra",
      postalCode: "400064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.1763", // Approximate latitude for Malad West
      longitude: "72.8377", // Approximate longitude for Malad West
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "₹₹",
    image: "https://www.hairsncares.com/assets/img/logo.png",
    sameAs: [
      "https://www.facebook.com/hairsncares",
      "https://www.instagram.com/hairsncares",
      "https://twitter.com/hairsncares",
    ],
  };
};
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
