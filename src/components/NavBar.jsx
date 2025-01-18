import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = ["Home", "About", "Skills", "Projects", "Blog", "Contact me"];

  return (
    <nav className="flex items-center  justify-between px-4 sm:px-[5%] md:px-[10%] py-3 bg-black text-white relative">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>

      <ul className="hidden md:flex text-[16px] items-center gap-4 sm:gap-8 lg:gap-12 text-sm md:text-md font-medium tracking-wide">
        {links.map((item, index) => {
          const linkPath =
            item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`;
          return (
            <a href={linkPath} key={index}>
              <li
                className={`${
                  activePath === linkPath ? "text-yellow-700" : ""
                } hover:text-yellow-700 cursor-pointer`}
              >
                {item}
              </li>
            </a>
          );
        })}
      </ul>

      
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none focus:ring-2 focus:ring-yellow-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-2 text-sm sm:text-md font-medium tracking-wide p-4 md:hidden">
          {links.map((item, index) => {
            const linkPath =
              item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`;
            return (
              <a href={linkPath} key={index}>
                <li
                  className={`${
                    activePath === linkPath ? "text-yellow-700" : ""
                  } hover:text-yellow-700 cursor-pointer`}
                >
                  {item}
                </li>
              </a>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
