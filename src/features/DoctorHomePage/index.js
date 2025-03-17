import React, { useEffect, useState } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import useDivInView, {
  LEFT_VARIANTS,
  RIGHT_VARIANTS,
  TRANSITION,
} from "../../hooks/useDivInView";
import { motion } from "framer-motion";
import BASE_URL from "../../Config";
import { toast } from "react-toastify";
import { useMediaQuery } from "@mui/material";
import { ZoomInDiv2 } from "../../componet/Animation";
import { useNavigate } from "react-router-dom";


const MediaImage = ({ src, index }) => {
  const [ref, control] = useDivInView();
  return (
    <motion.img
      alt="hair"
      src={src}
      ref={ref}
      animate={control}
      initial="hidden"
      variants={RIGHT_VARIANTS}
      transition={{
        ...TRANSITION,
        delay: index * 0.2,
      }}
    />
  );
};
function DoctorHomepage() {
  const [cur, setCur] = useState(1);

  const content = useSelector((state) => state.content.home);
  console.log("jojkeor", content);

  useEffect(() => {
    let timeout = setTimeout(
      () =>
        setCur((prevIndex) =>
          prevIndex == content?.section5?.length - 2 ? 1 : prevIndex + 1
        ),
      5000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [cur]);
  const [doctors, setDoctors] = useState([]);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/admin/all-doctor-Data?isSpec=1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      console.log("vejorj", jsonData);
      setDoctors(jsonData?.data);
    } catch (error) {
      // toast.error("Error fetching doctors: " + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [slide, setSlide] = useState(3);
  const [slide1, setSlide1] = useState(2);

  useEffect(() => {
    if (isLargeScreen) {
      setSlide(2);
      setSlide1(2);
    } else {
      setSlide(0);
      setSlide1(0);
    }
  }, [isMobile, isLargeScreen]);

  return (
    // <div class="container">
    //   <div className="row" style={{margin : "50px 0px 50px 0"}}>
    //     <div className="col-12 col-md-4 d-flex flex-column">
    //       <p class="text-blk heading-text">Meet our dream team</p>
    //       {/* <p class="text-blk sub-heading-text">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
    //         enim risus sit nullam aliquam. Mattis.
    //       </p> */}
    //     </div>
    //     <div className="col-12 col-md-8 d-flex flex-column">
    //       {/* <div>
    //         <p class="text-blk team-name">Management Team</p>
    //       </div> */}
    //       <div className="row">
    //         {
    //           doctors?.slice(0, content?.section3?.length - slide1)
    //           .map((e, ind) => {
    //             return(
    //               <div className="col-12 col-sm-6 col-md-4" style={{fontWeight : "600"}}>
    //               <div style={{    padding: "10px"}} className="d-flex flex-column">
    //               <img class="team-member-image" src={e?.image}/>
    //               <p class="text-blk">
    //                   {e?.name}
    //                 </p>
    //                 <p class="text-blk">
    //                   {e?.degree}
    //                 </p>
    //               </div>
    
    //             </div>
    //             )
    //           })
    //         }

    //         {/* <div className="col-12 col-sm-6 col-md-4">
    //         <div style={{    padding: "10px"}} className="d-flex flex-column">
    //           <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg"/>
    //           <p class="text-blk">
    //               Gustavo Workman
    //             </p>
    //             <p class="text-blk">
    //               CEO
    //             </p>
    //           </div>

    //         </div>
    //         <div className="col-12 col-sm-6 col-md-4">
    //         <div style={{    padding: "10px"}} className="d-flex flex-column">
    //           <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET3.jpg"/>
    //           <p class="text-blk">
    //               Gustavo Workman
    //             </p>
    //             <p class="text-blk">
    //               CEO
    //             </p>
    //           </div>

    //         </div> */}
    //       </div>
    //     </div>
    //     <ul class="slick-dots" role="tablist" style={{ marginTop: "30px" }}>
    //     {doctors
    //       ?.slice(0, content?.section3?.length - slide1)
    //       .map((e, ind) => {
    //         return (
    //           <li
    //             class={cur === ind + 1 ? "slick-active" : ""}
    //             aria-hidden="false"
    //             role="presentation"
    //             aria-selected={cur == ind + 1}
    //             aria-controls={cur}
    //             id={cur}
    //             onClick={() => setCur(ind + 1)}
    //           >
    //             <button
    //               type="button"
    //               data-role="none"
    //               role="button"
    //               tabindex="0"
    //             >
    //               {ind + 1}
    //             </button>
    //           </li>
    //         );
    //       })}
    //   </ul>
    //   </div>
    // </div>

    <>
            <div
          className="d-flex flex-column docotr-section-main"
          style={{ padding: "2% 0 2% 0" }}
        >
          <div className="desktop-view-1 container" style={{ gap: "30px" }}>
            <div className=" main-section-2-htw-right d-flex flex-column">
              <ZoomInDiv2
                className="doctor-head-2-section-2-htw"
                style={{ textAlign: "left", color: "white" }}
              >
                <h2>
                Dr. Amit  Agarkar
                </h2>
              </ZoomInDiv2>

              <div className="d-flex flex-column  mt-5 gap-desktop" style={{ gap: "20px" }}>
                <ZoomInDiv2
                  className="d-flex gap-desktop"
                  // style={{ gap: "20px" }}

                >
                  <div className="icon-doctor-num">
                    <div className="icon-doctor-inner">
                      <img src = "https://res.cloudinary.com/drkpwvnun/image/upload/v1735636941/hair-assessment/dr-amit-agarkar-qualifications.png.png"  style={{
                        height : "100%",
                        width:"100%"
                      }}
                      alt="Dr. Amit Agarkar, qualifications MBBS, MD, FCPS, and DDV."
                      title= "Dr. Amit Agarkar - Qualifications."
                      />
                    </div>
                  </div>
                  <div
                    className="text-3-section-2-htw"
                    style={{ color: "white", width: "80%" }}
                  >
                    <h3 style={{ color: "white"}}><strong className="head-doctor">Qualification</strong></h3>
                    MBBS, MD, FCPS, and DDV 
                  </div>
                </ZoomInDiv2>

                <ZoomInDiv2
                  className="d-flex gap-desktop"
                  // style={{ gap: "20px" }}

                >
                  <div className="icon-doctor-num">
                    <div className="icon-doctor-inner">
                      <img src = "https://res.cloudinary.com/drkpwvnun/image/upload/v1730146214/hair-assessment/v9eoecvuj8jphbor4gr0.png"  style={{
                        height : "100%",
                        width:"100%"
                      }}
                      alt="Dr. Amit Agarkar, 15+ Years of Experience  in Hair Loss and Hair Care Treatments for trusted and effective hair growth solutions."
                      title="Over 15 Years of Expertise."
                      />
                    </div>
                  </div>
                  <div
                    className="text-3-section-2-htw"
                    style={{ color: "white", width: "80%" }}
                  >
                    <h3 style={{ color: "white"}}><strong className="head-doctor">Experience</strong></h3>
                    15+ Years
                  </div>
                </ZoomInDiv2>

                <ZoomInDiv2
                  className="d-flex gap-desktop"
                  // style={{ gap: "20px" }}

                >
                  <div className="icon-doctor-num">
                    <div className="icon-doctor-inner">
                      <img src = "https://res.cloudinary.com/drkpwvnun/image/upload/v1730146606/hair-assessment/em5gumnojyxkneoxgsnp.png"  style={{
                        height : "100%",
                        width:"100%"
                      }}
                      alt="Icon representing skills in dermatology, trichology, and hair transplant surgery for advanced Hair Loss and Hair Care Treatments."
                      title="Skilled in Trichology."
                      />
                    </div>
                  </div>
                  <div
                    className="text-3-section-2-htw"
                    style={{ color: "white", width: "80%" }}
                  >
                    <h3 style={{ color: "white"}}><strong className="head-doctor">Skills</strong></h3>
                    Dermatologist, Trichologist, Hair Transplant Surgeon
                  </div>
                </ZoomInDiv2>


              </div>
              <div className="mt-5">
              <button onClick={() => navigate('/hair-loss-treatment-experts-dermatologists')} className="btn11 primary">Explore More</button>

              </div>



            </div>
            <ZoomInDiv2
              className="main-section-2-htw-left"
            >
              <img
                src="/assets/img/hairTreatmentWomen/dr-amit-agarkar-hair-care-expert.png"
                alt="Dr. Amit Agarkar, expert in Hair Loss and Hair Care Treatments, known for his personalized approach to hair health and growth."
                title="Dr. Amit Agarkar – Hair Specialist."
                style={{ height: "100%", width: "100%" }}
              />
            </ZoomInDiv2>
          </div>
        </div>
    </>
  );
}

export default DoctorHomepage;
