// import React from "react";
// import Collapsible from "./Collapsible";
import { yogaFAQs } from "../../data";
import React, { useState } from "react";

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (index) => {
    if (openIdx === index) {
      setOpenIdx(null);
    } else {
      setOpenIdx(index);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className=" border rounded-lg px-4 py-6 shadow-md w-[63%] h-auto py-10">
        <h2 className="text-2xl  font-bold mb-4 flex justify-center font-extrabold">Frequently Asked Questions</h2>
        {yogaFAQs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item border-b py-2 last:border-b-0 ${
              openIdx === index ? "bg-gray-100" : ""
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full focus:outline-none"
            >
              <p className="text-base font-semibold mt-4"><li>{faq.question}</li></p>
              <span className="transition duration-200 ease-in-out transform">
                {openIdx === index ? "-" : "+"}
              </span>
            </button>
            {openIdx === index && (
              <p className="text-sm font-medium text-gray-800 mt-3 px-[15px] transition-all duration-300 ease-in-out">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQ;
