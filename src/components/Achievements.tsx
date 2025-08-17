import React from 'react';
import { Award, AlignCenterVertical as Certificate, Trophy, Calendar } from 'lucide-react';
import { Achievement } from '../types';

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'DSA Problem Solving Excellence',
      description: 'Solved 400+ problems across platforms like LeetCode, CodeChef, and others, demonstrating strong algorithmic thinking and problem-solving skills.',
      date: '2024',
      type: 'Achievement',
    },
    {
      id: 2,
      title: 'IEEE Hackathon Winner - AI Voice Cloning Challenge',
      description: 'Winner of the AI Voice Cloning Challenge hosted by IEEE RGIPT, solving Prodigal AI\'s problem statement on zero-shot voice cloning and Text-to-Speech.',
      date: '2024',
      type: 'Award',
    },
    {
      id: 3,
      title: 'GeeksforGeeks Student Chapter Hackathon Winner',
      description: 'Winner of the GFG Student Chapter Hackathon, creating an AI solution for emotion-based voice analysis.',
      date: '2024',
      type: 'Award',
    },
    {
      id: 4,
      title: 'SAS Global Hackathon Finalist',
      description: 'Finalist among the top 100 teams in the SAS International Hackathon, competing against global participants.',
      date: '2024',
      type: 'Achievement',
    },
    {
      id: 5,
      title: 'Academic Excellence - RGIPT',
      description: 'Maintaining strong academic performance with CGPA of 7.9 in Integrated Dual Degree - CSE with AI at an Institution of National Importance.',
      date: '2022-2027',
      type: 'Achievement',
    },
  ];

  const getIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'Award':
        return Trophy;
      case 'Certification':
        return Certificate;
      case 'Achievement':
        return Award;
      default:
        return Award;
    }
  };

  const getTypeColor = (type: Achievement['type']) => {
    switch (type) {
      case 'Award':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'Certification':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Achievement':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      default:
        return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Achievements
          </h2>
          <p className="text-xl text-gray-300">
            Recognition and achievements along my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const Icon = getIcon(achievement.type);
            const colorClasses = getTypeColor(achievement.type);
            
            return (
              <div
                key={achievement.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-600/10"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg backdrop-blur-sm border ${colorClasses}`}>
                    <Icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Calendar size={16} />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border ${colorClasses}`}
                      >
                        {achievement.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;