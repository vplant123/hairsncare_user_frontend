import React, { useState } from "react";
import "./hyderabad.css";
import { useNavigate } from "react-router-dom";
import SEOLinkHub from "../../components/SEOLinkHub";

export default function Hyderabad() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const MarqueeCards = ({ items, duration = "26s" }) => {
    return (
      <div className="hyderabad-cards-marquee" aria-label="Scrolling highlights">
        <div
          className="hyderabad-cards-track"
          style={{ "--marquee-duration": duration }}
        >
          {items.map((item, index) => (
            <div key={`a-${index}`} className="hyderabad-card">
              {item?.imageSrc ? (
                <img
                  className="hyderabad-card-img"
                  src={item.imageSrc}
                  alt={item.text}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : null}
              <span className="hyderabad-card-text">{item.text}</span>
            </div>
          ))}
          <div className="hyderabad-cards-dup" aria-hidden="true">
            {items.map((item, index) => (
              <div key={`b-${index}`} className="hyderabad-card">
                {item?.imageSrc ? (
                  <img
                    className="hyderabad-card-img"
                    src={item.imageSrc}
                    alt={item.text}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}
                <span className="hyderabad-card-text">{item.text}</span>
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
      question: "Do you have a physical therapy clinic in Hyderabad?",
      answer:
        "No. We provide online consultation as well as home delivery all over Hyderabad.",
    },
    {
      question: "Are the medications secure?",
      answer:
        "Yes. We make use of clinically approved and tested allopathy medications prescribed by a professional.",
    },
    {
      question: "How long will it take to see the results?",
      answer:
        "A majority of patients notice a decrease in hair loss within a few weeks. Visible regrowth depends on the stage of loss",
    },
    {
      question: "Can this be used by both women and men?",
      answer:
        "Yes. All of our treatments are tailored for both men and women.",
    },
  ];

  return (
    <>
      <div className="hyderabad-treatment">
        <div className="hyderabad-container">
          {/* Hero / Intro Section */}
          <div className="hyderabad-hero">
            <div className="hero-content">
              <h1 className="hero-title">
                Best Hair Loss Treatment in Hyderabad
              </h1>
              <h2 className="hero-subtitle">
                Personalized Hair Care Solutions
              </h2>
              <p className="hero-description">
                <strong>Customized Hair Loss Solutions for Hyderabad Residents</strong>
              </p>
              <p className="hero-description">
                Are you looking for the most effective solution to losing hair in Hyderabad without having to visit a clinic? Hairsncares offers expert-led, customized hair-care solutions via an online consultation that is 100% confidential and treatment plans that are delivered to your home. Our strategy is based on the most tried-and-tested remedies for allopathy that are designed to produce rapid and tangible outcomes.
              </p>
              <p className="hero-description">
                We concentrate on identifying the root cause of your problem with a precise hair loss diagnosis. We follow this by a customized treatment for hair loss and growth strategies that are tailored to your particular stage and condition.
              </p>
              <div className="hero-cta">
                <button
                  className="hyderabad-cta-button"
                  onClick={handleTakeHairTest}
                >
                  Take a Hair Test
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                alt="Online Hair Loss Treatment - Professional Dermatologist Consultation"
                className="hero-img"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Online Consultation Section */}
          <section className="hyderabad-section hyderabad-why-choose-section">
            <h2 className="hyderabad-section-title">
              Personalized Hair Loss Treatment in Hyderabad (Online Model)  
            </h2>
            <p className="hyderabad-section-description">
              Hyderabad's high water quality, high temperatures, stress, and changing lifestyle pattern are often the main causes of hair loss and thinning. At Hairsncares, we design custom solutions to take care of these local causes as well as the underlying medical reason for hair loss.
            </p>
            <MarqueeCards
              items={[
                { text: "✔ Hair loss online treatment by experts", imageSrc: "https://images.unsplash.com/photo-1715866549135-e3bc3c6148a9?auto=format&fit=crop&w=400&q=80" },
                { text: "✔ Allopathy drugs that have been clinically tested and proven to be effective", imageSrc: "https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?auto=format&fit=crop&w=400&q=80" },
                { text: "✔ Customized hair loss management plans", imageSrc: "https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?auto=format&fit=crop&w=400&q=80" },
                { text: "✔ Home delivery across Hyderabad", imageSrc: "https://images.unsplash.com/photo-1566889035559-b14ef9d4c365" },
                { text: "✔ Continuous expert monitoring & follow-ups", imageSrc: "https://plus.unsplash.com/premium_photo-1663931932687-c4c2366a5c61?auto=format&fit=crop&w=400&q=80" },
              ]}
              duration="24s"
            />
            <p className="hyderabad-section-description">
              You can receive all medical advice at your convenience at home
            </p>
          </section>

          {/* Diagnosis Process Section */}
          <section className="hyderabad-section hyderabad-causes-section">
            <h2 className="hyderabad-section-title">
              Our Hair Loss Diagnosis Process
            </h2>
            <p className="hyderabad-section-description">
              Effective management of hair loss begins with a proper diagnosis. Our online method includes:
            </p>
            <MarqueeCards
              items={[
                { text: "Consultation with expert hairstylists", imageSrc: "https://images.unsplash.com/photo-1599387737838-660b75526801?auto=format&fit=crop&w=400&q=80" },
                { text: "Hair analysis and scalp scaling via uploaded photos", imageSrc: "https://plus.unsplash.com/premium_photo-1674841253670-1c84f52344c1?auto=format&fit=crop&w=400&q=80" },
                { text: "Evaluation of lifestyle and medical conditions", imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
                { text: "Hair loss stages are easy to identify.", imageSrc: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=400&q=80" },
                { text: "The root-cause identification (genetic or hormonal and stress-related)", imageSrc: "https://images.unsplash.com/photo-1643780668909-580822430155?auto=format&fit=crop&w=400&q=80" },
              ]}
              duration="22s"
            />
            <p className="hyderabad-section-description">
              In light of this information, we have designed the ideal method of treating hair loss for you.
            </p>
          </section>

          {/* Hair Loss Stages Section */}
          <section className="hyderabad-section hyderabad-success-section hyderabad-stages-section">
            <h2 className="hyderabad-section-title">
              Hair Loss Stages &amp; Personalized Treatment Solutions
            </h2>
            <p className="hyderabad-section-description">
              Knowing the stage of your patient helps us to deliver quicker and more specific outcomes. Below is a breakdown of the stages of Hyderabad patients:
            </p>

            <div className="hyderabad-stages-table-wrapper">
              <table className="hyderabad-stages-table">
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
                    <td>Weak roots, mild shedding</td>
                    <td>Preventive treatments for hair, medicated products and nutritional correction</td>
                    <td>Control of hair fall in about 4-6 weeks. Hair growth will improve over the next 2-3 months.</td>
                  </tr>
                  <tr>
                    <td>Stage 2: Noticeable Thinning</td>
                    <td>A decrease in density and shed</td>
                    <td>Specific allopathy medications for hair growth, solutions for treatments for scalp</td>
                    <td>Hair loss is less noticeable after 6-8 weeks. Observable improvement in 3-4 months.</td>
                  </tr>
                  <tr>
                    <td>Stage 3: Visible Scalp Areas</td>
                    <td>Thinning crown, receding hairline</td>
                    <td>Advanced hair loss management plan, growth stimulants</td>
                    <td>New growth signs appear in 3-4 months, and coverage improvements within 5 to 6 months</td>
                  </tr>
                  <tr>
                    <td>Stage 4: Prolonged Hair Loss</td>
                    <td>Bald spots, thick thinned</td>
                    <td>Personalized and intensive solutions, as well as long-term medical treatment</td>
                    <td>Stabilization within 3-4 months, growth in 6-9 months</td>
                  </tr>
                  <tr>
                    <td>Stage 5: Extreme Hair Loss</td>
                    <td>Large areas of baldness</td>
                    <td>Hair preservation strategies Medical support from a medical professional</td>
                    <td>Concentrate on controlling the situation in the next 3 months (results depend on the condition)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="hyderabad-section-note">
              Early-stage treatment provides better and faster results.
            </p>
          </section>

          {/* Why Choose Section */}
          <section className="hyderabad-section hyderabad-why-works-section">
            <h2 className="hyderabad-section-title">
              Why Choose Hairsncares for Hair Loss Treatment in Hyderabad?
            </h2>
            <MarqueeCards
              items={[
                { text: "The best hair loss treatment using the most effective allopathy medications", imageSrc: "https://plus.unsplash.com/premium_photo-1732319199786-33a2eaed7b7c?auto=format&fit=crop&w=400&q=80" },
                { text: "Hair care that is completely personalized solutions", imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80" },
                { text: "Online hair loss diagnosis & treatment", imageSrc: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?auto=format&fit=crop&w=400&q=80" },
                { text: "Rapid and tangible results", imageSrc: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=400&q=80" },
                { text: "Ideal for both women and men.", imageSrc: "https://images.unsplash.com/photo-1631993270583-bc78eae1e74e?auto=format&fit=crop&w=400&q=80" },
                { text: "Continuous hair loss management support", imageSrc: "https://images.unsplash.com/photo-1614329850775-e9d80a40d73a?auto=format&fit=crop&w=400&q=80" },
              ]}
              duration="26s"
            />
            <p className="hyderabad-section-description">
              In contrast to generic cosmetics Our method is a medical one, well-structured and results-driven.
            </p>
            <div className="hyderabad-section-cta">
              <button className="hyderabad-cta-button" onClick={handleTakeHairTest}>
                Take a Hair Test
              </button>
            </div>
          </section>

          {/* Hair Growth Solutions Section */}
          <section className="hyderabad-section hyderabad-services-section">
            <h2 className="hyderabad-section-title">Advanced Hair Growth Solutions</h2>
            <p className="hyderabad-section-description-Hair-Growth">
              Hair growth products that we offer are focused on:
            </p>
            <MarqueeCards
              items={[
                {
                    text: "Hair follicles that are stronger",
                    imageSrc:
                    "https://plus.unsplash.com/premium_photo-1681400577539-bcceed985cf1?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Improving the health of your scalp",
                    imageSrc:
                    "https://plus.unsplash.com/premium_photo-1720363480581-7c9765c74627?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Reduce excessive hair loss",
                    imageSrc:
                    "https://images.unsplash.com/photo-1769029270594-26ce033ca6fc?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Stimulating natural regrowth",
                    imageSrc:
                    "https://plus.unsplash.com/premium_photo-1674841253335-6c892a8b1dc1?auto=format&fit=crop&w=400&q=80",
                },
              ]}
              duration="18s"
            />
            <p className="hyderabad-section-description-Hair-Growth">
              Each treatment plan is closely monitored and modified based on the improvement to guarantee better long-term outcomes.
            </p>
          </section>

          {/* Who Benefits Section */}
          <section className="hyderabad-section hyderabad-who-can-use-section">
            <h2 className="hyderabad-section-title">
              Who Can Benefit?
            </h2>
            <p className="hyderabad-section-description-Hair-Growth">
              Our hair care products in Hyderabad are perfect for:
            </p>
            <MarqueeCards
              items={[
                {
                    text: "Hair loss for women and men fall",
                    imageSrc:
                    "https://plus.unsplash.com/premium_photo-1722945642638-68585aafe04e?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Early-stage hair loss",
                    imageSrc:
                    "https://images.unsplash.com/photo-1633179963355-44f57f194d54?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Hair loss due to stress or lifestyle",
                    imageSrc:
                        "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Hormonal or genetic hair issues",
                    imageSrc:
                        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "People looking for customized solutions for hair loss that do not require visiting a clinic",
                    imageSrc:
                        "https://images.unsplash.com/photo-1638609269267-f0128098a809?auto=format&fit=crop&w=400&q=80",
                },

              ]}
              duration="26s"
            />
          </section>

          {/* Final CTA Section */}
          <section className="hyderabad-section hyderabad-final-cta-section">
            <h2 className="hyderabad-section-title">
              Start Your Personalized Hair Loss Treatment in Hyderabad
            </h2>
            <p className="hyderabad-final-cta-description">
              Do not wait until the loss of hair gets to be a major issue. Early detection leads to faster and better outcomes.
            </p>
            <h3 className="hyderabad-final-cta-subtitle">
              Schedule Your Free Online Hair Diagnosis Now
            </h3>
            <p className="hyderabad-final-cta-description">
              Receive expert advice, personalised hair treatment, and solutions for hair growth delivered throughout Hyderabad.
            </p>
            <div className="hyderabad-final-cta-button">
              <button
                className="hyderabad-cta-button large"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="hyderabad-faq-section">
            <h2 className="hyderabad-section-title">FAQs</h2>
            <div className="hyderabad-faq-container">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`hyderabad-faq-item ${isOpen ? "open" : ""}`}
                  >
                    <h3
                      className="hyderabad-faq-question"
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
                    <p className={`hyderabad-faq-answer ${isOpen ? "open" : ""}`}>
                      {faq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Brand Statement */}
          <section className="hyderabad-section hyderabad-brand-section">
            <h3 className="hyderabad-brand-title">
              Hairsncares Trusted Personalized hair Care Solutions for Hyderabad
            </h3>
            <div className="    ad-final-cta-button">
              <button
                className="hyderabad-cta-button large"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </section>

         

          {/* SEO Links */}
          <SEOLinkHub
            currentPage="/online-hair-loss-treatment-hyderabad"
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
