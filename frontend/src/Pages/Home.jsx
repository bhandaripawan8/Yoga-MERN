import React from "react";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import icons1 from "../assets/images/icon01.png";
import AboutMe from "../components/Aboutme";
import PricingPlans from "../components/Pricing";
import Services from "./Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[80px] 2xl:h-[700px]">
        <div className="container flex justify-between gap-4">
          <div className="flex flex-col lg:flex-row gap-[120px] items-center justify-between">
            <div className="lg:w-[570px]">
              <motion.h1
                className="text-lg text-headingColor font-[800] md:text-[45px] md:leading-[70px] heroHeader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Let's collaborate to grow the peace of mind
              </motion.h1>
              <motion.p
                className="heroHeader mt-[10px] text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Yoga cultivates mental growth by fostering mindfulness,
                enhancing focus, reducing stress, promoting self-awareness, and
                fostering a sense of inner peace.
              </motion.p>
              <div className="hover:bg-grey-500">
                <motion.button
                  className=" bg-purpleColor text-white rounded-full my-[20px] p-[10px] hover:bg-grey-200"
                  initial={{ x: "70px" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  Request an Appointment
                </motion.button>
              </div>
              {/* Client counter section */}
              <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[30px] lg:mt-5">
                {/* Year of Experience */}
                <div>
                  <motion.h2
                    className="text-[35px] leading-[56px] lg:text-[35px] lg:leading-[54px] font-[700] text-headingColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    3+
                  </motion.h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <motion.p className="text-lg">Year of Experience</motion.p>
                </div>
                {/* Clients */}
                <div>
                  <motion.h2
                    className="text-[35px] leading-[56px] lg:text-[35px] lg:leading-[54px] font-[700] text-headingColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                  >
                    20+
                  </motion.h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text-lg">Clients</p>
                </div>
                {/* Client Satisfaction */}
                <div>
                  <motion.h2
                    className="text-[35px] leading-[56px] lg:text-[35px] lg:leading-[54px] font-[700] text-headingColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    100%
                  </motion.h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text-lg">Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 w-90">
              {/* First image */}
              <div className="w-1/2">
                <motion.img
                  src={hero1}
                  alt=""
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}/>
              </div>
              {/* Second and third images */}
              <div className="flex flex-col gap-4">
                <motion.img
                  src={hero2}
                  alt=""
                  className="w-full h-60 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <motion.img
                  src={hero3}
                  alt=""
                  className="w-full h-60 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section>
        <div className="container">
          <div className="mt-20">
            <AboutMe />
          </div>
          <div className="mt-20">
            <PricingPlans />
          </div>
          <div className="p-10 mt-10">
            <Services />
          </div>
          <div>
            <Testimonials />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
