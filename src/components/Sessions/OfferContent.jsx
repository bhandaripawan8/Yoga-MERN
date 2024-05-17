import React from "react";

import OfferCards from "./OfferCards";

const AreYou = () => {
  return (
    <div class="h-auto p-4 w-full  bg-white rounded-lg shadow-md ">
      <div class=" p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-3">
          Experience the transformative power of personalized yoga sessions.
        </h2>
        <p class="text-base text-gray-700">
          Our experienced instructors guide you through unique techniques to
          enhance your practice and achieve your goals.
        </p>
      </div>
      <OfferCards />
    </div>
  );
};

export default AreYou;
