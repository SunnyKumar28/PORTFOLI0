from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Database collections
profile_collection = db.profile
experiences_collection = db.experiences
projects_collection = db.projects
skills_collection = db.skills
achievements_collection = db.achievements

async def close_db():
    client.close()