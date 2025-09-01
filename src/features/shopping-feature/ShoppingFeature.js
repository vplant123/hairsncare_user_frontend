import React from "react";
import "./ShoppingFeature.css";
import { useSelector } from "react-redux";
import useDivInView, { RIGHT_VARIANTS, TRANSITION } from "../../hooks/useDivInView";
import { motion } from "framer-motion";

let dd = [
  {
    alt : "Free Shipping on order above 2000/-",
    title : "Free Shipping on order above 2000/-"
  },
  {
    alt : "15 Days Money Back Guarantee",
    title : "15-days-money-back-guarantee"
  },
  {
    alt : "secure checkout",
    title : "secure-checkout"
  },
  {
    alt : "Assured Gift",
    title : "Assured Gift"
  }
]

const ShoppingItem = ({ item,index }) => {

  const [ref, control] = useDivInView();

  return (
    <>
      <motion.div className="shopping-item"

        ref={ref}
        animate={control}
        initial="hidden"
        variants={RIGHT_VARIANTS}
        transition={{
          ...TRANSITION,
          delay: 0.2 * parseInt(item?.index),
        }}
      >
        <img loading="lazy" alt={dd[index]?.alt} src={item?.img} title={dd[index]?.title}  />
        <div>
          <h4 className="feature-heading" style={{color : "black"}}>{item?.name}</h4>
          <p>{item?.desc}</p>
        </div>
      </motion.div>
    </>
  )
}
function ShoppingFeature({col}) {
  const content = useSelector((state) => state.content.home);
  console.log("jojkeor", content);

  return (
    <div className="shopping-feature container" style={{backgroundColor : col ? "#C8CA6C" : "#C8CA6C" }}>
      {content?.section9?.map((e, index) => <ShoppingItem item={e} key={index} index={index} />)}
    </div>
  );
}

export default ShoppingFeature;
