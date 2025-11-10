import React from "react";
// import "./page1.css";
import "./MobilePage1.css";
export default function Page1({ data }) {
  console.log("jojerofre", data?.personal);
  return (
      <div className="">
        <div className="head-managereportN">
          <img loading="lazy" src="/assets/img/logo.png" className="head-managereport-logo" alt="HairsnCares logo" />
          <h2>Doctors  Analysis Report</h2>
          <p>
            Smart Report
          </p>
        </div>

        <div className="reportAndDoctor">
          <div className="reportbarWrap">
            <div className="reportbar bluebg">
               <p>Diagnosis</p>
            </div>
            <div className="reportbar lightBluebg">
            <p>Hair & Scalp Analysis</p>
            </div>
            <div className="reportbar yellowbg">
              <p>Nutritional Assessment</p>
            </div>
            <div className="reportbar orngebg">
              <p>Lifestyle Assessment</p>
            </div>
            <div className="reportbar perpulbg">
              <p>Stress Analysis</p>
            </div>
          </div>
          <div className="doctorDetails">
            <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
              <div className="testerChip">
                <p>{data?.personal?.name}</p>
              </div>
            </div>

            <div className="doctorDetailsInfo">
              <h3>Dr Amit Agarkar</h3>
              <p>MBBS, MD, FCPS,DDV</p>
              <p>Fellowship in Hair Transplant</p>
              <p>Reg. No,- 06/07/2868</p>
            </div>
            <img loading="lazy" className="doctor-img" src="https://res.cloudinary.com/drkpwvnun/image/upload/v1731256157/hair-assessment/a6jo0qrxvq61phbr9ywt.png"/>
          </div>
        </div>

        <div className="expartSec" >
          <div className="expartInfo">
            <h2>Welcome to the hairsncares.com</h2>
            <h3>YOUR <span>HAIR EXPERT!</span></h3>
            <p>
              Dear {data?.personal?.sex == "Male" ? "Mr" : "Miss"}. {data?.personal?.name}, We appreciate your interest in taking part in
              this detailed hair assessment. Your willingness to participate will
              greatly contribute to our research and understanding of the subject
              matter. Thank you for your time and effort in completing this test.
              We assure you that your responses will be treated with utmost
              confidentiality and will be utilized solely for research purposes.
              Your contribution is immensely valuable, and we are grateful for
              your cooperation. Your involvement plays a pivotal role in the
              success of hair growth journey
            </p>
          </div>
          <div className="row sec-2-right expartList">
            <div className="col-4">
                <div className="expartListBox">
                    <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode167-alsy.svg" alt="IsolationMode167" style={{ height: "100%" }} />
                    <span>Expert Dermats</span>
                </div>
            </div>

            <div className="col-4">
              <div className="expartListBox">
                  <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode178-0ogs.svg" style={{ height: "100%" }}/>
                  <span>Total Care Approach</span>
              </div>
            </div>
            <div className="col-4">
              <div className="expartListBox">
                <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/layer11117-b27.svg" alt="IsolationMode167" style={{ height: "100%" }} />
                <span>Reliability</span>
              </div>
            </div>

            <div className="col-4">
              <div className="expartListBox">
                <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode167-alsy.svg" alt="IsolationMode167" style={{ height: "100%" }} />
                <span> 
                  E-monitoring and Support
                </span>
              </div>
            </div>

            <div className="col-4">
              <div className="expartListBox">
                <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode153-p23.svg" alt="IsolationMode167" style={{ height: "100%" }} />
                <span>Proven Therapies</span>
              </div>
            </div>

            <div className="col-4">
              <div className="expartListBox">
                <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode187-pw16.svg" alt="IsolationMode167" style={{ height: "100%" }} />
                <span>FDA Appproved Medications</span>
              </div>
            </div>
            </div>
        </div>
  
        <div className="">
          {/* <div className="sec-3-pos-1" style={{position : "relative"}}>
            <div className="row" style={{padding : 0}}>
              <div className="col-3"  style={{padding : "0 40px",position : "relative"}}>
                <div className="sec-3-pos-2" style={{
                      position: "absolute",
                      top: "-15px",
                      width: "100%"
                }}>
                  View Report
                </div>
              </div>
              <div className="col-3 offset-1"  style={{padding : "0 40px",position : "relative"}}>
                <div className="sec-3-pos-2" style={{
                      position: "absolute",
                      top: "-15px",
                      width: "100%"
                }}>
                  View Card & Order Medicines
                </div>
              </div>
              <div className="col-3 offset-1"  style={{padding : "0 40px",position : "relative"}}>
                <div className="sec-3-pos-2" style={{
                      position: "absolute",
                      top: "-15px",
                      width: "100%"
                }}>
                  Medicines at Doorstep
                </div>
              </div>
            </div>
          </div> */}
          
          <div className="viewportSec">
            <div className="row no-gutters">
              <div className="col-md-4 col-sm-12">
                <div className="viewportBox">
                  <div className="topPart">
                    <div className="ttl">
                      <h2>View Report</h2>
                    </div>
                  </div>
                  <div className="bottomPart">
                    <div className="bottomPartWarp">
                      <div className="anaBoxWrap">
                        <div className="anaBox">
                          <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode1137-n7jv.svg" style={{width : "100%"}} />
                          <span>Analysis Report</span>
                        </div>
                        <div className="anaBox">
                          <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode1137-n7jv.svg" style={{width : "100%"}} />
                            <span>Management Report</span>
                        </div>
                        <div className="anaBox">
                          <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode1137-n7jv.svg" style={{width : "100%"}} />
                          <span>Prescription</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="viewportBox">
                  <div className="topPart">
                    <div className="ttl">
                      <h2>View Card & Order Medicines</h2>
                    </div>
                  </div>
                  <div className="bottomPart">
                    <div className="bottomPartWarp">
                      <div className="thamBox">
                        <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/image2361165-7n1-300w.png" style={{height : "85%"}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="viewportBox">
                  <div className="topPart">
                    <div className="ttl">
                      <h2>Medicines at Doorstep</h2>
                    </div>
                  </div>
                  <div className="bottomPart">
                    <div className="bottomPartWarp">
                      <div className="thamBox">
                        <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/image2351164-ija-400w.png" style={{height : "85%",width : "75%"}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-4" style={{padding : "0 30px"}}>
                <div className="sec-4-main row">
                    <div className="col-4" style={{marginTop: "5%",position: "relative"}}>
                        <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode1137-n7jv.svg" style={{width : "100%"}} />
                        <div className="" style={{fontSize: "8px", position: "absolute", top: "20px", left: "17px", fontWeight: "700"}}>
                            Analysis Report
                        </div>
                    </div>
                    <div className="col-4" style={{marginTop: "30%",position: "relative"}}>
                        <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode1137-n7jv.svg" style={{width : "100%"}} />
                        <div className="" style={{fontSize: "5px", position: "absolute", top: "26px", left: "17px", fontWeight: "700"}}>
                            Management Report
                        </div>
                    </div>
                    <div className="col-4" style={{marginTop: "15%",position: "relative"}}>
                        <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/isolationmode1137-n7jv.svg" style={{width : "100%"}} />
                        <div className="" style={{fontSize: "5px", position: "absolute", top: "30px", left: "19px", fontWeight: "700"}}>
                            Prescription
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-4" style={{padding : "0 30px"}}>
                <div className="sec-4-main" style={{ display: "flex", justifyContent: "center",alignItems : "center"}}>
                    <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/image2361165-7n1-300w.png" style={{height : "85%"}} />
                </div>
            </div>

            <div className="col-4" style={{padding : "0 30px"}}>
                <div className="sec-4-main row" style={{ display: "flex", justifyContent: "center",alignItems : "center"}}>
                    <img loading="lazy" src="/assets/img/reports/doctorAnalysis/page1/image2351164-ija-400w.png" style={{height : "85%",width : "75%"}} />
                </div>
            </div>
          </div> */}
        </div>








      <div className="partBottomDesc mt-2"><p><strong>Legal Disclaimer</strong>: This communication aims to ensure your comprehensive understanding of the diagnosis's nature. (Read more.. Please be cognizant that, as of this juncture, the diagnosis is regarded as provisional, signifying its preliminary status. It is derived solely from the data and photos (if provided) obtained through the online hair test furnished by you. Nevertheless, it is imperative to accentuate that the precision of this diagnosis may exhibit incongruities across individuals. Various determinants, encompassing distinctive health conditions, genetic makeup, and external influences, can contribute to disparities in accuracy. While our utmost endeavor is directed towards accuracy, we hereby acknowledge the potential divergence in individual cases, thus warranting judicious discretion during the interpretation of outcomes.) Diagnosis & Details</p>
    </div>
 
    </div> 
  );
}
