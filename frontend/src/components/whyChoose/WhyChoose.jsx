import React, {useState, useRef, useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'


const WhyChoose = () => {

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
    <div style={{height: '50vh'}}>
      <section ref={ref}>
        <motion.p className='text-2xl my-[10px]'
          initial={{opacity: 0, y: 50}}
          animate= {controls}
          transition={{duration: 0.5}}
        >Why choose Prayogi?</motion.p>
        <p>
          Expert Instructors: Our experienced yoga
          teachers are dedicated to guiding you on your yoga journey, ensuring a
          safe and enriching experience. </p>
          <p>Sustainable Practices: We are committed
          to eco-friendly practices, supporting local communities, and
          preserving the natural beauty of our retreat locations. </p>
          <p>
          Personalized Experience: Whether you're a beginner or an experienced yogi, our
          retreats are designed to cater to all levels, ensuring a personalized
          and enriching experience for everyone.
            </p>
      </section>
    </div>
  )
}

export default WhyChoose