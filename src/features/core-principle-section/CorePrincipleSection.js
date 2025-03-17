
import React from 'react';
import "./CorePrinciple.css"
import { useSelector } from 'react-redux';
import useDivInView, { LEFT_VARIANTS, RIGHT_VARIANTS, TRANSITION } from '../../hooks/useDivInView';
import { motion } from 'framer-motion';

let dd = [
  {
    alt : "Close-up of a person holding a capsule, representing Correct Supplements for effective hair loss and hair care treatments.",
    title : "Correct Supplements"
  },
  {
    alt : "Woman embracing nature and sunlight, symbolizing a Healthy Lifestyle for effective hair loss and hair care treatments.",
    title : "Healthy Lifestyle"
  }
]

let dd1 = [
  {
    alt : "Bowl of nutritious food with eggs, avocado, spinach, and berries, representing a Balanced Diet for effective hair loss and hair care treatments.",
    title : "Balanced Diet."
  },
  {
    alt : "Person managing stress with hands on forehead, highlighting Stress Management for improved hair loss and hair care treatments",
    title : "Stress Management."
  },
]

function Principle({ imageSrc, description, animationClass, isLeft = false,index }) {
  const [ref, control] = useDivInView()
  return (
    <motion.div
      ref={ref}
      animate={control}
      initial="hidden"
      variants={isLeft ? LEFT_VARIANTS : RIGHT_VARIANTS}
      transition={{
        ...TRANSITION,
        delay: 0.5
      }}
      className={animationClass}
    >
      <img className="principle-img" src={imageSrc} alt={dd[index]?.alt} title={dd[index]?.title} />
      <p>{description}</p>
    </motion.div>
  );
}

function Principle1({ imageSrc, description, animationClass, isLeft = false,index }) {
  const [ref, control] = useDivInView()
  return (
    <motion.div
      ref={ref}
      animate={control}
      initial="hidden"
      variants={isLeft ? LEFT_VARIANTS : RIGHT_VARIANTS}
      transition={{
        ...TRANSITION,
        delay: 0.5
      }}
      className={animationClass}
    >
      <img className="principle-img" src={imageSrc} alt={dd1[index]?.alt} title={dd1[index]?.title} />
      <p>{description}</p>
    </motion.div>
  );
}

function CorePrincipleSection() {
  const content = useSelector((state) => state.content.home);

  if (!content?.section6) {
    return null; // Handle case where content is undefined
  }

  const { mainDes, data } = content.section6;

  return (
    <div className="core-wrapper" style={{ fontFamily: '"Poppins", sans-serif' }}>
      <hr />
      <div className="core container" style={{textAlign : "center"}}>
        <h2
          className="animate__animated animate__fadeInDown mt-4"
          style={{
            animationDelay: "0.4s",
            fontWeight: "700",
            fontSize: "2rem",
            marginBottom : "30px"
          }}
        >
          {mainDes}
        </h2>
        <div className="core-image">
          {data?.slice(0, 2).map((e,index) => (
            <Principle
              key={e?.img}
              isLeft
              imageSrc={e?.img}
              description={e?.desc}
              animationClass="animate__backInLeft"
              index = {index}
            />
          ))}
          {data?.slice(2).map((e,index) => (
            <Principle1
              key={e?.img}
              imageSrc={e?.img}
              description={e?.desc}
              animationClass="animate__backInRight"
              index = {index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CorePrincipleSection;
