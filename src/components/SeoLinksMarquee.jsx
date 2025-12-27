import React from "react";

const SeoLinksMarquee = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        fontSize: "14px",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "scroll 20s linear infinite",
        }}
      >
        <a href="/" style={{ color: "black", textDecoration: "none" }}>
          Home
        </a>
        &nbsp;•&nbsp;
        <a
          href="/effective-hair-loss-treatment-men"
          style={{ color: "black", textDecoration: "none" }}
        >
          Men's Hair Loss Treatment
        </a>
        &nbsp;•&nbsp;
        <a
          href="/hair-loss-women-causes-treatments-remedies"
          style={{ color: "black", textDecoration: "none" }}
        >
          Women's Hair Loss Treatment
        </a>
        &nbsp;•&nbsp;
        <a
          href="/hair-transplants-fue-dhi-mhi-natural-restoration"
          style={{ color: "black", textDecoration: "none" }}
        >
          Hair Transplant Solutions
        </a>
        &nbsp;•&nbsp;
        <a
          href="/advanced-hair-loss-solutions-prp-smp-cloning-systems"
          style={{ color: "black", textDecoration: "none" }}
        >
          Advanced Hair Loss Solutions
        </a>
        &nbsp;•&nbsp;
        <a
          href="/hair-loss-treatment-experts-dermatologists"
          style={{ color: "black", textDecoration: "none" }}
        >
          Meet Our Doctors
        </a>
        &nbsp;•&nbsp;
        <a
          href="/take-hair-test"
          style={{ color: "black", textDecoration: "none" }}
        >
          Take Hair Test
        </a>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default SeoLinksMarquee;
