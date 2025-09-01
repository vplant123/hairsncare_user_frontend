import React, { useEffect, useState } from "react";
import Navbar from "../features/nav/Navbar";
// import { Counter } from '../features/counter/Counter'
import Hero from "../features/hero-section/Hero";
import Trust from "../features/trust-section/Trust";
import Review from "../features/review-section/Review";
import CorePrincipleSection from "../features/core-principle-section/CorePrincipleSection";
import RxBlueprint from "../features/rx-section/RxBlueprint";
import Product from "../features/product-list/Product";
import GrowthTransition from "../features/growth-transition/GrowthTransition";
import ShoppingFeature from "../features/shopping-feature/ShoppingFeature";
import BeforeAfter from "../features/before-after/BeforeAfter";
import Media from "../features/media/Media";
// import WhyTrust from '../features/why-trust/WhyTrust'
import Slider from "../features/video-slider/SliderImage";
import Footer from "../features/footer/Footer";
import WhyTrustHairCare from "../features/why-trust-hair-care/WhyTrustHairCare";
import HairAnalysis from "../features/hair-analysis/HairAnalysis";
import HairTestPage from "../pages/HairTestPage";
// import Login from '../features/login/Login'
// import SignUp from '../features/signup/SignUp'
import ProductPage from "./ProductPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUsEdit from "../features/admin-dashboard/manage-website/AboutUsEdit";
import OurSpecialistEdit from "../features/admin-dashboard/manage-website/OurSpecialistEdit";
import Analysis from "../features/doctor-dashboard/Analysis";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import DoctorHomepage from "../features/DoctorHomePage";
import { generateOrganizationSchema } from "../utils/seoUtils";

function HomePage(props) {
  let { cart, setCart } = props;

  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname);
  }, []);

  const content = useSelector((state) => state.content.home);

  useEffect(() => {
    console.log("ojwoejorf");
    // Check if the script is already present
    console.log(
      "AiSensy Widget loaded",
      document.getElementById("aisensy-wa-widget")
    );
    if (!document.getElementById("aisensy-wa-widget")) {
      // Create the script element
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"; // Replace with the actual script URL
      script.id = "aisensy-wa-widget";
      script.async = true;

      // Add the widget-id as an attribute if necessary
      script.setAttribute("widget-id", "F19ELA"); // Replace with the actual widget ID

      // Append the script to the document body or head
      document.body.appendChild(script);

      // Optional: Initialize the widget or handle any additional setup
      script.onload = () => {
        console.log("AiSensy Widget loaded");
        // You can initialize or configure the widget here if needed
      };
    }
  }, []);

  // Generate organization schema
  const organizationSchema = generateOrganizationSchema();

  return (
    <Navbar>
      <Helmet>
        <link rel="canonical" href="https://hairsncares.com" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      {content ? (
        <>
          {/* <section
            style={{
              maxWidth: "900px",
              margin: "0 auto 32px auto",
              padding: "0 16px",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              Why Choose HairsnCares for Hair Loss Treatment & Scalp Health?
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.7",
                textAlign: "center",
              }}
            >
              At HairsnCares, we specialize in personalized hair loss diagnosis
              and advanced hair care solutions for both men and women. Our team
              of expert dermatologists uses cutting-edge AI-driven hair analysis
              tools and modern medical treatments to create effective,
              customized treatment plans. Whether you're struggling with
              thinning hair, scalp issues, or simply looking to restore your
              hair's natural vitality, our comprehensive approach is designed to
              help you see visible results in just a few months.
            </p>

            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              What We Offer:
            </h3>
            <ul
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.7",
                listStyleType: "disc",
              }}
            >
              <li>
                <strong>AI-Driven Hair Analysis:</strong> Get a personalized
                hair analysis using our advanced AI tools for accurate and
                customized treatment plans.
              </li>
              <li>
                <strong>Scalp Health Solutions:</strong> Improve your scalp
                health with tailored solutions to boost hair growth and address
                common scalp issues.
              </li>
              <li>
                <strong>Top-Rated Hair Care Products:</strong> Access our
                curated selection of high-quality, dermatologist-approved hair
                care products for the best results.
              </li>
              <li>
                <strong>Online Hair Test:</strong> Take our online hair test for
                a quick and reliable diagnosis to guide your treatment journey.
              </li>
            </ul>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.7",
                textAlign: "center",
              }}
            >
              Whether you’re dealing with hair thinning, balding, or scalp
              discomfort, our expert team at HairsnCares provides customized
              solutions that cater to your unique needs. Start your journey to
              healthier, fuller hair today by scheduling an appointment or
              exploring our product range.
            </p>
          </section> */}

          <Hero />
          <h1>Transform Your Hair Today</h1>
          <Trust />
          <WhyTrustHairCare />
          <Media />
          <CorePrincipleSection />
          <HairAnalysis />
          <GrowthTransition />
          <RxBlueprint />
          <DoctorHomepage />
          <Product cart={cart} setCart={setCart} />
          <ShoppingFeature />
          <BeforeAfter />
          <Slider />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </Navbar>
  );
}

export default HomePage;
