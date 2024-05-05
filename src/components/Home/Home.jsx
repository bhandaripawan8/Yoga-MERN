import React from "react";
import AboutMe from "../AboutMe/Aboutme";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import WhyChoose from "../whyChoose/WhyChoose";
import Sessions from "../Sessions/Sessions";
import WhatToExpectData from "../WhatToExpect/WhatToExpectData";
import Faq from "../FAQ/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <Sessions />
      <AboutMe />
      <WhyChoose />
      <WhatToExpectData />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
