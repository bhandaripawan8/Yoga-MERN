import React, {useState, useRef, useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'

const WhyChooseContent = () => {
    const controls = useAnimation()
    const ref = useRef()
  
    useEffect(() =>{
      function handleScroll(){
        const elementPosition = ref.current.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight / 1.2;
        if(elementPosition < scrollPosition){
          controls.start({opacity: 1, y:0})
        } else{
          controls.start({opacity: 0, y:20})
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () =>{
        window.removeEventListener('scroll', handleScroll)
      }
    },[controls])
  return (
    <div>
              <section ref={ref}>
        <motion.p className='text-xl my-[10px] flex mx-auto text-center '
          initial={{opacity: 0, y: 50}}
          animate= {controls}
          transition={{duration: 0.5}}
        >Why choose Prayogi?</motion.p>

        <ul className='py-[10px]' ref={ref}>
        <motion.li className='text-lg py-[5px]
        '
        initial={{opacity: 0, y: 20}}
        animate={controls}
        transition={{duration: 0.5, delay: 0.2}}
        >
          <p className='font-bold'>Expert Instructors:</p>Our experienced yoga
          teachers are dedicated to guiding you on your yoga journey, ensuring a
          safe and enriching experience. </motion.li>
          <motion.li className='text-lg py-[5px]'
                  initial={{opacity: 0, y: 20}}
                  animate={controls}
                  transition={{duration: 0.5, delay: 0.3}}
          ><p className='font-bold'>Sustainable Practices:</p> We are committed
          to eco-friendly practices, supporting local communities, and
          preserving the natural beauty of our retreat locations. </motion.li>
          <motion.li className='text-lg py-[5px]'
                  initial={{opacity: 0, y: 20}}
                  animate={controls}
                  transition={{duration: 0.5, delay: 0.4}}
          ><p className='font-bold'>Personalized Experience:</p>
           Whether you're a beginner or an experienced yogi, our
          retreats are designed to cater to all levels, ensuring a personalized
          and enriching experience for everyone.
            </motion.li>
        </ul>

      </section>

    </div>
  )
}

export default WhyChooseContent