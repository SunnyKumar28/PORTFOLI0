import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const Hero = ({ profile, loading, error }) => {
  const [text, setText] = useState("");
  const fullText = "AI/ML Engineer & Full-Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <LoadingSpinner size="large" text="Loading profile..." />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <ErrorMessage 
          error={error} 
          title="Failed to load profile" 
          showRetry={false}
        />
      </div>
    );
  }

  const { personal } = profile;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-[#E2E2E2] via-[#6A40E4] to-[#E2E2E2] bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#E2E2E2]/80 font-light">
              {text}
              <motion.span
                className="inline-block w-1 h-8 bg-[#6A40E4] ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-lg sm:text-xl text-[#E2E2E2]/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {personal.bio}
          </motion.p>

          {/* Contact Links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-[#E2E2E2]/60"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href={`mailto:${personal.email}`}
              className="flex items-center space-x-2 hover:text-[#6A40E4] transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Mail size={20} />
              <span className="hidden sm:inline">{personal.email}</span>
            </motion.a>
            
            <motion.a
              href={`tel:${personal.phone}`}
              className="flex items-center space-x-2 hover:text-[#6A40E4] transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Phone size={20} />
              <span className="hidden sm:inline">{personal.phone}</span>
            </motion.a>
            
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[#6A40E4] transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </motion.a>
            
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[#6A40E4] transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </motion.a>
            
            <motion.a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[#6A40E4] transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <ExternalLink size={20} />
              <span className="hidden sm:inline">LeetCode</span>
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              onClick={() => scrollToSection("#projects")}
              className="bg-[#6A40E4] hover:bg-[#5A30D4] text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            
            <Button
              onClick={() => scrollToSection("#about")}
              variant="outline"
              className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              About Me
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button
              onClick={() => scrollToSection("#about")}
              className="text-[#6A40E4] hover:text-[#5A30D4] transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;