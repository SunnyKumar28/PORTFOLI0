from database import (
    profile_collection, experiences_collection, projects_collection, 
    skills_collection, achievements_collection
)
from models import Profile, Experience, Project, Skills, Achievement
import asyncio

# Seed data based on mock.js
async def seed_database():
    print("🌱 Starting database seeding...")
    
    # Clear existing data
    await profile_collection.delete_many({})
    await experiences_collection.delete_many({})
    await projects_collection.delete_many({})
    await skills_collection.delete_many({})
    await achievements_collection.delete_many({})
    print("🗑️ Cleared existing data")

    # Seed Profile
    profile_data = Profile(
        personal={
            "name": "SUNNY KUMAR",
            "email": "22cs2037@rgipt.ac.in",
            "phone": "+91-6207296068",
            "github": "https://github.com/SunnyKumar28",
            "linkedin": "https://www.linkedin.com/in/sunny-kumar-747b86257/",
            "leetcode": "https://leetcode.com/u/sunny_kumar28/",
            "bio": "AI/ML Engineer & Full-Stack Developer passionate about building intelligent systems that solve real-world problems. Experienced in deep learning, NLP, and web development with a strong foundation in data structures and algorithms."
        },
        education={
            "institution": "RAJIV GANDHI INSTITUTE OF PETROLEUM TECHNOLOGY",
            "location": "Amethi, Uttar Pradesh",
            "description": "An Institution of National Importance, akin to the Indian Institutes of Technology (IITs)",
            "degree": "Integrated Dual Degree - CSE with AI",
            "cgpa": "7.9",
            "duration": "Sep. 2022 - Apr. 2027"
        }
    )
    await profile_collection.insert_one(profile_data.dict())
    print("✅ Profile seeded")

    # Seed Experiences
    experiences_data = [
        Experience(
            company="Prodigal AI",
            role="AI Intern",
            duration="May. 2025 - present",
            type="Current Position",
            achievements=[
                "Developed automated form system using Python, LLMs, and browser automation to extract and auto-fill Y Combinator forms with 90% accuracy.",
                "Leveraged RAG, OCR, and document parsing for accurate data extraction from company PDFs, reducing manual processing time by 80%."
            ],
            technologies=["Python", "LLMs", "Browser Automation", "RAG", "OCR", "Document Parsing"],
            order=1
        ),
        Experience(
            company="Infosys",
            role="AI-ML Intern",
            duration="Oct. 2024 - Dec. 2024",
            type="Internship",
            project="Mental Health Support Chatbot",
            github="https://github.com/SunnyKumar28/MentalHealthChatbot",
            achievements=[
                "Engineered a deep learning chatbot with TensorFlow/Keras, achieving 92% accuracy in intent classification across stress, anxiety, and happiness detection.",
                "Optimized NLP pipelines using LSTM-based models to process over 10K text samples through efficient tokenization, sequence padding, and text preprocessing.",
                "Developed a secure Streamlit web app with real-time conversation tracking and authentication, integrating GPT-4 for fallback responses to enhance response relevance by 35%, boost system performance by 30%, and reduce response errors by 25%."
            ],
            technologies=["TensorFlow", "Keras", "LSTM", "NLP", "Streamlit", "GPT-4", "Python"],
            order=2
        )
    ]
    
    for exp in experiences_data:
        await experiences_collection.insert_one(exp.dict())
    print("✅ Experiences seeded")

    # Seed Projects
    projects_data = [
        Project(
            title="Government Schemes Information Retrieval System",
            github="https://github.com/SunnyKumar28/prodigal_task",
            date="Mar. 2025",
            category="Web Scraping | RAG",
            description="AI-powered QnA system for natural language querying of government schemes using RAG with HuggingFace LLM and FAISS.",
            objectives=[
                "Scraped 300+ government schemes from MyScheme.gov.in",
                "Engineered an AI-powered QnA system to enable natural language querying using RAG with HuggingFace LLM and FAISS"
            ],
            impact=[
                "Achieved 95% scraping success for scheme data (name, eligibility, benefits) using Selenium",
                "Delivered 90% query accuracy for questions like 'What schemes for farmers in Maharashtra?'",
                "Reduced manual lookup time by 70% via automated pipeline and interactive interface"
            ],
            technologies=["Python", "Selenium", "RAG", "HuggingFace", "FAISS", "NLP"],
            featured=True,
            order=1
        ),
        Project(
            title="Voice Cloning and TTS",
            github="https://github.com/bharathgaddam1712/SyndicateSmashers",
            date="Apr. 2025",
            category="AI Voice Cloning | Speech Synthesis",
            description="Advanced text-to-speech system leveraging Qwen2.5 and LLMs for high-quality, zero-shot voice cloning with controllable speech synthesis.",
            objectives=[
                "Developed an advanced text-to-speech system leveraging Qwen2.5 and LLMs for high-quality, zero-shot voice cloning with controllable speech synthesis"
            ],
            impact=[
                "Designed an intuitive Gradio-based UI for seamless voice cloning interactions",
                "Optimized inference efficiency by directly reconstructing audio, reducing processing time by 30%",
                "Achieved 95% accuracy in maintaining voice characteristics across different inputs"
            ],
            technologies=["Qwen2.5", "LLMs", "Gradio", "Python", "Speech Synthesis", "Voice Cloning"],
            featured=True,
            order=2
        ),
        Project(
            title="Plant Disease Detection with Integrated Chatbot",
            github="https://github.com/SunnyKumar28/Plant_Disease_Detection",
            date="Oct. 2024",
            category="TensorFlow | CNN | AI Chatbot",
            description="CNN-based plant disease detection system with integrated AI chatbot for personalized guidance and recommendations.",
            objectives=[
                "Utilized TensorFlow and Keras to train CNN model for plant disease detection in real-time, achieving 92% accuracy and reducing misdiagnoses by 50%"
            ],
            impact=[
                "Enhanced user experience by integrating an AI chatbot with Google Gemini API for personalized guidance",
                "E-commerce APIs for automated, multilingual recommendations on disease management, cures, and medicines",
                "Resulted in an 80% increase in user engagement"
            ],
            technologies=["TensorFlow", "Keras", "CNN", "Google Gemini API", "Streamlit", "Computer Vision"],
            featured=True,
            order=3
        ),
        Project(
            title="Emotion-Driven Text-to-Speech Conversion Web App",
            github="https://github.com/SunnyKumar28/Text-to-Speech-and-Emotion-Recognition--App",
            live_demo="https://text-to-speech-and-emotion-recognition.onrender.com/",
            date="Aug. 2024",
            category="Machine Learning | Data Analytics",
            description="Interactive web app for real-time emotion recognition and text-to-speech synthesis with emotion-specific voice output.",
            objectives=[
                "Engineered an interactive web app using Streamlit for real-time emotion recognition and text-to-speech synthesis, improving processing speed by 20%"
            ],
            impact=[
                "Integrated Keras models attaining 93% accuracy in text emotion recognition and 85% in audio emotion detection",
                "Delivering emotion-specific voice output via Typecast API"
            ],
            technologies=["Streamlit", "Keras", "Machine Learning", "Typecast API", "Python", "Emotion Recognition"],
            featured=False,
            order=4
        )
    ]
    
    for project in projects_data:
        await projects_collection.insert_one(project.dict())
    print("✅ Projects seeded")

    # Seed Skills
    skills_data = [
        Skills(category="Programming Languages", skills=["C++", "Python", "JavaScript", "HTML5", "CSS", "MATLAB"], order=1),
        Skills(category="Web Development", skills=["React", "MongoDB", "Node.js", "Express", "AWS"], order=2),
        Skills(category="Theoretical Skills", skills=["Data Structures", "Algorithms", "OOP", "DBMS", "Networks"], order=3),
        Skills(category="Developer Tools", skills=["Git/GitHub", "Streamlit", "Anaconda", "VS Code", "Linux"], order=4),
        Skills(category="Libraries", skills=["Selenium", "NumPy", "Pandas", "Matplotlib", "Browser-Use", "Scikit-learn", "TensorFlow/Keras", "OpenCV", "Langchain"], order=5),
        Skills(category="Data Science", skills=["Machine Learning", "Deep Learning", "NLP", "LLM", "RAG", "AI Agents"], order=6)
    ]
    
    for skill in skills_data:
        await skills_collection.insert_one(skill.dict())
    print("✅ Skills seeded")

    # Seed Achievements
    achievements_data = [
        Achievement(
            title="DSA Problem Solving",
            description="Solved 400+ problems across platforms like LeetCode, CodeChef, and others.",
            link="https://leetcode.com/u/sunny_kumar28/",
            type="Competitive Programming",
            order=1
        ),
        Achievement(
            title="IEEE Hackathon Winner",
            description="Winner of the AI Voice Cloning Challenge hosted by IEEE RGIPT, solving Prodigal AI's problem statement on zero-shot voice cloning and Text-to-Speech.",
            type="Hackathon",
            order=2
        ),
        Achievement(
            title="GeeksforGeeks Hackathon Winner",
            description="Winner of the GFG Student Chapter Hackathon, creating an AI solution for emotion-based voice analysis.",
            type="Hackathon",
            order=3
        ),
        Achievement(
            title="SAS Global Hackathon Finalist",
            description="Finalist among the top 100 teams in the SAS International Hackathon.",
            type="Hackathon",
            order=4
        )
    ]
    
    for achievement in achievements_data:
        await achievements_collection.insert_one(achievement.dict())
    print("✅ Achievements seeded")
    
    print("🎉 Database seeding completed successfully!")

if __name__ == "__main__":
    asyncio.run(seed_database())