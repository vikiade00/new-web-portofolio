import { TrendUp } from "@phosphor-icons/react";
import React from "react";
import { EXPERIENCE } from "../data/Data";
import Tech from "./Tech";

function Pengalaman() {
  return (
    <div id="experience" className=" min-h-[100vh pt-10">
      <div className="text-4xl my-10 text-center flex justify-center items-center gap-2">
        Experience
        <span className="text-blue-600 mt-1">
          <TrendUp />
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex  flex-wrap gap-16 mx-auto  w-[70%]">
          {EXPERIENCE.map((item) => (
            <div
              key={item.id}
              className="flex -z-50 gap-3 items-center cursor-pointer hover:scale-105 "
            >
              <div className="object-cover">
                <img src={item.img} alt="logo perusahaan" width={100} />
              </div>
              <div>
                <div className="font-bold">{item.posisi}</div>
                <div>{item.namaPerusahaan}</div>
                <div className="text-gray-500">
                  <div>{item.waktu}</div>
                  <div>{item.lokasi}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Tech />
    </div>
  );
}

export default Pengalaman;
