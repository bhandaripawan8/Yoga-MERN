import React from "react";
import AboutMe from "../whyChoose/AboutMe.jsx/Aboutme";
import PricingPlans from "../Pricing";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <>
        <div>
          <Hero />
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
