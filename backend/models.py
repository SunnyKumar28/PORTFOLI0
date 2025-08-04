from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Profile Models
class PersonalInfo(BaseModel):
    name: str
    email: str
    phone: str
    github: str
    linkedin: str
    leetcode: str
    bio: str

class EducationInfo(BaseModel):
    institution: str
    location: str
    description: str
    degree: str
    cgpa: str
    duration: str

class Profile(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    personal: PersonalInfo
    education: EducationInfo
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProfileCreate(BaseModel):
    personal: PersonalInfo
    education: EducationInfo

# Experience Models
class Experience(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    company: str
    role: str
    duration: str
    type: str
    project: Optional[str] = None
    github: Optional[str] = None
    achievements: List[str]
    technologies: List[str]
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ExperienceCreate(BaseModel):
    company: str
    role: str
    duration: str
    type: str
    project: Optional[str] = None
    github: Optional[str] = None
    achievements: List[str]
    technologies: List[str]
    order: int = 0

# Project Models
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    github: Optional[str] = None
    live_demo: Optional[str] = None
    date: str
    category: str
    description: str
    objectives: List[str]
    impact: List[str]
    technologies: List[str]
    featured: bool = False
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    github: Optional[str] = None
    live_demo: Optional[str] = None
    date: str
    category: str
    description: str
    objectives: List[str]
    impact: List[str]
    technologies: List[str]
    featured: bool = False
    order: int = 0

# Skills Models
class Skills(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category: str
    skills: List[str]
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class SkillsCreate(BaseModel):
    category: str
    skills: List[str]
    order: int = 0

# Achievement Models
class Achievement(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    link: Optional[str] = None
    type: str
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AchievementCreate(BaseModel):
    title: str
    description: str
    link: Optional[str] = None
    type: str
    order: int = 0