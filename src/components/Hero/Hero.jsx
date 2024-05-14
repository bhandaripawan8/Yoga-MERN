import React from "react";
import hero1 from "../../assets/images/prakriti1.jpg";
// style={{ backgroundImage: `url(${hero1})`, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}

const YogaLanding = () => {
  return (
    <>
      <main className="h-[90vh] bg-center bg-cover flex justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center text-center max-w-xl mx-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            Transform Your Body and Mind with Yoga
          </h1>
          <p className="text-lg text-black mb-8">
            Discover the power of yoga to improve your physical and mental
            well-being
          </p>
          <div className="flex space-x-4">
            <button className="btn px-4 py-2 rounded bg-purple-600 text-white hover:bg-black">
              Get Started
            </button>
            <button className="btn px-4 py-2 rounded border border-gray-300 bg-gray-300 hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <img
            src={hero1}
            alt="Yoga Banner"
            className="h-96 w-96 object-cover"
          />
        </div>
      </main>
    </>
  );
};

export default YogaLanding;
