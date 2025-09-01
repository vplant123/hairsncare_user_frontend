import React from 'react'
import './Growth.css'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import useDivInView, { RIGHT_VARIANTS, TRANSITION } from '../../hooks/useDivInView';


function GrowthStep({ stepNumber, stepTitle, imgSrc, alt,
  title }) {
  const [ref, control] = useDivInView();
  return (
    <motion.div
      className=""
      ref={ref}
      animate={control}
      initial="hidden"
      variants={RIGHT_VARIANTS}
      transition={{
        ...TRANSITION,
        delay: 0.2 * parseInt(stepNumber),
      }}
      style={{ animationDelay: "0.2s" }}
    >
      {parseFloat(stepNumber) % 2 == 1 ? (
        <>
          <img loading="lazy" alt={alt} src={imgSrc} title={title} />
          <a style={{ flexDirection: "column", gap: 0 }}>
            <span>{stepNumber}</span>
            <div style={{ textAlign: "center" }}><h3 style={{ fontSize: "12px" }}>{stepTitle}</h3></div>
          </a>
        </>
      ) : (
        <>
          <a style={{ flexDirection: "column", gap: 0 }}>
            <span>{stepNumber}</span>
            <div style={{ textAlign: "center" }}><h3 style={{ fontSize: "12px" }}>{stepTitle}</h3></div>
          </a>
          <img loading="lazy" alt={alt} src={imgSrc} title={title} />
        </>
      )}
    </motion.div>
  );
}


function GrowthTransition() {
  const navigate = useNavigate();

  const growthSteps = [
    { stepNumber: "01", stepTitle: "HAIR LOSS/HAIR THINING", imgSrc: '/uploads/Hair-loss-care-treatments-icon.png', animationDelay: '0s', alt: "Abstract icon representing Hair Loss and Hair Thinning", title: "Hair Loss Treatments" },
    { stepNumber: "02", stepTitle: "HAIR TEST", imgSrc: '/uploads/Hair-scalp-analysis-icon.png', animationDelay: '0.2s', alt: "Icon symbolizing comprehensive Hair & Scalp Analysis for diagnosing and treating hair loss.", title: "Hair & Scalp Analysis" },
    { stepNumber: "03", stepTitle: "EVALUATION OF PHOTOS", imgSrc: '/uploads/Hair-growth-treatments-icon.png', animationDelay: '0s', alt: "Icon representing hair growth solutions as part of Hair Loss and Hair Care Treatments for fuller, healthier hair.", title: "Hair Growth." },
    { stepNumber: "04", stepTitle: "VIRTUAL CONSULTATION", imgSrc: '/uploads/Virtual-consultation-hair-care.png', animationDelay: '0.2s', alt: "Icon representing virtual consultation services for Hair Loss and Hair Care Treatments by certified dermatologists", title: "Virtual Consultation" },
    { stepNumber: "05", stepTitle: "HOLISTIC TREATMENT PLAN", imgSrc: '/uploads/Holistic-treatment-plan-icon.png', animationDelay: '0s', alt: "Icon representing a Holistic Treatment Plan for comprehensive Hair Loss and Hair Care Treatments addressing overall hair health.", title: "Holistic Treatment Plan." },
    { stepNumber: "06", stepTitle: "HAIR GROWTH", imgSrc: '/uploads/full-hair-growth-icon.png', animationDelay: '0.2s', alt: "Icon symbolizing full hair growth achieved through effective Hair Loss and Hair Care Treatments.", title: "Full Hair Growth." },
  ];

  return (
    <div className='growth-wrapper'>
      <div className='d-flex flex-column' style={{ alignItems: "center" }}>
        <h2 style={{ marginBottom: "30px", paddingBottom: 0, animationDelay: '0.5s', fontSize: "2rem", fontWeight: "700" }} className=" mt-4 animate__animated animate__fadeInDown">
          Start Your Hair Growth Transformation
        </h2>
      </div>
      <div className='growth-container container'>
        {growthSteps.map((step, index) => (
          <GrowthStep
            key={index}
            stepNumber={step.stepNumber}
            stepTitle={step.stepTitle}
            index={index}
            imgSrc={step.imgSrc}
            animationDelay={step.animationDelay}
            alt={step?.alt}
            title={step?.title}
          />
        ))}
      </div>
      <div className='growth-btn'>
        <button className='btn primary' onClick={() => navigate("/take-hair-test")} style={{ padding: "12px" }}>
          TAKE A HAIR TEST @Rs.300
        </button>
      </div>
    </div>
  );
}

export default GrowthTransition;
