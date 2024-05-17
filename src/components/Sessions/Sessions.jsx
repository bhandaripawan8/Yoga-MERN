import React from "react";
import session1 from "../../assets/images/sessions.png";

import OfferContent from "./OfferContent";

const YogaComponent = () => {
  return (
    <section class="shadow-sm">
      <div class=" flex flex-col justify-center items-center px-4 py-16 my-10 mx-auto md:flex-row md:justify-between md:space-x-12 lg:max-w-7xl ">
        <div class=" w-[55%]">
          <img
            src={session1}
            alt="yoga-pose"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <div className="flex items-center justify-center text-3xl font-bold">
            What we Offer?
          </div>
          <OfferContent />
        </div>
      </div>
    </section>
  );
};

export default YogaComponent;
