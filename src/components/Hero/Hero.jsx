// import React from "react";
// import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";

// const Hero = () => {
//   return (
//     <div className="w-full flex items-center justify-center">
//           <HeroContent/>
//           <HeroImage/>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import hero1 from "../../assets/images/prakriti1.jpg";

const YogaLanding = () => {
  return (
    <div className="yoga-landing">
      <main className=" h-[60vh] flex flex-col justify-center items-center px-4 py-16 h-screen bg-center bg-cover" style={{ backgroundImage: `url(${hero1})`, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <h1 className="text-4xl font-bold text-white mb-4">Transform Your Body and Mind with Yoga</h1>
        <p className="text-lg text-gray-200 mb-8">Discover the power of yoga to improve your physical and mental well being</p>
        <div className="flex space-x-4">
          <button className="btn px-4 py-2 rounded bg-purple-600 text-white hover:bg-black">Get Started</button>
          <button className="btn px-4 py-2 rounded border border-gray-300 bg-gray-300 hover:bg-black hover:text-white">Learn More</button>
        </div>
      </main>
      <footer className="footer text-center py-4 bg-gray-800 text-white">
      </footer>
    </div>
  );
};

export default YogaLanding;

