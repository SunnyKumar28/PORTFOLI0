import React from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const Portfolio = () => {
  const { data, loading, errors, refresh } = usePortfolioData();

  // Check if all critical data is loaded
  const isInitialLoading = loading.profile || loading.experiences || loading.projects;
  
  // Check for critical errors
  const hasCriticalError = errors.profile || errors.experiences || errors.projects;

  if (isInitialLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#E2E2E2] flex items-center justify-center">
        <AnimatedBackground />
        <div className="relative z-10">
          <LoadingSpinner size="large" text="Loading your portfolio..." />
        </div>
      </div>
    );
  }

  if (hasCriticalError) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#E2E2E2] flex items-center justify-center">
        <AnimatedBackground />
        <div className="relative z-10">
          <ErrorMessage
            error="Failed to load portfolio data"
            onRetry={refresh.all}
            title="Unable to load portfolio"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#E2E2E2] overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <section id="home">
          <Hero 
            profile={data.profile} 
            loading={loading.profile} 
            error={errors.profile} 
          />
        </section>
        
        <section id="about">
          <About 
            profile={data.profile} 
            loading={loading.profile} 
            error={errors.profile} 
          />
        </section>
        
        <section id="experience">
          <Experience 
            experiences={data.experiences} 
            loading={loading.experiences} 
            error={errors.experiences}
            onRetry={refresh.experiences}
          />
        </section>
        
        <section id="projects">
          <Projects 
            projects={data.projects} 
            loading={loading.projects} 
            error={errors.projects}
            onRetry={refresh.projects}
          />
        </section>
        
        <section id="skills">
          <Skills 
            skills={data.skills} 
            loading={loading.skills} 
            error={errors.skills}
            onRetry={refresh.skills}
          />
        </section>
        
        <section id="achievements">
          <Achievements 
            achievements={data.achievements} 
            loading={loading.achievements} 
            error={errors.achievements}
            onRetry={refresh.achievements}
          />
        </section>
      </main>
      
      <Footer profile={data.profile} />
    </div>
  );
};

export default Portfolio;