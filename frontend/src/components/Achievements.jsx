import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, ExternalLink, Code, Zap, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const Achievements = ({ achievements, loading, error, onRetry }) => {
  const getIcon = (type) => {
    switch (type) {
      case "Hackathon":
        return Trophy;
      case "Competitive Programming":
        return Code;
      default:
        return Award;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case "Hackathon":
        return {
          icon: "text-yellow-400",
          bg: "bg-yellow-400/10",
          border: "border-yellow-400/20",
          badge: "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
        };
      case "Competitive Programming":
        return {
          icon: "text-blue-400",
          bg: "bg-blue-400/10",
          border: "border-blue-400/20",
          badge: "bg-blue-400/20 text-blue-400 border-blue-400/30"
        };
      default:
        return {
          icon: "text-purple-400",
          bg: "bg-purple-400/10",
          border: "border-purple-400/20",
          badge: "bg-purple-400/20 text-purple-400 border-purple-400/30"
        };
    }
  };

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

  if (loading) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <LoadingSpinner size="large" text="Loading achievements..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ErrorMessage 
            error={error} 
            title="Failed to load achievements" 
            onRetry={onRetry}
          />
        </div>
      </div>
    );
  }

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
              Achievements & Recognition
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6A40E4] to-[#5A30D4] mx-auto rounded-full"></div>
          <p className="text-[#E2E2E2]/70 text-lg mt-6 max-w-2xl mx-auto">
            Celebrating milestones and recognition in competitive programming and hackathons
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.type);
            const colors = getColor(achievement.type);
            
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="bg-[#1A1A1A]/50 border-gray-800 backdrop-blur-sm hover:bg-[#1A1A1A]/70 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center flex-shrink-0`}>
                          <IconComponent size={24} className={colors.icon} />
                        </div>
                        
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-[#E2E2E2] group-hover:text-[#6A40E4] transition-colors duration-300 mb-2">
                            {achievement.title}
                          </CardTitle>
                          <Badge className={colors.badge}>
                            {achievement.type}
                          </Badge>
                        </div>
                      </div>
                      
                      {achievement.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                          onClick={() => window.open(achievement.link, '_blank')}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-[#E2E2E2]/80 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    {achievement.link && (
                      <div className="mt-4">
                        <Button
                          className="bg-[#6A40E4] hover:bg-[#5A30D4] text-white flex items-center space-x-2"
                          onClick={() => window.open(achievement.link, '_blank')}
                        >
                          <ExternalLink size={16} />
                          <span>View Profile</span>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { 
              icon: Code, 
              number: "400+", 
              label: "Problems Solved",
              color: "text-blue-400",
              description: "LeetCode, CodeChef, etc."
            },
            { 
              icon: Trophy, 
              number: "3", 
              label: "Hackathon Wins",
              color: "text-yellow-400",
              description: "IEEE, GFG, SAS"
            },
            { 
              icon: Target, 
              number: "Top 100", 
              label: "Global Ranking",
              color: "text-green-400",
              description: "SAS International"
            },
            { 
              icon: Zap, 
              number: "92%", 
              label: "Project Accuracy",
              color: "text-purple-400",
              description: "AI/ML Models"
            },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-[#1A1A1A]/30 rounded-lg border border-gray-800/50 backdrop-blur-sm hover:bg-[#1A1A1A]/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 bg-[#6A40E4]/10 rounded-lg border border-[#6A40E4]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6A40E4]/20 transition-colors duration-300">
                  <IconComponent size={24} className={stat.color} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#6A40E4] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#E2E2E2] font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-[#E2E2E2]/60 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-[#1A1A1A]/30 rounded-lg border border-gray-800/50 backdrop-blur-sm p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-[#6A40E4]/10 rounded-full border border-[#6A40E4]/20 flex items-center justify-center">
              <Users size={32} className="text-[#6A40E4]" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-[#E2E2E2] mb-4">
            Ready to Collaborate?
          </h3>
          
          <p className="text-[#E2E2E2]/80 leading-relaxed max-w-2xl mx-auto mb-6">
            I'm always excited to work on challenging projects and collaborate with talented teams. 
            Whether it's hackathons, open-source contributions, or building innovative solutions, 
            let's create something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-[#6A40E4] hover:bg-[#5A30D4] text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </Button>
            
            <Button
              variant="outline"
              className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;