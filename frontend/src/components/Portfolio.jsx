import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";

const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#E2E2E2] overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="achievements">
          <Achievements />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;