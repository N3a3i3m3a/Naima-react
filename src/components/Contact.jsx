import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaClock } from "react-icons/fa";
import { FaGithub,  FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-[#201E15] text-white py-20 px-8 md:px-[8rem] lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div>
           
          <h2 className="text-3xl font-bold mb-14">Contact info</h2>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-700 text-lg" />
              <span>+250 781333908</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-700 text-lg" />
              <span>nishimwenaima3@gmail.com@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-700 text-lg" />
              <span> Kigali-Rwanda</span>
            </li>
            <li className="flex items-center gap-3">
              <FaGlobe className="text-yellow-700 text-lg" />
              <span>https://naima-portifolio-coral.vercel.app/</span>
            </li>
            <li className="flex items-center  gap-3">
              <FaClock  className="text-yellow-700 text-lg" />
              <span>Mon - Fri / 9am-6pm</span>
            </li>
          </ul>
          <hr className="border-gray-700 mt-14 mb-6" />
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold">Follow Me:</span>
            <a href="https://github.com/N3a3i3m3a"><FaGithub className="text-yellow-700-2xl cursor-pointer hover:text-orange-400" /></a>
           <a href=""> <FaXTwitter className="text-yellow-700 text-2xl cursor-pointer hover:text-orange-400" /></a>
           <a href="https://www.linkedin.com/in/naima-nishimwe-581b77263/"> <FaLinkedin className="text-yellow-700 text-2xl cursor-pointer hover:text-orange-400" /></a>
           <a href="https://www.instagram.com/naimanishimwe/"><FaInstagram className="text-yellow-700 text-2xl cursor-pointer hover:text-orange-400" /></a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Fill the form to get in touch with me!</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="What is your name?"
              className="w-full p-3  bg-[#584D4D]  border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3  bg-[#584D4D]  border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3  bg-[#584D4D] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-700 text-white px-10 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
