import React, { useEffect, useState } from "react";
import "./Before.css";
import { useSelector } from "react-redux";
import useDivInView, { LEFT_VARIANTS, RIGHT_VARIANTS, TRANSITION } from "../../hooks/useDivInView";
import { motion } from "framer-motion";

const BeforeAndAfterItem = ({ e, ind }) => {
  const [ref1, control1] = useDivInView();
  const [ref2, control2] = useDivInView();
  return (
    <div className="dem0-container">
      <motion.img
        ref={ref1}
        animate={control1}
        initial="hidden"
        variants={LEFT_VARIANTS}
        transition={TRANSITION}
        loading="lazy"
        alt="Before and after results of hair loss treatment showing visible hair growth, demonstrating the effectiveness of Hairs N Cares solutions."
        title="Before and After Results"
        src={e?.img1}
      />
      <motion.img
        ref={ref2}
        animate={control2}
        initial="hidden"
        variants={RIGHT_VARIANTS}
        transition={TRANSITION}
        loading="lazy"
        alt="Before and after results of hair loss treatment showing visible hair growth, demonstrating the effectiveness of Hairs N Cares solutions."
        title="Before and After Results"
        src={e?.img2}
      />
    </div>
  )
}

function BeforeAfter() {
  const [cur, setCur] = useState(1);

  const content = useSelector((state) => state.content.home);
  console.log("jojkeor", content);

  useEffect(() => {
    const dataLength = content?.section10?.data?.length || 11;
    let timeout = setTimeout(
      () =>
        setCur((prevIndex) =>
          prevIndex >= dataLength ? 1 : prevIndex + 1
        ),
      4000 // Reduced from 5000ms to 4000ms for smoother cycling
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [cur, content?.section10?.data?.length]);

  return (
    <div>
      <h2
        className="product-title animate__animated animate__fadeInLeft"
        style={{ 
          fontWeight: "700", 
          fontSize: "2.3rem", 
          textAlign: "center", 
          marginBottom: "2rem",
          color: "#333"
        }}
      >
        {content?.section10?.title || "Before & After"}
      </h2>
      <div className="before container">
        {content?.section10?.data?.map((e, ind) => {
          const isVisible = (cur === ind + 1 || cur === ind + 2);
          const isActive = cur === ind + 1;
          
          return (
            <div
              key={ind}
              className={`before-after-item ${
                isVisible ? "visible" : "hidden"
              } ${isActive ? "active" : ""}`}
              style={{
                transition: "all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                position: isVisible ? "relative" : "absolute",
                visibility: isVisible ? "visible" : "hidden",
                pointerEvents: isVisible ? "auto" : "none",
                transitionDelay: isVisible ? "0.1s" : "0s"
              }}
            >
              <BeforeAndAfterItem e={e} ind={ind} />
            </div>
          );
        })}
      </div>

      <div className="pagination-container">
        <ul className="slick-dots" role="tablist">
          {content?.section10?.data?.map((_, index) => (
            <li
              key={index}
              className={cur == index + 1 ? "slick-active" : ""}
              aria-hidden="false"
              role="presentation"
              aria-selected={cur == index + 1}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCur(index + 1)}
            >
              <button 
                type="button" 
                data-role="none" 
                role="button" 
                tabIndex="0"
                aria-label={`Slide ${index + 1}`}
              >
                {index + 1}
              </button>
            </li>
          )) || 
          // Fallback for when data is not loaded
          Array.from({length: 11}, (_, index) => (
            <li
              key={index}
              className={cur == index + 1 ? "slick-active" : ""}
              aria-hidden="false"
              role="presentation"
              aria-selected={cur == index + 1}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCur(index + 1)}
            >
              <button 
                type="button" 
                data-role="none" 
                role="button" 
                tabIndex="0"
                aria-label={`Slide ${index + 1}`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BeforeAfter;
