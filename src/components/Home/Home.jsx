import React from "react";
import Contact from "../Contact/Contact";
import Hero from '../Hero/Hero1'
import WhyChoose from "../whyChoose/WhyChoose";
import Faq from "../FAQ/Faq";
import Sessions from '../Sessions/Sessions'
import Problems from "../ProblemsAndPrograms/Problems";
import OurOffer from "../ProblemsAndPrograms/OurOffer";
const Home = () => {
  return (
    <>
    <div className="">
    <Hero />
    <Problems/>
    <OurOffer/>
    <Sessions/>
      <WhyChoose />
      <Faq />
      <Contact />
    </div>

    </>
  );
};

export default Home;
