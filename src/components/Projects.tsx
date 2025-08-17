import React from 'react';
import { Github, Eye } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Government Schemes Information Retrieval System',
      description: 'Scraped 300+ government schemes from MyScheme.gov.in and engineered an AI-powered QnA system to enable natural language querying using RAG with HuggingFace LLM and FAISS.',
      technologies: ['Python', 'Web Scraping', 'RAG', 'HuggingFace', 'FAISS', 'Selenium'],
      demoUrl: '',
      githubUrl: 'https://github.com/SunnyKumar28/prodigal_task',
      imageUrl: 'https://blogs.nvidia.com/wp-content/uploads/2023/11/Retrieval-Augmented-Generation-RAG-KV-1-1280x683.jpg',
    },
    {
      id: 2,
      title: 'Voice Cloning and TTS',
      description: 'Developed an advanced text-to-speech system leveraging Qwen2.5 and LLMs for high-quality, zero-shot voice cloning with controllable speech synthesis.',
      technologies: ['Python', 'Qwen2.5', 'LLMs', 'Voice Cloning', 'Gradio', 'Speech Synthesis'],
      demoUrl: '',
      githubUrl: 'https://github.com/bharathgaddam1712/SyndicateSmashers',
      imageUrl: 'https://voice.ai/hub/wp-content/uploads/2023/01/ezgif.com-gif-maker-2-4.jpg',
    },
    {
      id: 3,
      title: 'Plant Disease Detection with Integrated Chatbot',
      description: 'Utilized TensorFlow and Keras to train CNN model for plant disease detection in real-time, achieving 92% accuracy and reducing misdiagnoses by 50%.',
      technologies: ['TensorFlow', 'Keras', 'CNN', 'Google Gemini API', 'Streamlit', 'Python'],
      demoUrl: '',
      githubUrl: 'https://github.com/SunnyKumar28/Plant_Disease_Detection',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*CUjbLtX-FeWfT6D06ebziA.jpeg',
    },
    {
      id: 4,
      title: 'Emotion-Driven Text-to-Speech Conversion Web App',
      description: 'Engineered an interactive web app using Streamlit for real-time emotion recognition and text-to-speech synthesis, improving processing speed by 20%.',
      technologies: ['Streamlit', 'Keras', 'Emotion Recognition', 'TTS', 'Typecast API', 'Python'],
      demoUrl: 'https://text-to-speech-and-emotion-recognition.onrender.com/',
      githubUrl: 'https://github.com/SunnyKumar28/Text-to-Speech-and-Emotion-Recognition--App',
      imageUrl: 'https://p16-seeyou-sg.ibyteimg.com/tos-alisg-i-2zwwjm3azk-sg/23d25aa1d92041009c1a24de7ac718ce~tplv-2zwwjm3azk-image.image',
    },
    {
      id: 5,
      title: 'Mental Health Support Chatbot',
      description: 'Deep learning chatbot with TensorFlow/Keras achieving 92% accuracy in intent classification across stress, anxiety, and happiness detection.',
      technologies: ['TensorFlow', 'Keras', 'LSTM', 'NLP', 'Streamlit', 'GPT-4'],
      demoUrl: '',
      githubUrl: 'https://github.com/SunnyKumar28/MentalHealthChatbot',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTUFrRq2t5F_mpo-5fWYBP29Pw2oq4QjtTQ&s',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-300">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-600/10"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm backdrop-blur-sm border border-purple-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 text-sm font-medium"
                    >
                      <Eye size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;