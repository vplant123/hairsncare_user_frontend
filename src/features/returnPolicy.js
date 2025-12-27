import React, { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import Footer from "./footer/Footer";
import Navbar from "./nav/Navbar";
import SEO from "../components/SEO";
import LegalPagesLinks from "../components/LegalPagesLinks";

const ReturnPolicy = (props) => {
  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname);
  }, []);

  return (
    <>
      <Navbar>
        <SEO useRouteData={true} />
        <Container>
          <div
            style={{
              padding: "20px",
              fontFamily: "Arial, sans-serif",
              lineHeight: "1.6",
            }}
          >
            <h1>Return Policy</h1>

            <h2 className="mb-4 text-md">Processing of Refunds</h2>
            <p>
              Refund processing times depend on the original payment method:
              <br />
              Credit/Debit Card or Net Banking: <br />Allow 5 to 7 working
              days for the credit to appear.
              <br />
              <br />
              Cash on Delivery (COD): <br />
              May require an image of a voided cheque leaf, bank statement, or
              bank details. COD refunds may take up to 3 weeks.
              <br />
              UPI (Unified Payments Interface): Refunds via UPI are typically
              credited within 2 to 5 working days, depending on your bank and
              UPI service provider.
            </p>

            <br />

            <p>
              Please note that refund processing times may be delayed due to
              factors such as bank policies or circumstances beyond our control.
              We apologize for any inconvenience caused.
            </p>

            <p>
              This revised policy provides a clear and concise outline of the
              refund, return, and cancellation processes at Vplant Speciality
              Clinic ("Hairsncares").
            </p>

            {/* External link (kept as-is) */}
            <Box mt={4}>
              <Typography variant="body1">
                <a
                  href="https://blogs.hairsncares.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1976d2", textDecoration: "underline" }}
                ></a>
              </Typography>
            </Box>

            {/* 🔥 SEO Internal Links — visually neutral */}
            <div
              style={{
                marginTop: "25px",
                fontSize: "14px",
              }}
            >
              <span>Related Pages:&nbsp;</span>

              <a
                href="/effective-hair-loss-treatment-men"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Men's Hair Loss Treatment
              </a>
              {" • "}
              <a
                href="/hair-loss-women-causes-treatments-remedies"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Women's Hair Loss Treatment
              </a>
              {" • "}
              <a
                href="/hair-transplants-fue-dhi-mhi-natural-restoration"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Hair Transplant Solutions
              </a>
              {" • "}
              <a
                href="/advanced-hair-loss-solutions-prp-smp-cloning-systems"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Advanced Hair Loss Solutions
              </a>
              {" • "}
              <a
                href="/hair-loss-treatment-experts-dermatologists"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Meet Our Doctors
              </a>
              {" • "}
              <a
                href="/about-us-quality-hair-loss-scalp-care"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                About Us
              </a>
            </div>
          </div>

          {/* already-present SEO links */}
          <LegalPagesLinks currentPage="/return-policy" />
        </Container>
        <Footer />
      </Navbar>
    </>
  );
};

export default ReturnPolicy;
