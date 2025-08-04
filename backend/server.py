from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import os
import logging
from typing import List

# Import models and database
from models import (
    Profile, ProfileCreate, Experience, ExperienceCreate,
    Project, ProjectCreate, Skills, SkillsCreate,
    Achievement, AchievementCreate
)
from database import (
    profile_collection, experiences_collection, projects_collection,
    skills_collection, achievements_collection, close_db
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI(title="Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Root endpoint
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running!", "version": "1.0.0"}

# Profile endpoints
@api_router.get("/profile", response_model=Profile)
async def get_profile():
    """Get complete profile information"""
    try:
        profile = await profile_collection.find_one()
        if not profile:
            raise HTTPException(status_code=404, detail="Profile not found")
        return Profile(**profile)
    except Exception as e:
        logger.error(f"Error fetching profile: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.put("/profile", response_model=Profile)
async def update_profile(profile_data: ProfileCreate):
    """Update profile information"""
    try:
        # Update existing profile or create new one
        profile = Profile(**profile_data.dict())
        await profile_collection.replace_one(
            {}, profile.dict(), upsert=True
        )
        return profile
    except Exception as e:
        logger.error(f"Error updating profile: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Experience endpoints
@api_router.get("/experiences", response_model=List[Experience])
async def get_experiences():
    """Get all work experiences sorted by order"""
    try:
        experiences = await experiences_collection.find().sort("order", 1).to_list(100)
        return [Experience(**exp) for exp in experiences]
    except Exception as e:
        logger.error(f"Error fetching experiences: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/experiences", response_model=Experience)
async def create_experience(experience_data: ExperienceCreate):
    """Create new experience"""
    try:
        experience = Experience(**experience_data.dict())
        await experiences_collection.insert_one(experience.dict())
        return experience
    except Exception as e:
        logger.error(f"Error creating experience: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.put("/experiences/{experience_id}", response_model=Experience)
async def update_experience(experience_id: str, experience_data: ExperienceCreate):
    """Update specific experience"""
    try:
        result = await experiences_collection.update_one(
            {"id": experience_id}, {"$set": experience_data.dict()}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Experience not found")
        
        updated_exp = await experiences_collection.find_one({"id": experience_id})
        return Experience(**updated_exp)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating experience: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.delete("/experiences/{experience_id}")
async def delete_experience(experience_id: str):
    """Delete experience"""
    try:
        result = await experiences_collection.delete_one({"id": experience_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Experience not found")
        return {"message": "Experience deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting experience: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Project endpoints
@api_router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all projects sorted by featured first, then by order"""
    try:
        projects = await projects_collection.find().sort([("featured", -1), ("order", 1)]).to_list(100)
        return [Project(**proj) for proj in projects]
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/projects", response_model=Project)
async def create_project(project_data: ProjectCreate):
    """Create new project"""
    try:
        project = Project(**project_data.dict())
        await projects_collection.insert_one(project.dict())
        return project
    except Exception as e:
        logger.error(f"Error creating project: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.put("/projects/{project_id}", response_model=Project)
async def update_project(project_id: str, project_data: ProjectCreate):
    """Update specific project"""
    try:
        result = await projects_collection.update_one(
            {"id": project_id}, {"$set": project_data.dict()}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Project not found")
        
        updated_proj = await projects_collection.find_one({"id": project_id})
        return Project(**updated_proj)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating project: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.delete("/projects/{project_id}")
async def delete_project(project_id: str):
    """Delete project"""
    try:
        result = await projects_collection.delete_one({"id": project_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Project not found")
        return {"message": "Project deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting project: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Skills endpoints
@api_router.get("/skills", response_model=List[Skills])
async def get_skills():
    """Get all skill categories sorted by order"""
    try:
        skills = await skills_collection.find().sort("order", 1).to_list(100)
        return [Skills(**skill) for skill in skills]
    except Exception as e:
        logger.error(f"Error fetching skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/skills", response_model=Skills)
async def create_skills(skills_data: SkillsCreate):
    """Create new skill category"""
    try:
        skills = Skills(**skills_data.dict())
        await skills_collection.insert_one(skills.dict())
        return skills
    except Exception as e:
        logger.error(f"Error creating skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.put("/skills/{skills_id}", response_model=Skills)
async def update_skills(skills_id: str, skills_data: SkillsCreate):
    """Update skill category"""
    try:
        result = await skills_collection.update_one(
            {"id": skills_id}, {"$set": skills_data.dict()}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Skills category not found")
        
        updated_skills = await skills_collection.find_one({"id": skills_id})
        return Skills(**updated_skills)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.delete("/skills/{skills_id}")
async def delete_skills(skills_id: str):
    """Delete skill category"""
    try:
        result = await skills_collection.delete_one({"id": skills_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Skills category not found")
        return {"message": "Skills category deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Achievement endpoints
@api_router.get("/achievements", response_model=List[Achievement])
async def get_achievements():
    """Get all achievements sorted by order"""
    try:
        achievements = await achievements_collection.find().sort("order", 1).to_list(100)
        return [Achievement(**achievement) for achievement in achievements]
    except Exception as e:
        logger.error(f"Error fetching achievements: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/achievements", response_model=Achievement)
async def create_achievement(achievement_data: AchievementCreate):
    """Create new achievement"""
    try:
        achievement = Achievement(**achievement_data.dict())
        await achievements_collection.insert_one(achievement.dict())
        return achievement
    except Exception as e:
        logger.error(f"Error creating achievement: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.put("/achievements/{achievement_id}", response_model=Achievement)
async def update_achievement(achievement_id: str, achievement_data: AchievementCreate):
    """Update specific achievement"""
    try:
        result = await achievements_collection.update_one(
            {"id": achievement_id}, {"$set": achievement_data.dict()}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Achievement not found")
        
        updated_achievement = await achievements_collection.find_one({"id": achievement_id})
        return Achievement(**updated_achievement)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating achievement: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.delete("/achievements/{achievement_id}")
async def delete_achievement(achievement_id: str):
    """Delete achievement"""
    try:
        result = await achievements_collection.delete_one({"id": achievement_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Achievement not found")
        return {"message": "Achievement deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting achievement: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Include the router in the main app
app.include_router(api_router)

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_db()