import { GraduationCap, User } from "@phosphor-icons/react";
import React from "react";
import { IMAGES } from "../assets/Image";

function About() {
  return (
    <div
      id="about"
      className=" min-h-[100vh] bg-gray-900 text-white flex justify-center items-center py-20"
    >
      <div className="mx-auto w-3/4">
        <div className="text-4xl mt-8 mb-5 text-center flex justify-center items-center gap-2">
          About Me{" "}
          <span className="text-blue-600">
            <User />
          </span>
        </div>
        <div className="text-center">
          "Hello, let me introduce myself. I'm Viki Ade Safaat, and I have a
          passion for technology. Currently, I am deepening my knowledge in web
          development. I have experience in creating websites using the MERN
          stack (MongoDB, Express.js, React.js, and Node.js)."
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex gap-5">
            <div className="text-gray-400">
              <span className="text-blue-600 text-3xl">5</span> Portofolio
            </div>
            <div className="text-gray-400">
              <span className="text-blue-600 text-3xl">10+</span> Tech
            </div>
          </div>
        </div>
        {/* Education */}
        <div className=" mt-20 flex flex-wrap gap-10 justify-center items-center">
          <div>
            <img src={IMAGES.education} alt="ilustrator image" width={300} />
          </div>
          <div>
            <div className="text-4xl mb-5 flex items-center gap-2">
              Education{" "}
              <span className="text-blue-600">
                <GraduationCap />
              </span>
            </div>
            <div>
              <div>
                <div className="text-lg font-semibold mb-3">Formal</div>
                <div>
                  <ul>
                    <li>
                      STMIK Mardira Indonesia | Teknik Informatika (2020 -
                      Sekarang)
                    </li>
                    <li>
                      SMK Marhas Margahayu | Rekayasa Perangkat Lunak (2015 -
                      2018)
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold mt-5 mb-3">
                  Studi Independent
                </div>
                <div>
                  <ul>
                    <li>
                      Skilvul | Fullstack Development (MERN) (16 Feb - 30 Juni
                      2023)
                    </li>
                    <li>
                      Alterra Academy | Front End Enginerring with React Js (16
                      Feb - 30 Juni 2023)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
