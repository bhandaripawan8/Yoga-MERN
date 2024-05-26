import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-purple-600 flex justify-center items-center">
      <div className="w-[70%]">
        <header className="flex py-6 text-white justify-between items-center">
          <Link to={"/"}>
            <img src="logo.svg" alt="Yoga Logo" className="h-6" />
          </Link>
          <nav className="flex space-x-10 px-5">
            <Link to='/contacts'>
              <a href="" className="text-white hover:underline">
                Contact
              </a>
            </Link>

            <Link to={"/aboutus"}>
              <a href="" className="text-white hover:underline">
                About Us
              </a>
            </Link>
            <Link to={"/gallery"}>
              <a href="" className="text-white hover:underline">
                Gallery
              </a>
            </Link>
            <Link to="/login">
              <a href="" className="text-white hover:underline">
                Login/Sign Up
              </a>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
