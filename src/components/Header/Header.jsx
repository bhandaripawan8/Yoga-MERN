import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-purple-500 flex justify-center items-center">
      <div className="w-[70%]">
        <header className="flex py-6 text-white bg-purple-500 justify-between items-center">
          <img src="logo.svg" alt="Yoga Logo" className="h-8" />
          <nav className="flex space-x-10 px-5">
            <a href="" className="text-white hover:underline">
              Contact
            </a>
            <a href="" className="text-white hover:underline">
              About Us
            </a>
            <a href="" className="text-white hover:underline">
              Sign Up
            </a>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
