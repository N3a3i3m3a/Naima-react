import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <section className="bg-black text-white py-20 flex flex-col justify-center items-center  md:px-[8rem] ">
      <div className="flex flex-col md:flex-row items-center gap-[9rem] ">
        
        <div className="md:w-1/3">
          <h1 className=" md:text-xl font-semibold mb-7">
            Hello, I'm <br />
            
          </h1>
          <h1 className=" md:text-4xl font-semibold mb-14">Naima Nishimwe.</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-14">
            A creative Front-end developer and UI/UX designer, who solves real-world problems through codes and designs.
          </p>
          <div className="flex items-center space-x-4 text-white w-3/5 rounded-full bg-[#201E15] border border-1 border-yellow-700 p-2">
            <button className="flex items-center px-4 py-2 rounded-full bg-yellow-700 font-medium hover:bg-yellow-500 transition">
              Portfolio
              <span className="ml-3 text-lg"><MdOutlineArrowOutward /></span>
            </button>
            <button className=" py-2  font-medium  hover:text-yellow-700 transition">
              Hire me
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-64 h-64 md:w-[30rem] md:h-[25rem] rounded-full overflow-hidden ">
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
