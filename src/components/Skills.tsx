import React from 'react';
import { Code, Database, PenTool as Tool, Globe } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Languages
    { name: 'Python', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'C++', category: 'Languages' },
    { name: 'HTML5', category: 'Languages' },
    { name: 'CSS', category: 'Languages' },
    { name: 'MATLAB', category: 'Languages' },
    
    // Frameworks & Libraries
    { name: 'React', category: 'Frameworks & Libraries' },
    { name: 'Node.js', category: 'Frameworks & Libraries' },
    { name: 'Express', category: 'Frameworks & Libraries' },
    { name: 'TensorFlow', category: 'Frameworks & Libraries' },
    { name: 'Keras', category: 'Frameworks & Libraries' },
    { name: 'Scikit-learn', category: 'Frameworks & Libraries' },
    { name: 'Pandas', category: 'Frameworks & Libraries' },
    { name: 'NumPy', category: 'Frameworks & Libraries' },
    { name: 'Matplotlib', category: 'Frameworks & Libraries' },
    { name: 'OpenCV', category: 'Frameworks & Libraries' },
    { name: 'Langchain', category: 'Frameworks & Libraries' },
    { name: 'LangGraph', category: 'Frameworks & Libraries' },
    
    // Tools
    { name: 'Git', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Streamlit', category: 'Tools' },
    { name: 'Anaconda', category: 'Tools' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'Linux', category: 'Tools' },
    { name: 'Selenium', category: 'Tools' },
    
    // Databases
    { name: 'MongoDB', category: 'Databases' },
    { name: 'AWS', category: 'Databases' },
  ];

  const categoryIcons = {
    'Languages': Code,
    'Frameworks & Libraries': Globe,
    'Tools': Tool,
    'Databases': Database,
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills
          </h2>
          <p className="text-xl text-gray-300">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <div
                key={category}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Icon size={24} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden"
                    >
                      <div className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:bg-purple-600/10">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;