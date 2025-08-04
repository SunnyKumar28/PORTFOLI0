#!/usr/bin/env python3
"""
Portfolio Backend API Testing Suite
Tests all endpoints for the portfolio backend API
"""

import asyncio
import aiohttp
import json
import sys
import os
from typing import Dict, List, Any
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    """Get backend URL from frontend .env file"""
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"❌ Error reading frontend .env: {e}")
        return None
    return None

class PortfolioAPITester:
    def __init__(self):
        self.base_url = get_backend_url()
        if not self.base_url:
            raise Exception("Could not get backend URL from frontend .env")
        
        self.api_url = f"{self.base_url}/api"
        self.session = None
        self.test_results = {
            "total_tests": 0,
            "passed_tests": 0,
            "failed_tests": 0,
            "test_details": []
        }
        
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
        
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    def log_test(self, test_name: str, passed: bool, details: str = ""):
        """Log test result"""
        self.test_results["total_tests"] += 1
        if passed:
            self.test_results["passed_tests"] += 1
            print(f"✅ {test_name}")
        else:
            self.test_results["failed_tests"] += 1
            print(f"❌ {test_name}: {details}")
        
        self.test_results["test_details"].append({
            "test": test_name,
            "passed": passed,
            "details": details,
            "timestamp": datetime.now().isoformat()
        })
    
    async def test_api_health(self):
        """Test API health endpoint"""
        try:
            async with self.session.get(f"{self.api_url}/") as response:
                if response.status == 200:
                    data = await response.json()
                    if "message" in data and "version" in data:
                        self.log_test("API Health Check", True)
                        return True
                    else:
                        self.log_test("API Health Check", False, "Missing required fields in response")
                        return False
                else:
                    self.log_test("API Health Check", False, f"HTTP {response.status}")
                    return False
        except Exception as e:
            self.log_test("API Health Check", False, str(e))
            return False
    
    async def test_profile_api(self):
        """Test Profile API endpoints"""
        print("\n🔍 Testing Profile API...")
        
        # Test GET /api/profile
        try:
            async with self.session.get(f"{self.api_url}/profile") as response:
                if response.status == 200:
                    profile_data = await response.json()
                    
                    # Validate profile structure
                    required_fields = ["id", "personal", "education", "created_at", "updated_at"]
                    missing_fields = [field for field in required_fields if field not in profile_data]
                    
                    if missing_fields:
                        self.log_test("Profile API - Structure", False, f"Missing fields: {missing_fields}")
                        return False
                    
                    # Validate personal info
                    personal = profile_data.get("personal", {})
                    personal_required = ["name", "email", "phone", "github", "linkedin", "leetcode", "bio"]
                    missing_personal = [field for field in personal_required if field not in personal]
                    
                    if missing_personal:
                        self.log_test("Profile API - Personal Info", False, f"Missing personal fields: {missing_personal}")
                        return False
                    
                    # Validate education info
                    education = profile_data.get("education", {})
                    education_required = ["institution", "location", "description", "degree", "cgpa", "duration"]
                    missing_education = [field for field in education_required if field not in education]
                    
                    if missing_education:
                        self.log_test("Profile API - Education Info", False, f"Missing education fields: {missing_education}")
                        return False
                    
                    # Validate specific data content
                    if personal.get("name") == "SUNNY KUMAR" and personal.get("email") == "22cs2037@rgipt.ac.in":
                        self.log_test("Profile API - Data Content", True)
                    else:
                        self.log_test("Profile API - Data Content", False, "Profile data doesn't match expected content")
                        return False
                    
                    self.log_test("Profile API - GET", True)
                    return True
                    
                else:
                    self.log_test("Profile API - GET", False, f"HTTP {response.status}")
                    return False
                    
        except Exception as e:
            self.log_test("Profile API - GET", False, str(e))
            return False
    
    async def test_experiences_api(self):
        """Test Experiences API endpoints"""
        print("\n🔍 Testing Experiences API...")
        
        try:
            async with self.session.get(f"{self.api_url}/experiences") as response:
                if response.status == 200:
                    experiences = await response.json()
                    
                    if not isinstance(experiences, list):
                        self.log_test("Experiences API - Response Type", False, "Response is not a list")
                        return False
                    
                    if len(experiences) < 2:
                        self.log_test("Experiences API - Data Count", False, f"Expected at least 2 experiences, got {len(experiences)}")
                        return False
                    
                    # Validate experience structure
                    for i, exp in enumerate(experiences):
                        required_fields = ["id", "company", "role", "duration", "type", "achievements", "technologies", "order"]
                        missing_fields = [field for field in required_fields if field not in exp]
                        
                        if missing_fields:
                            self.log_test(f"Experience {i+1} - Structure", False, f"Missing fields: {missing_fields}")
                            return False
                    
                    # Check for specific companies
                    companies = [exp.get("company") for exp in experiences]
                    expected_companies = ["Prodigal AI", "Infosys"]
                    
                    for company in expected_companies:
                        if company not in companies:
                            self.log_test("Experiences API - Company Data", False, f"Missing company: {company}")
                            return False
                    
                    # Validate sorting by order
                    orders = [exp.get("order", 0) for exp in experiences]
                    if orders != sorted(orders):
                        self.log_test("Experiences API - Sorting", False, "Experiences not sorted by order")
                        return False
                    
                    self.log_test("Experiences API - GET", True)
                    return True
                    
                else:
                    self.log_test("Experiences API - GET", False, f"HTTP {response.status}")
                    return False
                    
        except Exception as e:
            self.log_test("Experiences API - GET", False, str(e))
            return False
    
    async def test_projects_api(self):
        """Test Projects API endpoints"""
        print("\n🔍 Testing Projects API...")
        
        try:
            async with self.session.get(f"{self.api_url}/projects") as response:
                if response.status == 200:
                    projects = await response.json()
                    
                    if not isinstance(projects, list):
                        self.log_test("Projects API - Response Type", False, "Response is not a list")
                        return False
                    
                    if len(projects) != 4:
                        self.log_test("Projects API - Data Count", False, f"Expected 4 projects, got {len(projects)}")
                        return False
                    
                    # Validate project structure
                    for i, project in enumerate(projects):
                        required_fields = ["id", "title", "date", "category", "description", "objectives", "impact", "technologies", "featured", "order"]
                        missing_fields = [field for field in required_fields if field not in project]
                        
                        if missing_fields:
                            self.log_test(f"Project {i+1} - Structure", False, f"Missing fields: {missing_fields}")
                            return False
                    
                    # Check for specific projects
                    titles = [proj.get("title") for proj in projects]
                    expected_titles = [
                        "Government Schemes Information Retrieval System",
                        "Voice Cloning and TTS",
                        "Plant Disease Detection with Integrated Chatbot",
                        "Emotion-Driven Text-to-Speech Conversion Web App"
                    ]
                    
                    for title in expected_titles:
                        if title not in titles:
                            self.log_test("Projects API - Project Data", False, f"Missing project: {title}")
                            return False
                    
                    # Validate sorting (featured first, then by order)
                    featured_projects = [proj for proj in projects if proj.get("featured", False)]
                    if len(featured_projects) != 3:
                        self.log_test("Projects API - Featured Count", False, f"Expected 3 featured projects, got {len(featured_projects)}")
                        return False
                    
                    # Check if featured projects come first
                    featured_indices = [i for i, proj in enumerate(projects) if proj.get("featured", False)]
                    if featured_indices != [0, 1, 2]:
                        self.log_test("Projects API - Featured Sorting", False, "Featured projects should come first")
                        return False
                    
                    self.log_test("Projects API - GET", True)
                    return True
                    
                else:
                    self.log_test("Projects API - GET", False, f"HTTP {response.status}")
                    return False
                    
        except Exception as e:
            self.log_test("Projects API - GET", False, str(e))
            return False
    
    async def test_skills_api(self):
        """Test Skills API endpoints"""
        print("\n🔍 Testing Skills API...")
        
        try:
            async with self.session.get(f"{self.api_url}/skills") as response:
                if response.status == 200:
                    skills = await response.json()
                    
                    if not isinstance(skills, list):
                        self.log_test("Skills API - Response Type", False, "Response is not a list")
                        return False
                    
                    if len(skills) != 6:
                        self.log_test("Skills API - Category Count", False, f"Expected 6 skill categories, got {len(skills)}")
                        return False
                    
                    # Validate skills structure
                    for i, skill_cat in enumerate(skills):
                        required_fields = ["id", "category", "skills", "order"]
                        missing_fields = [field for field in required_fields if field not in skill_cat]
                        
                        if missing_fields:
                            self.log_test(f"Skills Category {i+1} - Structure", False, f"Missing fields: {missing_fields}")
                            return False
                        
                        if not isinstance(skill_cat.get("skills"), list):
                            self.log_test(f"Skills Category {i+1} - Skills Type", False, "Skills field is not a list")
                            return False
                    
                    # Check for expected categories
                    categories = [skill.get("category") for skill in skills]
                    expected_categories = [
                        "Programming Languages",
                        "Web Development", 
                        "Theoretical Skills",
                        "Developer Tools",
                        "Libraries",
                        "Data Science"
                    ]
                    
                    for category in expected_categories:
                        if category not in categories:
                            self.log_test("Skills API - Category Data", False, f"Missing category: {category}")
                            return False
                    
                    # Validate sorting by order
                    orders = [skill.get("order", 0) for skill in skills]
                    if orders != sorted(orders):
                        self.log_test("Skills API - Sorting", False, "Skills not sorted by order")
                        return False
                    
                    self.log_test("Skills API - GET", True)
                    return True
                    
                else:
                    self.log_test("Skills API - GET", False, f"HTTP {response.status}")
                    return False
                    
        except Exception as e:
            self.log_test("Skills API - GET", False, str(e))
            return False
    
    async def test_achievements_api(self):
        """Test Achievements API endpoints"""
        print("\n🔍 Testing Achievements API...")
        
        try:
            async with self.session.get(f"{self.api_url}/achievements") as response:
                if response.status == 200:
                    achievements = await response.json()
                    
                    if not isinstance(achievements, list):
                        self.log_test("Achievements API - Response Type", False, "Response is not a list")
                        return False
                    
                    if len(achievements) != 4:
                        self.log_test("Achievements API - Data Count", False, f"Expected 4 achievements, got {len(achievements)}")
                        return False
                    
                    # Validate achievement structure
                    for i, achievement in enumerate(achievements):
                        required_fields = ["id", "title", "description", "type", "order"]
                        missing_fields = [field for field in required_fields if field not in achievement]
                        
                        if missing_fields:
                            self.log_test(f"Achievement {i+1} - Structure", False, f"Missing fields: {missing_fields}")
                            return False
                    
                    # Check for specific achievements
                    titles = [ach.get("title") for ach in achievements]
                    expected_titles = [
                        "DSA Problem Solving",
                        "IEEE Hackathon Winner",
                        "GeeksforGeeks Hackathon Winner",
                        "SAS Global Hackathon Finalist"
                    ]
                    
                    for title in expected_titles:
                        if title not in titles:
                            self.log_test("Achievements API - Achievement Data", False, f"Missing achievement: {title}")
                            return False
                    
                    # Check achievement types
                    types = [ach.get("type") for ach in achievements]
                    expected_types = ["Competitive Programming", "Hackathon"]
                    
                    for achievement_type in expected_types:
                        if achievement_type not in types:
                            self.log_test("Achievements API - Type Data", False, f"Missing type: {achievement_type}")
                            return False
                    
                    # Validate sorting by order
                    orders = [ach.get("order", 0) for ach in achievements]
                    if orders != sorted(orders):
                        self.log_test("Achievements API - Sorting", False, "Achievements not sorted by order")
                        return False
                    
                    self.log_test("Achievements API - GET", True)
                    return True
                    
                else:
                    self.log_test("Achievements API - GET", False, f"HTTP {response.status}")
                    return False
                    
        except Exception as e:
            self.log_test("Achievements API - GET", False, str(e))
            return False
    
    async def test_cors_headers(self):
        """Test CORS headers"""
        print("\n🔍 Testing CORS Headers...")
        
        try:
            async with self.session.get(f"{self.api_url}/") as response:
                headers = response.headers
                
                # Check for CORS headers
                cors_headers = [
                    "access-control-allow-origin",
                    "access-control-allow-methods",
                    "access-control-allow-headers"
                ]
                
                missing_cors = []
                for header in cors_headers:
                    if header not in headers:
                        missing_cors.append(header)
                
                if missing_cors:
                    self.log_test("CORS Headers", False, f"Missing CORS headers: {missing_cors}")
                    return False
                else:
                    self.log_test("CORS Headers", True)
                    return True
                    
        except Exception as e:
            self.log_test("CORS Headers", False, str(e))
            return False
    
    async def test_response_times(self):
        """Test API response times"""
        print("\n🔍 Testing Response Times...")
        
        endpoints = [
            "/",
            "/profile",
            "/experiences", 
            "/projects",
            "/skills",
            "/achievements"
        ]
        
        slow_endpoints = []
        
        for endpoint in endpoints:
            try:
                start_time = datetime.now()
                async with self.session.get(f"{self.api_url}{endpoint}") as response:
                    end_time = datetime.now()
                    response_time = (end_time - start_time).total_seconds()
                    
                    if response_time > 5.0:  # 5 seconds threshold
                        slow_endpoints.append(f"{endpoint}: {response_time:.2f}s")
                        
            except Exception as e:
                slow_endpoints.append(f"{endpoint}: Error - {str(e)}")
        
        if slow_endpoints:
            self.log_test("Response Times", False, f"Slow endpoints: {slow_endpoints}")
            return False
        else:
            self.log_test("Response Times", True)
            return True
    
    async def test_error_handling(self):
        """Test error handling for invalid requests"""
        print("\n🔍 Testing Error Handling...")
        
        # Test invalid endpoint
        try:
            async with self.session.get(f"{self.api_url}/invalid-endpoint") as response:
                if response.status == 404:
                    self.log_test("Error Handling - Invalid Endpoint", True)
                else:
                    self.log_test("Error Handling - Invalid Endpoint", False, f"Expected 404, got {response.status}")
                    return False
        except Exception as e:
            self.log_test("Error Handling - Invalid Endpoint", False, str(e))
            return False
        
        return True
    
    async def run_all_tests(self):
        """Run all tests"""
        print(f"🚀 Starting Portfolio Backend API Tests")
        print(f"📍 Backend URL: {self.base_url}")
        print(f"📍 API URL: {self.api_url}")
        print("=" * 60)
        
        # Run all tests
        test_methods = [
            self.test_api_health,
            self.test_profile_api,
            self.test_experiences_api,
            self.test_projects_api,
            self.test_skills_api,
            self.test_achievements_api,
            self.test_cors_headers,
            self.test_response_times,
            self.test_error_handling
        ]
        
        for test_method in test_methods:
            await test_method()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.test_results['total_tests']}")
        print(f"✅ Passed: {self.test_results['passed_tests']}")
        print(f"❌ Failed: {self.test_results['failed_tests']}")
        
        success_rate = (self.test_results['passed_tests'] / self.test_results['total_tests']) * 100 if self.test_results['total_tests'] > 0 else 0
        print(f"📈 Success Rate: {success_rate:.1f}%")
        
        if self.test_results['failed_tests'] > 0:
            print("\n❌ FAILED TESTS:")
            for test in self.test_results['test_details']:
                if not test['passed']:
                    print(f"  - {test['test']}: {test['details']}")
        
        return self.test_results['failed_tests'] == 0

async def main():
    """Main test runner"""
    try:
        async with PortfolioAPITester() as tester:
            success = await tester.run_all_tests()
            
            # Save test results to file
            with open('/app/backend_test_results.json', 'w') as f:
                json.dump(tester.test_results, f, indent=2)
            
            if success:
                print("\n🎉 All tests passed!")
                sys.exit(0)
            else:
                print("\n💥 Some tests failed!")
                sys.exit(1)
                
    except Exception as e:
        print(f"❌ Test runner error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(main())