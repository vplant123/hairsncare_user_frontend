import React, { useEffect } from "react";
import Navbar from "../features/nav/Navbar";
import BookAppointment from "../features/book-appointment/BookAppointment";
import ShoppingFeature from "../features/shopping-feature/ShoppingFeature";
import Footer from "../features/footer/Footer";
import SEOLinkHub from "../components/SEOLinkHub";
import SEO from "../components/SEO";

function BookAppointmentPage(props) {
  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname);
  }, []);
  return (
    <>
      <SEO
        useRouteData={true}
        canonicalUrl="https://www.hairsncares.com/contact-hair-experts"
      />
      <Navbar>
        <BookAppointment />
        <SEOLinkHub
          currentPage="/contact-hair-experts"
          pageType="contact"
        />
        <ShoppingFeature />
        <Footer />
      </Navbar>
    </>
  );
}

export default BookAppointmentPage;
