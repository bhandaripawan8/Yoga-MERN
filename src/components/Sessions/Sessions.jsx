import React from "react";
import { yogaEvent } from "../../data";
import AreYou from "./AreYou";
import { Link } from "react-router-dom";
import sessions1 from "../../assets/images/sessions1.png";
import sessions2 from "../../assets/images/sessions2.png";
import sessions3 from "../../assets/images/sessions3.png";

const Sessions = () => {
  return (
    <>
      <div className="my-[20px]">
        <AreYou />
      </div>
      <div className="flex justify-center my-[20px]">
        <div className="h-auto items-center flex gap-2">
          <div className=" flex-grow  flex md:flex-row h-auto items-center gap-5 p-5 md:p-0">
            <div className=" flex flex-col justify-center items-center gap-3 md:p-0 w-full md:w-auto">
              <div className="w-[80%] border p-4 mb-4">
                <img src={sessions1} alt="" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-lg font-bold text-center mb-2">
                  Outdoor Yoga Sessions
                </p>
                <p className="text-base text-center">
                  {yogaEvent.outdoorYogaSessions.description}
                </p>
              </div>
              <div className="w-[80%] border p-4 mb-4">
                <img src={sessions2} alt="" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-lg font-bold text-center mb-2">Hike and Yoga</p>
                <p className="text-base text-center">
                  {yogaEvent.hikeAndYoga.description}
                </p>
              </div>
              <div className="w-[80%] border p-4">
                <img src={sessions3} alt="" className="w-10 h-10 mx-auto mb-2" />
                <p className="text-lg font-bold text-center mb-2">
                  Prakriti sanga yoga in Tarevir
                </p>
                <p className="text-base text-center">
                  {yogaEvent.aboutEvent.description}
                </p>
                <div className="flex items-center justify-center mt-[15px]">
                  <Link to={"/tarevir"}>
                    <button className="w-[100px] bg-purple-600 text-white rounded-lg text-textParagraph p-[8px] hover:bg-black hover:text-white">
                      More Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sessions;
