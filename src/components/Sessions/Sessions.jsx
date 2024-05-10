import React from "react";
import session1 from "../../assets/images/sessions.png";
import sessionIcon1 from "../../assets/images/sessions1.png";
import sessionIcon2 from "../../assets/images/sessions2.png";

const YogaComponent = () => {
  return (
    <section className="yoga-container bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container flex flex-col justify-center items-center px-4 py-16 mx-auto md:flex-row md:justify-between md:space-x-12 lg:max-w-7xl">
        <div className="yoga-image w-full md:w-1/2">
          <img
            src={session1}
            alt="Person doing yoga pose"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="h-[550px] p-4 w-full md:w-1/2 bg-white rounded-lg shadow-md">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
              Experience the transformative power of personalized yoga sessions.
            </h2>
            <p>Our experienced instructors guide you through unique techniques to enhance your practice and achieve your goals.</p>
          </div>
          <div className="h-[60%] flex justify-around place-items-end">
            <div>
              <div className="h-[50px] w-[50px]">
                <img src={sessionIcon1} alt="" />
              </div>
              <h3 className="font-bold text-purple-600 leading-10">Outdoor Yoga Sessions</h3>
              <p className="text-sm py-[10px]">
                Step out of the studio and into nature with our exhilarating
                outdoor yoga sessions.
              </p>
            </div>
            <div>
              <div className="h-[50px] w-[50px]">
                <img src={sessionIcon2} alt="" />
              </div>
              <h3 className="font-bold text-purple-600 leading-10">Hike and Yoga</h3>
              <p className="text-sm py-[10px]">
                Combine your love for hiking and yoga with our unique hike and
                yoga sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaComponent;
