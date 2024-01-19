import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-5 md:py-3 flex justify-between px-10 md:px-20 flex-wrap-reverse gap-5">
      <div className="text-sm text-gray-400">
        © 2024 Viki Ade Safaat. All rights reserved.
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="text-sm text-gray-400">Follow Us</div>
        <ul className="flex gap-1 text-gray-600">
          <li className="hover:text-white cursor-pointer">
            <InstagramLogo weight="fill" size={20} />
          </li>
          <li className="hover:text-white cursor-pointer">
            <LinkedinLogo weight="fill" size={20} />
          </li>
          <li className="hover:text-white cursor-pointer">
            <GithubLogo weight="fill" size={20} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
