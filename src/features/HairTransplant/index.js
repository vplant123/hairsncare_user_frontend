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
  ZoomInDiv2,
} from "../../componet/Animation";
import ShoppingFeature from "../shopping-feature/ShoppingFeature";
import Navbar from "../nav/Navbar";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
export default function HairTransplant() {
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

  const content = useSelector((state) => state.content.hairTransplant);
  console.log("jojkrgreor", content);
  const navigate = useNavigate();

  let section3 = [
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729540267/hair-assessment/jogssyy5utux2pg4yl4a.png",
      desc: "FUE Hair Transplant",
      text: "Short for Follicular Unit Extraction, this method involves extracting individual hair follicles from the donor area (usually the back of your head) and placing them in thinning or bald areas. It’s minimally invasive, leaves no visible scars, and provides a natural look. I’ve used this technique on hundreds of patients with great success. Learn more about FUE",
      alt: "Close-up of a man receiving an FUE hair transplant procedure, highlighting the advanced hair restoration technique.",
      title: "FUE Hair Transplant"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729540289/hair-assessment/sg5lospm0wlwkkezryaq.png",
      desc: "MHI / MHI+ Hair Transplant",
      text: "Now, this is where my passion lies. I’ve refined the Modified Hair Implantation (MHI) technique to offer precise control over the depth, angle, and direction of each hair follicle, resulting in an almost bloodless process. This is perfect for achieving high-density hairlines. With MHI+, we take it up a notch by adding enhanced growth factors like PRP (Platelet-Rich Plasma) and VThreads to accelerate healing and produce thicker, healthier hair. Explore MHI/MHI+.",
      alt: "Detailed view of an MHI hair transplant procedure showcasing advanced hair restoration techniques for natural-looking results.",
      title: "MHI Hair Transplant"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1732871057/hair-assessment/oar1dzcvnlknqmjw2rgc.png",
      desc: "DHI Hair Transplant",
      text: "Direct Hair Implantation takes FUE one step further. Using a special tool, the hair follicles are implanted directly into the scalp without creating incisions beforehand. This means greater precision, better control over the growth angle, and faster recovery. Discover DHI Hair Transplant.",
      alt: "Doctor performing DHI hair transplant on patient, a modern technique for direct hair implantation to restore hair with natural-looking results.",
      title: "DHI hair transplant"
    },
  ];

  let section4 = [
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729540831/hair-assessment/buhlqedi2ldneiawv9ne.png",
      desc: "Immediate Aftercare",
      text: "Avoid sun exposure, don’t scratch the grafts, and follow any prescribed treatments. Simple, right?",
      alt: "Immediate aftercare for hair transplant, focusing on post-procedure scalp care and monitoring for optimal recovery.",
      title: "Post Hair Transplant Aftercare"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729540847/hair-assessment/okps3prhpa6ltstwpjd8.png",
      desc: "Recovery Timeline",
      text: "You’ll be back to your usual routine in a few days, but avoid intense workouts for a couple of weeks. You’ll see initial results within 3-4 months, with full results in 6-10 months.",
      alt: "Hair transplant recovery timeline, illustrating stages of post-procedure progress with a focus on expected healing and growth phases.",
      title: "Recovery Timeline for Hair Transplant"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729540886/hair-assessment/dig50kugxr8xifyalw6u.png",
      desc: "When to Expect Results",
      text: "Hair regrowth starts in a few months, with MHI+ often showing results even faster due to enhanced growth factors.",
      alt: "Man checking hair growth in the mirror, showcasing when to expect visible results after a hair transplant for improved hair restoration.",
      title: "When to Expect"
    },
  ];

  const [selectSec, setSelectSec] = useState(0)
  let section5 = [
    {
      desc: "Clinic Proximity",
      text: "Don’t let distance hold you back—many people travel far and wide to receive treatment from a highly reputed and experienced surgeon. Quality results are worth the journey!",
    },
    {
      desc: "Surgeon Expertise",
      text: "Make sure your surgeon has a strong track record. I always tell my patients: don’t just look for years of experience—look for positive reviews and before-and-after photos.",
    },
    {
      desc: "Consultations and Reviews ",
      text: "Take your time. Book multiple consultations, ask questions, and trust your instincts.",
    },
  ];
  const [selectedQ, setSelectedQ] = useState(0);

  let section8 = [
    {
      desc: "What is the difference between FUE, DHI, and MHI hair transplants?",
      text: "FUE (Follicular Unit Extraction) involves extracting and implanting hair follicles in two separate steps. DHI (Direct Hair Implantation) uses a special tool to extract and implant follicles in one continuous process, offering greater precision for hairline and density adjustments. MHI (Modified Hair Implantation) adds advanced implantation tools and techniques, with MHI+ incorporating enhanced growth factors and VThread to stimulate faster regrowth and thicker hair.",
    },
    {
      desc: "How much does a hair transplant cost?",
      text: "Costs depend on procedure type, grafts needed, and clinic location. MHI+ is usually priced higher due to enhanced techniques and added benefits",
    },
    {
      desc: "Are the results of a hair transplant long-lasting?",
      text: "Yes, once the follicles are established, they continue to grow naturally for life",
    },
    {
      desc: "Is a hair transplant painful?",
      text: "Not at all! With local anesthesia, most patients feel little to no pain during the procedure.",
    },
    {
      desc: "What is the expected recovery time after a hair transplant?",
      text: "You’ll be back to your daily routine in just a few days. Full regrowth takes about 6-10 months, with MHI+ offering potentially faster recovery.",
    },
  ];

  return (
    <Navbar>
      <div
        className="d-flex flex-column"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <Helmet>
          <link rel="canonical" href="https://hairsncares.com/hair-transplants-fue-dhi-mhi-natural-restoration" />
        </Helmet>
        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div className="main-section-1-htw desktop-view-1 container">
            <ZoomInDiv
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ duration: 1, delay: 0.5 }}
              className="d-flex flex-column main-section-1-htw-left"
              style={{ padding: 0 }}
            >
              <div className="text-2-section-1-htw-left">
                {/* <h1>
                  <div dangerouslySetInnerHTML={{ __html: content?.section1?.title }} />
                </h1> */}
              </div>
              <div className="text-3-section-1-htw-left">
              <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc }} />
              </div>
              <div className="">
                <button
                  // onClick={() => navigate("/take-hair-test")}
                  className="btn sub-button-section-3-op"
                >
                  Learn More
                </button>
              </div>
            </ZoomInDiv>
            <RightAnimatedDiv className="d-flex flex-column main-section-1-htw-right">
              <img loading="lazy"
                alt={content?.section1?.alt}
                title="Hair Transplant Comparison"
                src={content?.section1?.image}
              />
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="d-flex flex-column main-section-2-htw container main-div-resp">
          <div className="text-1-section-2-htw"><div dangerouslySetInnerHTML={{ __html: content?.section2?.title }} /></div>
          <ZoomInDiv2 className="text-2-section-2-htw">
            <h2>
            <div dangerouslySetInnerHTML={{ __html: content?.section2?.subTitle }} />
            </h2>

          </ZoomInDiv2>
          <div className="desktop-view" style={{ gap: "5%" }}>
            <LeftAnimatedDiv className="main-section-2-htw-left">
              <img loading="lazy"
                alt={content?.section2?.alt}
                src={content?.section2?.image}
                style={{ height: "90%", width: "98%" }}
              />
            </LeftAnimatedDiv>
            <RightAnimatedDiv className="text-3-section-2-htw main-section-2-htw-right d-flex flex-column" style={{ gap: "10px" }}>
              <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc }} />
              <strong>
                Some common issues I hear in consultations include:
              </strong>

              {content?.section2?.forms?.map((item, index) => {
                return  <ZoomInDiv className="d-flex" style={{ gap: "20px" }} key={index}>
                <div
                  className="mini-card-num-div-section-4-htw number-view"
                // style={{ padding: "10px"}}
                >
                  <div className="mini-card-num-text-section-4-htw flex-center-row">
                    {index+1}
                  </div>
                </div>

                <div
                  className="text-3-section-2-htw"
                  style={{ color: "black", width: "80%" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.title}} />
                </div>
              </ZoomInDiv>
              })}

              <div>Sound familiar? Don’t worry, you’re not alone.</div>
              <div className="">
                <button
                  onClick={() => navigate("/take-hair-test")}
                  className="btn sub-button-section-3-op"
                >
                  Take a Hair Test
                </button>
              </div>
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="main-section-3-htw main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ padding: "3% 0 3% 0" }}
          >
            <div className="text-1-section-3-htw"><div dangerouslySetInnerHTML={{ __html: content?.section3?.title }} /></div>
            <ZoomInDiv2 style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-2-section-3-htw width-for-text-heading-80" >
                <h2>
                <div dangerouslySetInnerHTML={{ __html: content?.section3?.subTitle }} />
                </h2>
              </div>
            </ZoomInDiv2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-3-htw width-for-text-heading-75" >
              <div dangerouslySetInnerHTML={{ __html: content?.section3?.desc }} />
              </div>
            </div>

            <div className="desktop-view-1 mt-3" style={{ gap: "3%" }}>
              {content?.section3?.forms?.map((item) => {
                return (
                  <ZoomInDiv2
                    className="sub-section-3-htw d-flex flex-column width-for-text-heading-100"
                    style={{ height: "100%" }}
                  >
                    <div>
                      <img loading="lazy"
                        src={item.image}
                        style={{ height: "100%", width: "100%" }}
                        alt={item.alt}
                      />
                    </div>
                    <div className="sub-text-1-section-3-htw1"><h3><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3></div>
                    <div className="sub-text-2-section-3-htw"><div dangerouslySetInnerHTML={{ __html: item.desc}} /></div>
                  </ZoomInDiv2>
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
                <div dangerouslySetInnerHTML={{ __html: content?.section3?.footerText }} />
              </div>
            </div>

            <RightAnimatedDiv className="flex-center-row">
              <button
                onClick={() => navigate("/take-hair-test")}
                className="btn sub-button-section-3-op"
              >
                Explore Hair Restoration
              </button>
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ padding: "3% 0 3% 0" }}
          >
            <LeftAnimatedDiv
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="text-2-section-4-htw" >
                <p>
                <div dangerouslySetInnerHTML={{ __html: content?.section4?.title }} />
                </p>
              </div>
            </LeftAnimatedDiv>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-4-htw m-text-left mfs-1" style={{ width: "75%" }}>
              <div dangerouslySetInnerHTML={{ __html: content?.section4?.desc }} />
              </div>
            </div>

            <div className="desktop-view-1 mt-3" style={{ gap: "10%" }}>
              {content?.section4?.forms?.map((item, index) => {
                return <ZoomInDiv
                className="d-flex flex-column width-for-text-heading-50"
                style={{
                  padding: "30px",
                  gap: "15px",
                }}
                key={index}
              >
                <div
                  className="mini-card-num-div-section-4-htw number-view-2"
                >
                  <div className="mini-card-num-text-section-4-htw flex-center-row">
                    {index + 1}
                  </div>
                </div>
                <div
                  className="mini-card-text-1-section-4-htw"
                  style={{ textAlign: "left" }}

                >
                  <div dangerouslySetInnerHTML={{ __html: item.title}} />
                </div>
                <div
                  className="mini-card-text-2-section-4-htw"
                  style={{ textAlign: "left" }}

                >
                  <div dangerouslySetInnerHTML={{ __html: item.desc}} />
                </div>
              </ZoomInDiv>
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
                className="sub-text-2-section-3-htw mt-5"
                style={{ width: "80%", color: "black" }}
              >
                <div dangerouslySetInnerHTML={{ __html: content?.section4?.footerText }} />
              </div>
            </div>
          </div>
        </div>

        <div className="main-section-5-htw main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ padding: "3% 0 3% 0" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RightAnimatedDiv
                className="text-2-section-5-htw width-for-text-heading-80"
              // style={{ width: "80%" }}
              >
                <h2>
                <div dangerouslySetInnerHTML={{ __html: content?.section5?.title }} />
                </h2>

              </RightAnimatedDiv>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-5-htw width-for-text-heading-75">
              <div dangerouslySetInnerHTML={{ __html: content?.section5?.desc }} />
              </div>
            </div>

            <div className="desktop-view-1 mt-3" style={{ gap: "5%" }}>
              {content?.section5?.forms?.map((item, indx) => {
                return (
                  <ZoomInDiv
                    className="mini-card-section-4-htw d-flex flex-column width-for-text-heading-30"
                    style={{
                      padding: "30px",
                      // width: "30%",
                      height: "450px",
                      alignItems: "center",
                      gap: "30px",
                      background:
                        indx + 1 == selectSec ? "rgba(0, 160, 227, 1)" : "#FFFFFF",
                    }}
                    onClick={() => {
                      setSelectSec(indx + 1)
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
                        color: indx + 1 == selectSec ? "#FFFFFF" : "black",
                      }}
                    >
                      <h3><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3>
                    </div>
                    <div
                      className="mini-card-text-2-section-4-htw"
                      style={{
                        color: indx + 1 == selectSec ? "#FFFFFF" : "rgba(97, 97, 97, 1)",
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.desc}} />
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
                <div dangerouslySetInnerHTML={{ __html: content?.section5?.footerText }} />
              </div>
            </div>

            <RightAnimatedDiv className="flex-center-row">
              <button
                onClick={() => navigate("/take-hair-test")}
                className="btn sub-button-section-3-op"
              >
                Take a Hair Test
              </button>
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ padding: "3% 0 3% 0" }}
          >
            <div className="text-1-section-4-htw"><h2><div dangerouslySetInnerHTML={{ __html: content?.section6?.title }} /></h2> </div>
            <LeftAnimatedDiv
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="text-2-section-4-htw" >
              <div dangerouslySetInnerHTML={{ __html: content?.section6?.subTitle }} />
              </div>
            </LeftAnimatedDiv>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-3-section-4-htw" style={{ width: "75%" }}>
              <div dangerouslySetInnerHTML={{ __html: content?.section6?.desc }} />
              </div>
            </div>

            <div className="d-flex flex-column mt-3" style={{ gap: "15px" }}>
              {content?.section6?.forms?.map((item) => {
                return (
                  <ZoomInDiv className="sub-section-4-htw d-flex">
                    <div className="sub-img-section-4-htw">
                      <img loading="lazy"
                        src={item.image}
                        style={{ height: "100%", width: "100%" }}
                        alt={item.title}
                        title={item.title}
                      />
                    </div>
                    <div
                      style={{
                        width: "65%",
                        padding: "20px 0 10px 0",
                        gap: "10px",
                      }}
                      className="d-flex flex-column"
                    >
                      <div className="sub-text-1-section-4-htw"><h3><div dangerouslySetInnerHTML={{ __html: item.title}} /></h3></div>
                      <div className="sub-text-2-section-4-htw"><div dangerouslySetInnerHTML={{ __html: item.desc}} /></div>
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
                className="sub-text-2-section-3-htw mt-5"
                style={{ width: "80%", color: "black" }}
              >
                <div dangerouslySetInnerHTML={{ __html: content?.section6?.footerText }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div className="main-section-1-htw desktop-view-1 container">
            <div className="d-flex flex-column main-section-1-htw-left">
              <ZoomInDiv className="text-1-section-1-htw-left">
                Conclusion
              </ZoomInDiv>
              <div className="text-3-section-1-htw-left">
              <div dangerouslySetInnerHTML={{ __html: content?.section7?.desc }} />
                <br />
                <br />
                <div dangerouslySetInnerHTML={{ __html: content?.section7?.footerText }} />
              </div>
              <ZoomInDiv className="">
                <HashLink
                  smooth
                  to="/contact-hair-experts/#section3"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <button
                    // onClick={() => navigate("/take-hair-test")}
                    className="btn sub-button-section-3-op"
                  >
                    Schedule Now
                  </button>
                </HashLink>
              </ZoomInDiv>
            </div>
            <RightAnimatedDiv className="d-flex flex-column main-section-1-htw-right">
              <img loading="lazy"
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
                      <h3 style={{ fontSize: "1rem" }}>{item?.desc}</h3>
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
                      className=" faq-icon"
                    >
                      <img loading="lazy"
                        src={"/assets/img/hairTreatmentWomen/image-16.png"}
                        className="faq-dropDown"
                        alt="Hair transplant Faqs icon"
                        title="Hair transplant Faqs icon"
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

            <div className="text-3-section-1-htw-left" style={{ padding: "30px", textAlign: "center" }}>
              Don’t let hair loss control your life. Whether you’re considering FUE, DHI, or MHI, let’s work together to find the best solution for you. Start your journey by scheduling your consultation today!

            </div>
          </div>
        </div>

        <ShoppingFeature col={"1"} />
        <Footer />
      </div>
    </Navbar>
  );
}
