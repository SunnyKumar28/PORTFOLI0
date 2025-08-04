import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, BookOpen, Wrench, Package, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { portfolioData } from "../mock";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: portfolioData.skills.programmingLanguages,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: portfolioData.skills.webDevelopment,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      title: "Theoretical Skills",
      icon: BookOpen,
      skills: portfolioData.skills.theoreticalSkills,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: portfolioData.skills.developerTools,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20"
    },
    {
      title: "Libraries",
      icon: Package,
      skills: portfolioData.skills.libraries,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/20"
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: portfolioData.skills.dataScience,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6A40E4] to-[#5A30D4] mx-auto rounded-full"></div>
          <p className="text-[#E2E2E2]/70 text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="bg-[#1A1A1A]/50 border-gray-800 backdrop-blur-sm hover:bg-[#1A1A1A]/70 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-xl font-bold text-[#E2E2E2] group-hover:text-[#6A40E4] transition-colors duration-300">
                      <div className={`w-10 h-10 rounded-lg ${category.bgColor} ${category.borderColor} border flex items-center justify-center mr-3`}>
                        <IconComponent size={20} className={category.color} />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: skillIndex * 0.05,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge 
                            className={`
                              ${category.bgColor} ${category.color} ${category.borderColor} 
                              border hover:scale-105 transition-all duration-200 cursor-default
                              text-xs py-1 px-2
                            `}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1A1A1A]/30 rounded-lg border border-gray-800/50 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-bold text-[#E2E2E2] mb-4">
              What I Bring to the Table
            </h3>
            <p className="text-[#E2E2E2]/80 leading-relaxed max-w-4xl mx-auto">
              With a strong foundation in both theoretical computer science and practical development, 
              I specialize in building end-to-end AI/ML solutions. From data preprocessing and model 
              training to deployment and web integration, I can handle the full development lifecycle. 
              My experience spans across deep learning frameworks, web technologies, and cloud platforms, 
              allowing me to create scalable and efficient solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { number: "6+", label: "Programming Languages" },
                { number: "10+", label: "Frameworks & Libraries" },
                { number: "5+", label: "Cloud & DevOps Tools" },
                { number: "∞", label: "Learning New Tech" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-[#6A40E4] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[#E2E2E2]/70 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;