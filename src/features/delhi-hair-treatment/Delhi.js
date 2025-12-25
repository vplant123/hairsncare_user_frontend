import React, { useRef, useState } from "react";
import "./Delhi.css";
import { useNavigate } from "react-router-dom";
import SEOLinkHub from '../../components/SEOLinkHub';

export default function Delhi({ city = "Delhi" }) {
  const navigate = useNavigate();
  const featuresRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleTakeHairTest = () => {
    scrollToTop();
    navigate("/take-hair-test");
  };

  const treatmentFeatures = [
    {
      title: "Personalized Hair Loss Diagnosis",
      description: "There are no two hair loss issues identical. The treatment starts by providing a thorough analysis of hair loss to identify the root cause, whether it's due to stress, genetics, hormone imbalance, pollution, or lifestyle.",
      image: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423548/hair-assessment/gctpdtkibo3nen5zcnhm.png",
      details: [
        "Stress-related hair loss analysis",
        "Genetic factors evaluation",
        "Hormone imbalance assessment",
        "Pollution impact study",
        "Lifestyle factors review",
        "Complete root cause identification"
      ]
    },
    {
      title: "Tried & Tested Allopathy Medicines",
      description: "Our main USP is easy and effective allopathic medicine that has been scientifically tested and proven to be effective. Effective and quick hair loss solutions recommended by doctors' procedures. We're focused on outcomes, not experiments.",
      image: "/Doctor-Approved Allopathy Treatments.png",
      details: [
        "Scientifically tested solutions",
        "Doctor-recommended procedures",
        "Proven effectiveness",
        "Quick and noticeable outcomes",
        "Results-focused approach",
        "No experimental treatments"
      ]
    },
    {
      title: "Customized Hair Care Solutions",
      description: "Based on the results of your examination, we design custom hair care products which help hair growth as well as strengthen roots and enhance the condition of your scalp.",
      image: "/Tailored Plans for Bangalore Conditions.png",
      details: [
        "Custom hair care products",
        "Hair growth promotion",
        "Root strengthening",
        "Scalp condition enhancement",
        "Personalized treatment plans",
        "Diagnosis-based solutions"
      ]
    },
    {
      title: "Long-Term Solutions For Managing Hair Loss",
      description: "We do not only prevent hair loss, but we also provide the needed help to manage your scalp over the long term through continued support from our trained staff and ongoing treatment optimisation.",
      image: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423530/hair-assessment/zl161vfmpve9bnjc3eqs.png",
      details: [
        "Hair loss prevention",
        "Long-term scalp management",
        "Continued support from trained staff",
        "Ongoing treatment optimisation",
        "Sustained results maintenance",
        "Professional guidance throughout"
      ]
    }
  ];

  const services = [
    {
      title: "Hair loss treatment",
      description: "Specialised Treatment For Reducing Hair Loss, Increasing The Density (Amount of Hair) On Your Scalp.",
      features: [
        "Specialised hair loss reduction",
        "Scalp density improvement",
        "Targeted hair fall control",
        "Visible density increase"
      ]
    },
    {
      title: "Hair Growth Solutions",
      description: "Innovative hair growth treatments which stimulate hair follicles to stimulate healthy, denser hair growth.",
      features: [
        "Hair follicle stimulation",
        "Healthy hair growth promotion",
        "Denser hair development",
        "Innovative treatment methods"
      ]
    },
    {
      title: "Hair Loss Diagnosis",
      description: "An in-depth analysis of hair and scalp to pinpoint the reason for hair loss and develop the best treatment.",
      features: [
        "In-depth hair analysis",
        "Scalp condition evaluation",
        "Root cause identification",
        "Best treatment development"
      ]
    },
    {
      title: "Hair Loss Management",
      description: "There are regular care schedules to maintain the results and prevent future hair losses.",
      features: [
        "Regular care schedules",
        "Results maintenance",
        "Future hair loss prevention",
        "Ongoing monitoring support"
      ]
    },
    {
      title: "Personalized Hair Care Solutions",
      description: "Custom-designed routines according to your hair type, scalp condition, environment exposure, and lifestyle in Delhi.",
      features: [
        "Hair type-specific routines",
        "Scalp condition adaptation",
        "Environment exposure consideration",
        "Delhi lifestyle customization"
      ]
    }
  ];

  const hairConditions = [
    "Loss of hair that is too severe",
    "Hair that is thin",
    "Pattern hair loss",
    "Stress-related hair loss",
    "Hair loss problems due to pollution",
    "Slow or reduced growth of hair",
    "Beginning stages of hair loss",
    "Long-term loss of hair"
  ];

  const faqs = [
    {
      question: `Do you have a clinic in ${city}?`,
      answer: `No. We provide only online treatment for ${city} residents.`
    },
    {
      question: "Do I need to visit anywhere?",
      answer: "No. Everything is online."
    },
    {
      question: "Are the medicines safe?",
      answer: "Yes. We use clinically tested allopathy medicines."
    },
    {
      question: "When will I see results?",
      answer: "Most users see improvement in 4–6 weeks."
    },
    {
      question: "Will you deliver medicines?",
      answer: `Yes. We deliver to all locations in ${city}.`
    }
  ];

  return (
    <>
      <div className="delhi-treatment">
        <div className="delhi-container">
          {/* Hero Section */}
          <div className="delhi-hero">
            <div className="hero-content">
              <h1 className="hero-title">
                Online Hair Loss Treatment in {city}
              </h1>
              <h2 className="hero-subtitle">
                Personalized Hair Care Solutions
              </h2>
              <p className="hero-description">
                <strong>Effective & Personalized Hair Loss Treatment in {city}</strong>
              </p>
              <p className="hero-description">
                Delhi's lifestyle brings its own hair challenges – pollution, stress, hard water, irregular routines, and weather changes can seriously impact hair health. We at Hairs n Cares provide customised hair loss treatment in {city} with the help of the most effective and scientifically tested allopathy solutions that deliver faster, noticeable outcomes.
              </p>
              <p className="hero-description">
                If you're in search of the most effective hair loss treatment in {city} that is guided by experts and specifically tailored for your lifestyle and scalp You're in the right spot.
              </p>
              <div className="hero-cta">
                <button
                  className="delhi-cta-button"
                  onClick={handleTakeHairTest}
                >
                  Take a Hair Test
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/Online hair solution.png"
                alt={`Online Hair Loss Treatment in ${city} - Professional Dermatologist Consultation`}
                className="hero-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="delhi-why-choose-section">
            <h2 className="delhi-section-title">
              Why Choose Hairs n Cares for Hair Loss Treatment in Delhi?
            </h2>

            {/* Slider wrapper with nav buttons */}
            <div className="delhi-features-wrapper">
              <button
                className="features-nav features-prev"
                onClick={() => {
                  const el = featuresRef.current;
                  if (!el) return;
                  const amount = el.clientWidth;
                  el.scrollBy({ left: -amount, behavior: "smooth" });
                }}
                aria-label="Previous"
              >
                ‹
              </button>

              <div className="delhi-features-grid" ref={featuresRef}>
                {treatmentFeatures.map((feature, index) => (
                  <div key={index} className="delhi-feature-card">
                    <div className="delhi-feature-image">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="delhi-feature-number">{index + 1}</div>
                    <h3 className="delhi-feature-title">{feature.title}</h3>
                    <p className="delhi-feature-description">{feature.description}</p>
                    <ul className="delhi-feature-list">
                      {feature.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    {feature.title === "Personalized Hair Loss Diagnosis" && (
                      <p className="delhi-feature-note">
                        No two hair loss issues are identical. We identify your specific root cause.
                      </p>
                    )}
                    {feature.title === "Tried & Tested Allopathy Medicines" && (
                      <p className="delhi-feature-note">
                        Scientifically tested, proven effective, and focused on outcomes.
                      </p>
                    )}
                    {feature.title === "Customized Hair Care Solutions" && (
                      <p className="delhi-feature-note">
                        Custom products designed based on your specific diagnosis results.
                      </p>
                    )}
                    {feature.title === "Long-Term Solutions For Managing Hair Loss" && (
                      <p className="delhi-feature-note">
                        Continued support and ongoing treatment optimisation for sustained results.
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <button
                className="features-nav features-next"
                onClick={() => {
                  const el = featuresRef.current;
                  if (!el) return;
                  const amount = el.clientWidth;
                  el.scrollBy({ left: amount, behavior: "smooth" });
                }}
                aria-label="Next"
              >
                ›
              </button>
            </div>

            <div className="delhi-section-cta">
              <button
                className="delhi-cta-button"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </div>

          {/* Services Section */}
          <div className="delhi-services-section">
            <h2 className="delhi-section-title">
              Our Hair Loss Treatments in Delhi
            </h2>

            {/* Marquee-style continuous scroll: duplicate items for smooth loop */}
            <div className="delhi-services-marquee" aria-hidden={false}>
              <div className="delhi-marquee-track" style={{"--marquee-duration": "30s"}}>
                {services.concat(services).map((service, index) => (
                  <div key={index} className="delhi-service-card">
                    <h3 className="delhi-service-title">{service.title}</h3>
                    <p className="delhi-service-description">{service.description}</p>
                    {service.features && (
                      <ul className="delhi-service-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="delhi-section-cta">
              <button
                className="delhi-cta-button"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </div>

          {/* Who Can Use Section */}
          <div className="delhi-who-can-use-section">
            <h2 className="delhi-section-title">
              Who Should Choose Our Hair Care Solutions?
            </h2>
            <p className="delhi-section-description">
              Our solutions for hair loss in Delhi are the most effective for people who suffer from:
            </p>
            <div className="delhi-conditions-grid">
              {hairConditions.map((condition, index) => (
                <div key={index} className="delhi-condition-item">
                  <span className="delhi-condition-bullet">✓</span>
                  <span className="delhi-condition-text">{condition}</span>
                </div>
              ))}
            </div>
            <p className="delhi-section-note">
              If you're in the beginning stages or suffering from a long-term loss of hair We offer the most effective treatment for hair loss that is specifically designed to meet your needs.
            </p>
          </div>

          {/* Why It Works Section */}
          <div className="delhi-why-works-section">
            <h2 className="delhi-section-title">
              Best Hair Loss Treatment in {city} - Designed for the City Lifestyle
            </h2>
            <p className="delhi-section-description">
              Delhi's pollution, the high quality of water, and an extremely fast-paced lifestyle require a fresh approach to treating hair. The treatments we offer have been designed keeping the local context in mind. They help to make them more effective and ecologically sustainable.
            </p>
            <p className="delhi-section-description">
              <strong>With Hairs n Cares You get:</strong>
            </p>
            <div className="delhi-benefits-grid">
              <div className="delhi-benefit-item">Accurate hair loss diagnosis</div>
              <div className="delhi-benefit-item">Hair treatment using allopathy, which has a quick-acting</div>
              <div className="delhi-benefit-item">Solutions specifically designed to meet your needs and not merely general advice</div>
              <div className="delhi-benefit-item">Professional hair loss management</div>
              <div className="delhi-benefit-item">The improvement is obvious and lasts for a long period of time</div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="delhi-faq-section">
            <h2 className="delhi-section-title">FAQs</h2>
            <div className="delhi-faq-container">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`delhi-faq-item ${isOpen ? 'open' : ''}`}>
                    <h3
                      className="delhi-faq-question"
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setOpenFaq(isOpen ? null : index);
                      }}
                    >
                      {index + 1}. {faq.question}
                    </h3>
                    <p className={`delhi-faq-answer ${isOpen ? 'open' : ''}`}>
                      {faq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="delhi-final-cta-section">
            <h2 className="delhi-section-title">
              Take the First Step Toward Healthier Hair
            </h2>
            <p className="delhi-final-cta-description">
              Don't let hair loss affect your confidence. Select Hairs n Cares for personalised, professional and quick-result haircare options in Delhi.
            </p>
            <h3 className="delhi-final-cta-subtitle">
              Get Your Personalised Hair Loss Treatment Plan Today
            </h3>
            <div className="delhi-final-cta-button">
              <button
                className="delhi-cta-button large"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </div>

          {/* SEO Links */}
          <SEOLinkHub
            currentPage="/online-hair-loss-treatment-delhi"
            pageType="treatment"
            customInternalLinks={[
              {
                to: "/online-hair-loss-test-diagnosis-treatment",
                text: "Online Hair Loss Diagnosis",
                icon: "💻",
                description: "Get expert hair loss diagnosis online with personalized treatment",
              },
              {
                to: "/contact-hair-experts",
                text: "Contact Hair Experts",
                icon: "👨‍⚕️",
                description: "Connect with our hair care specialists for consultation",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
