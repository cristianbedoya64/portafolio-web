import React from "react";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import LinkedIn from "./sections/LinkedIn";
import AI from "./sections/AI";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LinkedIn />
        <AI />
        <Contact />
      </main>
    </>
  );
}
