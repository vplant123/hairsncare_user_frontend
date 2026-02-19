import React, { useEffect } from "react";
import Navbar from "../features/nav/Navbar";
import Footer from "../features/footer/Footer";
import { useSelector } from "react-redux";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import Hyderabad from "../features/hyderabad-hair-treatment/hyderabad";

export default function HyderabadHairTreatmentPage(props) {
  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname);
  }, []);
    const content = useSelector((state) => state.content.home);
    return (
    <>
      <SEO useRouteData={true} />
      <Navbar>
        {content ? (
          <>
            <div className="container" style={{ marginTop: "20px" }}>
              <Breadcrumb />
            </div>
            <Hyderabad />
            <Footer />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Navbar>
    </>
  );
}