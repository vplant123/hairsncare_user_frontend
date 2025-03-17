import React from 'react';
import './WhyTrustHairCare.css';
import { useSelector } from 'react-redux';
import useDivInView, { LEFT_VARIANTS, RIGHT_VARIANTS } from '../../hooks/useDivInView';
import { motion } from 'framer-motion';

const careItems = [
  { imgSrc: '/assets/img/Expert Dermats.png', text: 'Expert Dermats', opacity: 0.1 },
  { imgSrc: '/assets/img/total Care approch.png', text: 'Total Care Approach', opacity: 0.2 },
  { imgSrc: '/assets/img/Reliability.png', text: 'Reliability', opacity: 0.2 },
  { imgSrc: '/assets/img/E-monitoring.png', text: 'E-monitoring and Support', opacity: 0.2 },
  { imgSrc: '/assets/img/Proven Theropies.png', text: 'Proven Therapies', opacity: 0.2 },
];

let dd = [
  {
    alt : "Expert Dermats.",
    title : "Expert Dermats."
  },
  {
    alt : "Total Hair Care Approach",
    title : "Total Hair Care Approach"
  },
  {
    alt : "Reliable Hair Loss and Hair Care Treatments",
    title : "Reliable Hair Loss and Hair Care Treatments"
  }
]

let dd1 = [
  {
    alt : " E-monitoring and Support, ensuring consistent Hair Loss and Hair Care.",
    title : "E-monitoring and Support."
  },
  {
    alt : "Proven Therapies highlighting effective Hair Loss and Hair Care Treatments",
    title : "Proven Therapies"
  }
]

const CareItem = ({ imgSrc, text, opacity,index }) => {
  const [ref1, control1] = useDivInView();

  return <motion.div ref={ref1}
    animate={control1}
    initial="hidden"
    variants={RIGHT_VARIANTS}
    transition={{ duration: 1, delay: .25 }} style={{ display: "flex", flexDirection: "column", borderRadius: "100%", alignItems: "center", justifyContent: "center" }}>
    <img
      src={imgSrc}
      width={"50px"}
      height={"50px"}
      alt={index > 2 ? dd[index+3]?.alt : dd[index]?.alt}
      title={index > 2 ? dd[index+3]?.title : dd[index]?.title}

    // style={{ width: '95px', position: 'absolute', opacity: "1" }}
    />
    <div className="font-trust" style={{ color: '#fff', fontSize: "12px", fontWeight: "bold" }}>
      <h3 style={{fontSize : "12px"}}>{text}</h3>
    </div>
  </motion.div>
}

const CareItem1 = ({ imgSrc, text, opacity,index }) => {
  const [ref1, control1] = useDivInView();

  return <motion.div ref={ref1}
    animate={control1}
    initial="hidden"
    variants={RIGHT_VARIANTS}
    transition={{ duration: 1, delay: .25 }} style={{ display: "flex", flexDirection: "column", borderRadius: "100%", alignItems: "center", justifyContent: "center" }}>
    <img
      src={imgSrc}
      width={"50px"}
      height={"50px"}
      alt={dd1[index]?.alt}
      title={dd1[index]?.title}

    // style={{ width: '95px', position: 'absolute', opacity: "1" }}
    />
    <div className="font-trust" style={{ color: '#fff', fontSize: "12px", fontWeight: "bold" }}>
      <h3 style={{fontSize : "12px"}}>{text}</h3>
    </div>
  </motion.div>
}

export default function WhyTrustHairCare() {


  const content = useSelector((state) => state.content.home);
  console.log("jojkeor", content)
  const [ref1, control1] = useDivInView();

  return (
    <div className="container haircare" style={{ fontFamily: '"Poppins", sans-serif' }}>
      <motion.div
        ref={ref1}
        animate={control1}
        initial="hidden"
        variants={LEFT_VARIANTS}
        transition={{ duration: 1, delay: .25 }}
        className="trust-care"
      >
        <h2>          {content?.section4?.title}
        </h2>
        <p>
          {content?.section4?.desc}
        </p>
      </motion.div>
      <div
        className="trust-care carr1 "
      >
        <div className="care2">
          {content?.section4?.data?.slice(0, 3).map((item, index) => (
            <CareItem
              key={item?._id}
              imgSrc={item?.icon}
              text={item?.text}
              opacity={"0.2"}
              index = {index}
            />
          ))}
        </div>
        <div className="care2">
          {content?.section4?.data?.slice(3).map((item, index) => (
            <CareItem1
              key={item?._id}
              imgSrc={item?.icon}
              text={item?.text}
              opacity={"0.2"}
              index = {index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
