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
      <>
        <div className="">
          <Hero />
        </div>

        <div className="mt-8">
          <AboutMe />
        </div>
        <div className="mt-40">
          <WhyChoose />
        </div>
        <div className="mt-40">
          <WhatToExpectData/>
        </div>
        <div className="mt-40">
          <Sessions />
        </div>
        <div className="mt-40">
          <Faq/>
        </div>

        <div className="mt-40">
          <Contact />
        </div>
      </>
    </>
  );
};

export default Home;
