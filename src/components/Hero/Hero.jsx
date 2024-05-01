import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div>
        <div className="grid grid-cols-2 gap-10 mt-[120px] mb-[100px] h-[65vh]">
          <HeroContent/>
          <HeroImage/>
        </div>
    </div>
  );
};

export default Hero;
