import React from "react";
import { Link } from "react-router-dom";
import "./LegalPagesLinks.css";

export default function LegalPagesLinks({ currentPage = "" }) {
  
  // Core internal links for legal pages
  const internalLinks = [
    {
      to: "/",
      text: "Hair Loss Treatment Homepage",
      icon: "🏠",
      description: "Return to our main hair loss treatment and diagnosis services"
    },
    {
      to: "/take-hair-test",
      text: "Free Hair Assessment",
      icon: "🔬",
      description: "Take our comprehensive online hair health assessment"
    },
    {
      to: "/best-hair-care-products-hair-loss-scalp-health",
      text: "Hair Care Products",
      icon: "🛍️",
      description: "Browse our premium hair care product collection"
    },
    {
      to: "/contact-hair-experts",
      text: "Contact Our Experts",
      icon: "📞",
      description: "Get in touch with our hair care specialists"
    },
    {
      to: "/about-us-quality-hair-loss-scalp-care",
      text: "About HairsNCares",
      icon: "ℹ️",
      description: "Learn about our hair care expertise and team"
    },
    {
      to: "/hair-care-blogs",
      text: "Hair Care Education",
      icon: "📖",
      description: "Expert tips and educational content about hair care"
    }
  ];

  // Legal cross-references (other legal pages)
  const legalCrossLinks = [
    {
      to: "/disclaimer",
      text: "Medical Disclaimer",
      icon: "📋",
      description: "Important medical and legal disclaimers"
    },
    {
      to: "/policy",
      text: "Privacy Policy",
      icon: "🔒",
      description: "How we protect and handle your personal data"
    },
    {
      to: "/terms-of-service",
      text: "Terms of Service",
      icon: "📜",
      description: "Terms and conditions for using our services"
    },
    {
      to: "/return-policy",
      text: "Return & Refund Policy",
      icon: "↩️",
      description: "Product return and refund guidelines"
    }
  ];

  // External authority links for legal credibility
  const externalLinks = [
    {
      href: "https://www.consumer.gov/",
      text: "Consumer Protection - Government",
      icon: "🏛️",
      description: "Official consumer protection information and rights",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.ftc.gov/tips-advice/business-center/privacy-and-security",
      text: "FTC Privacy Guidelines",
      icon: "🛡️",
      description: "Federal Trade Commission privacy and security guidelines",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.fda.gov/consumers/consumer-updates",
      text: "FDA Consumer Information",
      icon: "🏥",
      description: "FDA consumer health and safety information",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.aad.org/public/diseases/hair-loss",
      text: "Medical Hair Loss Information - AAD",
      icon: "👨‍⚕️",
      description: "American Academy of Dermatology hair loss resources",
      rel: "nofollow noopener"
    }
  ];

  // Filter out current page from legal cross-links
  const filteredLegalLinks = legalCrossLinks.filter(link => link.to !== currentPage);

  return (
    <section className="legal-pages-links" aria-label="Related legal information and services">
      <div className="legal-links-container">
        
        {/* Our Services Section */}
        <div className="services-links-section">
          <h3 className="section-title">
            <span className="title-icon">🔗</span>
            Explore Our Hair Care Services
          </h3>
          <div className="links-grid">
            {internalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="legal-link internal-link"
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

        {/* Legal Documents Cross-Reference */}
        {filteredLegalLinks.length > 0 && (
          <div className="legal-cross-links-section">
            <h3 className="section-title">
              <span className="title-icon">📋</span>
              Related Legal Information
            </h3>
            <div className="links-grid">
              {filteredLegalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="legal-link legal-cross-link"
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
        )}

        {/* External Authority Links */}
        <div className="external-links-section">
          <h3 className="section-title">
            <span className="title-icon">🌐</span>
            Official Resources & Guidelines
          </h3>
          <div className="links-grid">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="legal-link external-link"
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
      </div>

      {/* JSON-LD Structured Data for Legal Pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Legal Information - HairsNCares",
            "description": "Legal information, policies, and terms for HairsNCares hair care services",
            "provider": {
              "@type": "MedicalOrganization",
              "name": "HairsNCares",
              "description": "Professional hair care and treatment services"
            },
            "relatedLink": [
              ...internalLinks.map(link => ({
                "@type": "WebPage",
                "name": link.text,
                "description": link.description,
                "url": link.to
              })),
              ...filteredLegalLinks.map(link => ({
                "@type": "WebPage",
                "name": link.text,
                "description": link.description,
                "url": link.to
              }))
            ]
          })
        }}
      />
    </section>
  );
}