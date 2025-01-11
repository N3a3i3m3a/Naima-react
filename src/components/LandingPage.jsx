import React from 'react'
import Home from './Home'
import Skills from './Skills'
import About from './About';
import Blog from "./Blog";
import Contact from './Contact';
import Projects from './Projects';


const LandingPage = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default LandingPage