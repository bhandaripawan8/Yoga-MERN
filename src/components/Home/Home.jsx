import React from "react";
import Contact from "../Contact/Contact";
import Hero from '../Hero/Hero1'
import WhyChoose from "../whyChoose/WhyChoose";
import Faq from "../FAQ/Faq";
const Home = () => {
  return (
    <>
    <div className="">
    <Hero />
      <WhyChoose />
      {/* <WhatToExpect/> */}
      <Faq />
      <Contact />
    </div>

    </>
  );
};

export default Home;
