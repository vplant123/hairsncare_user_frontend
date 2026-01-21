import React, { useState } from "react";
import "./chennai.css";
import { useNavigate } from "react-router-dom";
import SEOLinkHub from "../../components/SEOLinkHub";

export default function Chennai() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const MarqueeCards = ({ items, duration = "26s" }) => {
    return (
      <div className="chennai-cards-marquee" aria-label="Scrolling highlights">
        <div
          className="chennai-cards-track"
          style={{ "--marquee-duration": duration }}
        >
          {items.map((item, index) => (
            <div key={`a-${index}`} className="chennai-card">
              {item?.imageSrc ? (
                <img
                  className="chennai-card-img"
                  src={item.imageSrc}
                  alt={item.text}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : null}
              <span className="chennai-card-text">{item.text}</span>
            </div>
          ))}
          <div className="chennai-cards-dup" aria-hidden="true">
            {items.map((item, index) => (
              <div key={`b-${index}`} className="chennai-card">
                {item?.imageSrc ? (
                  <img
                    className="chennai-card-img"
                    src={item.imageSrc}
                    alt={item.text}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}
                <span className="chennai-card-text">{item.text}</span>
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
      question: "Do you have any physical clinics in Chennai?",
      answer:
        "No, all consultations and treatments are provided online, with home delivery across Chennai.",
    },
    {
      question: "Are the medicines safe?",
      answer:
        "Yes. We use clinically approved, tried-and-tested allopathic medicines.",
    },
    {
      question: "How soon can I see results?",
      answer:
        "Most patients notice reduced hair fall within a few weeks. Results depend on the hair loss stage.",
    },
    {
      question: "Is this suitable for men and women?",
      answer:
        "Yes. Our hair loss treatments are fully customised for both.",
    },
  ];

  return (
    <>
      <div className="chennai-treatment">
        <div className="chennai-container">
          {/* Hero / Intro Section */}
          <div className="chennai-hero">
            <div className="hero-content">
              <h1 className="hero-title">
                Online Hair Loss Treatment in Chennai
              </h1>
              <h2 className="hero-subtitle">
                Personalized Hair Care Solutions
              </h2>
              <p className="hero-description">
                <strong>Customized Hair Loss Solutions for Chennai Residents</strong>
              </p>
              <p className="hero-description">
                Having hair fall issues in a humid atmosphere in Chennai? At Hairsncares, we provide you with the best hair loss treatment in Chennai through online consultation. Our hair care solutions do not require you to visit our clinic.
              </p>
              <p className="hero-description">
                At Hairsncares, we engage in the accurate diagnosis and effective treatment of hair loss and the management of the condition from the root causes. We offer the services conveniently at home in Chennai.
              </p>
              <div className="hero-cta">
                <button
                  className="chennai-cta-button"
                  onClick={handleTakeHairTest}
                >
                  Take a Hair Test
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80"
                alt="Online Hair Loss Treatment - Professional Dermatologist Consultation"
                className="hero-img"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Online Consultation Section */}
          <section className="chennai-section chennai-why-choose-section">
            <h2 className="chennai-section-title">
              Personalised Hair Loss Solution in Chennai (100% Online)
            </h2>
            <p className="chennai-section-description">
              Hair loss in Chennai is primarily triggered by factors such as humidity, sweating-related scalp problems, hard water, stress, and lifestyle issues. Hairsncares offers customised solutions to help you with your hair loss problems, unlike other suppliers that offer standard products for all clients regardless of their condition.
            </p>
            <MarqueeCards
              items={[
                { text: "✔ Online hair loss diagnosis by specialists", imageSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80" },
                { text: "✔ Allopathy Medicines, clinically proven", imageSrc: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80" },
                { text: "✔ Personalised hair care treatment options", imageSrc: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&q=80" },
                { text: "✔ Home delivery all over Chennai", imageSrc: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=400&q=80" },
                { text: "✔ Continuous online support & follow-ups", imageSrc: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=400&q=80" },
              ]}
              duration="24s"
            />
            <p className="chennai-section-description">
              This guarantees that you get the best hair loss treatment that is applicable to you.
            </p>
          </section>

          {/* Diagnosis Process Section */}
          <section className="chennai-section chennai-causes-section">
            <h2 className="chennai-section-title">
              Online Hair Loss Diagnosis – Chennai
            </h2>
            <p className="chennai-section-description">
              Our process begins with an in-depth hair loss consultation entirely via the Internet:
            </p>
            <MarqueeCards
              items={[
                { text: "Assessment of hair/scalp via photos", imageSrc: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80" },
                { text: "Medical history & lifestyle assessment", imageSrc: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&q=80" },
                { text: "Determination of hair loss stages", imageSrc: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=400&q=80" },
                { text: "Root Cause Analysis (genetic, hormonal, environmental)", imageSrc: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80" },
              ]}
              duration="22s"
            />
            <p className="chennai-section-description">
              This guarantees that you get the best hair loss treatment that is applicable to you.
            </p>
          </section>

          {/* Hair Loss Stages Section */}
          <section className="chennai-section chennai-success-section chennai-stages-section">
            <h2 className="chennai-section-title">
              Hair Loss Stages &amp; Personalized Treatment Solutions
            </h2>
            <p className="chennai-section-description">
              Understanding your hair loss stage helps achieve faster and better results. Below is a clear stage-wise breakdown for Chennai patients:
            </p>

            <div className="chennai-stages-table-wrapper">
              <table className="chennai-stages-table">
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
                    <td>Mild hair fall, itchy scalp, weak roots</td>
                    <td>Preventive hair treatment, medicated shampoos, nutritional support</td>
                    <td>Hair fall control in 4–6 weeks, stronger hair in 2–3 months</td>
                  </tr>
                  <tr>
                    <td>Stage 2: Noticeable Thinning</td>
                    <td>Increased shedding, reduced density</td>
                    <td>Allopathy medicines, scalp treatment, hair growth solutions</td>
                    <td>Reduced hair fall in 6–8 weeks, density improvement in 3–4 months</td>
                  </tr>
                  <tr>
                    <td>Stage 3: Visible Scalp Areas</td>
                    <td>Receding hairline, thinning crown</td>
                    <td>Advanced hair loss management, growth stimulants</td>
                    <td>New hair growth in 3–4 months, visible results in 5–6 months</td>
                  </tr>
                  <tr>
                    <td>Stage 4: Advanced Hair Loss</td>
                    <td>Bald patches, heavy thinning</td>
                    <td>Intensive personalized solutions, long-term medical care</td>
                    <td>Hair loss stabilization in 2–3 months, partial regrowth in 6–9 months</td>
                  </tr>
                  <tr>
                    <td>Stage 5: Severe Hair Loss</td>
                    <td>Large bald areas</td>
                    <td>Hair preservation, expert-guided treatment & future planning</td>
                    <td>Results vary; focus on control within 3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="chennai-section-note">
              Early diagnosis leads to faster and more effective results.
            </p>
          </section>

          {/* Why Choose Section */}
          <section className="chennai-section chennai-why-works-section">
            <h2 className="chennai-section-title">
              Why Choose Hairsncares for Hair Loss Treatment in Chennai
            </h2>
            <MarqueeCards
              items={[
                { text: "Best Hair Loss Treatment using proven allopathic medicines", imageSrc: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80" },
                { text: "Customised solutions for Chennai's weather", imageSrc: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80" },
                { text: "No clinic visit is required, as care is fully online", imageSrc: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80" },
                { text: "Quick and noticeable outcomes", imageSrc: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
                { text: "It is suitable for both men and women", imageSrc: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80" },
              ]}
              duration="26s"
            />
            <p className="chennai-section-description">
              Our solutions for hair care are made to work well with the high humidity as well as the scalp type found in Chennai.
            </p>
            <div className="chennai-section-cta">
              <button className="chennai-cta-button" onClick={handleTakeHairTest}>
                Take a Hair Test
              </button>
            </div>
          </section>

          {/* Hair Growth Solutions Section */}
          <section className="chennai-section chennai-services-section">
            <h2 className="chennai-section-title">Hair Growth Solutions That Actually Work</h2>
            <p className="chennai-section-description-Hair-Growth">
              Our hair growth solutions focus on:
            </p>
            <MarqueeCards
              items={[
                {
                    text: "Strengthening hair follicles",
                    imageSrc:
                    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Improving scalp health",
                    imageSrc:
                    "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Reducing excess sweat-related hair fall",
                    imageSrc:
                    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Stimulating natural hair regrowth",
                    imageSrc:
                    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80",
                },
              ]}
              duration="18s"
            />
            <p className="chennai-section-description-Hair-Growth">
              Treatment plans are adjusted based on progress to ensure optimal results.
            </p>
          </section>

          {/* Who Benefits Section */}
          <section className="chennai-section chennai-who-can-use-section">
            <h2 className="chennai-section-title">
              Who all can benefit from our Chennai hair care solutions?
            </h2>
            <MarqueeCards
              items={[
                {
                    text: "Men & women facing hair fall",
                    imageSrc:
                    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Early-stage thinning of hair",
                    imageSrc:
                    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Hair fall due to stress or moisture",
                    imageSrc:
                        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Genetic or hormonal hair difficulties",
                    imageSrc:
                        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
                },
                {
                    text: "Anybody looking for customised hair loss solutions in Chennai",
                    imageSrc:
                        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
                },

              ]}
              duration="26s"
            />
          </section>

          {/* Final CTA Section */}
          <section className="chennai-section chennai-final-cta-section">
            <h2 className="chennai-section-title">
              Start your personalized hair loss treatment today
            </h2>
            <p className="chennai-final-cta-description">
              By all means, do not let your hair loss increase with the passage of time. Begin early to derive the best results.
            </p>
            <h3 className="chennai-final-cta-subtitle">
              Book your free online hair consultation now!
            </h3>
            <p className="chennai-final-cta-description">
              Expert diagnosis, personalized hair treatment, and effective hair growth solutions—brought right to your doorsteps in Chennai.
            </p>
            <div className="chennai-final-cta-button">
              <button
                className="chennai-cta-button large"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="chennai-faq-section">
            <h2 className="chennai-section-title">FAQs</h2>
            <div className="chennai-faq-container">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`chennai-faq-item ${isOpen ? "open" : ""}`}
                  >
                    <h3
                      className="chennai-faq-question"
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
                    <p className={`chennai-faq-answer ${isOpen ? "open" : ""}`}>
                      {faq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Brand Statement */}
          <section className="chennai-section chennai-brand-section">
            <h3 className="chennai-brand-title">
              Hairsncares—Trusted Personalised Hair Care Solutions for Chennai
            </h3>
            <div className="chennai-final-cta-button">
              <button
                className="chennai-cta-button large"
                onClick={handleTakeHairTest}
              >
                Take a Hair Test
              </button>
            </div>
          </section>

         

          {/* SEO Links */}
          <SEOLinkHub
            currentPage="/online-hair-loss-treatment-chennai"
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
