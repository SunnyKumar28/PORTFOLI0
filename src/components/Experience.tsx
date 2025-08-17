import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      id: 1,
      company: 'Prodigal AI',
      role: 'AI Intern',
      startDate: 'May 2025',
      endDate: 'Present',
      current: true,
      description: [
        'Developed automated form system using Python, LLMs, and browser automation to extract and auto-fill Y Combinator forms with 90% accuracy',
        'Leveraged RAG, OCR, and document parsing for accurate data extraction from company PDFs, reducing manual processing time by 80%',
        'Worked on AI-powered solutions for business process automation and optimization',
      ],
    },
    {
      id: 2,
      company: 'Infosys',
      role: 'AI-ML Intern',
      startDate: 'Oct 2024',
      endDate: 'Dec 2024',
      description: [
        'Engineered a deep learning chatbot with TensorFlow/Keras, achieving 92% accuracy in intent classification across stress, anxiety, and happiness detection',
        'Optimized NLP pipelines using LSTM-based models to process over 10K text samples through efficient tokenization, sequence padding, and text preprocessing',
        'Developed a secure Streamlit web app with real-time conversation tracking and authentication, integrating GPT-4 for fallback responses',
        'Enhanced response relevance by 35%, boosted system performance by 30%, and reduced response errors by 25%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-300">
            My professional journey and contributions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-600/30 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform md:-translate-x-2 mt-6"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-purple-400 mb-3">
                      {exp.company}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      {exp.current && (
                        <div className="flex items-center space-x-1 text-green-400">
                          <CheckCircle size={16} />
                          <span>Current</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start space-x-2">
                        <span className="text-purple-400 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;