import React from 'react';
import { motion } from 'framer-motion';
import './Trust.css';
import { FcGoogle } from 'react-icons/fc';
import { RightAnimatedDiv } from '../../componet/Animation';

const trustItems = [
  {
    icon: <FcGoogle size={50} aria-label='Hairsncares Google Reviews' title='Google Reviews' />,
    text: 'Google reviews',
    count: '50 +',
    delay: 0,
  },
  {
    icon: <img loading="lazy" alt='Hairsncares is Published in more that 5000 + channels' src='/uploads/r-icon2.png' title='Published in' />,
    text: 'Published in',
    count: '5000+ Channels',
    delay: 0.2,
  },
  {
    icon: <img loading="lazy" alt='Happy with hair loss treatment clients' src='/uploads/r-icon3.png' title='Happy Clients'/>,
    text: 'Happy Clients',
    count: '1000+',
    delay: 0.4,
  },
  {
    icon: <img loading="lazy" alt='Hairs N Cares guaranteed results for effective hair growth and hair care treatments.' src='/uploads/r-icon4.png' title='Guaranteed Results' />,
    text: 'Guaranteed Result',
    count: '100+',
    delay: 0.6,
  },
];

function Trust() {

  return (
    <>
      <div className='trust-container container'>
        {trustItems.map((item, index) => (
          <RightAnimatedDiv
            key={index}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            <div>{item.icon}</div>
            <div>
              <div>{item.count}</div>
              <div className='trust-text'><h4>{item.text}</h4></div>
            </div>
          </RightAnimatedDiv>
        ))}
      </div>
      <hr />
    </>
  );
}

export default Trust;
