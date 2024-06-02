import React from "react";
import ourOfferImage from "../../assets/images/photoshoot3.jpg";

const OurOffer = () => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen dark:bg-gray-900">
        <div className="flex flex-col items-center justify-around md:flex-row  p-6 max-w-7xl shadow-md rounded-lg">
          <div className="w-full md:w-[400px] h-auto mb-6 md:mb-0 md:mr-6">
            <img
              src={ourOfferImage}
              alt="Yoga in nature"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 dark:bg-gray-800 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              What Program Includes
            </h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Transfer
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Transfer from Warsaw train station and back in a minibus
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Meditation
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Individual and group meditations outside near mountains
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-8 border-t border-zinc-300 dark:border-zinc-700 pt-4">
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Accommodation
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    2 nights at a hotel with a terrace and mountain view. Single
                    shared rooms or private double rooms.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Yoga sessions
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Sunrise and sunset beach yoga sessions and body shaping
                    sessions. There are 3-4 yoga classes per day.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-8 border-t border-zinc-300 dark:border-zinc-700 pt-4">
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Eat
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Homemade healthy breakfasts, dinners at different local
                    restaurants
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Spa facilities
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Including the heated outdoor pool, hydrotherapy pool, sauna
                    and gym
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-8 border-t border-zinc-300 dark:border-zinc-700 pt-4">
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Hotel facilities
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    WiFi, ATM, Bike Hire and local shops/restaurants nearby
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Freetime
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    To yourself for walks, hikes and discovering mountains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurOffer;
