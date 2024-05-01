
import AboutMe1 from "../../assets/images/aboutme.png";
import React, {useState, useRef, useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'

const AboutMe = () => {
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
    <section className="py-5 px-2">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-black mb-[20px]"

        >
          About Me
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {/* Left column for image */}
          <div className="col-span-1 flex justify-center items-center object-cover">
            <motion.img
              src={AboutMe1}
              alt="Yoga Instructor"
              className="w-full h-full rounded-full"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{scale: 1.1}}
            />
          </div>

          {/* Right column for text */}
          <div className="col-span-3 flex flex-col justify-center">
            <li className="text-[16px] text-black"
                      initial={{opacity: 0, y: 50}}
                      animate= {controls}
                      transition={{duration: 0.5}}
            
            >
              Namaste! My name is {" "}
              <span className="text-primaryColor">Prakriti</span> and I am a
              passionate yoga instructor dedicated to helping individuals find
              peace, balance, and strength through the practice of yoga.
            </li>
            <motion.li className="text-[16px] text-black mt-6 ">
              With over <span className="text-primaryColor">3 years</span> of
              experience in yoga teaching, I specialize in various yoga styles
              including Hatha, Vinyasa, and Yin yoga. My classes focus on
              mindful movement, breathwork, and meditation to promote holistic
              well-being.
            </motion.li>
            <motion.li className="text-[16px] text-black mt-6">
              Whether you're a beginner or an experienced yogi, my goal is to
              create a supportive and nurturing environment where you can
              explore your practice, cultivate self-awareness, and connect with
              your inner self.
            </motion.li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
