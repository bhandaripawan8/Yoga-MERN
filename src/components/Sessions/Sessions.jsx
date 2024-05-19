import React from "react";
import SessionImage from "./SessionImage";
import OfferCards from "./OfferCards";
import HeaderContent from "./HeaderContent";

const YogaComponent = () => {
  return (
    <section class="shadow-sm">
      <div class=" flex flex-col justify-center items-center px-4 py-16 my-10 mx-auto md:flex-row md:justify-between md:space-x-12 lg:max-w-7xl ">
        <SessionImage />
        <div>
          <div className="flex items-center justify-center text-3xl font-bold">
            What we Offer?
          </div>
          <div class="h-auto p-4 w-full  bg-white rounded-lg shadow-md ">
            <HeaderContent />
            <OfferCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaComponent;
