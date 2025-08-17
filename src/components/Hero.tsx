import React from 'react';
import { Mail, Phone, Github, Linkedin, Code } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:22cs2037@rgipt.ac.in',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+916207296068',
      label: 'Phone',
    },
    {
      icon: Github,
      href: 'https://github.com/SunnyKumar28',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sunny-kumar-747b86257/',
      label: 'LinkedIn',
    },
    {
      icon: Code,
      href: 'https://leetcode.com/u/sunny_kumar28/',
      label: 'LeetCode',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          SUNNY KUMAR
        </h1>

        {/* Title with Typing Animation */}
        <div className="text-xl sm:text-2xl lg:text-3xl text-purple-300 mb-8 h-12">
          <TypingAnimation text="AI/ML Engineer & Full-Stack Developer" speed={80} />
        </div>

        {/* Bio */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating intelligent solutions and building scalable applications. 
          I combine machine learning expertise with full-stack development skills to solve 
          complex problems and deliver innovative digital experiences.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-600/25"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;