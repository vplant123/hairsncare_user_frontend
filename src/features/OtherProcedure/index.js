import React, { useState } from "react";
import "./index.css";
import BeforeAfter from "../before-after/BeforeAfter";
import Footer from "../footer/Footer";
import Faq from "../our-specialist/faq/Faq";
import { useSelector } from "react-redux";
import {
  LeftAnimatedDiv,
  RightAnimatedDiv,
  ZoomInDiv, ZoomInDiv2
} from "../../componet/Animation";
import ShoppingFeature from "../shopping-feature/ShoppingFeature";
import Navbar from "../nav/Navbar";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function OtherProcedure() {
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

  const content = useSelector((state) => state.content.otherProcedures);
  console.log("jojkrgreor", content);

  const navigate = useNavigate();


  return (
    <Navbar>
      <div
        className="d-flex flex-column"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <Helmet>
          <link rel="canonical" href="https://hairsncares.com/advanced-hair-loss-solutions-prp-smp-cloning-systems" />
        </Helmet>
        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div className="d-flex flex-column container">
            <ZoomInDiv2 className="text-1-section-4-htw m-text-left"><div dangerouslySetInnerHTML={{ __html: content?.section1?.title }} /></ZoomInDiv2>
            <ZoomInDiv2 style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-2-section-4-htw width-for-text-heading-80 m-text-left">
                <div dangerouslySetInnerHTML={{ __html: content?.section1?.subTitle }} />
              </div>
            </ZoomInDiv2>
            <div className="desktop-view-1 main-section-1-op">
              <ZoomInDiv2 className="d-flex flex-column main-section-1-op-left style={{padding : 0}}">
                <div className="text-3-section-1-htw-left">
                  <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc1 }} />
                  <br />
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc2 }} />
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
                      <div dangerouslySetInnerHTML={{ __html: content?.section1?.desc3 }} />
                    </>
                  )}
                </div>
              </ZoomInDiv2>
              <RightAnimatedDiv className="d-flex flex-column main-section-1-op-right">
                <img loading="lazy"
                  src={content?.section1?.image}
                  alt={content?.section1?.alt}
                />
              </RightAnimatedDiv>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column main-section-2-htw container main-div-resp">
          <ZoomInDiv2 className="text-1-section-2-htw"><h2><div dangerouslySetInnerHTML={{ __html: content?.section2?.title }} /></h2></ZoomInDiv2>
          <ZoomInDiv2 className="text-2-section-2-htw">
            <div dangerouslySetInnerHTML={{ __html: content?.section2?.subTitle }} />
          </ZoomInDiv2>
          <div className="desktop-view" style={{ gap: "20px" }}>
            <LeftAnimatedDiv className="main-section-2-htw-left">
              <img loading="lazy"
                src={content?.section2?.image}
                alt={content?.section2?.alt}
                width={"100%"}
                height={"100%"}
              />
            </LeftAnimatedDiv>
            <RightAnimatedDiv className="text-3-section-2-htw main-section-2-htw-right">
              <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc1 }} />
              <br />
              <br />
              <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc2 }} />
              {!read2 ? (
                <div
                  onClick={() => {
                    setRead2(!read2);
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
                  <div dangerouslySetInnerHTML={{ __html: content?.section2?.desc3 }} />
                </>
              )}
            </RightAnimatedDiv>
          </div>
        </div>

        <div className="main-section-3-op main-div-resp">
          <div className="d-flex flex-column container">
            <ZoomInDiv2 className="text-1-section-3-htw"><h2><div dangerouslySetInnerHTML={{ __html: content?.section3?.title }} /></h2></ZoomInDiv2>
            <ZoomInDiv2 style={{ display: "flex", justifyContent: "center" }}>
              <div className="text-2-section-3-htw" style={{ width: "100%" }}>
                <div dangerouslySetInnerHTML={{ __html: content?.section3?.subTitle }} />
              </div>
            </ZoomInDiv2>
            <div className="main-section-1-op d-flex">
              <LeftAnimatedDiv
                className="d-flex flex-column main-section-1-op-left"
                style={{ padding: 0 }}
              >
                <div
                  className="text-3-section-1-htw-left"
                  style={{ color: "#FFFFFF" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: content?.section3?.desc1 }} />
                  <br />
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: content?.section3?.desc2 }} />
                  {!read3 ? <div onClick={() => { setRead3(!read3) }} style={{ fontWeight: "700", fontSize: "20px", cursor: "pointer" }}>Read More</div> : <>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: content?.section3?.desc3 }} />
                  </>
                  }
                </div>
              </LeftAnimatedDiv>
              <RightAnimatedDiv className="d-flex flex-column main-section-1-op-right">
                <img loading="lazy"
                  src={content?.section3?.image}
                  alt={content?.section3?.alt}
                />
              </RightAnimatedDiv>
            </div>
          </div>
        </div>


        <div className="d-flex flex-column main-section-2-htw container main-div-resp">
          <div className="text-1-section-2-htw"><h2><div dangerouslySetInnerHTML={{ __html: content?.section4?.title }} /></h2></div>
          <ZoomInDiv className="text-2-section-2-htw">
            <div dangerouslySetInnerHTML={{ __html: content?.section4?.subTilte }} />
          </ZoomInDiv>
          <div className="desktop-view">
            <LeftAnimatedDiv className="main-section-2-htw-left">
              <img loading="lazy"
                src={content?.section4?.image}
                alt={content?.section4?.alt}
              />
            </LeftAnimatedDiv>
            <RightAnimatedDiv className="text-3-section-2-htw main-section-2-htw-right">
              <div dangerouslySetInnerHTML={{ __html: content?.section4?.desc1 }} />
              <br />
              <br />
              <div dangerouslySetInnerHTML={{ __html: content?.section4?.desc2 }} />
              {!read4 ? (
                <div
                  onClick={() => {
                    setRead4(!read4);
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
                  <div dangerouslySetInnerHTML={{ __html: content?.section4?.desc3 }} />
                </>
              )}
            </RightAnimatedDiv>
          </div>
        </div>
        {/* 
        <div style={{ background: "rgba(193, 237, 255, 1)" }} className="main-div-resp">
          <div className="d-flex flex-column container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ZoomInDiv2 className="text-2-section-4-htw" style={{ width: "80%" }}>
                Click to Read
              </ZoomInDiv2>
            </div>
            <div className="desktop-view-2 main-section-1-op" style={{ padding: 0, display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              {
                content?.section5?.forms?.map((item, index) => {
                  return <LeftAnimatedDiv className="" key={index} style={{}}>
                    <button
                      onClick={() => window.open(`${item.link}`, "_blank")}
                      className="btn sub-button-section-3-op new-button"
                      style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.title }} className="m-0" />
                    </button>
                  </LeftAnimatedDiv>
                })
              }
            </div>
          </div>
        </div> */}


        <ShoppingFeature col={"1"} />
        <Footer />
      </div>
    </Navbar>
  );
}
