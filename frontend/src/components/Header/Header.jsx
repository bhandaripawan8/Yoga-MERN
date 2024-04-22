import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

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
    <header className="mx-[50px]">
      <div className="flex items-center justify-between mt-[20px]">
        {/* Logo on the far left with left margin 100 */}
        <div className="flex items-center ml-100">
          <Link to={"/"}>
            <h2 className="text-black">Logo</h2>
          </Link>
        </div>

        {/* Navigation in the middle */}
        <div className="container flex items-center justify-between">
          <nav className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <span className="md:hidden">
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>

        {/* Login button on the far right with right margin 100 */}
        <div className="flex items-center mr-100">
          <Link to={"/login"}>
            <button className="text-black py-2 px-6 text-white font-[600] h-8 w-25 flex items-center rounded-[40px]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
