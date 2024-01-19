import React from "react";
import { IMAGES } from "../assets/Image";

function Tech() {
  return (
    <div className="w-2/3 mx-auto mt-10 pt-10 rounded-xl border py-10">
      <div className="text-center text-gray-900 font-semibold text-3xl px-5">
        Tech Tools <span className="text-blue-600">{"</>"}</span>
      </div>
      <p className="text-center">
        "Here are the cutting-edge technologies I utilized to craft a
        captivating website."
      </p>
      <div className="flex justify-center items-center gap-5 mt-5 flex-wrap px-5">
        <div className=" cursor-pointer">
          <img src={IMAGES.logoMongo} alt="logo-tech" width={150} />
        </div>
        <div className="cursor-pointer">
          <img src={IMAGES.logoExpress} alt="logo-tech" width={150} />
        </div>
        <div className="cursor-pointer">
          <img src={IMAGES.logoReact} alt="logo-tech" width={50} />
        </div>
        <div className="cursor-pointer">
          <img src={IMAGES.logoRedux} alt="logo-tech" width={50} />
        </div>
        <div className="cursor-pointer">
          <img src={IMAGES.logoNodeJs} alt="logo-tech" width={120} />
        </div>
        <div className="cursor-pointer">
          <img src={IMAGES.logoTailwind} alt="logo-tech" width={50} />
        </div>
        <div className="cursor-pointer">
          <img src={IMAGES.logoAntd} alt="logo-tech" width={50} />
        </div>
      </div>
    </div>
  );
}

export default Tech;
