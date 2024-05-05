import React from "react";
import { yogaEvent } from "../../data";
import sangaYoga from "../../assets/images/sangayoga.jpg";

const Tarevir = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-[20px] gap-5">
        <div className=" h-[60vh] w-[50vh] ml-[10px]">
          <img
            src={sangaYoga}
            alt="sangaYoga"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-red-300">
          <div className="flex flex-col items-center">
            <div>
              <p className="text-textHeading text-buttonBackground text-2xl font-bold my-[10px] flex mx-auto text-center">
                {yogaEvent.aboutEvent.title}
              </p>
            </div>
            <div className="flex gap-5 font-bold">
              <p className="py-[5px]">Date: {yogaEvent.aboutEvent.date}</p>
              <p className="py-[5px]">
                Location: {yogaEvent.aboutEvent.location}
              </p>
            </div>
          </div>
          <div className=" p-[10px] w-[120vh]">
            <h3 className="text-textHeading font-bold border-b border-black w-[160px]">Event Highlights</h3>
            <p className="text-textParagraph py-[20px]">
              {yogaEvent.aboutEvent.description}
            </p>

              {yogaEvent.aboutEvent.eventHighlights.map((highlight, index) => (
                <li key={index} className="text-textParagraph py-[8px]">
                  {highlight}
                </li>
              ))}

            <h3 className="font-bold text-textHeading border-b border-black w-[150px] mt-[10px]">What to Expect</h3>
              {yogaEvent.aboutEvent.whatToExpect.map((expectation, index) => (
                <li key={index} className="text-textParagraph py-[8px]">
                  {expectation}
                </li>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarevir;
