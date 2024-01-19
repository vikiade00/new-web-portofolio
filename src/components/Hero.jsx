import React from "react";
import { IMAGES } from "../assets/Image";
import { ArrowCircleUpRight, Download } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";

function Hero() {
  return (
    <div
      id="home"
      className="flex items-center pt-28 md:pt-0 justify-center flex-wrap min-h-[100vh]"
    >
      <div className="w-4/5 md:w-2/5">
        <div className="font-bold mt-20 md:mt-0 text-xl md:text-3xl text-gray-700">
          Hi<span className="text-gray-400">,</span> I am Viki Ade Safaat
        </div>
        <div className="text-5xl font-semibold text-blue-600 mt-2">
          Web Developer
        </div>
        <div className="mt-3 text-gray-600 ">
          An enthusiastic web developer with expertise in creating responsive
          and dynamic user interfaces
        </div>
        <div className="flex gap-7 mt-10 flex-wrap items-center">
          <Link to="/portofolio">
            <button className="bg-blue-600 text-white py-2 w-32 flex justify-center items-center gap-2 hover:bg-blue-800">
              Portofolio <ArrowCircleUpRight />
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1T4XMt-EscwQBUTmvrCHFd6jTwXvesbUy/view"
            className="flex items-center gap-2 py-2 w-32 text-gray-900 font-semibold hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV{" "}
            <span>
              <Download />
            </span>
          </a>
        </div>
      </div>
      <div data-aos="fade-up" className="self-end mt-[00px] md:mt-0">
        <img
          className="-z-50"
          src={IMAGES.webDev}
          alt="Hero Picture"
          width={550}
        />
      </div>
    </div>
  );
}

export default Hero;
