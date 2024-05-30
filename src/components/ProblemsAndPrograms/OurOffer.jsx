import React from "react";
import ourOfferImage from "../../assets/images/photoshoot3.jpg";

const OurOffer = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col md:flex-row bg-zinc-100 dark:bg-zinc-800 p-6 max-w-7xl">
          <div className="w-full md:w-[400px] h-auto">
            <img
              src={ourOfferImage}
              alt="Yoga in nature"
              className="w-full object-cover overflow-hidden"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              What Program Includes
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Transfer
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Transfer from Warsaw train station and back in a minibus
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Meditation
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Individual and group meditations outside near mountains
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-between border-t border-zinc-300 dark:border-zinc-700 pt-4 space-y-4 md:space-y-0">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Accommodation
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    2 nights at a hotel with a terrace and mountain view. Single
                    shared rooms or private double rooms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Yoga sessions
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Sunrise and sunset beach yoga sessions and body shaping
                    sessions. There are 3-4 yoga classes per day.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start border-t border-zinc-300 dark:border-zinc-700 pt-4 space-y-4 md:space-y-0">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Eat
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Homemade healthy breakfasts, dinners at different local
                    restaurants
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Spa facilities
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Including the heated outdoor pool, hydrotherapy pool, sauna
                    and gym
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start border-t border-zinc-300 dark:border-zinc-700 pt-4 space-y-4 md:space-y-0">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Hotel facilities
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    WiFi, ATM, Bike Hire and local shops/restaurants nearby
                  </p>
                </div>
                <div>
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
      </div>
    </>
  );
};

export default OurOffer;
