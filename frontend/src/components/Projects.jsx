import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Code, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { portfolioData } from "../mock";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6A40E4] to-[#5A30D4] mx-auto rounded-full"></div>
          <p className="text-[#E2E2E2]/70 text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my technical expertise across AI/ML, web development, and automation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-[#1A1A1A]/50 border-gray-800 backdrop-blur-sm hover:bg-[#1A1A1A]/70 transition-all duration-300 h-full overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-[#E2E2E2] mb-2 group-hover:text-[#6A40E4] transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center text-[#E2E2E2]/60 text-sm mb-2">
                        <Calendar size={14} className="mr-2" />
                        {project.date}
                      </div>
                      <Badge className="bg-[#6A40E4]/20 text-[#6A40E4] border-[#6A40E4]/30 mb-3">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github size={16} />
                        </Button>
                      )}
                      {project.liveDemo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                          onClick={() => window.open(project.liveDemo, '_blank')}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-[#E2E2E2]/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Objectives */}
                  <div>
                    <h4 className="flex items-center text-lg font-semibold text-[#E2E2E2] mb-3">
                      <Target size={18} className="mr-2 text-[#6A40E4]" />
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {project.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-[#E2E2E2]/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#6A40E4] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Impact */}
                  <div>
                    <h4 className="flex items-center text-lg font-semibold text-[#E2E2E2] mb-3">
                      <TrendingUp size={18} className="mr-2 text-[#6A40E4]" />
                      Impact & Results
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((impact, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-[#E2E2E2]/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="flex items-center text-lg font-semibold text-[#E2E2E2] mb-3">
                      <Code size={18} className="mr-2 text-[#6A40E4]" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge className="bg-[#6A40E4]/10 text-[#6A40E4] border-[#6A40E4]/20 hover:bg-[#6A40E4]/20 transition-colors duration-200 text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.github && (
                      <Button
                        className="bg-[#6A40E4] hover:bg-[#5A30D4] text-white flex items-center space-x-2"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button
                        variant="outline"
                        className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white flex items-center space-x-2"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </Button>
                    )}
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

export default Projects;