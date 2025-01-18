import React from "react";

const Skills = () => {
  return (
    <section className="bg-black text-white sm:px-[5%] md:px-[10%] py-20">
      <div className="mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          My work skills
        </h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-7">
          <div className="text-base text-sm md:text-md space-y-6 w-full px-6 md:px-0 md:w-1/2">
            <h2 className="text-xl font-semibold mb-6 sm:mb-8">
              Every day is a new challenge
            </h2>
            <p>
              I am a front-end developer and UI/UX designer dedicated to
              crafting intuitive and visually captivating user interfaces. By
              blending creativity with technical proficiency, I specialize in
              building responsive, accessible, and dynamic websites that
              deliver exceptional user experiences.
            </p>
            <p>
              My expertise in web-based mapping and geospatial technologies
              allows me to integrate software development with spatial analysis,
              creating innovative solutions by bridging the gap between
              geographic data and technology. I provide interactive,
              user-friendly tools tailored to address complex challenges.
            </p>
            <p>
              As a web designer, I combine modern frameworks like Next.js with
              Tailwind CSS to produce sleek, high-performance websites.
            </p>
          </div>

          <div className="space-y-8 pt-14 w-full px-6 md:px-0  md:w-1/2">
            {[
              "UI/UX Design",
              "Web-Based Mapping",
              "Web Design",
              "Web Development",
            ].map((skill, index) => (
              <div key={index}>
                <span className="block text-base sm:text-lg font-semibold">
                  {skill}
                </span>
                <div className="h-1 bg-yellow-500 mt-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
