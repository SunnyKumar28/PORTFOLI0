import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Phone, ExternalLink, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // Fallback data if profile is not loaded
  const personal = profile?.personal || {
    name: "SUNNY KUMAR",
    email: "22cs2037@rgipt.ac.in",
    phone: "+91-6207296068",
    github: "https://github.com/SunnyKumar28",
    linkedin: "https://www.linkedin.com/in/sunny-kumar-747b86257/",
    leetcode: "https://leetcode.com/u/sunny_kumar28/"
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-gray-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(106, 64, 228, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(106, 64, 228, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#6A40E4]">
              {personal.name}
            </h3>
            <p className="text-[#E2E2E2]/70 leading-relaxed">
              AI/ML Engineer & Full-Stack Developer passionate about building intelligent 
              systems that solve real-world problems.
            </p>
            <div className="flex items-center space-x-1 text-[#E2E2E2]/60">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>using React & Framer Motion</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[#E2E2E2]">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Achievements", href: "#achievements" },
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-[#E2E2E2]/70 hover:text-[#6A40E4] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[#E2E2E2]">Get In Touch</h4>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${personal.email}`}
                className="flex items-center space-x-3 text-[#E2E2E2]/70 hover:text-[#6A40E4] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                <span className="text-sm">{personal.email}</span>
              </motion.a>
              
              <motion.a
                href={`tel:${personal.phone}`}
                className="flex items-center space-x-3 text-[#E2E2E2]/70 hover:text-[#6A40E4] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} />
                <span className="text-sm">{personal.phone}</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-[#E2E2E2] mb-3">Follow Me</h5>
              <div className="flex space-x-3">
                {[
                  { icon: Github, url: personal.github, label: "GitHub" },
                  { icon: Linkedin, url: personal.linkedin, label: "LinkedIn" },
                  { icon: ExternalLink, url: personal.leetcode, label: "LeetCode" },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1A1A1A] border border-gray-800 rounded-lg flex items-center justify-center text-[#E2E2E2]/70 hover:text-[#6A40E4] hover:border-[#6A40E4]/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-[#E2E2E2]/60 text-sm text-center md:text-left">
            <p>© {currentYear} {personal.name}. All rights reserved.</p>
            <p className="mt-1">
              Designed & Developed with modern web technologies
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white transition-all duration-300"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </Button>
        </motion.div>

        {/* Tech Stack Credits */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-800/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-[#E2E2E2]/50 text-xs">
            Built with React, Tailwind CSS, Framer Motion, and shadcn/ui
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;