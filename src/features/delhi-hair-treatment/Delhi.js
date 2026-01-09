import React, { useState } from "react";
import "./Delhi.css";
import { useNavigate } from "react-router-dom";
import SEOLinkHub from "../../components/SEOLinkHub";

export default function Delhi() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const MarqueeCards = ({ items, duration = "26s" }) => {
    return (
      <div className="delhi-cards-marquee" aria-label="Scrolling highlights">
        <div
          className="delhi-cards-track"
          style={{ "--marquee-duration": duration }}
        >
          {items.map((item, index) => (
            <div key={`a-${index}`} className="delhi-card">
              {item?.imageSrc ? (
                <img
                  className="delhi-card-img"
                  src={item.imageSrc}
                  alt={item.text}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : null}
              <span className="delhi-card-text">{item.text}</span>
            </div>
          ))}
          <div className="delhi-cards-dup" aria-hidden="true">
            {items.map((item, index) => (
              <div key={`b-${index}`} className="delhi-card">
                {item?.imageSrc ? (
                  <img
                    className="delhi-card-img"
                    src={item.imageSrc}
                    alt={item.text}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}
                <span className="delhi-card-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

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

  const faqs = [
    {
      question: "Q. Do you have a physical clinic in Delhi?",
      answer:
        "No. We provide online consultations and home-delivered treatments across Delhi.",
    },
    {
      question: "Q. Are the medicines safe?",
      answer:
        "Yes. We use try-and-tested allopathy medicines prescribed by professionals.",
    },
    {
      question: "Q. How soon can I see results?",
      answer:
        "Results vary by stage, but many patients notice reduced hair fall within weeks.",
    },
    {
      question: "Q. Is this suitable for both men and women?",
      answer:
        "Yes, our hair loss treatments are customised for both men and women.",
    },
  ];

  return (
    <>
      <div className="delhi-treatment">
        <div className="delhi-container">
          {/* Hero / Intro Section */}
          <div className="delhi-hero">
            <div className="hero-content">
              <h1 className="hero-title">
                Best Hair Loss Treatment in Delhi - Personalized Hair Care Solutions
              </h1>
              <p className="hero-description">
                Are you searching for the most effective treatments for hair loss in Delhi without having to visit an actual clinic? Hairsncares offers scientifically backed, customized hair care products delivered right to your residence. Our process combines professional hair loss diagnostics, tried-and-tested allopathy treatments, and ongoing online medical support to assist you in achieving rapid and noticeable outcomes in hair growth.
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
                alt="Online Hair Loss Treatment - Professional Dermatologist Consultation"
                className="hero-img"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Online Consultation Section */}
          <section className="delhi-section delhi-why-choose-section">
            <h2 className="delhi-section-title">
              Personalized Hair Loss Treatment in Delhi (Online Consultation)
            </h2>
            <p className="delhi-section-description">
              Hair loss could be a result of genetics, hormonal imbalance, stress nutrition deficiency, stress, or medical issues. At Hairsncares we do not believe in a one-size-fits-all solution. Our treatment for hair loss for Delhi patients is entirely customized and administered on the internet.
            </p>
            <MarqueeCards
              items={[
                { text: "Hair loss online treatment by experts", imageSrc: "/Online Consultation.png" },
                { text: "The most effective allopathy-based medicine that has been tested for speedier results", imageSrc: "/Doctor-Approved Allopathy Treatments.png" },
                { text: "Customized hair treatment plans", imageSrc: "/Personalised Treatment Plan.png" },
                { text: "Home delivery throughout Delhi", imageSrc: "/RX.png" },
                { text: "Continuous progress tracking and assistance", imageSrc: "/Regular Follow-Ups.png" },
              ]}
              duration="24s"
            />
            <p className="delhi-section-description">
              You don't have to visit an office for diagnosis - all of the tests as well as treatment and follow-ups can be done on the internet.
            </p>
          </section>

          {/* Diagnosis Process Section */}
          <section className="delhi-section delhi-causes-section">
            <h2 className="delhi-section-title">
              Our Hair Loss Diagnosis Process (100% Online)
            </h2>
            <p className="delhi-section-description">
              We start with a comprehensive hair loss diagnosis that includes:
            </p>
            <MarqueeCards
              items={[
                { text: "Consultation online with hair experts", imageSrc: "/Diagnosis.png" },
                { text: "Scalp & hair analysis (photos + questionnaire)", imageSrc: "/scalp-examination.png" },
                { text: "Lifestyle, medical history & diet evaluation", imageSrc: "/sample--overall-health.jpg" },
                { text: "The identification of the stage of hair loss and the root of the cause", imageSrc: "/Hair-Quality.png" },
              ]}
              duration="22s"
            />
            <p className="delhi-section-description">
              On this basis, we create customized solutions to reduce hair loss that are tailored to your specific needs.
            </p>
          </section>

          {/* Hair Loss Stages Section */}
          <section className="delhi-section delhi-success-section delhi-stages-section">
            <h2 className="delhi-section-title">
              Hair Loss Stages &amp; Personalized Treatment Solutions
            </h2>
            <p className="delhi-section-description">
              The effectiveness of hair loss management depends on identifying the right stage. Below is a clear breakdown of hair loss stages and treatments we provide for Delhi patients.
            </p>

            <div className="delhi-stages-table-wrapper">
              <table className="delhi-stages-table">
                <thead>
                  <tr>
                    <th>Hair Loss Stage</th>
                    <th>Common Problems</th>
                    <th>Personalized Hair Treatment Solution</th>
                    <th>Expected Results Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stage 1: Early Hair Fall</td>
                    <td>Mild hair fall, thinning, weak roots</td>
                    <td>Preventive hair loss treatment, nutrition correction, medicated shampoos, oral supplements</td>
                    <td>Hair fall reduction in 4–6 weeks, visible strengthening in 2–3 months</td>
                  </tr>
                  <tr>
                    <td>Stage 2: Noticeable Thinning</td>
                    <td>Increased hair fall, reduced density</td>
                    <td>Targeted allopathy medicines, scalp treatment, hair growth solutions, lifestyle guidance</td>
                    <td>Hair fall control in 6–8 weeks, density improvement in 3–4 months</td>
                  </tr>
                  <tr>
                    <td>Stage 3: Visible Scalp Areas</td>
                    <td>Receding hairline, widening part</td>
                    <td>Stronger hair loss management plan, advanced hair treatment medicines, growth stimulants</td>
                    <td>New hair growth signs in 3–4 months, visible coverage in 5–6 months</td>
                  </tr>
                  <tr>
                    <td>Stage 4: Advanced Hair Loss</td>
                    <td>Bald patches, significant density loss</td>
                    <td>Intensive personalized hair care solutions, long-term treatment plan, regrowth-focused medicines</td>
                    <td>Slowed hair loss in 2–3 months, partial regrowth in 6–9 months</td>
                  </tr>
                  <tr>
                    <td>Stage 5: Severe Hair Loss</td>
                    <td>Large bald areas</td>
                    <td>Hair loss control, regrowth support where possible, expert guidance on future options</td>
                    <td>Hair preservation in 3 months, improvement depends on individual condition</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="delhi-section-note">
              Early diagnosis gives the fastest and best results.
            </p>
          </section>

          {/* Why Choose Section */}
          <section className="delhi-section delhi-why-works-section">
            <h2 className="delhi-section-title">
              Why choose Hairsncares as a Hair Loss Therapy in Delhi 
            </h2>
            <MarqueeCards
              items={[
                { text: "Best Hair Loss Treatment utilizing tested allopathy remedies", imageSrc: "/medical-prescription-pharmaceutical-drug-pharmacy-symbol-clip-art-rx-logo-image-b7b1ba0f952be8c1872ae92a48af3874.png" },
                { text: "Solutions that are 100% customized (no product that is generic)", imageSrc: "/Tailored Plans for Bangalore Conditions.png" },
                { text: "Online diagnosis & doctor consultation", imageSrc: "/pngwing.com.png" },
                { text: "Rapid results using tried-and-tested treatment strategies", imageSrc: "/Hair-Density.png" },
                { text: "Home delivery throughout Delhi", imageSrc: "/Medicine Delivery'.png" },
                { text: "For both genders.", imageSrc: "/Hair-Breakage.png" },
              ]}
              duration="26s"
            />
            <p className="delhi-section-description">
              Our treatments are specifically designed to stop the loss of hair, enhance the health of your scalp and encourage hair growth in a way that is effective.
            </p>
            <div className="delhi-section-cta">
              <button className="delhi-cta-button" onClick={handleTakeHairTest}>
                Take a Hair Test
              </button>
            </div>
          </section>

          {/* Hair Growth Solutions Section */}
          <section className="delhi-section delhi-services-section">
            <h2 className="delhi-section-title">Hair Growth Solutions That Work</h2>
            <p className="delhi-section-description-Hair-Growth">
              Hair growth products that we offer concentrate on:
            </p>
            <MarqueeCards
              items={[
                { text: "The hair follicles are strengthened", imageSrc: "/color-vibrancy.png" },
                { text: "Improved circulation of the scalp", imageSrc: "/moisture-&-hydration-of-hair.png" },
                { text: "Reduce excessive hair loss", imageSrc: "/2.png" },
                { text: "Inspiring natural hair growth", imageSrc: "/3.png" },
              ]}
              duration="18s"
            />
            <p className="delhi-section-description-Hair-Growth">
              Every plan is re-designed according to progress, which results in more long-term success.
            </p>
          </section>

          {/* Who Benefits Section */}
          <section className="delhi-section delhi-who-can-use-section">
            <h2 className="delhi-section-title">
              Who is the most likely to benefit from our Hair Care Solutions?
            </h2>
            <MarqueeCards
              items={[
                { text: "Women and men who are facing hair fall-related problems", imageSrc: "/Overall-Health-Checkbox1.jpg" },
                { text: "Hair loss cases that start early", imageSrc: "/IMG_20240418_201628.png" },
                { text: "Hair loss due to hormonal or genetic causes", imageSrc: "/IMG_20240425_085350.jpg" },
                { text: "Hair problems caused by stress or lifestyle", imageSrc: "/IMG_20240425_100125.png" },
                { text: "Anyone who is looking for customized solutions for hair loss in Delhi without having to visit a clinic", imageSrc: "/Online hair solution.png" },
              ]}
              duration="26s"
            />
          </section>

          {/* Final CTA Section */}
          <section className="delhi-section delhi-final-cta-section">
            <h2 className="delhi-section-title">
              Start Your Personalized Hair Loss Treatment Today
            </h2>
            <p className="delhi-final-cta-description">
              Do not wait for the loss of hair to increase. The earlier you begin the better the outcomes.
            </p>
            <h3 className="delhi-final-cta-subtitle">
              Book Your Free Online Hair Consultation Now
            </h3>
            <p className="delhi-final-cta-description">
              Expert diagnosis, customized hair treatment, and efficient solutions for hair growth - delivered right to your doorstep in Delhi.
            </p>
            <div className="delhi-final-cta-button">
              <button
                className="delhi-cta-button large"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="delhi-faq-section">
            <h2 className="delhi-section-title">Frequently Asked Questions (FAQs)</h2>
            <div className="delhi-faq-container">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`delhi-faq-item ${isOpen ? "open" : ""}`}
                  >
                    <h3
                      className="delhi-faq-question"
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setOpenFaq(isOpen ? null : index);
                        }
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p className={`delhi-faq-answer ${isOpen ? "open" : ""}`}>
                      {faq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Brand Statement */}
          <section className="delhi-section delhi-brand-section">
            <h3 className="delhi-brand-title">
              Hairsncares – Trusted Personalized Hair Care Solutions for Delhi
            </h3>
          </section>

          {/* Final Bottom CTA */}
          <section className="delhi-section delhi-bottom-cta-section">
            <div className="delhi-final-cta-button">
              <button
                className="delhi-cta-button large"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </section>

          {/* SEO Links */}
          <SEOLinkHub
            currentPage="/online-hair-loss-treatment-delhi"
            pageType="treatment"
            customInternalLinks={[
              {
                to: "/online-hair-loss-test-diagnosis-treatment",
                text: "Online Hair Loss Diagnosis",
                icon: "💻",
                description:
                  "Get expert hair loss diagnosis online with personalized treatment",
              },
              {
                to: "/contact-hair-experts",
                text: "Contact Hair Experts",
                icon: "👨‍⚕️",
                description:
                  "Connect with our hair care specialists for consultation",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
