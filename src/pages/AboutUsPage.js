import React, { useEffect } from "react";
import Navbar from "../features/nav/Navbar";
import About from "../features/about-us/About";
import Footer from "../features/footer/Footer";
import { useSelector } from "react-redux";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";

export default function AboutUsPage(props) {
  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname);
  }, []);

  const content = useSelector((state) => state.content.aboutUs);
  console.log("about Us content", content);

  return (
    <>
      <SEO useRouteData={true} />
      <Navbar>
        {content ? (
          <>
            <div className="container" style={{ marginTop: "20px" }}>
              <Breadcrumb />
            </div>
            <About />
            <Footer />
          </>
        ) : (
          <></>
        )}
      </Navbar>
    </>
  );
}
