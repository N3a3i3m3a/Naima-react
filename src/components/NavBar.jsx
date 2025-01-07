import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-[8rem] py-4 bg-black text-white">
      
      <div className="flex items-center ">
        <img
          src="/logo.png" 
          alt="Logo"
          className="w-24 h-20 "
        />

      </div>

      
      <ul className="hidden md:flex items-center gap-12 text-md font-medium tracking-wide">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">About</li>
        <li className="hover:text-yellow-400 cursor-pointer">Skills</li>
        <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
        <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact me</li>
      </ul>
    </nav>
  );
};

export default NavBar;
