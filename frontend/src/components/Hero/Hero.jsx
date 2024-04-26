import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div>
        <div className="h-[70vh] w-auto grid grid-cols-2 mt-[100px] gap-[150px]">
            <HeroContent/>
            <HeroImage/>
        </div>
    </div>
  );
};

export default Hero;
