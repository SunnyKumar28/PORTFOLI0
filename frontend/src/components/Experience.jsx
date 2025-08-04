import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { portfolioData } from "../mock";

const Experience = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]/50">
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
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6A40E4] to-[#5A30D4] mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < portfolioData.experience.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-40 bg-gradient-to-b from-[#6A40E4] to-transparent hidden md:block"></div>
              )}
              
              <Card className="bg-[#1A1A1A]/50 border-gray-800 backdrop-blur-sm hover:bg-[#1A1A1A]/70 transition-all duration-300 transform hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      {/* Timeline Dot */}
                      <div className="w-12 h-12 bg-[#6A40E4] rounded-full flex items-center justify-center hidden md:flex">
                        <Briefcase size={20} className="text-white" />
                      </div>
                      
                      <div>
                        <CardTitle className="text-2xl font-bold text-[#E2E2E2] flex items-center">
                          {exp.company}
                          {exp.type === "Current Position" && (
                            <Badge className="ml-3 bg-green-500/20 text-green-400 border-green-500/30">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center text-[#6A40E4] font-semibold mt-1">
                          <span>{exp.role}</span>
                        </div>
                        <div className="flex items-center text-[#E2E2E2]/60 mt-1">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center space-x-2">
                      {exp.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white"
                          onClick={() => window.open(exp.github, '_blank')}
                        >
                          <Github size={16} className="mr-2" />
                          GitHub
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Project Title */}
                  {exp.project && (
                    <div className="bg-[#6A40E4]/10 p-4 rounded-lg border border-[#6A40E4]/20">
                      <h4 className="text-lg font-semibold text-[#6A40E4] mb-2">
                        Project: {exp.project}
                      </h4>
                    </div>
                  )}
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#E2E2E2] mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start space-x-3 text-[#E2E2E2]/80"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-[#6A40E4] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#E2E2E2] mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            className="bg-[#6A40E4]/20 text-[#6A40E4] border-[#6A40E4]/30 hover:bg-[#6A40E4]/30 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;