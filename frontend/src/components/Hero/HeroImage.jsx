import React from "react";
import hero1 from "../../assets/images/Vector.png";
import {motion} from 'framer-motion'

const HeroImage = () => {
  return (
    <div>
      <div className="mt-[-350px]">
        <div className="">
          <motion.img
            src={hero1}
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
  );
};

export default HeroImage;
