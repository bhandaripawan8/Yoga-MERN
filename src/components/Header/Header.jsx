import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-purple-600 flex justify-center items-center">
      <div className="w-[70%]">
        <header className="flex py-6 text-white justify-between items-center">
          <Link to={'/'}>
          <img src="logo.svg" alt="Yoga Logo" className="h-6" />
          </Link>
          <nav className="flex space-x-10 px-5">
            <a href="" className="text-white hover:underline">
              Contact
            </a>
            <a href="" className="text-white hover:underline">
              About Us
            </a>
            <a href={'/gallery'} className="text-white hover:underline">
              Gallery
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
