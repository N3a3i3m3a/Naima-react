import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
