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
       <a href="/"> <li className="hover:text-yellow-700 cursor-pointer">Home</li></a>
       <a href="/about"> <li className="hover:text-yellow-700 cursor-pointer">About</li></a>
       <a href="/skills"> <li className="hover:text-yellow-700 cursor-pointer">Skills</li></a>
        <a href="/projects"> <li className="hover:text-yellow-700 cursor-pointer">Projects</li></a>
        <a href="/blog"> <li className="hover:text-yellow-700 cursor-pointer">Blog</li></a>
        <a href="/contact"> <li className="hover:text-yellow-700 cursor-pointer">Contact me</li></a>
      </ul>
    </nav>
  );
};

export default NavBar;
