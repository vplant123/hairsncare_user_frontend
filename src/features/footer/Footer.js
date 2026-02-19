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
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="footer-container container">
        <div className="footer-inner">
        <div className="footer-item">
          <img
            loading="lazy"
            alt="Hairsncares Footer Logo"
            src="/assets/img/footer-logo.png"
            title="Hairsncares Footer Logo"
          />
          <div className="icon-footer">
            <FaMapMarkerAlt size={35} />
            <p>
              HairsnCares.com,First Floor, Solitaire 1, A-102, New Link Rd,
              Opposite Infinity Mall, Malad West, Mumbai, Maharashtra 400064
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

          {/* <h5 style={{ cursor: "pointer" }} className="com-con"> */}
          {/* <p>
            <a
              href="https://blogs.hairsncares.com/"
              target="_blank"
              
              rel="noopener noreferrer"
              style={{
                color: "#1b1b1bff",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              Blogs
            </a>
          </p> */}
          {/* </h5> */}
          
          <p>
            <a
              href="https://blogs.hairsncares.com/"
              target="_blank"
              onClick={scrollToTop}
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }} rel="noreferrer"
            >
              Blogs
            </a>
          </p>

          {/* <h5 className="com-con"> */}
          <p>
            <a
              href="/disclaimer"
              onClick={scrollToTop}
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              Disclaimer
            </a>
          </p>
          {/* </h5> */}

          <p>
            <a
              href="/policy"
              onClick={scrollToTop}
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              Privacy Policy
            </a>
          </p>

          <p>    
            <a
              href="/terms-of-service"
              onClick={scrollToTop}
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              Terms of Service
            </a>
          </p>

          <p>  
            <a
              href="/return-policy"
              onClick={scrollToTop}
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              Cancellation/Refund Policy
            </a>
          </p>
        </div>

        <div className="footer-item">
          <h3>COMPANY</h3>

          <p>
            <a
              href="/"
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              HOME
            </a>
          </p>

          <p>
            <a
              href="/about-us-quality-hair-loss-scalp-care"
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              ABOUT
            </a>
          </p>

          <p>
            <a
              href="/hair-loss-treatment-experts-dermatologists"
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              OUR SPECIALIST
            </a>
          </p>

          <p>            <a
              href="/contact-hair-experts"
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              CONTACT US
            </a>
          </p>

          <p>
            <a
              href="/online-hair-loss-test-diagnosis-treatment"
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              HAIR LOSS TEST
            </a>
          </p>

          <p>
            <a
              href="/dr-amit-agarkar-hair-restoration-expert"
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              DERMATOLOGIST
            </a>
          </p>
          
        <div>
        <p>Online Hair Test Across India

          <select
            className="footer-dropdown"
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) {
                scrollToTop();
                window.location.href = e.target.value;
              }
            }}
          >
            <option value="" disabled>
              Select a city
            </option>
            <option value="/online-hair-loss-treatment-bangalore">
              Bangalore
            </option>
            <option value="/online-hair-loss-treatment-delhi">
              Delhi
            </option>
            <option value="/online-hair-loss-treatment-chennai">
              Chennai
            </option>
            <option value="/online-hair-loss-treatment-hyderabad">
              Hyderabad
            </option>
          </select>
        </p>
        </div>

          {/* <h5 className="com-con">
            <a
              href="/online-hair-loss-treatment-bangalore"
              onClick={scrollToTop}
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              BANGALORE TREATMENT
            </a>
          </h5>

          <h5 className="com-con">
            <a
              href="/online-hair-loss-treatment-delhi"
              onClick={scrollToTop}
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              DELHI TREATMENT
            </a>
          </h5>
          <h5 className="com-con">
            <a
              href="/online-hair-loss-treatment-chennai"
              onClick={scrollToTop}
              style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
            >
              CHENNAI TREATMENT
            </a>
          </h5> */}
        </div>
        </div>

        {/* <div className="footer-item">
          <h3>NEWSLETTER</h3>
          <p className="com-con">
            Subscribe to our weekly Newsletter and receive updates via email
          </p>
          <form action="#" style={{ marginRight: "10%" }}>
            <input
              type="email"
              name="news_email"
              id="news_email"
              class="p-2"
              placeholder="hairsncares@gmail.com"
            />

            <div
              class="btn-footer"
              onClick={() => {
                window.open("mailto:hairsncares@gmail.com");
              }}
            >
              <button
                class="theme-btn-1 btn-foo"
                type="submit"
                value="news_submit"
                id="news_submit"
              >
                <RiSendPlaneLine size={20} />
              </button>
            </div>
          </form>
        </div> */}
      </footer>

      <div className="row">
        <div className="copyright col-12">
          {new Date().getFullYear()} Copyrights with HairsNcares.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
