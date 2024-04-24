import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const navlinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/sessions",
    display: "Find your session",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contacts",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="mx-[5px] pt-[30px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to={"/"}>
            <h2 className="text-black navTexts">Logo</h2>
          </Link>
        </div>
        <div>
        <div className="container flex items-center justify-between ">
          <nav className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                    className="text-textColor text-[16px] leading-7 font-[500] navTexts"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        </div>
        <div className="flex items-center">
          <Link to={"/login"}>
            <button className="text-blacktext-black font-[600] h-8 w-25 flex items-center navTexts">
              Login/Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
