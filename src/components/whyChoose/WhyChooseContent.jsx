import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { whyChoosePrayogi } from '../../data'; 
const WhyChooseContent = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    function handleScroll() {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight / 1.2;
      if (elementPosition < scrollPosition) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div>
      <section ref={ref}>
        <motion.p
          className='text-xl my-[10px] flex mx-auto text-center '
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Why choose Prayogi?
        </motion.p>

        <ul className='py-[10px]' ref={ref}>
          {whyChoosePrayogi.map((choice, index) => (
            <motion.li
              key={index}
              className='text-lg py-[5px]'
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <p className='font-bold'>{choice.header}:</p> {choice.Description}
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default WhyChooseContent;
