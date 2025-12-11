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
import useDivInView, {
  LEFT_VARIANTS,
  RIGHT_VARIANTS,
  TRANSITION,
} from "../../hooks/useDivInView";
import { motion } from "framer-motion";
import ShoppingFeature from "../shopping-feature/ShoppingFeature";
import Navbar from "../nav/Navbar";
import SouthIcon from "@mui/icons-material/South";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Helper function to style brand name and specific keywords in HTML content
const styleBrandName = (htmlContent) => {
  if (!htmlContent) return htmlContent;
  
  // Replace variations of brand name with styled version
  const brandPatterns = [
    /HairsnCares/gi,
    /Hairsncares/gi,
    /HairsNCares/gi,
    /hairsncares/gi,
    /HAIRSNCARES/gi
  ];
  
  let styledContent = htmlContent;
  brandPatterns.forEach(pattern => {
    styledContent = styledContent.replace(
      pattern,
      (match) => `<span style="color: #00A0E3; font-weight: 700;">${match}</span>`
    );
  });
  
  // Also style "Hair Loss" in blue
  styledContent = styledContent.replace(
    /Hair Loss/gi,
    (match) => `<span style="color: #00A0E3; font-weight: 700;">${match}</span>`
  );
  
  return styledContent;
};

const ViewDiv1 = ({ item }) => {
  const [ref, control] = useDivInView();

  return (
    <motion.div
      className="sub-section-4-htw d-flex"
      ref={ref}
      animate={control}
      initial="hidden"
      variants={RIGHT_VARIANTS}
      transition={TRANSITION}
    >
      <div className="sub-img-section-4-htw">
        <img loading="lazy" src={item.image} style={{ height: "100%", width: "100%" }} alt={item.title} title={item.title} />
      </div>
      <div
        className="d-flex flex-column horizontal-card-text"
      >
        {/* <div className="sub-text-1-section-4-htw">{e?.desc}</div> */}
        <div className="sub-text-2-section-4-htw "><h5 className="mfs-3" style={{fontWeight: 400, lineHeight: "30px"}}>
        <div dangerouslySetInnerHTML={{ __html: item.title}} /></h5></div>
      </div>
    </motion.div>
  );
};

export default function OnlineHairTest(props) {
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

  const content = useSelector((state) => state.content.onlineTest);
  console.log("jojkrgreor", content);

  const navigate = useNavigate();

  let section4 = [
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423548/hair-assessment/gctpdtkibo3nen5zcnhm.png",
      text: "Identify the Root Cause Is your hair loss or damage due to genetics, stress, diet, or an underlying medical condition? Our online test helps pinpoint the exact cause of your hair concerns, giving you a clear path to address them.",
      alt: "Close-up of a scalp being examined with a magnifying glass, highlighting HairsnCares' process to identify the root cause of hair loss for targeted treatment.",
      title: "Scalp Analysis"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423480/hair-assessment/iyg4qyjpehesjctlcv6z.png",
      //   desc: "Hair Procedures",
      text: "Get Personalized Solutions with Expert Support After identifying the cause of your hair issues, our dermatologists and hair counselors work together to provide customized solutions. Whether it's recommending the best hair growth treatments or offering lifestyle adjustments, our experts ensure the recommendations are perfectly suited to your needs.",
      alt: "Hand pointing to the word 'Solution' on a digital interface, representing HairsnCares' comprehensive approach to effective hair loss solutions.",
      title: "Hair Loss Solutions"
    },
    {
      img: "https://res.cloudinary.com/drkpwvnun/image/upload/v1729423573/hair-assessment/z5bhoesxvlh89xjdclj5.png",
      //   desc: "Hair Transplants",
      text: "Save Time and Money No more trial and error. Our online test, combined with insights from our dermatologists and hair counselors, gives you accurate and expert-backed suggestions, saving you from spending on ineffective products.",
      alt: "Clock and stacked coins symbolizing time and money savings, representing HairsnCares’ cost-effective and efficient hair loss treatment solutions.",
      title: "Save Time and Money"
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
      alt: "Smiling woman applying hair serum with a dropper, highlighting HairsnCares' dermatologist-guided hair analysis for effective hair loss solutions.",
      title: "Ongoing Support for Hair"
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

  const [ref_11, control_11] = useDivInView();
  const [ref_12, control_12] = useDivInView();
  const [headingRef_1, headingControl_1] = useDivInView();

  const [ref_21, control_21] = useDivInView();
  const [ref_22, control_22] = useDivInView();

  const [ref_31, control_31] = useDivInView();
  const [ref_32, control_32] = useDivInView();
  const [headingRef_31, headingControl_31] = useDivInView();
  const [headingRef_32, headingControl_32] = useDivInView();
  const [headingRef_33, headingControl_33] = useDivInView();
  const [headingRef_34, headingControl_34] = useDivInView();

  const [ref_41, control_41] = useDivInView();
  const [ref_42, control_42] = useDivInView();
  const [ref_43, control_43] = useDivInView();
  const [ref_44, control_44] = useDivInView();
  const [ref_45, control_45] = useDivInView();
  const [ref_46, control_46] = useDivInView();
  const [ref_47, control_47] = useDivInView();
  const [headingRef_41, headingControl_41] = useDivInView();
  const [headingRef_42, headingControl_42] = useDivInView();
  const [headingRef_43, headingControl_43] = useDivInView();
  const [headingRef_44, headingControl_44] = useDivInView();
  const [headingRef_45, headingControl_45] = useDivInView();
  const [headingRef_46, headingControl_46] = useDivInView();
  const [headingRef_47, headingControl_47] = useDivInView();

  const [ref_51, control_51] = useDivInView();
  const [ref_52, control_52] = useDivInView();

  const [ref_61, control_61] = useDivInView();
  const [ref_62, control_62] = useDivInView();

  const [ref_71, control_71] = useDivInView();

  console.log(content?.section3?.forms);
  
  // Apply brand name styling to all text nodes after content loads
  React.useEffect(() => {
    if (content) {
      const styleBrandNamesInDOM = () => {
        const headingSelectors = [
          '.text-2-section-4-htw',
          '.text-2-section-2-htw',
          '.text-1-section-1-htw-left',
          '.text-3-section-2-htw'
        ];
        
        headingSelectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(element => {
            if (element.innerHTML && !element.dataset.styled) {
              const brandPatterns = [
                { regex: /(HairsnCares|Hairsncares|HairsNCares|hairsncares|HAIRSNCARES|Hairscares)/gi, replacement: '<span style="color: #00A0E3; font-weight: 700;">$1</span>' },
                { regex: /(Hair Loss)/gi, replacement: '<span style="color: #00A0E3; font-weight: 700;">$1</span>' }
              ];
              
              let html = element.innerHTML;
              let changed = false;
              
              brandPatterns.forEach(pattern => {
                if (pattern.regex.test(html)) {
                  html = html.replace(pattern.regex, pattern.replacement);
                  changed = true;
                }
              });
              
              if (changed) {
                element.innerHTML = html;
                element.dataset.styled = 'true';
              }
            }
          });
        });
      };
      
      // Run immediately and after a small delay to catch dynamically loaded content
      styleBrandNamesInDOM();
      setTimeout(styleBrandNamesInDOM, 500);
    }
  }, [content]);

  return (
    <Navbar>
      <div
        className="d-flex flex-column"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <div
          style={{
            background: "rgba(193, 237, 255, 1)",
            padding: "40px 0 0px 0",
          }}
        >
          <Helmet>
            <link rel="canonical" href="https://hairsncares.com/online-hair-loss-test-diagnosis-treatment" />
          </Helmet>
          
          <div className="d-flex flex-column container p-2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                className="text-2-section-4-htw width-for-text-heading-80"
                style={{ padding: "0" }}
                ref={headingRef_1}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                animate={headingControl_1}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section1?.title)}} />
              </motion.div>
            </div>
            <div className="d-flex main-section-1-op">
              <motion.div
                className="d-flex flex-column main-section-1-op-left"
                style={{ padding: 0 }}
                ref={ref_11}
                animate={control_11}
                initial="hidden"
                variants={LEFT_VARIANTS}
                transition={TRANSITION}
              >
                <div className="text-1-section-1-htw-left"><div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section1?.subTilte)}} /></div>
                <div className="text-3-section-1-htw-left">
                <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section1?.desc1)}} />
                  <br />
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section1?.desc2)}} />
                  {!read1 ? (
                    <div
                      onClick={() => {
                        setRead1(!read1);
                      }}
                      style={{
                        fontWeight: "700",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    >
                      Read More
                    </div>
                  ) : (
                    <>
                      <br />
                      <br />
                      <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc3}} />
                    </>
                  )}
                </div>
              </motion.div>
              <motion.div
                className="d-flex flex-column main-section-1-op-right"
                ref={ref_12}
                animate={control_12}
                initial="hidden"
                variants={RIGHT_VARIANTS}
                transition={TRANSITION}
              >
                <img loading="lazy"
                  src={content?.section1?.image}
                  alt={content?.section1?.alt}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column main-section-2-htw container"
        >
          <div className="desktop-view" style={{ gap: "30px" }}>
            <motion.div
              className="main-section-2-htw-left"
              style={{ height: "100%" }}
              ref={ref_22}
              animate={control_22}
              initial="hidden"
              variants={LEFT_VARIANTS}
              transition={TRANSITION}
            >
              <img loading="lazy"
                src={content?.section2?.image}
                alt={content?.section2?.alt}
                style={{ height: "100%", width: "100%" }}
              />
            </motion.div>
            <motion.div
              className=" main-section-2-htw-right d-flex flex-column mp-2"
              ref={ref_21}
              animate={control_21}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <div
                className="text-2-section-2-htw"
                style={{ textAlign: "left" }}
              >
                <h2><div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section2?.title)}} /></h2>
              </div>
              <div className="text-3-section-2-htw m-top">
              <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section2?.desc1)}} />
                <br />
                <br />
                <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section2?.desc2)}} />
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn sub-button-section-3-op"
                >
                  Start Your Hair Assessment{" "}
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className="d-flex flex-column main-section-3-oht"
          style={{ padding: "4% 0 4% 0" }}
        >
          <div className="desktop-view-1 container" style={{ gap: "30px" }}>
            <div className=" main-section-2-htw-right d-flex flex-column">
              <motion.div
                className="text-2-section-2-htw"
                style={{ textAlign: "left", color: "white" }}
                ref={ref_32}
                animate={control_32}
                initial="hidden"
                variants={LEFT_VARIANTS}
                transition={TRANSITION}
              >
                <h2><div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section3?.title)}} /></h2>
              </motion.div>

              <div className="d-flex flex-column  mt-5 gap-desktop" style={{ gap: "20px" }}>
                {content?.section3?.forms?.map((item, indx) => {
                  return <ZoomInDiv className="d-flex" style={{ gap: "20px" }} key={indx}>
                  <div
                    className="mini-card-num-div-section-4-htw number-view"
                  >
                    <div className="mini-card-num-text-section-4-htw flex-center-row">
                      {indx + 1}
                    </div>
                  </div>
                  <div
                    className="text-3-section-2-htw m-text-1"
                    style={{ color: "white", width: "80%" }}
                  >
                    <strong className="strong"><div dangerouslySetInnerHTML={{ __html: styleBrandName(item.title)}} /></strong>
                    <div dangerouslySetInnerHTML={{ __html: styleBrandName(item.desc)}} />
                  </div>
                  </ZoomInDiv>
                })}
              </div>

              <motion.div
                className="text-3-section-2-htw mt-5"
                style={{ color: "white" }}
                ref={headingRef_34}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                animate={headingControl_34}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section3?.desc)}} />
              </motion.div>
            </div>
            <motion.div
              className="main-section-2-htw-left"
              ref={ref_31}
              animate={control_31}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <img loading="lazy"
                src="https://res.cloudinary.com/drkpwvnun/image/upload/v1729420618/hair-assessment/pnjiplhmgyq25atpby6d.png"
                style={{ height: "100%", width: "100%" }}
                alt="Young woman using her smartphone to explore key features of the HairsnCares online hair loss test, focusing on personalized hair health solutions."
                title="Key Features of Online Hair Loss Test"
              />
            </motion.div>
          </div>
        </div>

        <div
          className="d-flex flex-column main-section-2-htw container"
          style={{ padding: "4% 0 4% 0" }}
        >
          <motion.div
            className="text-2-section-2-htw"
            ref={ref_41}
            animate={control_41}
            initial="hidden"
            variants={RIGHT_VARIANTS}
            transition={TRANSITION}
          >
            <h2>
              How Does the <span className="blue-btw-text">Hair Loss Test</span>{" "}
              Work at <span style={{ color: "#00A0E3", fontWeight: 700 }}>HairsnCares.com</span>?
            </h2>
          </motion.div>
          <div className="d-flex flex-column mp-2" style={{ gap: "0" }}>
            <motion.div
              className="sub-main-section-4-oht d-flex flex-column p-2"
              style={{ alignItems: "center" }}
              ref={headingRef_41}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl_41}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: "58px" }}>
                <img loading="lazy"
                  src={
                    "https://res.cloudinary.com/drkpwvnun/image/upload/v1735638420/hair-assessment/hairsncares-online-hair-loss-test-icon.png.png"
                  }
                  style={{ width: "100%", height: "100%" }}
                  alt="icon representing online hair loss test"
                  title="hairsncares-online-hair-loss-test-icon"
                />
              </div>

              <div
                className="main-heading-text-section-8-htw mfs-2"
                style={{ fontWeight: "600" }}
              >
                Take an online Test
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn sub-button-section-3-op"
                >
                  Start Test
                </button>
              </div>
            </motion.div>

            <motion.div
              style={{ padding: "20px" }}
              className="flex-center-row"
              ref={ref_42}
              animate={control_42}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <SouthIcon style={{ fontSize: "30px" }} />
            </motion.div>

            <motion.div
              className="sub-main-section-4-oht d-flex flex-column"
              style={{ alignItems: "center" }}
              ref={headingRef_42}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl_42}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: "40px" }}>
                <img loading="lazy"
                  src={
                    "https://res.cloudinary.com/drkpwvnun/image/upload/v1729422713/hair-assessment/xz52yyjzubnxi3gezzjy.png"
                  }
                  style={{ width: "100%", height: "100%" }}
                  alt="Hair loss Test icon"
                  title="Hairsncares-Drag & Drop or choose file to upload-icon"
                />
              </div>

              <div
                className="main-heading-text-section-8-htw mfs-2"
                style={{ fontWeight: "600" }}
              >
                Drag & Drop or choose file to upload{" "}
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn sub-button-section-3-op"
                >
                  Upload Now{" "}
                </button>
              </div>
            </motion.div>

            <motion.div
              style={{ padding: "20px" }}
              className="flex-center-row"
              ref={ref_43}
              animate={control_43}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <SouthIcon style={{ fontSize: "30px" }} />
            </motion.div>

            <motion.div
              className="sub-main-section-4-oht d-flex flex-column"
              style={{ alignItems: "center" }}
              ref={headingRef_43}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl_43}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: "58px" }}>
                <img loading="lazy"
                  src={
                   "https://res.cloudinary.com/drkpwvnun/image/upload/v1735638303/hair-assessment/Hairsncares-online-consultation-icon.png.png"
                  }
                  style={{ width: "100%", height: "100%" }}
                  alt="icon symbolizing an online consultation"
                  title="Hairsncares-online-consultation-icon"
                />
              </div>

              <div
                className="main-heading-text-section-8-htw mfs-2"
                style={{ fontWeight: "600" }}
              >
                online consultation{" "}
              </div>
              <div className="mfs-2">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn sub-button-section-3-op"
                >
                  Book Consultation{" "}
                </button>
              </div>
            </motion.div>

            <motion.div
              style={{ padding: "20px" }}
              className="flex-center-row"
              ref={ref_44}
              animate={control_44}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <SouthIcon style={{ fontSize: "30px" }} />
            </motion.div>

            <motion.div
              className="sub-main-section-4-oht d-flex flex-column"
              style={{ alignItems: "center" }}
              ref={headingRef_44}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl_44}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: "58px" }}>
                <img loading="lazy"
                  src={
                    "https://res.cloudinary.com/drkpwvnun/image/upload/v1735638053/hair-assessment/hairsncares-detailed-hair-analysis-icon.png.png"
                  }
                  style={{ width: "100%", height: "100%" }}
                  alt="con symbolizing detailed hair analysis"
                  title="hairsncares-detailed-hair-analysis-icon"
                />
              </div>

              <div
                className="main-heading-text-section-8-htw mfs-2"
                style={{ fontWeight: "600" }}
              >
                Get Detailed Analysis{" "}
              </div>
              <div className="mfs-2">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn sub-button-section-3-op"
                >
                  View Analysis{" "}
                </button>
              </div>
            </motion.div>

            <motion.div
              style={{ padding: "20px" }}
              className="flex-center-row"
              ref={ref_45}
              animate={control_45}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <SouthIcon style={{ fontSize: "30px" }} />
            </motion.div>

            <motion.div
              className="sub-main-section-4-oht d-flex flex-column"
              style={{ alignItems: "center" }}
              ref={headingRef_45}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl_45}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: "58px" }}>
                <img loading="lazy"
                  src={
                    "https://res.cloudinary.com/drkpwvnun/image/upload/v1735638176/hair-assessment/Hairsncares-hair-loss-test-report-prescription-icon.png.png"
                  }
                  style={{ width: "100%", height: "100%" }}
                  alt="Icon symbolizing hair analysis report and prescription"
                  title="Hairsncares-hair-loss-test-report-prescription-icon"
                />
              </div>

              <div
                className="main-heading-text-section-8-htw mfs-2"
                style={{ fontWeight: "600" }}
              >
                Receive Your Report and Prescription{" "}
              </div>
              <div className="mfs-2">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn sub-button-section-3-op"
                >
                  Download Report{" "}
                </button>
              </div>
            </motion.div>

            <motion.div
              style={{ padding: "20px" }}
              className="flex-center-row"
              ref={ref_46}
              animate={control_46}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <SouthIcon style={{ fontSize: "30px" }} />
            </motion.div>

            <motion.div
              className="sub-main-section-4-oht d-flex flex-column"
              style={{ alignItems: "center" }}
              ref={headingRef_46}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl_46}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: "58px" }}>
                <img loading="lazy"
                  src={
                    "https://res.cloudinary.com/drkpwvnun/image/upload/v1735638302/hair-assessment/Hairsncares-hair-loss-test-medical-report-icon.png.png"
                  }
                  style={{ width: "100%", height: "100%" }}
                  alt="icon of a medical report & prescription for customized hair treatment."
                  title="Hairsncares-hair-loss-test-medical-report-icon"
                />
              </div>

              <div
                className="main-heading-text-section-8-htw mfs-2"
                style={{ fontWeight: "600" }}
              >
                Buy Recommended Treatment Plan{" "}
              </div>
              <div className="mfs-2">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn sub-button-section-3-op"
                >
                  View Treatment Plan{" "}
                </button>
              </div>
            </motion.div>

            <motion.div
              style={{ padding: "20px" }}
              className="flex-center-row"
              ref={ref_47}
              animate={control_47}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <SouthIcon style={{ fontSize: "30px" }} />
            </motion.div>

            <motion.div
              className="sub-main-section-4-oht d-flex flex-column"
              style={{ alignItems: "center" }}
              ref={headingRef_47}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={headingControl_47}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div style={{ width: "58px" }}>
                <img loading="lazy"
                  src={
                    "https://res.cloudinary.com/drkpwvnun/image/upload/v1735638399/hair-assessment/Hairsncares-hair-loss-medicine-delivery-icon.png.png"
                  }
                  style={{ width: "100%", height: "100%" }}
                  alt="icon delivering prescribed hair loss medicine"
                  title="Hairsncares-hair-loss-medicine-delivery-icon"
                />
              </div>

              <div
                className="main-heading-text-section-8-htw mfs-2"
                style={{ fontWeight: "600" }}
              >
                Medicine Delivered{" "}
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/our-expertise#read3")}
                  className="btn sub-button-section-3-op"
                >
                  Order Medicine{" "}
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div style={{ background: "rgba(193, 237, 255, 1)" }}>
          <div
            className="d-flex flex-column container"
            style={{ padding: "3% 0 4% 0" }}
          >
            <motion.div
              style={{ display: "flex", justifyContent: "center" }}
              ref={ref_51}
              animate={control_51}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-2-section-4-htw width-for-text-heading-80">
                <h2><div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section4?.title)}} /></h2>
              </div>
            </motion.div>
            <motion.div
              style={{ display: "flex", justifyContent: "center" }}
              ref={ref_52}
              animate={control_52}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-3-section-4-htw mfs-1 m-text-left" style={{ width: "80%" }}>
              <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section4?.desc)}} />
              </div>
            </motion.div>

            <div className="d-flex flex-column mt-3 mp-2" style={{ gap: "15px" }}>
              {content?.section4?.forms?.map((item, indx) => {
                return <ViewDiv1 item={item} key={indx} />;
              })}
            </div>
          </div>
        </div>

        <div>
          <div className="main-section-1-htw desktop-view-1 container mp-2">
            <motion.div
              className="d-flex flex-column main-section-1-htw-left"
              style={{ padding: 0 }}
              ref={ref_61}
              animate={control_61}
              initial="hidden"
              variants={LEFT_VARIANTS}
              transition={TRANSITION}
            >
              <div className="text-1-section-1-htw-left">Conclusion</div>
              <div className="text-3-section-1-htw-left">
              <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section5?.desc)}} />
                <br />
                <br />
                <div dangerouslySetInnerHTML={{ __html: styleBrandName(content?.section5?.footerText)}} />
              </div>
              <div className="">
                <button
                  onClick={() => navigate("/take-hair-test")}
                  className="btn sub-button-section-3-op"
                >
                  Take the Hair Test Now
                </button>
              </div>
            </motion.div>
            <motion.div
              className="d-flex flex-column main-section-1-htw-right"
              ref={ref_62}
              animate={control_62}
              initial="hidden"
              variants={RIGHT_VARIANTS}
              transition={TRANSITION}
            >
              <img loading="lazy" 
                src={content?.section5?.image}
                alt={content?.section5?.alt}
              />
            </motion.div>
          </div>
        </div>

        <div
          style={{
            background: "rgba(193, 237, 255, 1)",
            padding: "40px 0 40px 0",
          }}
        >
          <div className="container mt-3">
            <motion.div
              className="main-text-section-8-htw"
              ref={ref_71}
              animate={control_71}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2>
                Common Questions{" "}
                <span className="blue-btw-text">About Hair Loss</span> and Online
                Testing
              </h2>
            </motion.div>
            <div className="mt-5 d-flex flex-column">
              {section8?.map((item, indx) => {
                return (
                  <div className="d-flex flex-column">
                    <div
                      className="main-heading-box-section-8-htw d-flex"
                      style={{
                        justifyContent: "space-between",
                        background: "rgba(211, 239, 252, 1)",
                      }}
                    >
                      <div
                        className="main-heading-text-section-8-htw faq-text"
                        style={{ padding: "10px" }}
                      >
                        <h4 className="mfs-2">
                          {item?.desc}
                        </h4>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => {
                          if (selectedQ == indx + 1) setSelectedQ(null)
                          else setSelectedQ(indx + 1);
                        }}
                        className="faq-icon"
                      >
                        <img loading="lazy"
                          src={"/assets/img/hairTreatmentWomen/image-16.png"}
                          className="faq-dropDown"
                          alt="Hair loss Test Faqs  icon"
                          title="Hair loss Test Faqs  icon"
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
        </div>

        <ShoppingFeature col={"1"} />
        <Footer />
      </div>
    </Navbar>
  );
}
