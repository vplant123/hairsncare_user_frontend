import React from "react";
import "./ProductsLink.css";
import { Link } from "react-router-dom";

export default function ProductsLink() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Hair Care Products Collection",
            "description": "Premium hair care products designed for hair loss and scalp health, scientifically tested with natural ingredients",
            "brand": {
              "@type": "Brand",
              "name": "HairsNCare"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR"
            }
          })
        }}
      />
      
      <section className="products-link-section" itemScope itemType="https://schema.org/Product">
        <div className="products-link-container">
          <div className="products-link-content">
            <h2 className="products-link-title" itemProp="name">
              Ready to Transform Your Hair?
            </h2>
            <p className="products-link-description" itemProp="description">
              Discover our curated collection of premium hair care products
              designed specifically for your hair type and concerns. Get personalized recommendations based on your hair test results.
            </p>
            {/* Internal Link for Better SEO */}
            <Link
              to="/best-hair-care-products-hair-loss-scalp-health"
              className="products-link-button"
              aria-label="Shop premium hair care products for hair loss and scalp health"
              title="Explore our scientifically tested hair care products"
            >
              <span className="button-text">Shop HairsNCares Products</span>
              <svg
                className="button-arrow"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="products-link-features">
            <div className="feature-item">
              <div className="feature-icon" role="img" aria-label="Natural ingredients">🌿</div>
              <span>Natural Ingredients</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon" role="img" aria-label="Scientifically tested">🔬</div>
              <span>Scientifically Tested</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon" role="img" aria-label="Proven results">✨</div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
