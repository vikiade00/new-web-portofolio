import {
  Browser,
  GithubLogo,
  Globe,
  RocketLaunch,
} from "@phosphor-icons/react";
import React from "react";
import { IMAGES } from "../assets/Image";
import { DATA_PROJECT } from "../data/Data";
import { Link } from "react-router-dom";
import HeaderPortofolio from "./HeaderPortofolio";

function Project() {
  return (
    <div>
      <HeaderPortofolio />
      <div className="p-10">
        <div className=" text-gray-900 font-semibold text-3xl px-5 pt-5 flex items-center justify-center gap-2 mt-10">
          My Portofolio
          <span className="text-blue-600">
            <RocketLaunch weight="fill" />
          </span>
        </div>
        <div className="flex justify-center gap-5 flex-wrap  mx-auto">
          {DATA_PROJECT.map((item) => (
            <div className="flex justify-center mt-10">
              <Link to={item.web} target="__blank">
                <div className=" w-64 md:w-72 border shadow-lg rounded-md hover:scale-105 hover:cursor-pointer">
                  <img
                    src={item.thumbnail}
                    alt="project image"
                    className="shadow"
                  />
                  <div className="py-4">
                    <div className="text-center">
                      <div className="font-semibold text-lg">{item.judul}</div>
                      <div className="text-sm px-2 text-gray-600">
                        {item.deskripsi}
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-5 text-xl">
                      <div className="text-gray-700 hover:scale-110 hover:text-blue-600">
                        <Link to={item.github} target="__blank">
                          <GithubLogo weight="fill" size={25} />
                        </Link>
                      </div>
                      <div className="text-gray-700 hover:scale-110 hover:text-blue-600">
                        <Link to={item.web} target="__blank">
                          <Globe weight="fill" size={25} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
