import React, { useEffect } from "react";
import Navbar from "../features/nav/Navbar";
import HairTest from "../features/hair-test/HairTest";
import ProductsLink from "../features/hair-test/components/ProductsLink";
import SEOLinkHub from "../components/SEOLinkHub";
import ShoppingFeature from "../features/shopping-feature/ShoppingFeature";
import Footer from "../features/footer/Footer";
import SEO from "../components/SEO";

export default function HairTestPage(props) {
  useEffect(() => {
    if (props?.setTitle) props.setTitle(window.location.pathname);
  }, [props]);

  return (
    <>
      <SEO useRouteData={true} />
      <Navbar>
        <HairTest />
        {/* <ProductsLink /> */}
        <SEOLinkHub
          currentPage="/take-hair-test"
          pageType="treatment"
          customInternalLinks={[
            {
              to: "/online-hair-loss-test-diagnosis-treatment",
              text: "Online Hair Loss Diagnosis",
              icon: "💻",
              description:
                "Get expert hair loss diagnosis online with personalized treatment",
            },
          ]}
        />
        <ShoppingFeature />

        <Footer />
      </Navbar>
    </>
  );
}
