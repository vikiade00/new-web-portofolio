import { ArrowArcLeft } from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

function HeaderPortofolio() {
  return (
    <div className="flex shadow-sm justify-between px-10 md:px-28 bg-white fixed top-0 w-full  py-4 items-center z-20">
      <div className="font-bold text-2xl">
        {"<"}
        <span className="text-blue-600">VAS</span>
        {"/>"}
      </div>
      <div>
        <NavLink to="/">
          <button className="bg-blue-600 text-white px-3 rounded-md py-1 flex items-center gap-3">
            Back
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default HeaderPortofolio;
