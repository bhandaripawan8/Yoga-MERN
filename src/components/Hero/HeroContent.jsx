import React from "react";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div>
      <div className="lg:w-[570px]">
        <motion.h1
          className="text-lg text-headingColor font-[800] md:text-[45px] md:leading-[70px] heroHeader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Let's collaborate to grow the <span className="text-teal-400">peace of mind</span>
        </motion.h1>
        <motion.p
          className="heroHeader mt-[10px] text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Yoga cultivates mental growth by fostering mindfulness, enhancing
          focus, reducing stress, promoting self-awareness, and fostering a
          sense of inner peace.
        </motion.p>
        <div className="hover:bg-grey-500">
          <motion.button
            className=" bg-headingColor text-white rounded-full my-[20px] p-[10px] hover:bg-grey-200"
            initial={{ x: "-70px" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            Request an Appointment
          </motion.button>
        </div>
       
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[30px] lg:mt-5">
 
          <div>
            <motion.h2
              className="text-[35px] leading-[56px] lg:text-[35px] lg:leading-[54px] font-[700] text-headingColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              3+
            </motion.h2>
            <span className="w-[100px] h-2 bg-headingColor rounded-full block mt-[-12px]"></span>
            <motion.p className="text-lg">Year of Experience</motion.p>
          </div>

          <div>
            <motion.h2
              className="text-[35px] leading-[56px] lg:text-[35px] lg:leading-[54px] font-[700] text-headingColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              whileHover={{ scale: 1.1 }}
            >
              20+
            </motion.h2>
            <span className="w-[100px] h-2 bg-headingColor rounded-full block mt-[-12px]"></span>
            <p className="text-lg">Clients</p>
          </div>

          <div>
            <motion.h2
              className="text-[35px] leading-[56px] lg:text-[35px] lg:leading-[54px] font-[700] text-headingColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              100%
            </motion.h2>
            <span className="w-[100px] h-2 bg-headingColor rounded-full block mt-[-12px]"></span>
            <p className="text-lg">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
