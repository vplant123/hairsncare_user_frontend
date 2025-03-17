import React from 'react'
import './HairAnalysis.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import useDivInView, { LEFT_VARIANTS, RIGHT_VARIANTS, TRANSITION } from '../../hooks/useDivInView';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

export default function HairAnalysis() {
  const navigate = useNavigate()

  const content = useSelector((state) => state.content.home);
  console.log("jojkeor", content)

  const [ref1, control1] = useDivInView();
  const [ref2, control2] = useDivInView();
  return (
    <div className='hair-analysis' style={{ background: `url(/assets/img/Transparent-Leaves--bg-2.png) center repeat` }}
      aria-label='Smiling woman with thick, healthy hair representing results from AI-driven Hair & Scalp Analysis for personalized hair care solutions.'
      title='AI-Driven Hair & Scalp Analysis.'
    >
      <motion.div
        ref={ref1}
        animate={control1}
        initial="hidden"
        variants={LEFT_VARIANTS}
        transition={TRANSITION}
        className="ana anakkk " ><img alt='Smiling woman with thick, healthy hair representing results from AI-driven Hair & Scalp Analysis for personalized hair care solutions.'
          src={content?.section7?.img} style={{ maxWidth: "80%" }}
          title='AI-Driven Hair & Scalp Analysis.'
        /></motion.div>
      <motion.div className="ana "
        ref={ref2}
        animate={control2}
        initial="hidden"
        variants={RIGHT_VARIANTS}
        transition={TRANSITION}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>{content?.section7?.title}</h2>
        <p>{content?.section7?.desc}</p>
        <div className='hero-btn'>
          <button onClick={() => navigate('/take-hair-test')} className='btn primary'>TAKE A HAIR TEST</button>
          <button onClick={() => {

          }} className='btn'>
            <HashLink smooth to='/contact-hair-experts/#section3' style={{
              textDecoration: "none",
              color: "black"
            }}> BOOK AN APPOINTMENT </HashLink>
          </button>
        </div>
      </motion.div>
    </div>
  )
}


