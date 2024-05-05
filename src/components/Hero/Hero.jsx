import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div>
        <div className="bg-neutral-500 gap-[100px]  h-[790px] flex justify-center items-center ">
          <HeroContent/>
          <HeroImage/>
        </div>
    </div>
  );
};

export default Hero;
