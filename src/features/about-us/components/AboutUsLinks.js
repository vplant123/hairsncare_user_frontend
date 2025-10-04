import React from "react";
import { Link } from "react-router-dom";
import "./AboutUsLinks.css";

export default function AboutUsLinks() {
  // Strategic internal links for About Us page
  const internalLinks = [
    {
      to: "/",
      text: "Hair Loss Treatment Solutions",
      icon: "🏠",
      description: "Comprehensive hair loss treatment and diagnosis services"
    },
    {
      to: "/take-hair-test",
      text: "Free Hair Analysis Test",
      icon: "🔬",
      description: "Take our detailed hair health assessment for personalized recommendations"
    },
    {
      to: "/hair-loss-treatment-experts-dermatologists",
      text: "Meet Our Expert Dermatologists",
      icon: "👨‍⚕️",
      description: "Certified dermatologists specializing in hair care solutions"
    },
    {
      to: "/our-expertise",
      text: "Our Hair Care Expertise",
      icon: "🎯",
      description: "Learn about our specialized hair care services and expertise"
    },
    {
      to: "/dr-amit-agarkar-hair-restoration-expert",
      text: "Dr. Amit Agarkar Profile",
      icon: "👨‍⚕️",
      description: "Meet our leading hair restoration and transplant expert"
    },
    {
      to: "/contact-hair-experts",
      text: "Contact Our Hair Experts",
      icon: "📞",
      description: "Get in touch for personalized hair care consultation"
    },
    {
      to: "/best-hair-care-products-hair-loss-scalp-health",
      text: "Premium Hair Care Products",
      icon: "🛍️",
      description: "Explore our scientifically tested hair care product range"
    },
    {
      to: "/hair-care-blogs",
      text: "Hair Care Tips & Advice",
      icon: "📖",
      description: "Expert hair care tips and educational content"
    }
  ];

  // High-authority external links for E-A-T (Expertise, Authoritativeness, Trustworthiness)
  const externalLinks = [
    {
      href: "https://www.aad.org/public/diseases/hair-loss",
      text: "Hair Loss Information - American Academy of Dermatology",
      icon: "🏥",
      description: "Authoritative medical information about hair loss causes and treatments",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681114/",
      text: "Hair Loss Research - NCBI",
      icon: "🔬",
      description: "Scientific research and studies on hair loss treatments",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.mayoclinic.org/diseases-conditions/hair-loss/symptoms-causes/syc-20372926",
      text: "Hair Loss Guide - Mayo Clinic",
      icon: "📚",
      description: "Comprehensive medical guide on hair loss symptoms and causes",
      rel: "nofollow noopener"
    },
    {
      href: "https://www.ishrs.org/",
      text: "International Society of Hair Restoration Surgery",
      icon: "🌍",
      description: "Global standards and information for hair restoration procedures",
      rel: "nofollow noopener"
    }
  ];

  return (
    <section className="about-us-links" aria-label="Related hair care resources">
      <div className="about-us-links-container">
        
        {/* Internal Links Section */}
        <div className="internal-links-section">
          <h3 className="section-title">
            <span className="title-icon">🔗</span>
            Explore Our Hair Care Services
          </h3>
          <div className="links-grid">
            {internalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="about-link internal-link"
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

        {/* External Links Section */}
        <div className="external-links-section">
          <h3 className="section-title">
            <span className="title-icon">🌐</span>
            Trusted Medical Resources
          </h3>
          <div className="links-grid">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="about-link external-link"
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

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About HairsNCares - Hair Loss Treatment Experts",
            "description": "Learn about HairsNCares, leading providers of personalized hair loss treatments and expert hair care solutions",
            "mainEntity": {
              "@type": "MedicalOrganization",
              "name": "HairsNCares",
              "description": "Expert hair loss treatment and hair care solutions with personalized approach",
              "medicalSpecialty": "Dermatology and Hair Restoration",
              "hasCredential": "Certified Hair Care Specialists"
            },
            "relatedLink": internalLinks.map(link => ({
              "@type": "WebPage",
              "name": link.text,
              "description": link.description,
              "url": link.to
            }))
          })
        }}
      />
    </section>
  );
}