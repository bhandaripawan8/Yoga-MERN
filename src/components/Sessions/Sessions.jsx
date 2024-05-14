import React from "react";
import session1 from "../../assets/images/sessions.png";
import sessionIcon1 from "../../assets/images/sessions1.png";
import sessionIcon2 from "../../assets/images/sessions2.png";

const YogaComponent = () => {
  return (
    <section class="yoga-container bg-gradient-to-r from-gray-100 to-gray-200">
      <div class="container flex flex-col justify-center items-center px-4 py-16 my-10 mx-auto md:flex-row md:justify-between md:space-x-12 lg:max-w-7xl ">
        <div class="yoga-image w-[45%] ">
          <img
            src={session1}
            alt="Person doing yoga pose"
            class="rounded-lg shadow-md"
          />
        </div>
        <div class="h-[550px] p-4 w-full md:w-1/2 bg-white rounded-lg shadow-md ">
          <div class=" p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-10">
              Experience the transformative power of personalized yoga sessions.
            </h2>
            <p class="text-base text-gray-700">
              Our experienced instructors guide you through unique techniques to
              enhance your practice and achieve your goals.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 p-6">
            <div class="flex flex-col justify-center items-center bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div class="w-20 h-20 rounded-full bg-purple-500 flex justify-center items-center">
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
              <div class="w-20 h-20 rounded-full bg-purple-600 flex justify-center items-center">
                <img src={sessionIcon2} alt="" class="w-10 h-10 text-white" />
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
    </section>
  );
};

export default YogaComponent;
