import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { List, X, PhoneCall } from "@phosphor-icons/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:flex shadow-sm md:justify-between px-4 md:px-28 bg-white fixed w-full py-4 md:items-center z-[999px]">
      <div className="font-bold text-2xl z-50">
        {"<"}
        <span className="text-blue-600">VAS</span>
        {"/>"}
      </div>
      {/* MENU */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" absolute right-5 top-5 md:hidden cursor-pointer hover:scale-105"
      >
        {isOpen ? <X size={25} /> : <List size={25} />}
      </div>
      <div className="md:flex md:gap-10 transition-all duration-500 ease-out items-center font-semibold">
        <ul
          className={`${
            isOpen
              ? "absolute md:flex md:justify-center md:mt-0 md:p-0 md:bg-transparent md:shadow-none md:items-center bg-white w-full shadow-sm left-0 top-7 pl-5 mt-9 pt-4"
              : "hidden md:flex"
          } md:flex flex-col md:flex-row md:gap-10`}
        >
          <Link to="home" smooth="true">
            <li className="hover:text-blue-600 cursor-pointer mb-3 md:mb-0">
              Home
            </li>
          </Link>
          <Link to="about" smooth="true">
            <li className="hover:text-blue-600 cursor-pointer mb-3 md:mb-0">
              About
            </li>
          </Link>
          <Link to="experience" smooth="true">
            <li className="hover:text-blue-600 cursor-pointer mb-3 md:mb-0">
              Experience
            </li>
          </Link>
          <Link to="contact" smooth="true">
            <li className="hover:text-blue-600 cursor-pointer mb-3 md:mb-0">
              Contact
            </li>
          </Link>
          <NavLink to="portofolio">
            <li className="hover:text-blue-600 cursor-pointer mb-3 md:mb-0">
              Portfolio
            </li>
          </NavLink>
          <Link to="contact" smooth="true">
            <li>
              <button className="bg-blue-600 text-white px-2 rounded py-1 mb-4 md:hidden flex items-center gap-1">
                Contact Me <PhoneCall />
              </button>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <Link to="contact" smooth="true">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 rounded py-1 hidden md:flex items-center gap-1">
            Contact Me <PhoneCall />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
