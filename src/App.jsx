import React from "react";

import Home from "./components/Home";
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Layout from './components/Layout'
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
