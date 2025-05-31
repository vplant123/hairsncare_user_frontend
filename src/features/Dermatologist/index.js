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
import SouthIcon from "@mui/icons-material/South";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";

export default function Dermatologist() {
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

  const content = useSelector((state) => state.content.dermatologist);
  console.log("jojkrgreor", content);

  const navigate = useNavigate();

  let section4 = [
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423548/hair-assessment/gctpdtkibo3nen5zcnhm.png",
      text: "Identify the Root Cause Is your hair loss or damage due to genetics, stress, diet, or an underlying medical condition? Our online test helps pinpoint the exact cause of your hair concerns, giving you a clear path to address them.",
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423480/hair-assessment/iyg4qyjpehesjctlcv6z.png",
      //   desc: "Hair Procedures",
      text: "Get Personalized Solutions with Expert Support After identifying the cause of your hair issues, our dermatologists and hair counselors work together to provide customized solutions. Whether it's recommending the best hair growth treatments or offering lifestyle adjustments, our experts ensure the recommendations are perfectly suited to your needs.",
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423573/hair-assessment/z5bhoesxvlh89xjdclj5.png",
      //   desc: "Hair Transplants",
      text: "Save Time and Money No more trial and error. Our online test, combined with insights from our dermatologists and hair counselors, gives you accurate and expert-backed suggestions, saving you from spending on ineffective products.",
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423500/hair-assessment/lfqafjizvupmqwdhg83w.png",
      //   desc: "Natural Remedies",
      text: "Comprehensive Hair Analysis from a Dermatologist As part of the process, you’ll receive a detailed hair analysis from one of our experienced dermatologists, who will review your test results and images to provide a professional diagnosis. This ensures your treatment plan is based on medical expertise.",
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423530/hair-assessment/zl161vfmpve9bnjc3eqs.png",
      //   desc: "Lifestyle Adjustments",
      text: "Take Control of Your Hair Health with Ongoing Support Beyond the test, our hair counselors are available to guide you through your hair care journey. They’ll answer your questions, help you understand your treatment options, and provide ongoing support as you work toward healthier, stronger hair",
    },
  ];

  const [selectedQ, setSelectedQ] = useState(0);

  let section8 = [
    {
      desc: "How does the Hairscares Online Hair Test work? ",
      text: "The Hairscares Online Hair Test is a quick and easy process where you answer questions about your hair type, concerns, and lifestyle. You can also upload images for a more detailed analysis. Our dermatologists and hair counselors then review your responses and images to provide personalized treatment recommendations.",
    },
    {
      desc: "Will I get a professional diagnosis through the online test?",
      text: "Yes! After completing the test, your results and images will be reviewed by one of our experienced dermatologists, who will provide a thorough diagnosis and recommend a personalized treatment plan based on your unique hair needs.",
    },
    {
      desc: "How long does it take to receive my personalized hair analysis? ",
      text: "Once you complete the Hairscares Online Hair Test and submit your images, you’ll typically receive a detailed analysis and personalized recommendations from our dermatologists within 24 to 48 hours.",
    },
    {
      desc: "What happens after I receive my test results? ",
      text: "After receiving your personalized hair analysis, you can consult with our hair counselors to discuss the recommended treatment plan. You’ll have the option to purchase the treatments directly, and all the necessary products will be delivered right to your doorstep.",
    },
    {
      desc: "Is there a cost for the Hairscares Online Hair Test? ",
      text: "Yes, there is a nominal charge for the online hair test and consultation. This fee covers your personalized hair analysis by a dermatologist and access to expert recommendations tailored to your specific hair concerns. Any treatments you choose to purchase will then be delivered conveniently to your home.",
    },
  ];

  let section5 = [
    {
      desc: "Convenience",
      text: "No need for clinic visits—get an expert hair diagnosis online.",
    },
    {
      desc: "Personalized Treatments",
      text: "Every treatment plan is crafted based on your unique hair and scalp needs.",
    },
    {
      desc: "Expert Evaluation",
      text: "Your case is reviewed by seasoned dermatologists and trichologists.",
    },
    {
      desc: "Ongoing Support",
      text: "Beyond diagnosis, we offer continued guidance to ensure the long-term health of your hair.",
    },
  ];

  return (
    <Navbar>
      <div
        className="d-flex flex-column "
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <Helmet>
          <link rel="canonical" href="https://backend.hairsncares.com//dr-amit-agarkar-hair-restoration-expert" />
        </Helmet>
        <div style={{ background: "rgba(193, 237, 255, 1)", width: "100vw" }} className="main-div-resp">
          <div className="d-flex flex-column container">
            <div className="d-flex main-section-1-op">
              <ZoomInDiv
                className="d-flex flex-column main-section-1-op-left"
                style={{ padding: 0 }}
              >
                <div
                  className="text-2-section-4-htw"
                  style={{ textAlign: "left", fontWeight: "800" }}
                >
                  <h2>Dr. Amit S. Agarkar</h2>
                </div>
                <div
                  className="text-2-section-4-htw"
                  style={{ textAlign: "left" }}
                >
                  <h1>A Leader in{" "}
                    <span className="blue-btw-text">Hair Restoration</span>,
                    Trichology and Dermatology{" "}</h1>
                </div>
                <div className="text-3-section-1-htw-left">
                  <strong style={{ color: "rgba(0, 160, 227, 1)" }}>
                    (MBBS, MD (Dermatology), FCPS, DDV)
                  </strong>
                </div>
                <div className="d-flex text-3-section-1-htw-left">
                  <MailIcon style={{ color: "black" }} />
                  dragarkaramit@gmail.com
                </div>
                <div className="d-flex text-3-section-1-htw-left">
                  <MailIcon style={{ color: "black" }} />
                  info@vplanthairclinics.com
                </div>
                <HashLink
                  smooth
                  to="/contact-hair-experts/#section3"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <button
                    // onClick={() => navigate("/our-expertise#read3")}
                    className="btn sub-button-section-3-op"
                  >
                    Meet Dr. Agarkar
                  </button>
                </HashLink>
              </ZoomInDiv>
              <RightAnimatedDiv className="d-flex flex-column main-section-1-op-right">
                <img src="/assets/img/hairTreatmentWomen/dr-amit-agarkar-hair-care-expert.png"
                  alt="Dr. Amit Agarkar, leading expert in hair restoration, trichology, and dermatology, known for advanced hair loss treatments at HairsnCares."
                  title="Dr. Amit Agarkar – Hair Restoration Expert"
                />
              </RightAnimatedDiv>
            </div>
          </div>
        </div>

        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ gap: "15px", padding: "0 0 30px 0 " }}
          >
            <div className="desktop-view" style={{ gap: "30px" }}>
              <LeftAnimatedDiv
                className="main-section-2-htw-left"
              //   style={{ height: "100vh" }}
              >
                <img
                  src="https://res.cloudinary.com/drkpwvnun/image/upload/v1729424606/hair-assessment/kh2b9nblfx8ven7gtqbl.png"
                  style={{ width: "100%", maxHeight: "682px" }}
                  alt="Dr. Amit Agarkar, renowned specialist in hair restoration and advanced hair loss treatments, seated in his office at HairsnCares."
                  title="Dr. Amit Agarkar – Professional Overview"
                />
              </LeftAnimatedDiv>
              <ZoomInDiv className=" main-section-2-htw-right d-flex flex-column">
                <div
                  className="text-2-section-2-htw"
                  style={{ textAlign: "left" }}
                >
                  <h2>Professional <span className="blue-btw-text">Overview</span></h2>
                </div>
                <div className="text-3-section-2-htw">
                  <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc1}} />
                  <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc2}} />
                </div>
              </ZoomInDiv>
            </div>

            <ZoomInDiv className="text-3-section-2-htw">
            <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc3}} />
              <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc4}} />
            </ZoomInDiv>
          </div>
        </div>

        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ gap: "20px", padding: "30px 0 30px 0" }}
          >
            <div className="desktop-view-1" style={{ gap: "2%" }}>
              <LeftAnimatedDiv className="left-div-11">
                <img
                  src={content?.section1?.image1}
                  style={{ width: "100%", height: "400px" }}
                  alt={content?.section1?.alt1}
                />
              </LeftAnimatedDiv>
              <RightAnimatedDiv className="right-div-11">
                <img
                  src={content?.section1?.image2}
                  style={{ width: "100%", height: "400px" }}
                  alt={content?.section1?.alt2}
                />
              </RightAnimatedDiv>
            </div>
            <ZoomInDiv>
              <img
                src={content?.section1?.image3}
                style={{ width: "100%", height: "400px" }}
                alt={content?.section1?.alt3}
                className="office-img"
              />
            </ZoomInDiv>
          </div>
        </div>

        <div className="main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ padding: "30px 0 30px 0" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ZoomInDiv
                className="text-2-section-4-htw"
                style={{ width: "100%" }}
              >
                <h3>
                  Innovation at{" "}
                </h3>
                <span className="blue-btw-text">HairsnCares.com</span>
              </ZoomInDiv>
            </div>
            <div
              className="d-flex main-section-1-op"
              style={{ paddingBottom: 0 }}
            >
              <ZoomInDiv
                className="d-flex flex-column main-section-1-op-left"
                style={{ padding: 0 }}
              >
                <div
                  className="text-2-section-4-htw"
                  style={{ textAlign: "left" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: content?.section2?.title}} />
                </div>
                <div className="text-3-section-1-htw-left">
                <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc1}} />
                  <br />
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc2}} />
                </div>
                <div className="">
                  <button
                    onClick={() => navigate("/take-hair-test")}
                    className="btn sub-button-section-3-op"
                  >
                    Take A Hair Test
                  </button>
                </div>
              </ZoomInDiv>
              <RightAnimatedDiv className="d-flex flex-column main-section-1-op-right">
              <img
                src={content?.section2?.image}
                alt={content?.section2?.alt}
              />
              </RightAnimatedDiv>
            </div>
          </div>
        </div>

        <div className="main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ padding: "2% 0 4% 0 " }}
          >
            <ZoomInDiv style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-2-section-5-htw">
              <div dangerouslySetInnerHTML={{ __html: content?.section3?.title}} />
              </div>
            </ZoomInDiv>
            <ZoomInDiv
              style={{ display: "flex", justifyContent: "center" }}
              className="mt-5"
            >
              <div className="text-3-section-5-htw" style={{ width: "75%" }}>
              <div dangerouslySetInnerHTML={{ __html: content?.section3?.desc}} />
              </div>
            </ZoomInDiv>
            <div className="desktop-view-1 mt-3" style={{ gap: "15px" }}>
            {content?.section3?.forms?.map((item, indx) => {
                return (
                  <ZoomInDiv
                    className="mini-card-section-4-htw width-for-text-heading-23 d-flex flex-column"
                    style={{
                      padding: "30px",
                      // width: "23%",
                      alignItems: "center",
                      gap: "15px",
                      border: "none",
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
                      <div dangerouslySetInnerHTML={{ __html: item.title}} />
                    </div>
                    <div
                      className="mini-card-text-2-section-4-htw"
                      style={{
                        color: activeSec5 === indx ? "#FFFFFF" : "rgba(97, 97, 97, 1)",
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

        <div className="d-flex flex-column main-section-3-d main-div-resp">
          <div
            className="d-flex flex-column container"
            style={{ padding: "30px 0 30px 0 " }}
          >
            <ZoomInDiv className="text-1-section-3-htw"><h3><div dangerouslySetInnerHTML={{ __html: content?.section4?.title}} /></h3></ZoomInDiv>
            <ZoomInDiv style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-2-section-3-htw" style={{ width: "100%" }}>
              <div dangerouslySetInnerHTML={{ __html: content?.section4?.subTitle}} />
              </div>
            </ZoomInDiv>
            <ZoomInDiv
              style={{ display: "flex", justifyContent: "center" }}
              className="mt-3"
            >
              <div className="text-3-section-3-htw m-text-left">
              <div dangerouslySetInnerHTML={{ __html: content?.section4?.desc}} />
              </div>
            </ZoomInDiv>
            <RightAnimatedDiv
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                onClick={() => navigate("/take-hair-test")}
                className="btn sub-button-section-3-op"
              >
                Start Your Hair Assessment{" "}
              </button>
            </RightAnimatedDiv>

            <LeftAnimatedDiv
              className="desktop-view-1"
              style={{ gap: "30px", padding: "3% 0 3% 0" }}
            >
              <div className="main-section-2-htw-right d-flex flex-column">
                <div
                  className="text-2-section-2-htw"
                  style={{ textAlign: "left", color: "white" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: content?.section4?.itemTitle}} />
                </div>

                <div
                  className="d-flex flex-column  mt-5"
                  style={{ gap: "20px" }}
                >
                  {content?.section4?.forms.map((item, indx) => {
                    return <ZoomInDiv className="d-flex" style={{ gap: "20px" }} key={indx}>
                    <div
                      className="mini-card-num-div-section-4-htw number-view"
                    // style={{ padding: "10px", width: "8%", height: "5vh" }}
                    >
                      <div className="mini-card-num-text-section-4-htw flex-center-row">
                        {indx + 1}
                      </div>
                    </div>
                    <div
                      className="text-3-section-2-htw"
                      style={{ color: "white", width: "80%" }}
                    >
                      <strong className="strong"><div dangerouslySetInnerHTML={{ __html: item.title}} /></strong>
                      <div dangerouslySetInnerHTML={{ __html: item.desc}} />
                    </div>
                  </ZoomInDiv>
                  })}
                </div>
              </div>
              <div
                className="main-section-2-htw-left mp-2 "
              // style={{ height: "750px" }}
              >
                <img
                  src={content?.section4?.image}
                  style={{ height: "100%", width: "100%" }}
                  alt={content?.section4?.alt}
                />
              </div>
            </LeftAnimatedDiv>

            <RightAnimatedDiv
              className="text-3-section-2-htw mt-5"
              style={{ color: "white" }}
            >
              <div dangerouslySetInnerHTML={{ __html: content?.section4?.footerText}} />
            </RightAnimatedDiv>
          </div>
        </div>

        <div
          className="d-flex flex-column main-section-2-htw container mp-2 mw-90"
          style={{ padding: "4% 0 4% 0" }}
        >
          <div className="desktop-view" style={{ gap: "30px" }}>
            <LeftAnimatedDiv
              className="main-section-2-htw-left"
            //   style={{ height: "100vh" }}
            >
              <img
                  src={content?.section5?.image}
                  style={{ height: "100%", width: "100%" }}
                  alt={content?.section5?.alt}
                />
            </LeftAnimatedDiv>
            <div className=" main-section-2-htw-right d-flex flex-column">
              <ZoomInDiv
                className="text-2-section-2-htw"
                style={{ textAlign: "left" }}
              >
                <h2><div dangerouslySetInnerHTML={{ __html: content?.section5?.title}} /></h2>
                <div dangerouslySetInnerHTML={{ __html: content?.section5?.subTitle}} />
              </ZoomInDiv>

              <div className="text-3-section-2-htw">
              <div dangerouslySetInnerHTML={{ __html: content?.section5?.desc1}} />
                <br />
                <br />
                <div dangerouslySetInnerHTML={{ __html: content?.section5?.desc2}} />
              </div>
            </div>
          </div>

          <div className="text-3-section-2-htw">
          <div dangerouslySetInnerHTML={{ __html: content?.section5?.desc3}} />
          </div>

          <ZoomInDiv
            className=""
            style={{ fontSize: "36px", fontWeight: "700" }}
          >
            <h3><div dangerouslySetInnerHTML={{ __html: content?.section5?.title2}} /></h3>
          </ZoomInDiv>

          <div className="text-3-section-2-htw">
          <div dangerouslySetInnerHTML={{ __html: content?.section5?.desc4}} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: content?.section5?.desc5}} />
          </div>
        </div>

        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div
            className="d-flex flex-column container mw-90"
            style={{ padding: "30px 0 30px 0" }}
          >
            <div
              className="d-flex main-section-1-op"
              style={{ paddingBottom: 0 }}
            >
              <div
                className="d-flex flex-column main-section-1-op-left"
                style={{ padding: 0 }}
              >
                <LeftAnimatedDiv
                  className="text-3-section-1-htw-left"
                  style={{ textAlign: "left" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: content?.section6?.title}} />
                </LeftAnimatedDiv>
                <div className="text-3-section-1-htw-left">
                <div dangerouslySetInnerHTML={{ __html: content?.section6?.desc1}} />
                  <div dangerouslySetInnerHTML={{ __html: content?.section6?.desc2}} />
                </div>
              </div>
              <RightAnimatedDiv className="d-flex flex-column main-section-1-op-right">
              <img
                  src={content?.section6?.image1}
                  style={{ height: "100%", width: "100%" }}
                  alt={content?.section6?.alt1}
                />
              </RightAnimatedDiv>
            </div>

            <div
              className="d-flex main-section-1-op"
              style={{ paddingBottom: 0 }}
            >
              <LeftAnimatedDiv
                className="d-flex flex-column main-section-1-op-right"
              // style={{ height: "90vh" }}
              >
                <img
                  src={content?.section6?.image2}
                  style={{ height: "100%", width: "100%" }}
                  alt={content?.section6?.alt2}
                />
              </LeftAnimatedDiv>
              <div
                className="d-flex flex-column main-section-1-op-left"
                style={{ padding: 0 }}
              >
                <RightAnimatedDiv
                  className="text-2-section-4-htw"
                  style={{ textAlign: "left", fontSize: "50px" }}
                >
                  <h2><div dangerouslySetInnerHTML={{ __html: content?.section6?.title2}} /></h2>
                </RightAnimatedDiv>
                <div className="text-3-section-1-htw-left">
                <div dangerouslySetInnerHTML={{ __html: content?.section6?.desc3}} />
                </div>
                <h3><strong>Professional Affiliations:</strong></h3>
                <div>IADVL Member</div>
                <div>Association of Hair Restoration Surgeons (AHRS)</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column container mw-90"
          style={{ alignItems: "center", padding: "4% 0 4% 0" }}
        >
          <ZoomInDiv
            className="text-2-section-4-htw"
            style={{ textAlign: "left", fontSize: "48px" }}
          >
            <h2>Awards and Honors</h2>
          </ZoomInDiv>
          <ZoomInDiv
            className="text-3-section-1-htw-left"
            style={{ width: "70%", textAlign: "center" }}
          >
            Throughout my career, I've been fortunate to receive several
            prestigious awards that reflect my commitment to excellence in
            dermatology and hair restoration:
          </ZoomInDiv>
          <ZoomInDiv className="">
            <button
              onClick={() => navigate("/our-expertise#read3")}
              className="btn sub-button-section-3-op"
            >
              <h5 className="mfs-1"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[0]?.title}} /></h5>
            </button>
          </ZoomInDiv>
          <ZoomInDiv
            className="text-3-section-1-htw-left award-desc"
            style={{ width: "50%", textAlign: "center" }}
          >
  <div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[0]?.desc}} />
          </ZoomInDiv>

          <ZoomInDiv style={{ position: "relative" }}>
            <div className="d-flex flex-column" style={{ gap: "150px" }}>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex flex-column" style={{ width: "40%", alignItems:"center" }}>
                  <div className="">
                    <button
                      onClick={() => navigate("/our-expertise#read3")}
                      className="btn-d sub-button-section-3-op"
                    >
                      <h4 style={{ fontSize: "20x" }} className="award-title"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[1]?.title}} /></h4>
                    </button>
                  </div>
                  <div
                    className="text-3-section-1-htw-left award-desc"
                    style={{ width: "80%", textAlign: "center" }}
                  >
                   <div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[1]?.desc}} />
                  </div>
                </div>

                <div
                  className="d-flex flex-column"
                  style={{ width: "40%",alignItems:"center" }}
                >
                  <div className="">
                    <button
                      onClick={() => navigate("/our-expertise#read3")}
                      className="btn-d sub-button-section-3-op"
                    >
                      <h4 style={{ fontSize: "20x" }} className="award-title"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[2]?.title}} /></h4>
                    </button>
                  </div>
                  <div
                    className="text-3-section-1-htw-left award-desc"
                    style={{ width: "80%", textAlign: "center" }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[2]?.desc}} />
                  </div>
                </div>
              </div>

              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex flex-column" style={{ width: "40%" , alignItems:"center"}}>
                  <div className="">
                    <button
                      onClick={() => navigate("/our-expertise#read3")}
                      className="btn-d sub-button-section-3-op"
                    >
                      <h4 style={{ fontSize: "20x" }} className="award-title"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[3]?.title}} /></h4>
                    </button>
                  </div>
                  <div
                    className="text-3-section-1-htw-left award-desc"
                    style={{ width: "80%", textAlign: "center" }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[3]?.desc}} />
                  </div>
                </div>

                <div
                  className="d-flex flex-column"
                  style={{ width: "40%", alignItems: "center" }}
                >
                  <div className="">
                    <button
                      onClick={() => navigate("/our-expertise#read3")}
                      className="btn-d sub-button-section-3-op"
                    >
                      <h4 style={{ fontSize: "20x" }} className="award-title"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[4]?.title}} /></h4>
                    </button>
                  </div>
                  <div
                    className="text-3-section-1-htw-left award-desc"
                    style={{ width: "80%", textAlign: "center" }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[4]?.desc}} />
                  </div>
                </div>
              </div>

              <div className="cup-icon">
                <img
                  src="https://res.cloudinary.com/drkpwvnun/image/upload/v1729446172/hair-assessment/jxqtmhrlmpnhbhis8utq.png"
                  style={{ width:"100%", height: "100%" }}
                  alt="Awards and honors received by Dr. Amit Agarkar, a leading expert in hair restoration and advanced hair loss treatments, recognizing excellence."
                  title="Awards and Honors "
                />
              </div>
            </div>
          </ZoomInDiv>

          <ZoomInDiv className="">
            <button
              onClick={() => navigate("/our-expertise#read3")}
              className="btn sub-button-section-3-op"
            >
              <h4 className="mfs-1"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[5]?.title}} /></h4>
            </button>
          </ZoomInDiv>

          <ZoomInDiv
            className="text-3-section-1-htw-left"
            style={{ width: "50%", textAlign: "center" }}
          >
            <div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[5]?.desc}} />
          </ZoomInDiv>

          <ZoomInDiv className="">
            <button
              onClick={() => navigate("/our-expertise#read3")}
              className="btn sub-button-section-3-op"
            >
              More Awards
            </button>
          </ZoomInDiv>

          <ZoomInDiv style={{ width: "100%" }}>
            <div className="d-flex" style={{ justifyContent: "space-around" }}>
              <div className="">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn-d sub-button-section-3-op"
                >
                  <h4 style={{ fontSize: "20x" }} className="award-title"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[6]?.title}} /></h4>
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn-d sub-button-section-3-op"
                >
                  <h4 style={{ fontSize: "20x" }} className="award-title"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[7]?.title}} /></h4>
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn-d sub-button-section-3-op"
                >
                  <h4 style={{ fontSize: "20x" }} className="award-title"><div dangerouslySetInnerHTML={{ __html: content?.section8?.forms?.[8]?.title}} /></h4>
                </button>
              </div>
            </div>
          </ZoomInDiv>
        </div>

        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div className="main-section-1-htw desktop-view-1 container">
            <div
              className="d-flex flex-column main-section-1-htw-left"
              style={{ padding: 0 }}
            // ref={ref_61}
            // animate={control_61}
            // initial="hidden"
            // variants={LEFT_VARIANTS}
            // transition={TRANSITION}
            >
              <ZoomInDiv className="text-1-section-1-htw-left">
                <h2><div dangerouslySetInnerHTML={{ __html: content?.section7?.title}} /></h2>
              </ZoomInDiv>
              <div className="text-3-section-1-htw-left">
              <div dangerouslySetInnerHTML={{ __html: content?.section7?.desc1}} />
                <br />
                <br />
                <div dangerouslySetInnerHTML={{ __html: content?.section7?.desc2}} />
                <br />
                <br />
                <div dangerouslySetInnerHTML={{ __html: content?.section7?.desc3}} />
              </div>
            </div>
            <RightAnimatedDiv
              className="d-flex flex-column main-section-1-htw-right"
            // ref={ref_62}
            // animate={control_62}
            // initial="hidden"
            // variants={RIGHT_VARIANTS}
            // transition={TRANSITION}
            >
                <img
                  src={content?.section7?.image}
                  style={{ height: "100%", width: "100%" }}
                  alt={content?.section7?.alt}
                />
            </RightAnimatedDiv>
          </div>
        </div>

        <ShoppingFeature col={"1"} />
        <Footer />
      </div>
    </Navbar>
  );
}
