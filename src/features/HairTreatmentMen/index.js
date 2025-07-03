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
} from "../../componet/Animation";
import ShoppingFeature from "../shopping-feature/ShoppingFeature";
import Navbar from "../nav/Navbar";
import { Padding } from "@mui/icons-material";
import { Helmet } from "react-helmet";
export default function HairTreatmentMen() {
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
  const [activeSec5, setActiveSec5] = useState(0);

  const content = useSelector((state) => state.content.hairMen);
  console.log("jojkrgreor", content);

  let section3 = [
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729376530/hair-assessment/gyuljzehtovguzt0til7.png",
      desc: "Nutritional Support",
      text: "A balanced diet rich in protein, iron, zinc, biotin, and omega-3 fatty acids is essential for hair health. Deficiencies in these nutrients can lead to hair thinning or loss.",
      alt: "Selection of nutrient-rich foods supporting healthy hair growth, emphasizing the role of diet in preventive care for hair loss in men.",
      title: "Diet for Healthy Hair"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729376572/hair-assessment/a8udim7s95eahadmv1en.png",
      desc: "Lifestyle Changes",
      text: "Managing stress through practices like meditation, exercise, and adequate sleep, along with regular scalp care, is crucial for hair growth. Scalp massages and improved circulation through physical activity can also promote healthy hair.",
      alt: "Healthy lifestyle essentials, including measuring tape, chalkboard, and apple, highlighting the role of lifestyle changes in preventing hair loss in men.",
      title: "Lifestyle Changes for Preventing Hair Loss"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729376593/hair-assessment/ue0b1mc4fgcw82uu56um.png",
      desc: "Avoid Damaging Hair Treatments",
      text: " Limit the use of excessive heat, chemical treatments, and tight hairstyles, which can damage hair follicles.",
      alt: "Man inspecting a hair treatment product with concern, emphasizing the importance of avoiding damaging hair treatments in preventive hair loss care for men.",
      title: "Avoiding Damaging Hair Treatments"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729376641/hair-assessment/rewcimkla0j8lwy7vqri.png",
      desc: "Consult a Professional",
      text: "If you experience sudden or excessive hair loss, seek medical advice to rule out any underlying health conditions.",
      alt: "Two professionals discussing hair loss treatment options and dietary deficiency solutions for improving hair health.",
      title: "Dietary Deficiency and Hair Health Solutions"
    }
  ];


  let section5 = [
    {
      desc: "Receding Hairline",
      text: "A receding hairline is often the first noticeable sign of male pattern baldness. This type of hair loss typically begins at the temples and moves backward, creating an M-shaped pattern. Men may experience this in their late teens or early twenties",
    },
    {
      desc: "Thinning at the Crown",
      text: "Another common pattern of hair loss is thinning at the crown of the head. This often begins as a small bald spot that gradually expands outward. Men who experience this type of hair loss are likely in the middle stages of male pattern baldness (Norwood stages 3 to 5).",
    },
    {
      desc: "Generalized Thinning",
      text: "Unlike specific areas like the hairline or crown, some men experience generalized thinning across the entire scalp. This can lead to an overall reduction in hair density, making hair look noticeably thinner.",
    },
    {
      desc: "Complete Balding",
      text: "In the most advanced stages of male pattern baldness, men may experience complete balding, where only a thin ring of hair remains around the sides and back of the scalp. While this pattern is often genetic and largely irreversible, there are options to address it.",
    },
  ];
  const [selectedQ, setSelectedQ] = useState(0);

  let section8 = [
    {
      desc: "Can Hair Loss Be Reversed? ",
      text: "While some types of hair loss, such as telogen effluvium, can be reversed once the underlying cause is addressed, genetic hair loss (male pattern baldness) is typically permanent. However, treatments like minoxidil, finasteride, and hair transplants can slow down or reverse the progression in many cases.",
    },
    {
      desc: "How Do I Know If I’m Losing My Hair?",
      text: "Signs of hair loss include a receding hairline, thinning at the crown, or noticeable shedding during combing or washing. If you suspect hair loss, consult with a healthcare provider or dermatologist for a proper diagnosis.",
    },
    {
      desc: "Are There Natural Remedies for Hair Loss?",
      text: "Some natural remedies, such as massaging the scalp with essential oils (e.g., rosemary oil), consuming a nutrient-rich diet, and using supplements like biotin, can promote hair health. However, their effectiveness may vary from person to person, and they are not substitutes for clinically proven treatments.",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const splitDescription = (text) => {
    const mid = Math.floor(text.length / 2);
    const beforeMid = text.substring(0, mid);
    const afterMid = text.substring(mid);

    const lastPeriodIndex = beforeMid.lastIndexOf('.');
    if (lastPeriodIndex !== -1) {
      return [
        text.substring(0, lastPeriodIndex + 1),
        text.substring(lastPeriodIndex + 1)
      ];
    }
    return [beforeMid, afterMid];
  };

  const [firstPart, secondPart] = splitDescription(content?.section1?.desc || '');

  return (
    <Navbar>
      <div
        className="d-flex flex-column"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <Helmet>
          <link rel="canonical" href="https://hairsncares.com/effective-hair-loss-treatment-men" />
        </Helmet>
        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div className="main-section-1-htm desktop-view-1 container">
            <ZoomInDiv
              className="d-flex flex-column main-section-1-htw-left"
              style={{ padding: 0 }}
            >
              <div className="text-2-section-1-htw-left">
              <div dangerouslySetInnerHTML={{ __html: content?.section1?.title }} />
              </div>
              <div className="text-3-section-1-htw-left">
                <div dangerouslySetInnerHTML={{ __html: firstPart }} />
                {showMore && (
                  <div dangerouslySetInnerHTML={{ __html: secondPart }} />
                )}
              </div>
              <div className="">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="btn sub-button-section-3-op"
                >
                {showMore ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            </ZoomInDiv>
            <RightAnimatedDiv className="d-flex flex-column main-section-1-op-right">
              <img 
                src={content?.section1?.image}
                alt={content?.section1?.alt}
              />
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="d-flex flex-column main-section-2-htw container main-div-resp" style={{gap:"42px"}}>
          <div className="desktop-view" style={{ gap: "30px" }}>
            <LeftAnimatedDiv
              className="main-section-2-htw-left"
            >
              <img
                src={content?.section2?.image1}
                style={{ height: 650, width: "100%" }}
                alt={content?.section2?.alt1}
              />
            </LeftAnimatedDiv>
            <div className=" main-section-2-htw-right d-flex flex-column">
              <RightAnimatedDiv
                className="text-2-section-2-htw"
                style={{ textAlign: "left" }}
              >
                <div dangerouslySetInnerHTML={{ __html: content?.section2?.title }} />
              </RightAnimatedDiv>

              {content?.section2?.forms.slice(0,3).map((item, indx) => {
                  return <div className="d-flex" style={{ gap: "10px" }} key={indx}>
                  <div
                    className="mini-card-num-div-section-4-htw number-view-2"
  
                  >
                    <div className="mini-card-num-text-section-4-htw flex-center-row">
                      {indx + 1}
                    </div>
                  </div>
                  <div className="text-3-section-2-htw" style={{ width: "90%" }}>
                    <h3><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3>
                    <div dangerouslySetInnerHTML={{ __html: item.desc}} />
                  </div>
                </div>
              })}
            </div>
          </div>

          <div className="desktop-view-1" style={{ gap: "30px" }}>
            <div className=" main-section-2-htw-right d-flex flex-column">
              {content?.section2?.forms?.slice(3,5)?.map((item, indx) => {
                  return <div className="d-flex" style={{ gap: "10px" }} key={indx}>
                  <div
                    className="mini-card-num-div-section-4-htw number-view-2"
  
                  >
                    <div className="mini-card-num-text-section-4-htw flex-center-row">
                      {indx + 4}
                    </div>
                  </div>
                  <div className="text-3-section-2-htw" style={{ width: "90%" }}>
                    <h3><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3>
                    <div dangerouslySetInnerHTML={{ __html: item.desc}} />
                  </div>
                </div>
              })}
            </div>
            <RightAnimatedDiv
              className="main-section-2-htw-left"
            >
              <img
                src={content?.section2?.image2}
                style={{ height: "100%", width: "100%" }}
                alt={content?.section2?.alt2}
              />
            </RightAnimatedDiv>
          </div>
        </div>



        <div className="main-section-5-htm padding-60">
          <div className="d-flex flex-column container">
            <RightAnimatedDiv style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-2-section-5-htw" style={{ width: "80%", color: "white" }}>
              <div dangerouslySetInnerHTML={{ __html: content?.section3?.title }} />
              </div>
            </RightAnimatedDiv>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-5-htw width-for-text-heading-75 m-text-left" style={{ color: "white" }}>
              <div dangerouslySetInnerHTML={{ __html: content?.section3?.desc }} />
              </div>
            </div>

            <div className="desktop-view-1 mt-3" style={{ gap: "15px" }}>
              {content?.section3?.forms?.map((item, indx) => {
                return <ZoomInDiv
                className="mini-card-section-4-htw d-flex flex-column width-for-text-heading-23"
                style={{
                  padding: "30px",
                  // width: "23%",
                  alignItems: "center",
                  gap: "15px",
                  background:
                    activeSec5 === indx ? "rgba(0, 160, 227, 1)" : "#FFFFFF",
                }}
                onClick={() => setActiveSec5(indx)}
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
                    color: activeSec5 === indx ? "#FFFFFF" : "black",
                  }}
                >
                  <h3 className="m-text-left"><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3>
                </div>
                <div
                  className="mini-card-text-2-section-4-htw m-text-left"
                  style={{
                    color: activeSec5 === indx ? "#FFFFFF" : "rgba(97, 97, 97, 1)",
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.desc}} />
                </div>
              </ZoomInDiv>
              })}
            </div>

          </div>
        </div>

        <div className="d-flex flex-column main-section-2-htw container main-div-resp"  >
          <ZoomInDiv className="text-2-section-2-htw">
          <div dangerouslySetInnerHTML={{ __html: content?.section4?.title }} />
          </ZoomInDiv>

          <div className="desktop-view" style={{ gap: "30px" }}>
            <LeftAnimatedDiv
              className="main-section-2-htw-left"
            // style={{ height: "100vh" }}
            >
              <img
                src={content?.section4?.image1}
                style={{ height: "100%", width: "100%" }}
                alt={content?.section4?.alt1}
              />
            </LeftAnimatedDiv>
            <div className=" main-section-2-htw-right d-flex flex-column">
            {content?.section4?.forms.slice(0,3).map((item, indx) => {
                  return <div className="d-flex" style={{ gap: "10px" }} key={indx}>
                  <div
                    className="mini-card-num-div-section-4-htw number-view-2"
  
                  >
                    <div className="mini-card-num-text-section-4-htw flex-center-row">
                      {indx + 1}
                    </div>
                  </div>
                  <div className="text-3-section-2-htw" style={{ width: "90%" }}>
                    <h3><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3>
                    <div dangerouslySetInnerHTML={{ __html: item.desc}} />
                  </div>
                </div>
              })}
            </div>
          </div>

          <div className="desktop-view-1" style={{ gap: "30px" }}>
            <div className=" main-section-2-htw-right d-flex flex-column">
              {content?.section4?.forms?.slice(3,5)?.map((item, indx) => {
                  return <div className="d-flex" style={{ gap: "10px" }} key={indx}>
                  <div
                    className="mini-card-num-div-section-4-htw number-view-2"
  
                  >
                    <div className="mini-card-num-text-section-4-htw flex-center-row">
                      {indx + 4}
                    </div>
                  </div>
                  <div className="text-3-section-2-htw" style={{ width: "90%" }}>
                    <h3><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3>
                    <div dangerouslySetInnerHTML={{ __html: item.desc}} />
                  </div>
                </div>
              })}
            </div>
            <RightAnimatedDiv
              className="main-section-2-htw-left"
            >
              <img
                src={content?.section4?.image2}
                style={{ height: "100%", width: "100%" }}
                alt={content?.section4?.alt2}
              />
            </RightAnimatedDiv>
          </div>
        </div>

        <div style={{ background: "rgba(193, 237, 255, 1)", padding: "60px 0 60px 0" }}>
          <div className="d-flex flex-column container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RightAnimatedDiv className="text-2-section-5-htw" style={{ width: "80%" }}>
              <div dangerouslySetInnerHTML={{ __html: content?.section5?.title }} />
              </RightAnimatedDiv>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-5-htw width-for-text-heading-75" >
              <div dangerouslySetInnerHTML={{ __html: content?.section5?.desc }} />
                </div>
            </div>

            <div className="desktop-view-1 mt-3" style={{ gap: "15px" }}>
              {content?.section5?.forms?.map((item, indx) => {
                return (
                  <ZoomInDiv
                    className="mini-card-section-4-htw d-flex flex-column width-for-text-heading-23"
                    style={{
                      padding: "10px",
                      // width: "23%",
                      alignItems: "center",
                      gap: "15px",
                      background:
                        "none",
                    }}
                  >
                    <div
                      // className="mini-card-num-div-section-4-htw"
                      style={{ width: "100%" }}
                    >
                      <img src={item.image} style={{ width: "100%" }}
                        alt={item.title}
                        title={item.title}
                      />
                    </div>
                    <div
                      className="mini-card-text-1-section-4-htw"
                      style={{
                        color: "black",
                      }}
                    >
                      <h3><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3>
                    </div>
                    <div
                      className="mini-card-text-2-section-4-htw"
                      style={{
                        color: "rgba(97, 97, 97, 1)",
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.desc}} />
                    </div>
                  </ZoomInDiv>
                );
              })}
            </div>

          </div>
        </div>


        <div className="container mt-3 main-div-resp">
          <RightAnimatedDiv className="main-text-section-8-htw">
            <h2>Frequently <span className="blue-btw-text">Asked Questions</span> (FAQs)</h2>
          </RightAnimatedDiv>
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
                      <h3 className="mfs-2">{item?.desc}</h3>
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
                        alt="Hairsncares Faqs icon"
                        title="Hairsncares Faqs icon"

                      />
                    </div>
                  </div>
                  {selectedQ == indx + 1 ? (
                    <div className="main-sub-heading-text-section-8-htw mfs-3">
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
