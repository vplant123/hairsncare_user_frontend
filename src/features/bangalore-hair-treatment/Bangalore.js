import React, { useRef } from "react";
import "./Bangalore.css";
import { useNavigate } from "react-router-dom";
import SEOLinkHub from '../../components/SEOLinkHub';

export default function Bangalore({ city = "Bangalore" }) {
  const navigate = useNavigate();
  const featuresRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBookConsultation = () => {
    scrollToTop();
    navigate("/contact-hair-experts");
  };

  const handleBookAppointment = () => {
    scrollToTop();
    navigate("/contact-hair-experts");
  };

  const handleStartTreatment = () => {
    scrollToTop();
    navigate("/contact-hair-experts");
  };

  const causes = [
    "Hard water",
    "Weather is humid", 
    "Dust and pollution",
    "Stress and long working hours",
    "Sleep disturbances",
    "Changes in the season",
    "Poor diet",
    "Hair and scalp issues, as well as Dandruff"
  ];

  const treatmentFeatures = [
    {
      title: "Personalised Online Diagnosis",
      description: "We will examine your hair's fall with precision by conducting the internet in a session.",
      details: [
        "Condition of the Scalp",
        "Hair density", 
        "Lifestyle",
        "Stress level",
        "Food habits",
        "Medical background"
      ]
    },
    {
      title: "Doctor-Approved Allopathy Treatments",
      description: "Our treatments are:",
      details: [
        "Clinically tested",
        "Safe for long-term use",
        "Doctor-recommended", 
        "Designed for fast and visible results"
      ]
    },
    {
      title: `Tailored Plans for ${city} Conditions`,
      description: `Even though we work online, we design your plan for ${city}'s:`,
      details: [
        "Hard water",
        "Humidity",
        "Pollution",
        "IT work stress",
        "Busy lifestyle"
      ]
    },
    {
      title: "Complete Online Care – No Clinic Visit Needed",
      description: "You can complete your entire treatment from home. You get:",
      details: [
        "Online consultation",
        "Online diagnosis",
        "Online review",
        "Delivery of medicines to homes",
        "Easy tracking of progress"
      ]
    }
  ];

  const services = [
    {
      title: "Online Hair Fall Treatment",
      description: "Personalised allopathy-based treatment plans for men and women.",
      features: [
        "Doctor-supervised treatment plans",
        "Personalised medicine delivery",
        "Regular progress tracking and follow-ups"
      ]
    },
    {
      title: "Hair Growth Support", 
      description: "Research-backed solutions to:",
      features: [
        "Strengthen roots",
        "Improve scalp health",
        "Boost healthy hair growth"
      ]
    },
    {
      title: "Hair Fall Control & Management",
      description: "We help you with:",
      features: [
        "Regular follow-ups",
        "Lifestyle changes", 
        "Product guidance",
        "Progress tracking"
      ]
    },
    {
      title: "Personalised Hair Care Routine",
      description: "Your routine depends on:",
      features: [
        "Scalp type",
        "Hair type",
        "Stress level",
        "Diet",
        "Medical issues",
        "Daily habits"
      ]
    }
  ];

  const treatmentSteps = [
    {
      step: "Step 1",
      title: "Online Consultation",
      description: "Tell us about your hair fall and upload scalp photos."
    },
    {
      step: "Step 2", 
      title: "Diagnosis",
      description: "We study your scalp condition, lifestyle, and hair concerns."
    },
    {
      step: "Step 3",
      title: "Personalised Treatment Plan", 
      description: "You will be provided with an individualised treatment plan approved by a medical doctor specifically tailored to you."
    },
    {
      step: "Step 4",
      title: "Medicine Delivery",
      description: "We can arrange for delivery of the prescribed medicines to your residence."
    },
    {
      step: "Step 5",
      title: "Regular Follow-Ups",
      description: "We monitor the results and make adjustments as required."
    }
  ];

  const hairConditions = [
    "Sudden hair fall",
    "Hair thinning",
    "Pattern baldness", 
    "Hair fall due to stress",
    "Hair fall with dandruff",
    "Slow hair growth",
    "Seasonal hair fall"
  ];

  const successStats = [
    "10,000+ people treated online",
    "High satisfaction rate",
    "Visible improvement in 4–6 weeks", 
    "Dermatologist-supervised care"
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
      <div className="bangalore-treatment">
        <div className="bangalore-container">
          {/* Hero Section */}
          <div className="bangalore-hero">
            <div className="hero-content">
              <h1 className="hero-title">
                Online Hair Loss Treatment in {city}
              </h1>
              <h2 className="hero-subtitle">
                Personalized Hair Care Solutions
              </h2>
              <p className="hero-description">
                <strong>Your Trusted Online Hair Loss Treatment for {city} Residents</strong>
              </p>
              <p className="hero-description">
                Hair loss is common in {city}. Stress, long work hours, hard water, pollution, and humidity can all cause hair fall.
              </p>
              <p className="hero-description">
                At Hairs n Cares, we do not run a clinic in {city}. We offer complete online hair loss consultations and approved treatment plans by a doctor for people who reside in {city}. Our aim is to provide you fast, safe and efficient hair loss solutions that you can do at your home.
              </p>
              <div className="hero-cta">
                <button 
                  className="bangalore-cta-button"
                  onClick={handleBookConsultation}
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="/assets/img/hair-care-hero.jpg" 
                alt={`Online Hair Loss Treatment in ${city}`}
                className="hero-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bangalore-why-choose-section">
            <h2 className="bangalore-section-title">
              Why Choose Hairs n Cares for Online Hair Loss Treatment?
            </h2>

            {/* Slider wrapper with nav buttons */}
            <div className="bangalore-features-wrapper">
              <button
                className="features-nav features-prev"
                onClick={() => {
                  const el = featuresRef.current;
                  if (!el) return;
                  const amount = el.clientWidth; // scroll by one visible page (three cards)
                  el.scrollBy({ left: -amount, behavior: "smooth" });
                }}
                aria-label="Previous"
              >
                ‹
              </button>

              <div className="bangalore-features-grid" ref={featuresRef}>
                {treatmentFeatures.map((feature, index) => (
                  <div key={index} className="bangalore-feature-card">
                  <div className="bangalore-feature-number">{index + 1}</div>
                  <h3 className="bangalore-feature-title">{feature.title}</h3>
                  <p className="bangalore-feature-description">{feature.description}</p>
                  <ul className="bangalore-feature-list">
                    {feature.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  {feature.title === "Personalised Online Diagnosis" && (
                    <p className="bangalore-feature-note">
                      Each patient receives a unique treatment program, not a generic suggestion.
                    </p>
                  )}
                  {feature.title === "Doctor-Approved Allopathy Treatments" && (
                    <>
                      <p className="bangalore-feature-note">No untested products.</p>
                      <p className="bangalore-feature-note">Only science-backed solutions.</p>
                    </>
                  )}
                  {feature.title === "Tailored Plans for Bangalore Conditions" && (
                    <p className="bangalore-feature-note">
                      This makes your treatment more effective.
                    </p>
                  )}
                  {feature.title === "Complete Online Care – No Clinic Visit Needed" && (
                    <p className="bangalore-feature-note">
                      Simple, secure and easy.
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
                  const amount = el.clientWidth; // scroll by one visible page (three cards)
                  el.scrollBy({ left: amount, behavior: "smooth" });
                }}
                aria-label="Next"
              >
                ›
              </button>
            </div>

            <div className="bangalore-section-cta">
              <button 
                className="bangalore-cta-button"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Common Causes Section */}
          <div className="bangalore-causes-section">
            <h2 className="bangalore-section-title">
              Common Causes of Hair Loss in {city}
            </h2>
            <p className="bangalore-section-description">
              Hair loss is due to:
            </p>
            <div className="bangalore-causes-grid">
              {causes.map((cause, index) => (
                <div key={index} className="bangalore-cause-item">
                  <span className="bangalore-cause-bullet">•</span>
                  <span className="bangalore-cause-text">{cause}</span>
                </div>
              ))}
            </div>
            <p className="bangalore-section-note">
              Understanding these elements will help us develop a more effective strategy for you.
            </p>
          </div>

          {/* Services Section */}
          <div className="bangalore-services-section">
            <h2 className="bangalore-section-title">
              Online Hair Loss Services We Provide
            </h2>

            {/* Marquee-style continuous scroll: duplicate items for smooth loop */}
            <div className="bangalore-services-marquee" aria-hidden={false}>
              <div className="bangalore-marquee-track" style={{"--marquee-duration": "30s"}}>
                {services.concat(services).map((service, index) => (
                  <div key={index} className="bangalore-service-card">
                    <h3 className="bangalore-service-title">{service.title}</h3>
                    <p className="bangalore-service-description">{service.description}</p>
                    {service.features && (
                      <ul className="bangalore-service-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bangalore-section-cta">
              <button 
                className="bangalore-cta-button"
                onClick={handleStartTreatment}
              >
                Start Online Treatment
              </button>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bangalore-how-it-works-section">
            <h2 className="bangalore-section-title">
              How Our Online Treatment Works
            </h2>
            
            <div className="bangalore-steps-container">
              {treatmentSteps.map((step, index) => (
                <div key={index} className={`bangalore-step-row ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="bangalore-step-card">
                    <div className="bangalore-step-number">{index + 1}</div>
                    <h3 className="bangalore-step-title">{step.title}</h3>
                    <p className="bangalore-step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Use Section */}
          <div className="bangalore-who-can-use-section">
            <h2 className="bangalore-section-title">
              Who Can Use Our Online Hair Loss Treatment?
            </h2>
            <p className="bangalore-section-description">
              You are a good fit if you have:
            </p>
            <div className="bangalore-conditions-grid">
              {hairConditions.map((condition, index) => (
                <div key={index} className="bangalore-condition-item">
                  <span className="bangalore-condition-bullet">✓</span>
                  <span className="bangalore-condition-text">{condition}</span>
                </div>
              ))}
            </div>
            <p className="bangalore-section-note">
              We help you with a simple, safe, and guided online treatment.
            </p>
          </div>

          {/* Why It Works Section */}
          <div className="bangalore-why-works-section">
            <h2 className="bangalore-section-title">
              Why Our Online Treatment Works Well for {city} Residents
            </h2>
            <p className="bangalore-section-description">
              Because we focus on:
            </p>
            <div className="bangalore-benefits-grid">
              <div className="bangalore-benefit-item">Accurate online diagnosis</div>
              <div className="bangalore-benefit-item">Safe allopathy medicines</div>
              <div className="bangalore-benefit-item">Simple home-based plans</div>
              <div className="bangalore-benefit-item">City-specific problems</div>
              <div className="bangalore-benefit-item">Regular follow-ups</div>
              <div className="bangalore-benefit-item">High success rate</div>
            </div>
            <p className="bangalore-section-note">
              You get complete support from start to finish.
            </p>
          </div>

          {/* Success Stats Section */}
          <div className="bangalore-success-section">
            <h2 className="bangalore-section-title " id="successbanglore">Success & Trust</h2>
            <div className="bangalore-stats-grid">
              {successStats.map((stat, index) => (
                <div key={index} className="bangalore-stat-item">
                  <span className="bangalore-stat-icon">⭐</span>
                  <span className="bangalore-stat-text">{stat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bangalore-faq-section">
            <h2 className="bangalore-section-title">FAQs</h2>
            <div className="bangalore-faq-container">
              {faqs.map((faq, index) => (
                <div key={index} className="bangalore-faq-item">
                  <h3 className="bangalore-faq-question">
                    {index + 1}. {faq.question}
                  </h3>
                  <p className="bangalore-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bangalore-final-cta-section">
            <h2 className="bangalore-section-title">
              Start Your Online Hair Loss Treatment Today
            </h2>
            <p className="bangalore-final-cta-description">
              You can improve your hair health with safe, proven and simple care from home.
            </p>
            <p className="bangalore-final-cta-description">
              Our experts will guide you at every step.
            </p>
            <h3 className="bangalore-final-cta-subtitle">
              Get Your Personalised Online Hair Loss Treatment Plan Today
            </h3>
            <div className="bangalore-final-cta-button">
              <button 
                className="bangalore-cta-button large"
                onClick={handleBookConsultation}
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* SEO Links */}
          <SEOLinkHub 
            currentPage="/online-hair-loss-treatment-bangalore"
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