import React from "react";
import ContactImage from "./ContactImage";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

const Contact = () => {
  return (
    <div className="h-auto flex items-center">
      <div className="flex flex-col lg:grid-cols-2 gap-8 w-[63%] mx-auto py-12 md:py-24 shadow-xl mt-[20px] px-10 bg-white">
        <ContactHeader/>
        <div className="flex justify-around">
        <ContactImage/>
        <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
