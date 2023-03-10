import React from "react";
import { FaReact } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { TbBrandVite } from "react-icons/tb";
import { SiTailwindcss, SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="text-white flex items-center justify-center gap-2 mt-10 mb-5">
      <span className="text-sm">Built with</span>
      <FaReact className="text-blue-500 text-base" />
      <SiTailwindcss className="text-blue-700 text-base" />
      <TbBrandVite className="text-yellow-300 text-base" />
      <SiVercel className="text-white text-sm" />
      <span className="text-sm">&</span>
      <AiFillHeart className="text-red-600 text-base" />
    </footer>
  );
};

export default Footer;
