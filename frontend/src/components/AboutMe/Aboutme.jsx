import React from "react";
import AboutMe1 from "../../assets/images/aboutme1-removebg-preview.png";

const AboutMe = () => {
  return (
    <section className="py-5 px-2">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-black mb-[20px]">
          About Me
        </h2>
        <div className="grid grid-cols-4 gap-4 h-[60vh]">
          {/* Left column for image */}
          <div className="col-span-1 flex justify-center items-center w-full  h-full object-cover">
            <img
              src={AboutMe1}
              alt="Yoga Instructor"
              className=""
            />
          </div>

          {/* Right column for text */}
          <div className="col-span-3 flex flex-col justify-center">
            <p className="text-[15px] text-black">
              Namaste! My name is{" "}
              <span className="text-primaryColor">Prakriti</span> and I am a
              passionate yoga instructor dedicated to helping individuals find
              peace, balance, and strength through the practice of yoga.
            </p>
            <p className="text-[15px] text-black mt-6 ">
              With over <span className="text-primaryColor">3 years</span> of
              experience in yoga teaching, I specialize in various yoga styles
              including Hatha, Vinyasa, and Yin yoga. My classes focus on
              mindful movement, breathwork, and meditation to promote holistic
              well-being.
            </p>
            <p className="text-[15px] text-black mt-6">
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
