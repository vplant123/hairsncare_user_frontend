// Footer.js
import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  return (
    <div>
      <footer className="footer-container container">
        <div className="footer-item">
          <img alt="Hairsncares Footer Logo" src="/assets/img/footer-logo.png" title="Hairsncares Footer Logo" />
          <div className="icon-footer">
            <FaMapMarkerAlt size={35} />
            <p>
              HairsnCares.com,First Floor, Solitaire 1, A-102, New Link Rd, Opposite Infinity Mall, Malad West, Mumbai, Maharashtra 400064
            </p>
          </div>
          <div className="icon-footer al">
            <FaPhone size={14} />
            <p>9136028327</p>
          </div>
          <div className="icon-footer al">
            <IoMdMail />
            <p>hairsncares@gmail.com</p>
          </div>
        </div>
        <div className="footer-item">
          <h3>SUPPORT</h3>
          <h5
            onClick={() => {
              scrollToTop()
              navigate("/hair-care-blogs")
            }
            }
            style={{ cursor: "pointer" }}
            className="com-con"
          >
            Blogs{" "}
          </h5>
          <h5
            onClick={() => {
              scrollToTop()
              navigate("/disclaimer")
            }
            }
            style={{ cursor: "pointer" }}
            className="com-con"

          >
            Disclaimer{" "}
          </h5>
          <h5 onClick={() => {
            scrollToTop()
            navigate("/policy")
          }} style={{ cursor: "pointer" }}
            className="com-con"

          >
            Privacy Policy
          </h5>
          <h5
            onClick={() => {
              scrollToTop()
              navigate("/terms-of-service")
            }}
            style={{ cursor: "pointer" }}
            className="com-con"
          >
            Terms of Service
          </h5>
          <h5
            onClick={() => {
              scrollToTop()
              navigate("/return-policy")
            }}
            style={{ cursor: "pointer" }}
          >
            Cancellation/Refund Policy
          </h5>
        </div>
        <div className="footer-item">
          <h3>COMPANY</h3>
          <h5
            className="com-con"
            onClick={() => {
              window.location = "/";
            }}
            style={{ cursor: "pointer" }}
          >
            HOME
          </h5>
          <h5
            className="com-con"
            onClick={() => {
              window.location = "/about-us-quality-hair-loss-scalp-care";
            }}
            style={{ cursor: "pointer" }}
          >
            ABOUT
          </h5>
          <h5
            className="com-con"
            onClick={() => {
              window.location = "/hair-loss-treatment-experts-dermatologists";
            }}
            style={{ cursor: "pointer" }}
          >
            OUR SPECIALIST
          </h5>
          <h5
            className="com-con"
            onClick={() => {
              window.location = "/contact-hair-experts";
            }}
            style={{ cursor: "pointer" }}
          >
            CONTACT US
          </h5>
          <h5
            className="com-con"
            onClick={() => {
              window.location = "/online-hair-loss-test-diagnosis-treatment";
            }}
            style={{ cursor: "pointer" }}
          >
            HAIR LOSS TEST
          </h5>
          <h5
            className="com-con"
            onClick={() => {
              window.location = "/dr-amit-agarkar-hair-restoration-expert";
            }}
            style={{ cursor: "pointer" }}
          >
            DERMATOLOGIST
          </h5>
        </div>

        <div className="footer-item">
          <h3>NEWSLETTER</h3>
          <p className="com-con">
            Subscribe to our weekly Newsletter and receive updates via email
          </p>
          <form action="#" style={{ marginRight: "10%" }}>
            <input
              type="email"
              name="news_email"
              id="news_email"
              placeholder="hairsncares@gmail.com"
            />

            <div class="btn-footer" onClick={() => {
              console.log("wnkefnwei")
              window.open("mailto:hairsncares@gmail.com")
            }}>
              <button
                class="theme-btn-1 btn-foo"
                type="submit"
                value="news_submit"
                id="news_submit"
              // disabled="disabled"

              >
                <RiSendPlaneLine size={20} />
              </button>
            </div>
          </form>
        </div>
      </footer>
      <div className="row">
        <div className="copyright col-12">{new Date().getFullYear()} Copyrights with HairsNcares.com</div>

      </div>
    </div>
  );
};

export default Footer;
