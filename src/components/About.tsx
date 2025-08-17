import React from 'react';
import { User, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: User,
      title: 'Background',
      description: 'Computer Science student at RGIPT with expertise in AI/ML and full-stack development, currently pursuing Integrated Dual Degree - CSE with AI.',
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'To bridge the gap between cutting-edge AI research and practical, scalable applications through innovative solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'Creating intelligent systems that make a positive impact on society and business through AI-powered solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driven by curiosity and powered by code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Actual Image */}
          <div className="relative">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/Sunny_Image.jpg"
                alt="Sunny Kumar"
                className="w-full h-full object-cover object-top rounded-2xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a passionate AI/ML Engineer and Full-Stack Developer currently pursuing my Integrated Dual Degree in Computer Science with AI at Rajiv Gandhi Institute of Petroleum Technology (RGIPT). My journey began with a fascination for how machines can learn and adapt, which led me to explore the intersection of AI and web development.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              With expertise spanning from neural networks to modern web frameworks, I enjoy tackling complex challenges and creating solutions that are both technically robust and user-friendly. I've worked on projects involving deep learning chatbots, plant disease detection, voice cloning, and government scheme information systems. When I'm not coding, you'll find me solving DSA problems, contributing to open-source projects, or participating in hackathons.
            </p>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg backdrop-blur-sm">
                    <highlight.icon size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;