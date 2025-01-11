import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { FaGithub,  FaLinkedin, FaInstagram, FaClock } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-12 px-8 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-700 pb-4">
    
        <div>
          <div className="mb-4">
            
            <img
              src="/logo.png" 
              alt="Logo"
              className="w-20"
            />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="flex items-center text-gray-300 hover:text-orange-500">
                <HiArrowRight className="text-orange-500 mr-2" /> Home
              </a>
            </li>
            <li>
              <a href="/about" className="flex items-center text-gray-300 hover:text-orange-500">
                <HiArrowRight className="text-orange-500 mr-2" /> About
              </a>
            </li>
            <li>
              <a href="/skills" className="flex items-center text-gray-300 hover:text-orange-500">
                <HiArrowRight className="text-orange-500 mr-2" /> Skills
              </a>
            </li>
            <li>
              <a href="/projects" className="flex items-center text-gray-300 hover:text-orange-500">
                <HiArrowRight className="text-orange-500 mr-2" /> Projects
              </a>
            </li>
            <li>
              <a href="/blog" className="flex items-center text-gray-300 hover:text-orange-500">
                <HiArrowRight className="text-orange-500 mr-2" /> Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="flex items-center text-gray-300 hover:text-orange-500">
                <HiArrowRight className="text-orange-500 mr-2" /> Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 mx-6 ">Contact</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500 text-lg" />
              <span>+250 781333908</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500 text-lg" />
              <span>nishimwenaima3@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500 text-lg" />
              <span>Kigali-Rwanda</span>
            </li>
            <li className="flex items-center gap-3">
              <FaGlobe className="text-orange-500 text-lg" />
              <span>https://naima-portifolio-coral.vercel.app/</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-orange-500 text-lg" />
              <span>Mon - Fri / 9am-6pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Get latest information</h3>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-[#1f1c11] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute top-0 right-0 border border-gray-700 text-white px-4 py-3 rounded-r-md hover:bg-orange-600 transition duration-300">
              <HiArrowRight />
            </button>
          </div>
          <div className="flex items-center gap-6 mt-5">
            <a href="https://github.com/N3a3i3m3a"><FaGithub className="text-orange-500 text-xl cursor-pointer hover:text-orange-400" /></a>
                       <a href=""> <FaXTwitter className="text-orange-500 text-xl cursor-pointer hover:text-orange-400" /></a>
                       <a href="https://www.linkedin.com/in/naima-nishimwe-581b77263/"> <FaLinkedin className="text-orange-500 text-xl cursor-pointer hover:text-orange-400" /></a>
                       <a href="https://www.instagram.com/naimanishimwe/"><FaInstagram className="text-orange-500 text-xl cursor-pointer hover:text-orange-400" /></a>
                      
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-gray-300 text-sm">
        <p>Copyright © 2024 Naima Nishimwe. All Rights Reserved.</p>
        <p>
          <a href="#terms" className="hover:text-orange-500">Terms & Service</a> |{" "}
          <a href="#privacy" className="hover:text-orange-500">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
