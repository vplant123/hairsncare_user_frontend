import React from "react";
import { Link } from "react-router-dom";
import "./SEOLinkHub.css";

export default function SEOLinkHub({
  currentPage = "",
  pageType = "general",
  customInternalLinks = [],
  customExternalLinks = [],
  showExternalLinks = true,
}) {
  // Strategic internal links based on your sitemap
  const coreInternalLinks = [
    {
      to: "/",
      text: "Hair Loss Treatment & Diagnosis",
      icon: "🏠",
      description:
        "Personalized hair loss treatment plans with expert diagnosis",
    },
    {
      to: "/take-hair-test",
      text: "Free Hair Loss Test Online",
      icon: "🔬",
      description: "Take a quick hair loss test to know your hair condition",
    },
    {
      to: "/best-hair-care-products-hair-loss-scalp-health",
      text: "Best Hair Care Products",
      icon: "🛍️",
      description: "Top hair care products for hair loss and scalp health",
    },
    {
      to: "/hair-loss-treatment-experts-dermatologists",
      text: "Expert Dermatologists",
      icon: "👨‍⚕️",
      description: "Find the best dermatologists in India for hair care",
    },
    {
      to: "/contact-hair-experts",
      text: "Contact Hair Experts",
      icon: "📞",
      description: "Contact our experts for personalized hair solutions",
    },
    {
      to: "/hair-care-blogs",
      text: "Hair Care Expert Tips",
      icon: "📖",
      description: "Expert hair tips and hair care solutions blog",
    },
  ];

  // Page-specific internal links
  const pageSpecificLinks = {
    treatment: [
      {
        to: "/effective-hair-loss-treatment-men",
        text: "Hair Loss Treatment for Men",
        icon: "👨",
        description: "Best hair loss solutions for men with advanced care",
      },
      {
        to: "/hair-loss-women-causes-treatments-remedies",
        text: "Women's Hair Loss Treatment",
        icon: "👩",
        description: "Hair loss treatments for women with expert diagnosis",
      },
      {
        to: "/hair-transplants-fue-dhi-mhi-natural-restoration",
        text: "Hair Transplant Methods",
        icon: "🔄",
        description:
          "Advanced hair transplant techniques for natural restoration",
      },
      {
        to: "/advanced-hair-loss-solutions-prp-smp-cloning-systems",
        text: "Advanced Hair Solutions",
        icon: "⚡",
        description: "PRP treatment and advanced hair restoration techniques",
      },
    ],
    info: [
      {
        to: "/about-us-quality-hair-loss-scalp-care",
        text: "About HairsNCares",
        icon: "ℹ️",
        description: "Expert hair loss solutions and personalized treatments",
      },
      {
        to: "/our-expertise",
        text: "Our Hair Care Expertise",
        icon: "🎯",
        description: "Professional hair care expertise and solutions",
      },
      {
        to: "/dr-amit-agarkar-hair-restoration-expert",
        text: "Dr. Amit Agarkar",
        icon: "👨‍⚕️",
        description: "Leading hair transplant and restoration expert",
      },
    ],
    legal: [
      {
        to: "/disclaimer",
        text: "Legal Disclaimer",
        icon: "📋",
        description: "Legal and usage guidelines for our services",
      },
      {
        to: "/policy",
        text: "Privacy Policy",
        icon: "🔒",
        description: "Data protection and privacy policy",
      },
      {
        to: "/terms-of-service",
        text: "Terms of Service",
        icon: "📜",
        description: "Terms and conditions for our services",
      },
      {
        to: "/return-policy",
        text: "Return Policy",
        icon: "↩️",
        description: "Return and refund policy for products",
      },
    ],
    contact: [
      {
        to: "/hair-loss-treatment-experts-dermatologists",
        text: "Our Expert Dermatologists",
        icon: "👨‍⚕️",
        description: "Meet our expert dermatologists and hair specialists",
      },
      {
        to: "/our-expertise",
        text: "Our Hair Care Expertise",
        icon: "🎯",
        description: "Professional hair care expertise and solutions",
      },
      {
        to: "/effective-hair-loss-treatment-men",
        text: "Men's Hair Treatment",
        icon: "👨",
        description: "Specialized hair loss treatments for men",
      },
      {
        to: "/hair-loss-women-causes-treatments-remedies",
        text: "Women's Hair Treatment",
        icon: "👩",
        description: "Expert hair loss solutions for women",
      },
    ],
    specialists: [
      {
        to: "/dr-amit-agarkar-hair-restoration-expert",
        text: "Dr. Amit Agarkar",
        icon: "👨‍⚕️",
        description: "Leading hair transplant and restoration expert",
      },
      {
        to: "/our-expertise",
        text: "Our Medical Expertise",
        icon: "🎯",
        description: "Comprehensive hair care medical expertise",
      },
      {
        to: "/hair-transplants-fue-dhi-mhi-natural-restoration",
        text: "Hair Transplant Services",
        icon: "🔄",
        description: "Advanced hair transplant techniques and methods",
      },
      {
        to: "/advanced-hair-loss-solutions-prp-smp-cloning-systems",
        text: "Advanced Treatments",
        icon: "⚡",
        description: "PRP and advanced hair restoration solutions",
      },
    ],
    products: [
      {
        to: "/effective-hair-loss-treatment-men",
        text: "Men's Hair Treatments",
        icon: "👨",
        description: "Specialized hair loss treatments for men",
      },
      {
        to: "/hair-loss-women-causes-treatments-remedies",
        text: "Women's Hair Treatments",
        icon: "👩",
        description: "Expert hair loss solutions for women",
      },
      {
        to: "/hair-transplants-fue-dhi-mhi-natural-restoration",
        text: "Hair Transplant Options",
        icon: "🔄",
        description: "Advanced hair transplant methods and techniques",
      },
      {
        to: "/hair-loss-treatment-experts-dermatologists",
        text: "Consult Hair Experts",
        icon: "👨‍⚕️",
        description: "Expert dermatologists for personalized treatment",
      },
    ],
    home: [
      {
        to: "/effective-hair-loss-treatment-men",
        text: "Men's Hair Loss Solutions",
        icon: "👨",
        description: "Best hair loss treatments for men with advanced care",
      },
      {
        to: "/hair-loss-women-causes-treatments-remedies",
        text: "Women's Hair Care",
        icon: "👩",
        description: "Expert hair loss treatments for women",
      },
      {
        to: "/hair-transplants-fue-dhi-mhi-natural-restoration",
        text: "Hair Transplant Services",
        icon: "🔄",
        description:
          "Advanced hair transplant techniques for natural restoration",
      },
      {
        to: "/hair-care-blogs",
        text: "Hair Care Tips & Guides",
        icon: "📖",
        description: "Expert hair care tips and comprehensive guides",
      },
    ],
    expertise: [
      {
        to: "/hair-loss-treatment-experts-dermatologists",
        text: "Our Expert Team",
        icon: "👨‍⚕️",
        description: "Meet our expert dermatologists and specialists",
      },
      {
        to: "/dr-amit-agarkar-hair-restoration-expert",
        text: "Dr. Amit Agarkar",
        icon: "🎯",
        description: "Leading hair transplant and restoration expert",
      },
      {
        to: "/hair-transplants-fue-dhi-mhi-natural-restoration",
        text: "Hair Transplant Expertise",
        icon: "🔄",
        description: "Advanced transplant techniques and methods",
      },
      {
        to: "/advanced-hair-loss-solutions-prp-smp-cloning-systems",
        text: "Advanced Solutions",
        icon: "⚡",
        description: "Cutting-edge PRP and hair restoration technologies",
      },
    ],
    "women-treatment": [
      {
        to: "/effective-hair-loss-treatment-men",
        text: "Men's Hair Treatments",
        icon: "👨",
        description: "Compare with men's hair loss treatment options",
      },
      {
        to: "/hair-transplants-fue-dhi-mhi-natural-restoration",
        text: "Hair Transplant for Women",
        icon: "🔄",
        description: "Advanced hair transplant options for women",
      },
      {
        to: "/hair-loss-treatment-experts-dermatologists",
        text: "Women's Hair Specialists",
        icon: "👩‍⚕️",
        description: "Expert dermatologists specializing in women's hair care",
      },
      {
        to: "/advanced-hair-loss-solutions-prp-smp-cloning-systems",
        text: "Advanced Women's Solutions",
        icon: "⚡",
        description: "PRP and advanced treatments for women's hair loss",
      },
    ],
    "men-treatment": [
      {
        to: "/hair-loss-women-causes-treatments-remedies",
        text: "Women's Hair Treatments",
        icon: "👩",
        description: "Compare with women's hair loss treatment options",
      },
      {
        to: "/hair-transplants-fue-dhi-mhi-natural-restoration",
        text: "Hair Transplant for Men",
        icon: "🔄",
        description: "Advanced hair transplant techniques for men",
      },
      {
        to: "/hair-loss-treatment-experts-dermatologists",
        text: "Men's Hair Specialists",
        icon: "👨‍⚕️",
        description: "Expert dermatologists specializing in men's hair care",
      },
      {
        to: "/advanced-hair-loss-solutions-prp-smp-cloning-systems",
        text: "Advanced Men's Solutions",
        icon: "⚡",
        description: "PRP and advanced treatments for male pattern baldness",
      },
    ],
    "hair-transplant": [
      {
        to: "/effective-hair-loss-treatment-men",
        text: "Men's Hair Loss Treatments",
        icon: "👨",
        description: "Non-surgical hair loss treatments for men",
      },
      {
        to: "/hair-loss-women-causes-treatments-remedies",
        text: "Women's Hair Loss Treatments",
        icon: "👩",
        description: "Non-surgical hair loss treatments for women",
      },
      {
        to: "/advanced-hair-loss-solutions-prp-smp-cloning-systems",
        text: "Advanced Hair Solutions",
        icon: "⚡",
        description: "PRP and advanced non-surgical hair restoration",
      },
      {
        to: "/hair-loss-treatment-experts-dermatologists",
        text: "Hair Transplant Specialists",
        icon: "👨‍⚕️",
        description: "Expert surgeons for hair transplant procedures",
      },
    ],
    "advanced-solutions": [
      {
        to: "/hair-transplants-fue-dhi-mhi-natural-restoration",
        text: "Hair Transplant Options",
        icon: "🔄",
        description: "Surgical hair restoration techniques",
      },
      {
        to: "/effective-hair-loss-treatment-men",
        text: "Men's Treatment Options",
        icon: "👨",
        description: "Comprehensive hair loss treatments for men",
      },
      {
        to: "/hair-loss-women-causes-treatments-remedies",
        text: "Women's Treatment Options",
        icon: "👩",
        description: "Comprehensive hair loss treatments for women",
      },
      {
        to: "/hair-loss-treatment-experts-dermatologists",
        text: "Advanced Treatment Specialists",
        icon: "👨‍⚕️",
        description: "Expert dermatologists for advanced procedures",
      },
    ],
    blogs: [
      {
        to: "/take-hair-test",
        text: "Free Hair Loss Test",
        icon: "🔬",
        description: "Take our comprehensive hair loss assessment",
      },
      {
        to: "/effective-hair-loss-treatment-men",
        text: "Men's Hair Solutions",
        icon: "👨",
        description: "Evidence-based treatments for men's hair loss",
      },
      {
        to: "/hair-loss-women-causes-treatments-remedies",
        text: "Women's Hair Solutions",
        icon: "👩",
        description: "Expert treatments for women's hair concerns",
      },
      {
        to: "/hair-loss-treatment-experts-dermatologists",
        text: "Consult Hair Experts",
        icon: "👨‍⚕️",
        description: "Get professional advice from hair specialists",
      },
    ],
  };

  
  const authorityExternalLinks = [
    {
      href: "https://blogs.hairsncares.com/hair-care/how-to-treat-damaged-hair/",
      text: "How to Treat Damaged Hair",
      icon: "💇‍♀️",
      description:
        "Practical tips and expert advice on repairing damaged hair.",
      rel: "nofollow noopener",
    },
    {
      href: "https://blogs.hairsncares.com/hair-care/the-benefits-of-oiling-hair-daily/",
      text: "Benefits of Oiling Hair Daily",
      icon: "🧴",
      description:
        "Learn how regular hair oiling boosts hair health and shine.",
      rel: "nofollow noopener",
    },
  ];

  // Get relevant links based on page type
  const getRelevantInternalLinks = () => {
    let links = [...coreInternalLinks];

    if (pageSpecificLinks[pageType]) {
      links = [...links, ...pageSpecificLinks[pageType]];
    }

    // Add custom links
    links = [...links, ...customInternalLinks];

    // Filter out current page and limit to 8 links
    return links.filter((link) => link.to !== currentPage).slice(0, 8);
  };

  const getRelevantExternalLinks = () => {
    return [...authorityExternalLinks, ...customExternalLinks].slice(0, 4);
  };

  return (
    <section className="seo-link-hub" aria-label="Related links and resources">
      <div className="seo-link-container">
        {/* Internal Links Section */}
        <div className="internal-links-section">
          <h3 className="section-title">
            <span className="title-icon">🔗</span>
            Explore More Hair Care Solutions
          </h3>
          <div className="links-grid">
            {getRelevantInternalLinks().map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="seo-link internal-link"
                title={link.description}
                aria-label={link.description}
              >
                <div className="link-icon">{link.icon}</div>
                <div className="link-content">
                  <span className="link-text">{link.text}</span>
                  <span className="link-desc">{link.description}</span>
                </div>
                <div className="link-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>

        {showExternalLinks && (
          <div className="external-links-section">
            <h3 className="section-title">
              <span className="title-icon">🌐</span>
              Trusted Hair Care Resources
            </h3>
            <div className="links-grid">
              {getRelevantExternalLinks().map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="seo-link external-link"
                  title={link.description}
                  aria-label={link.description}
                  target="_blank"
                  rel={link.rel}
                >
                  <div className="link-icon">{link.icon}</div>
                  <div className="link-content">
                    <span className="link-text">{link.text}</span>
                    <span className="link-desc">{link.description}</span>
                  </div>
                  <div className="link-arrow">↗</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hair Care Resources and Links",
            description:
              "Comprehensive hair care resources, expert information, and trusted links for hair loss treatment",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: getRelevantInternalLinks().map(
                (link, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: link.text,
                  description: link.description,
                  url: link.to,
                })
              ),
            },
          }),
        }}
      />
    </section>
  );
}
