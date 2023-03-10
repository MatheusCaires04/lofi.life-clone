import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";
import { FaAppleAlt } from "react-icons/fa";

import logo from "/assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 border-b-2 border-slate-400/10 px-8 z-[999] backdrop-blur">
      <nav className="max-w-[1100px] mx-auto h-full flex items-center justify-between">
        <div>
          <img
            src={logo}
            alt="Logo da Lofi.Life, onde possui o desenho de um fone de ouvido e mais o escrito LOFI.LIFE"
            className="w-24"
          />
        </div>
        <ul className="text-white flex items-center gap-3 text-lg">
          <li className="relative ">
            <AiOutlineTwitter className="hover:text-blueIcon hover:scale-125 duration-200 cursor-pointer" />
          </li>
          <li>
            <RiTodoLine className="hover:text-violet-600 hover:scale-125 duration-200 cursor-pointer" />
          </li>
          <li>
            <FaAppleAlt className="hover:text-red-600 hover:scale-125 duration-200 cursor-pointer" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
