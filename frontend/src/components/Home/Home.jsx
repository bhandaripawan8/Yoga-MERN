import React from "react";
import AboutMe from "../AboutMe/Aboutme";
import PricingPlans from "../Pricing";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import WhyChoose from '../whyChoose/WhyChoose'

const Home = () => {
  return (
    <>
      <>
        <div>
          <Hero />
          <WhyChoose/>
        </div>
        <div className="container">
          <div className="mt-20">
            <AboutMe />
          </div>
          <div className="mt-20">
            <PricingPlans />
          </div>
          <div>
            <Testimonials />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
