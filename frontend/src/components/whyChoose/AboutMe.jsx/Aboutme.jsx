import React from "react";
import AboutMe1 from "../../../assets/images/aboutme1.png";

const AboutMe = () => {
  return (
    <section className="py-12 px-4 lg:px-0 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-8 lg:text-4xl">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column for image */}
          <div className="flex justify-center ">
            <img
              src={AboutMe1}
              alt="Yoga Instructor"
              className="w-3/4 lg:w-full rounded-full shadow-lg"
            />
          </div>
          {/* Right column for text */}
          <div className="flex flex-col justify-center">
            <p className="text-[18px] text-black">
              Namaste! My name is{" "}
              <span className="text-primaryColor">Prakriti</span> and I am a
              passionate yoga instructor dedicated to helping individuals find
              peace, balance, and strength through the practice of yoga.
            </p>
            <p className="text-[18px] text-black mt-6 ">
              With over <span className="text-primaryColor">3 years</span> of
              experience in yoga teaching, I specialize in various yoga styles
              including Hatha, Vinyasa, and Yin yoga. My classes focus on
              mindful movement, breathwork, and meditation to promote holistic
              well-being.
            </p>
            <p className="text-[18px] text-black mt-6">
              Whether you're a beginner or an experienced yogi, my goal is to
              create a supportive and nurturing environment where you can
              explore your practice, cultivate self-awareness, and connect with
              your inner self.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
