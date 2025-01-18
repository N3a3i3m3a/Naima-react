import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Two days of Scrum trainings",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      date: "December 09, 2024",
      image: "/scrum.JPG",
      
    },
    {
      id: 2,
      title: "Gender based vilence outreach",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      date: "December 19, 2024",
      image: "/GBV.jpg",
      
    },
    // {
    //   id: 3,
    //   title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   description:
    //     "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    //   date: "February 10, 2024",
    //   image: "/path-to-image.jpg",
      
    // },
  ];

  return (
    <div className="bg-black text-white py-20 px-[5%] md:px-[10%]">
      <h2 className="text-center text-3xl font-bold mb-8">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => {
          const [month, day] = new Date(blog.date)
            .toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
            })
            .split(" ");

          return (
            <div
              key={blog.id}
              className="relative bg-[#110F28] rounded-lg shadow-lg overflow-hidden border border-[#FF7F50]"
            >
              
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-36 object-cover"
              />

            
              <div className="border-t border-gray-700 mx-4"></div>

              <div className="absolute top-[7rem] left-10 bg-yellow-700 text-white rounded-full px-3 py-1 text-sm font-bold flex flex-col items-center">
                <span className="text-xl">{day}</span>
                <span className="text-xs uppercase">{month}</span>
              </div>

              <div className="p-4">
                <div className="flex items-center text-sm text-gray-400 gap-2 mb-2">
                 
                  <span className="flex items-center gap-1">
                    <i className="fas fa-calendar" /> {blog.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {blog.description}
                </p>
                <button className="bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-700 transition duration-300">
                  Learn more <span className="text-lg">&#8594;</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
