import React from "react";
import hero1 from "../../assets/images/prakriti1.jpg";
import {motion} from 'framer-motion'
import hero2 from '../../assets/images/aboutme1.png'
import hero3 from '../../assets/images/prakriti2.jpg'

const HeroImage = () => {
  return (
    <div>
      <div className=" h-[500px] w-[650px]">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative h-full">
          <motion.img
            src={hero2}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          />
          </div>
          <div className="grid gap-2">
          <motion.img
            src={hero1}
            alt=""
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          />
            <motion.img
            src={hero3}
            alt=""
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroImage;
