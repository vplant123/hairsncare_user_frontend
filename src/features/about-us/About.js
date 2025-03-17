import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LeftAnimatedDiv, RightAnimatedDiv, ZoomInDiv } from "../../componet/Animation";

export default function About() {
  const navigate = useNavigate();
  const home = useSelector((state) => state.content.home);

  const content = useSelector((state) => state.content.aboutUs);

  let dd = [
    {
      alt : "Close-up of a person holding a capsule, representing Correct Supplements for effective hair loss and hair care treatments.",
      title : "Correct Supplements"
    },
    {
      alt : "Bowl of nutritious food with eggs, avocado, spinach, and berries, representing a Balanced Diet for effective hair loss and hair care treatments.",
      title : "Balanced Diet."
    },
    {
      alt : "Woman embracing nature and sunlight, symbolizing a Healthy Lifestyle for effective hair loss and hair care treatments.",
      title : "Healthy Lifestyle."
    },
    {
      alt : "Person managing stress with hands on forehead, highlighting Stress Management for improved hair loss and hair care treatments.",
      title : "Stress Management."
    }
  ]

  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="about-us-container">
            <LeftAnimatedDiv className="">
              <h2 className="contect-us-heading " >{content?.section1?.title}</h2>
            </LeftAnimatedDiv>
            <ZoomInDiv>
              <img src={content?.section1?.image}
                alt = "Group of experienced doctors at Hairsncares, led by Dr. Amit Agarkar, specializing in hair loss and scalp care solutions."
                title="Experienced Team Led by Dr. Amit Agarkar"
              />
            </ZoomInDiv>
            <RightAnimatedDiv>
              {/* <h4 className="sub-had-2">{content?.section1?.image}</h4> */}
              <h2 className="cont-head-2">{content?.section1?.description}</h2>
              
            </RightAnimatedDiv>
            
          </div>
          <div className='icon-abs' style={{top : "35%"}}>
        {home?.section1?.socialImg?.map((e, ind) => {
          let alt = ind == "0" ? "Facebook" : ind == 1 ? "Whatsapp" : ind == 1 ? 
            "Youtube" : ind == 3 ? "Instagram" : "X";
          let title = ind == "0" ? "Facebook logo" : ind == 1 ? "Whatsapp logo" : ind == 1 ? 
            "Youtube logo" : ind == 3 ? "Instagram logo" : "X logo";
          return (
            <div onClick={() => {
              if (ind == 0) {
                window.open("https://www.facebook.com/profile.php?id=61558302628092")
              }
              if (ind == 1) {
                window.open("https://wa.link/pcousx")
              }
              if (ind == 2) {
                window.open("https://www.youtube.com/@Hairsncares")
              }
              if (ind == 3) {
                window.open("https://www.instagram.com/hairsncares/?hl=en")
              }
              if (ind == 4) {
                window.open("https://x.com/hairsncare")
              }
            }} style={{ cursor: "pointer" }}>
              <img src={e} style={{ width: "25px", height: "25px" }} alt={alt} title={title}/>
            </div>
          )
        })}
      </div>
  
        </div>
        
        
      </div>
      <div className="about-section-2 container">
        <LeftAnimatedDiv className="item-2">
          <h1 style={{fontSize : "32px"}}>
            {content?.section2?.title}
          </h1>
          <span>
            {content?.section2?.shortDesc}
          </span>
          <p>
            {content?.section2?.longDesc}
          </p>
        </LeftAnimatedDiv>
        <RightAnimatedDiv className="image-2 ">
          <img alt='Hand holding healthy brown hair, representing the commitment of Hairsncares to quality hair care and scalp health solutions.' src={content?.section2?.img} 
            title="Hairsncares Commitment"
            />
        </RightAnimatedDiv>
      </div>
      <div className="section-3-wrapper">
        <div className="container">
          <div>
            <h2 className="content-3-heading">{content?.section3?.title}</h2>
          </div>
          <div className="content-3">
            <ZoomInDiv className="content-container ">
              <img alt='Doctor at Hairsncares specializing in hair loss and scalp care, symbolizing the journey and expertise in hair health solutions.' src={content?.section3?.img} 
                title="Hairsncares Journey"
                />
            </ZoomInDiv>
            <RightAnimatedDiv className="content-container-2 ">

              {content?.section3?.data?.map((e, ind) => {
                return (
                  <div className="content-item">
                    <span>0{ind + 1}</span>
                    <div>
                      <h3 className="content-sub-item">
                        {e?.title}
                      </h3>
                      {/* <p> */}
                      <div
              style={{ margin: "0 0 50px 0" }}
              dangerouslySetInnerHTML={{ __html: e?.desc }}
            />
                        {/* {e?.desc} */}
                      {/* </p> */}
                    </div>
                  </div>
                )
              })}
            </RightAnimatedDiv>
          </div>
        </div>
      </div>
      <div className="about-container-3 container">
        <LeftAnimatedDiv className="container-3-item ">
          <img alt='Applying hair treatment serum as part of Hairsncares comprehensive approach to hair loss and scalp care solutions' src={content?.section4?.img}
            title="Comprehensive Approach"
          />
        </LeftAnimatedDiv>
        <LeftAnimatedDiv className="container-3-item">
          <h2>{content?.section4?.title}</h2>
          {/* <p>
            {content?.section4?.desc} */}
            <div
              style={{ margin: "0 0 50px 0" }}
              dangerouslySetInnerHTML={{ __html: content?.section4?.desc }}
            />
          {/* </p> */}
        </LeftAnimatedDiv>
      </div>
      <div className="about-container-4 container">
        <div className="head-2-container">
          <h2 className="contect-us-heading-2">
            {content?.section5?.title}
          </h2>
        </div>
        <div className="about-4-items">

          {content?.section5?.data?.map((e,ind) => {
            return (
              <RightAnimatedDiv className="items-con">
                <div className="circle-4">
                  <img alt={dd[ind]?.alt} src={e?.img} title={dd[ind]?.title} />
                </div>
                <div className="circle-conta">
                  <button className="circle-4"><h3>{e?.title}</h3></button>
                </div>
                <p>
                  {e?.desc}
                </p>
              </RightAnimatedDiv>
            )
          })}

        </div>
        <div className="hero-btn-about">
          <button
            onClick={() => navigate("/take-hair-test")}
            className="btn primary"
          >
            TAKE AN ONLINE HAIR TEST
          </button>
        </div>
      </div>
      <div className="our-commitment-container">
        <div className="container">
          <h2 style={{    paddingTop: "6rem",
    marginBottom: "3rem"}}>{content?.section6?.title}</h2>
          <ZoomInDiv>
          <div
              // style={{ margin: "0 0 30px 0" }}
              dangerouslySetInnerHTML={{ __html: content?.section6?.desc }}
            />
          </ZoomInDiv>
          {/* <p>
            We are inspired by the success stories of our clients who have
            regained their confidence and transformed their lives through our
            comprehensive hair care programs. Hairsncares is dedicated to being
            the trusted companion on your path to healthier, fuller hair.
          </p>
          <p>
            Welcome to Hairsncares, where your hair health is our top priority.
            Together, let's unlock the secrets to radiant, thriving hair and
            embrace a life filled with confidence and vitality.
          </p> */}
          <div className="commit-con">

            {
              content?.section6?.data?.map((e,ind) => {
                return (
                  <LeftAnimatedDiv className="commit-item">
                    <div>
                      <div className="commit-sub">
                        <img alt={ind == "0" ? "Vision icon" : "Our icon"} 
                          title={ind == "0" ? "Vision icon" : "Our Goal  icon"}
                        src={e?.icon} />
                        <h3>{e?.title}</h3>
                      </div>
                      <p>
                        {e?.desc}
                      </p>
                    </div>
                  </LeftAnimatedDiv>
                )
              })
            }

          </div>
          <div className="hero-btn-about">
            <button
              onClick={() => navigate("/best-hair-care-products-hair-loss-scalp-health")}
              className="btn primary"
            >
              VIEW PRODUCT RANGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
