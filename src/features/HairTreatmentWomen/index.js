import React, { useState } from "react";
import "./index.css";
import BeforeAfter from "../before-after/BeforeAfter";
import Footer from "../footer/Footer";
import Faq from "../our-specialist/faq/Faq";
import { useSelector } from "react-redux";
import {
  LeftAnimatedDiv,
  RightAnimatedDiv,
  ZoomInDiv,
  ZoomInDiv2
} from "../../componet/Animation";
import ShoppingFeature from "../shopping-feature/ShoppingFeature";
import Navbar from "../nav/Navbar";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function HairTreatmentWomen() {
  const [read1, setRead1] = useState(false);
  const [read2, setRead2] = useState(false);
  const [read3, setRead3] = useState(false);
  const [read4, setRead4] = useState(false);
  const [read5, setRead5] = useState(false);
  const [read6, setRead6] = useState(false);
  const [read7, setRead7] = useState(false);
  const [read8, setRead8] = useState(false);
  const [read9, setRead9] = useState(false);
  const [read10, setRead10] = useState(false);

  const content = useSelector((state) => state.content.hairWomen);
  console.log("jojkrgreor", content);
  const navigate = useNavigate();

  let section3 = [
    {
      img: "/assets/img/hairTreatmentWomen/image-4.png",
      desc: "Hormonal Imbalances",
      text: "Things like menopause, pregnancy, or thyroid issues can wreak havoc on your hair.",
      alt: "Representation of hormonal influences on female health, with pills, a clock, and a gender symbol. Key insights on hormonal imbalances affecting female hair loss.",
      title: "Hormonal Imbalance and Hair Loss in Women"
    },
    {
      img: "/assets/img/hairTreatmentWomen/image-5.png",
      desc: "Genetics",
      text: "If your mom or grandmother had androgenetic alopecia (hereditary hair loss), there’s a chance you might, too.",
      alt: "Doctor examining DNA strand to understand genetic causes of hair loss in women. Focus on genetic hair loss insights and solutions.",
      title: "Genetic Causes of Hair Loss in Women"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1730232446/hair-assessment/qgxyqoi5f0vjiue9fji5.png",
      desc: "Stress",
      text: "Both physical and emotional stress can cause telogen effluvium, a temporary shedding that could lead to more severe thinning if not addressed.",
      alt: "Stressed woman experiencing hair loss, symbolizing the impact of stress-induced hair shedding in women. Focus on stress-related hair loss causes and solutions.",
      title: "Stress-Induced Hair Loss in Women"
    },
    {
      img: "/assets/img/hairTreatmentWomen/image-7.png",
      desc: "Dietary Deficiencies",
      text: "A lack of iron or biotin can make your hair weak and thin. We often overlook how important a nutrient-rich diet is for hair health.",
      alt: "Healthy food choices versus sugary snacks, highlighting the impact of nutrition on female hair health and the role of diet in preventing hair loss.",
      title: "Nutrition's Role in Preventing Hair Loss in Women"
    },
    {
      img: "/assets/img/hairTreatmentWomen/image-8.png",
      desc: "Medical Conditions",
      text: "Conditions like autoimmune diseases or scalp infections can interfere with your hair’s growth cycle",
      alt: "Doctor creating a personalized plan for female hair loss treatments and prevention, supporting effective hair health solutions.",
      title: "Effective Female Hair Loss Treatment Plans"
    },
  ];

  let section4 = [
    {
      img: "/assets/img/hairTreatmentWomen/image-9.png",
      desc: "Medical Treatments",
      text: "Dermatologist-approved medications like Minoxidil or Redensyl can stimulate regrowth and stop further loss",
      alt: "Healthcare professional prepares PRP treatment for medical hair loss solutions with icons representing innovative technologies in hair restoration.",
      title: "PRP and Stem Cell Therapy for Hair Loss"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1730232542/hair-assessment/fitc8qfmqebq7mljrtvi.png",
      desc: "Hair Procedures",
      text: "Options like PRP (Platelet-Rich Plasma), VGROW, Stem Cell PRP, GFC PRP, and VThread Therapy are fantastic for rejuvenating the scalp and promoting new hair growth. I’ve seen incredible results with these in my practice.",
      alt: "Specialist administers PRP hair restoration treatment to female patient’s scalp, targeting hair regrowth and strengthening at HairsnCares.",
      title: "PRP Hair Restoration Procedure"
    },
    {
      img: "/assets/img/hairTreatmentWomen/image-11.png",
      desc: "Hair Transplants",
      text: "For those dealing with more advanced hair loss, procedures like FUE (Follicular Unit Extraction), DHI (Direct Hair Implantation), and my own innovations, MHI / MHI+ (Modified Hair Implantation), can work wonders. These are especially effective for women with significant thinning.",
      alt: "Doctor examines patient's scalp before hair transplant procedure at HairsnCares, providing solutions for hair restoration and hair health.",
      title: "Expert Hair Transplant Procedure"
    },
    {
      img: "/assets/img/hairTreatmentWomen/image-12.png",
      desc: "Natural Remedies",
      text: "If you’re looking for a more holistic approach, essential oils like rosemary and supplements like biotin or zinc can strengthen your hair naturally. I always recommend pairing these with medical treatments for the best results.",
      alt: "Natural ingredients and essential oils, including rosemary, cucumber, ginger, and citrus, for natural hair loss remedies at HairsnCares.",
      title: "Natural Remedies for Hair Loss"
    },
    {
      img: "/assets/img/hairTreatmentWomen/image-13.png",
      desc: "Lifestyle Adjustments",
      text: "Reducing stress and sticking to a nutrient-rich diet can do wonders for your long-term hair health",
      alt: "Blocks spelling 'LIFESTYLE' symbolizing the impact of lifestyle changes on hair health, as promoted by HairsnCares for natural hair loss remedies.",
      title: "Hair Health with Lifestyle Changes"
    },
  ];

  const [section5Sel, setSection5Sel] = useState(1)
  let section5 = [
    {
      desc: "Minoxidil",
      text: "This topical treatment is a tried-and-true solution for stimulating hair growth",
    },
    {
      desc: "Hair-Strengthening Shampoos",
      text: "Products formulated with DHT blockers or ketoconazole can help reduce shedding and encourage regrowth.",
    },
    {
      desc: "Essential Oils",
      text: "Oils like rosemary and peppermint improve scalp circulation, which promotes growth.",
    },
    {
      desc: "Hair Supplements",
      text: "Adding biotin, iron, or zinc to your diet can strengthen your hair and improve scalp health.",
    },
  ];
  const [selectedQ, setSelectedQ] = useState(0);

  let section8 = [
    {
      desc: "What causes hair loss in women? ",
      text: "Hair loss in women can stem from hormonal changes (like menopause or pregnancy), genetics, stress, nutritional deficiencies, or underlying medical conditions. Each factor requires a unique treatment plan.",
    },
    {
      desc: "How does a hair test help with hair loss? ",
      text: "A hair test from HairsnCares.com analyzes your hair health, pinpointing the exact reasons for your hair loss. This helps us design a treatment plan specifically customized to suit your unique needs",
    },
    {
      desc: "What are the best female hair loss treatments? ",
      text: "The best treatments range from Minoxidil and Redensyl to advanced procedures like PRP and Stem Cell Therapy. Personalized plans will help find the best option for your specific needs.",
    },
    {
      desc: "Is thinning hair in women reversible? ",
      text: "Yes, in many cases, thinning hair can be reversed if caught early. The success of treatments depends on identifying the root cause and acting quickly.",
    },
    {
      desc: "What are the most effective hair loss remedies for women? ",
      text: "Effective remedies include medical treatments like VGROW, Stem Cell PRP, and in some cases, hair transplants like MHI / MHI+.",
    },
  ];

  return (
    <Navbar>
      <div
        className="d-flex flex-column"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <Helmet>
          <link rel="canonical" href="https://hairsncares.com/hair-loss-women-causes-treatments-remedies" />
        </Helmet>
        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div className="main-section-1-htw desktop-view-1 container">
            <ZoomInDiv
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 1, delay: 0.5 }}
              className="d-flex flex-column main-section-1-htw-left">
              <div className="text-1-section-1-htw-left">
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section1?.title }}
                />
              </div>
              <div className="text-2-section-1-htw-left">
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section1?.subTitle }}
                />
              </div>
              <div className="text-3-section-1-htw-left">
                <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc }} />
              </div>
            </ZoomInDiv>
            <RightAnimatedDiv className="d-flex flex-column main-section-1-htw-right">
              <img src="/assets/img/hairTreatmentWomen/dr-amit-agarkar-hair-care-expert.png" alt="Dr. Amit Agarkar, expert in Hair Loss and Hair Care Treatments, known for his personalized approach to hair health and growth."
                title="Dr. Amit Agarkar – Hair Specialist"
              />
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="d-flex flex-column main-section-2-htw container main-div-resp">
          <div
          className="text-1-section-2-htw"
                  dangerouslySetInnerHTML={{ __html: content?.section2?.title }}
                />
          <ZoomInDiv2 className="text-2-section-2-htw">
            <div
                  dangerouslySetInnerHTML={{ __html: content?.section2?.subTitle }}
                />
          </ZoomInDiv2>
          <div className="desktop-view">
            <LeftAnimatedDiv className="main-section-2-htw-left">
              <img
                src={content?.section2?.image}
                style={{ height: "90%", width: "98%" }}
                alt={content?.section2?.alt}
              />
            </LeftAnimatedDiv>
            <RightAnimatedDiv className="text-3-section-2-htw main-section-2-htw-right strong-black m-0">
              <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc }} />
              <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc1 }} />
              <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc2 }} />
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="main-section-3-htw main-div-resp">
          <div className="d-flex flex-column container" style={{ padding: "3% 0 3% 0" }}>
            <div className="text-1-section-3-htw">
            <div
              dangerouslySetInnerHTML={{ __html: content?.section3?.title }}
            />
            </div>
            <ZoomInDiv2 style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-2-section-3-htw width-for-text-heading-80" >
                <div
              dangerouslySetInnerHTML={{ __html: content?.section3?.subTitle }}
            />
              </div>
            </ZoomInDiv2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-3-htw width-for-text-heading-75 m-text-left">
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section3?.desc }}
                />
              </div>
            </div>

            <div className="d-flex flex-column mt-3" style={{ gap: "15px" }}>
              {content?.section3?.forms?.map((item) => {
                return (
                  <ZoomInDiv className="sub-section-3-htw d-flex">
                    <div className="sub-img-section-3-htw div1">
                      <img
                        src={item?.image}
                        style={{ height: "100%", width: "100%" }}
                        alt={item?.image}
                      />
                    </div>
                    <div
                      style={{
                        gap: "10px",
                      }}
                      className="d-flex flex-column horizontal-card-text div2"
                    >
                      <h5 className="mfs-2 sub-text-1-section-3-htw"><div dangerouslySetInnerHTML={{ __html: item.description}} /></h5>
                      <div className="sub-text-2-section-3-htw mfs-1"><div dangerouslySetInnerHTML={{ __html: item.title}} /></div>
                    </div>
                  </ZoomInDiv>
                );
              })}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                className="sub-text-2-section-3-htw mt-5 width-for-text-heading-80"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section3?.footerText }}
                />
              </div>
            </div>

            <RightAnimatedDiv className="flex-center-row">
              <button
                onClick={() => navigate("/take-hair-test")}
                className="btn sub-button-section-3-op"
              >
                TAKE AN ONLINE HAIR TEST
              </button>
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="main-div-resp">
          <div className="d-flex flex-column container" style={{ padding: "3% 0 3% 0" }}>
            <div className="text-1-section-4-htw">
              <div
                  dangerouslySetInnerHTML={{ __html: content?.section4?.title }}
              />
            </div>
            <LeftAnimatedDiv style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-2-section-4-htw width-for-text-heading-80" >
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section4?.subTitle }}
              />
              </div>
            </LeftAnimatedDiv>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-4-htw width-for-text-heading-75 m-text-left">
              <div
                  dangerouslySetInnerHTML={{ __html: content?.section4?.desc }}
              />
              </div>
            </div>

            <div className="d-flex flex-column mt-3" style={{ gap: "15px" }}>
              {content?.section4?.forms.map((item) => {
                return (
                  <ZoomInDiv className="sub-section-4-htw d-flex">
                    <div className="sub-img-section-4-htw">
                      <img
                        src={item?.image}
                        style={{ height: "100%", width: "100%" }}
                        alt={item?.image}
                      />
                    </div>
                    <div
                      style={{
                        width: "65%",
                        gap: "10px",
                      }}
                      className="d-flex flex-column horizontal-card-text"
                    >
                      <div className="sub-text-1-section-4-htw"><h5 className="mfs-1 new-section4-htw"><div dangerouslySetInnerHTML={{ __html: item?.description}} /></h5></div>
                      <div className="sub-text-2-section-4-htw"><div dangerouslySetInnerHTML={{ __html: item?.title}} /></div>
                    </div>
                  </ZoomInDiv>
                );
              })}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                className="sub-text-2-section-3-htw mt-5 m-text-left"
                style={{ width: "80%", color: "black" }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section4?.footerText }}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="main-section-5-htw main-div-resp">
          <div className="d-flex flex-column container" style={{ padding: "3% 0 3% 0" }}>
            <div className="text-1-section-5-htw mt-3">
              <div
                  dangerouslySetInnerHTML={{ __html: content?.section5?.title }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RightAnimatedDiv className="text-2-section-5-htw width-for-text-heading-80">
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section5?.subTitle }}
              />
              </RightAnimatedDiv>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-5-htw width-for-text-heading-75">
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section5?.desc }}
              />
              </div>
            </div>

            <div className="desktop-view-1 mt-3" style={{ gap: "15px" }}>
              {content?.section5?.forms?.map((item, indx) => {
                return (
                  <ZoomInDiv
                    className="mini-card-section-4-htw d-flex flex-column width-for-text-heading-23"
                    style={{
                      padding: "30px",
                      alignItems: "center",
                      gap: "15px",
                      cursor: "pointer",
                      background:
                        indx == section5Sel ? "rgba(0, 160, 227, 1)" : "#FFFFFF",
                    }}
                    onClick={() => {
                      setSection5Sel(indx)
                    }}
                  >
                    <div
                      className="mini-card-num-div-section-4-htw"
                      style={{ padding: "10px", width: "20%" }}
                    >
                      <div className="mini-card-num-text-section-4-htw flex-center-row">
                        {indx + 1}
                      </div>
                    </div>
                    <div
                      className="mini-card-text-1-section-4-htw"
                      style={{
                        color: section5Sel == indx ? "#FFFFFF" : "black",
                      }}
                    >
                      <h3><div dangerouslySetInnerHTML={{ __html: item?.title}} /></h3>
                    </div>
                    <div
                      className="mini-card-text-2-section-4-htw"
                      style={{
                        color: section5Sel == indx ? "#FFFFFF" : "rgba(97, 97, 97, 1)",
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: item?.description}} />
                    </div>
                  </ZoomInDiv>
                );
              })}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                className="sub-text-2-section-5-htw mt-5"
                style={{ width: "80%" }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section5?.footerText }}
              />
              </div>
            </div>

            <RightAnimatedDiv className="flex-center-row">
              <button
                onClick={() => navigate("/best-hair-care-products-hair-loss-scalp-health")}
                className="btn sub-button-section-3-op"
              >
                Explore Remedies
              </button>
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="d-flex flex-column main-section-2-htw container main-div-resp">
          <div className="desktop-view">
            <LeftAnimatedDiv className="main-section-2-htw-left">
            
              <img
                src={content?.section6?.image}
                style={{ height: "100%", width: "100%" }}
                alt={content?.section6?.alt}
              />
            </LeftAnimatedDiv>
            <div className=" main-section-2-htw-right d-flex flex-column">
              <div
                className="text-1-section-2-htw"
                style={{ textAlign: "left" }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section6?.title }}
              />
              </div>
              <ZoomInDiv2
                className="text-2-section-2-htw"
                style={{ textAlign: "left" }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section6?.subTitle }}
              />
              </ZoomInDiv2>
              <div className="text-3-section-2-htw">
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section6?.desc }}
                  style={{lineHeight: "25px"}}
              />
                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section6?.footerText }}
                  style={{lineHeight: "25px"}}
              />
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/take-hair-test")}
                  className="btn sub-button-section-3-op"
                >
                  Take A Hair Test
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div className="main-section-1-htw desktop-view-1 container">
            <div className="d-flex flex-column main-section-1-htw-left">
              <ZoomInDiv className="text-1-section-1-htw-left"><h2>Conclusion</h2></ZoomInDiv>
              <div className="text-3-section-1-htw-left">
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section7?.desc }}
                  style={{lineHeight: "25px"}}
              />
                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{ __html: content?.section7?.footerText }}
                  style={{lineHeight: "25px"}}
              />
              </div>
              <ZoomInDiv className="">
                <button
                  onClick={() => navigate("/take-hair-test")}
                  className="btn sub-button-section-3-op"
                >
                  Start Your Treatment
                </button>
              </ZoomInDiv>
            </div>
            <RightAnimatedDiv className="d-flex flex-column main-section-1-htw-right">
              <img
                src={content?.section7?.image}
                alt={content?.section7?.alt}
              />
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="container mt-3 main-div-resp">
          <ZoomInDiv2 className="main-text-section-8-htw">
            <h2>Frequently Asked Questions (FAQs)</h2>
          </ZoomInDiv2>
          <div className="mt-5 d-flex flex-column">
            {section8?.map((item, indx) => {
              return (
                <div className="d-flex flex-column">
                  <div
                    className="main-heading-box-section-8-htw d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div
                      className="main-heading-text-section-8-htw faq-text"
                      style={{ padding: "10px" }}
                    >
                      <h3 className="mfs-1">{item?.desc}</h3>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        if (selectedQ == indx + 1) setSelectedQ(0);
                        else setSelectedQ(indx + 1);
                      }}
                      className="faq-icon"
                    >
                      <img
                        src={"/assets/img/hairTreatmentWomen/image-16.png"}
                        className='faq-dropDown'
                        alt="Hair loss men faqs"
                        title="Hair loss men faqs"

                      />
                    </div>
                  </div>
                  {selectedQ == indx + 1 ? (
                    <div className="main-sub-heading-text-section-8-htw">
                      {item?.text}

                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <ShoppingFeature col={"1"} />
        <Footer />
      </div>
    </Navbar>
  );
}
