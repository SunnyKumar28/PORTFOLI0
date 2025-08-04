import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const About = ({ profile, loading, error }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (loading) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <LoadingSpinner size="large" text="Loading about information..." />
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ErrorMessage 
            error={error} 
            title="Failed to load profile information" 
            showRetry={false}
          />
        </div>
      </div>
    );
  }

  const { personal, education } = profile;

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#E2E2E2] to-[#6A40E4] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6A40E4] to-[#5A30D4] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* About Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="bg-[#1A1A1A]/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#E2E2E2] flex items-center">
                  <span className="w-8 h-8 bg-[#6A40E4] rounded-full flex items-center justify-center mr-3">
                    👋
                  </span>
                  Nice to meet you!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[#E2E2E2]/80 leading-relaxed">
                  I'm a passionate AI/ML Engineer and Full-Stack Developer with a strong foundation in building 
                  intelligent systems that solve real-world problems. My expertise spans across deep learning, 
                  natural language processing, and web development.
                </p>
                <p className="text-[#E2E2E2]/80 leading-relaxed">
                  Currently pursuing an Integrated Dual Degree in Computer Science Engineering with AI at RGIPT, 
                  I've had the opportunity to work on cutting-edge projects involving chatbots, voice cloning, 
                  plant disease detection, and government scheme information systems.
                </p>
                <p className="text-[#E2E2E2]/80 leading-relaxed">
                  I'm constantly learning and exploring new technologies, with a particular interest in LLMs, 
                  RAG systems, and browser automation. When I'm not coding, you'll find me solving DSA problems 
                  on competitive programming platforms or participating in hackathons.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#1A1A1A]/50 border-gray-800 backdrop-blur-sm hover:bg-[#1A1A1A]/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#E2E2E2] flex items-center">
                  <GraduationCap className="mr-3 text-[#6A40E4]" size={24} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#E2E2E2] mb-2">
                    {education.institution}
                  </h3>
                  <div className="flex items-center text-[#E2E2E2]/60 mb-2">
                    <MapPin size={16} className="mr-2" />
                    {education.location}
                  </div>
                  <div className="flex items-center text-[#E2E2E2]/60 mb-3">
                    <Calendar size={16} className="mr-2" />
                    {education.duration}
                  </div>
                  <p className="text-[#E2E2E2]/70 text-sm mb-4">
                    {education.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#6A40E4]/20 text-[#6A40E4] border-[#6A40E4]/30">
                      {education.degree}
                    </Badge>
                    <Badge className="bg-[#6A40E4]/20 text-[#6A40E4] border-[#6A40E4]/30 flex items-center">
                      <Award size={14} className="mr-1" />
                      CGPA: {education.cgpa}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "400+", label: "DSA Problems Solved" },
            { number: education.cgpa, label: "CGPA" },
            { number: "10+", label: "Projects Built" },
            { number: "3", label: "Hackathon Wins" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-[#1A1A1A]/30 rounded-lg border border-gray-800/50 backdrop-blur-sm hover:bg-[#1A1A1A]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#6A40E4] mb-2">
                {stat.number}
              </div>
              <div className="text-[#E2E2E2]/70 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;