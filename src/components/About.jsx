import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#201E15] text-white flex gap-10 items-center justify-center px-[8rem] py-20">
    
        <div className="flex items-center w-1/2 pr-12 mt-16 justify-center">
          <img
            src="about.png"
            alt="about me image"
            className="rounded-sm shadow-lg object-cover"
          />
        </div>

        <div className=" w-1/2">
          <h1 className="text-3xl font-bold mb-4 border-b-2 pb-2 border-white">
            About me
          </h1>
          <p className="mb-6 text-white">I’m Naima Nishimwe, a dedicated Front-End Developer and UI/UX Designer passionate about solving real-world problems through intuitive designs and robust code. My work focuses on creating responsive web applications and crafting user-centered experiences. I’m currently working on real-world projects that showcase my ability to turn ideas into impactful solutions. Let’s collaborate to bring your vision to life!
          </p>

          <div className="bg-[#726D79] p-4 rounded-md mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-gray-400">Name:</p>
                <p>Naima Nishimwe</p>
              </div>
              <div>
                <p className="font-bold text-gray-400">Phone:</p>
                <p>+250781333908</p>
              </div>
              <div>
                <p className="font-bold text-gray-400">Email:</p>
                <p>nishimwenaima3@gmail.com</p>
              </div>
              <div>
                <p className="font-bold text-gray-400">GitHub:</p>
                <p>N3a3i3m3a</p>
              </div>
            </div>
          </div>

          
          <div className="flex gap-10 ">
           <button className="flex items-center px-4 py-2 rounded-full bg-yellow-700 font-medium hover:bg-yellow-500 transition">
                         Contact me
                         <span className="ml-3 text-lg"><MdOutlineArrowOutward /></span>
            </button>
            <a href="https://drive.google.com/file/d/1UyFOU7xP7wnSCv0iJSzFgCSMCeHeDkwD/view?usp=drive_link" className=""><button className="flex items-center py-2  px-4 text-white  rounded-full bg-[#584D4D] border border-1 border-yellow-700">
              Download my resume
              <span className="ml-4 text-yellow-700"><FaCloudDownloadAlt className="h-5 w-5" /></span>
            </button></a>
          </div>
        </div>
    
    </div>
  );
};

export default About;
