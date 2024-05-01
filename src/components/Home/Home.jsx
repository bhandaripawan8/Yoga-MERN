import React from "react";
import AboutMe from "../AboutMe/Aboutme";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import WhyChoose from "../whyChoose/WhyChoose";
import Sessions from "../Sessions/Sessions";
import WhatToExpect from "../WhatToExpect/WhatToExpect";

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
          <WhatToExpect />
        </div>

        {/* <div className="mt-40">
            <Itinerary />
          </div> */}
        <div className="mt-40">
          <Sessions />
        </div>

        <div className="mt-40">
          <Contact />
        </div>
      </>
    </>
  );
};

export default Home;
