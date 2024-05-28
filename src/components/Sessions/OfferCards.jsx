import React from "react";
import sessionIcon1 from "../../assets/images/sessions1.png";
import sessionIcon2 from "../../assets/images/sessions2.png";

const OfferCards = () => {
  return (
    <div>
      <div class="grid grid-cols-2 gap-8 p-6">
        <div class="flex flex-col justify-center items-center bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <div class="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
            <img src={sessionIcon1} alt="" class="w-10 h-10" />
          </div>
          <div class="mt-6 text-center">
            <h3 class="text-xl font-bold text-gray-900 leading-6">
              Outdoor Yoga Sessions
            </h3>
            <p class="mt-2 text-sm p-2 text-gray-700">
              Step out of the studio and into nature with our exhilarating
              outdoor yoga sessions.
            </p>
            <button class="py-2 px-5 my-2 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-black transition duration-500">
              More Details
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <div class="w-20 h-20 rounded-full bg-gray-200  flex justify-center items-center">
            <img src={sessionIcon2} alt="" class="w-10 h-10 text-white" />
          </div>
          <div class="relative bg-white p-6 rounded-lg shadow-md transition-transform transition-shadow duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <div class="absolute top-0 right-0 m-2 bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 rounded-bl-lg">
              Most Popular
            </div>
            <div class="mt-6 text-center">
              <h3 class="text-xl font-bold text-gray-900 leading-6">
                Hike and Yoga
              </h3>
              <p class="mt-2 text-sm p-2 text-gray-700">
                Combine your love for hiking and yoga with our unique hike and
                yoga sessions.
              </p>
              <button class="py-2 px-5 my-2 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-black transition duration-500">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
