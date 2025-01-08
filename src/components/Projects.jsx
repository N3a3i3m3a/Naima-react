import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projects = [
    { title: "Blood Link", image: "/bloodLink.JPG", link: "https://blood-link-fe.onrender.com" },
    { title: "Personal portifolio", image: "/portifolio.JPG", link: "https://naima-portifolio-coral.vercel.app/" },
    { title: "Contribution on Igire Rwanda Organization website", image: "/iro.JPG", link: "https://igirerwanda.vercel.app/" },
    { title: "Project Four", image: "/path-to-image-4.jpg", link: "/project-four" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#201E15] text-white py-20 px-[8rem] ">
    
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Projects I worked on</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Here are some of the projects I’ve worked on while building my skills
          in web development and design. Each project represents a step in my
          journey of learning and growth.
        </p>
      </div>

      <div>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
                
              <div className="bg-black border border-orange-600 rounded-lg overflow-hidden shadow-md ">
              <h3 className="text-xl font-semibold h-16 flex items-center justify-center">{project.title}</h3>
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover border border-orange-600"
                />
            
                <div className="p-4 flex absolute bottom-0 ">
                  
                  <a
                    href={project.link}
                    className=" text-white rounded-full p-3 bg-orange-700 "
                    aria-label={`View details of ${project.title}`}
                  >
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-orange-700 text-3xl"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-orange-700 text-3xl"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

export default Projects;
