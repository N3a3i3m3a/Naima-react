import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-black text-white py-20 flex flex-col justify-center items-center px-6 sm:px-[5%] md:px-[10%]">
      <div className="flex flex-col md:flex-row  gap-6 md:gap-[10%]">
        <div className="w-full md:w-1/3 md:text-left px-6 md:px-0">
          <h1 className="text-lg sm:text-xl md:text-xl font-semibold mb-4 md:mb-7">
            Hello, I'm <br />
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-14">
            Naima Nishimwe.
          </h1>
          <p className="text-md sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-14">
            A creative Front-end developer and UI/UX designer, who solves
            real-world problems through codes and designs.
          </p>
          <div className="flex flex-row items-center  space-x-4 text-white w-[15rem] bg-[#201E15] border border-1 border-yellow-700 p-2 rounded-full">
 <button className="flex items-center justify-center  px-4 py-2 rounded-full bg-yellow-700 font-medium hover:bg-yellow-500 transition w-full sm:w-auto">
    Portfolio
    <span className="ml-3 text-lg">
      <MdOutlineArrowOutward />
    </span>
  </button>
  <NavLink to="/contact">
  <button className="py-2 px-1 font-medium hover:text-yellow-700 transition w-full sm:w-auto">
    Hire me
  </button></NavLink>
</div>

        </div>

        <div className="w-full md:w-1/2 px-6 md:px-0 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-[100%] h-[25rem] md:w-[30rem] md:h-[25rem] rounded-full overflow-hidden">
            <img
              src="/home.jpg"
              alt="Home image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
