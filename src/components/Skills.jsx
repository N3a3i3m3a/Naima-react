import React from 'react'

const Skills = () => {
  return (
    <section class="bg-black text-white px-[8rem] py-20">
  <div class=" mx-auto">
    
    <h1 class="text-3xl font-bold text-center mb-14">My work skills</h1>


    
    <div class="flex flex-col md:flex-row gap-12">
      
      <div class=" text-lg space-y-6 w-1/2">
      <h2 class="text-xl  mb-10">Every day is a new challenge</h2>
      <p>
      I am a front-end developer and UI/UX designer dedicated to crafting intuitive and visually captivating user interfaces. By blending creativity with technical proficiency, I specialize in building responsive, accessible, and dynamic websites that deliver exceptional user experiences.
    </p>
    <p>
      My expertise in web-based mapping and geospatial technologies allows me to integrate software development with spatial analysis, creating innovative solutions by bridging the gap between geographic data and technology, I provide interactive, user-friendly tools tailored to address complex challenges.
    </p>
    <p>
      As a web designer, I combine modern frameworks like Next.js with Tailwind CSS to produce sleek, high-performance websites.
    </p>
      </div>

    
      <div class="flex-1 space-y-8 w-1/2 mt-16">
        <div>
          <span class="block text-lg font-semibold">UI/UX Design</span>
          <div class="h-1 bg-yellow-500 mt-1"></div>
        </div>
        <div>
          <span class="block text-lg font-semibold">Web-Based Mapping</span>
          <div class="h-1 bg-yellow-500 mt-1"></div>
        </div>
        <div>
          <span class="block text-lg font-semibold">Web Design</span>
          <div class="h-1 bg-yellow-500 mt-1"></div>
        </div>
        <div>
          <span class="block text-lg font-semibold">Web Development</span>
          <div class="h-1 bg-yellow-500 mt-1"></div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Skills