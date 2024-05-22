import React from "react";
import AboutUs from "../AboutMe/AboutUs";
import Contact from "../Contact/Contact";
import Hero from '../Hero/Hero1'
import WhyChoose from "../whyChoose/WhyChoose";
import OurValues from '../AboutMe/Values'
import Faq from "../FAQ/Faq";
import WhatToExpectData from '../WhatToExpect/WhatToExpectData'
const Home = () => {
  return (
    <>
    <div className="">
    <Hero />
      <AboutUs />
      <WhyChoose />
      <OurValues/>
      {/* <WhatToExpectData/> */}
      <Faq />
      <Contact />
    </div>

    </>
  );
};

export default Home;
