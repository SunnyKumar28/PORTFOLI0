# Portfolio Application - API Contracts & Integration Guide

## Overview
This document defines the API contracts and integration strategy for converting the frontend-only portfolio to a full-stack application with backend data management.

## Current Frontend Mock Data Structure

### Mock Data Location: `/src/mock.js`
The frontend currently uses static mock data for:
- Personal information
- Education details  
- Work experience
- Projects portfolio
- Skills categorization
- Achievements & awards

## Backend Architecture Plan

### Database Schema (MongoDB)

#### Collections:

1. **profile** (Single Document)
```json
{
  "_id": ObjectId,
  "personal": {
    "name": String,
    "email": String,
    "phone": String,
    "github": String,
    "linkedin": String,
    "leetcode": String,
    "bio": String
  },
  "education": {
    "institution": String,
    "location": String,
    "description": String,
    "degree": String,
    "cgpa": String,
    "duration": String
  },
  "createdAt": Date,
  "updatedAt": Date
}
```

2. **experiences**
```json
{
  "_id": ObjectId,
  "company": String,
  "role": String,
  "duration": String,
  "type": String,
  "project": String (optional),
  "github": String (optional),
  "achievements": [String],
  "technologies": [String],
  "order": Number,
  "createdAt": Date
}
```

3. **projects**
```json
{
  "_id": ObjectId,
  "title": String,
  "github": String (optional),
  "liveDemo": String (optional),
  "date": String,
  "category": String,
  "description": String,
  "objectives": [String],
  "impact": [String],
  "technologies": [String],
  "featured": Boolean,
  "order": Number,
  "createdAt": Date
}
```

4. **skills**
```json
{
  "_id": ObjectId,
  "category": String,
  "skills": [String],
  "order": Number,
  "createdAt": Date
}
```

5. **achievements**
```json
{
  "_id": ObjectId,
  "title": String,
  "description": String,
  "link": String (optional),
  "type": String,
  "order": Number,
  "createdAt": Date
}
```

## API Endpoints

### Profile Endpoints
- `GET /api/profile` - Get complete profile information
- `PUT /api/profile` - Update profile information

### Experience Endpoints  
- `GET /api/experiences` - Get all work experiences (sorted by order)
- `POST /api/experiences` - Create new experience
- `PUT /api/experiences/:id` - Update specific experience
- `DELETE /api/experiences/:id` - Delete experience

### Project Endpoints
- `GET /api/projects` - Get all projects (sorted by order, featured first)
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update specific project
- `DELETE /api/projects/:id` - Delete project

### Skills Endpoints
- `GET /api/skills` - Get all skill categories (sorted by order)
- `POST /api/skills` - Create new skill category
- `PUT /api/skills/:id` - Update skill category
- `DELETE /api/skills/:id` - Delete skill category

### Achievement Endpoints
- `GET /api/achievements` - Get all achievements (sorted by order)
- `POST /api/achievements` - Create new achievement
- `PUT /api/achievements/:id` - Update achievement
- `DELETE /api/achievements/:id` - Delete achievement

## Frontend Integration Strategy

### Data Fetching
Replace mock data imports with API calls using axios:

1. **App.js Changes:**
   - Add data fetching on component mount
   - Create loading states
   - Error handling for API failures

2. **Component Updates:**
   - `Hero.jsx` - Fetch profile data
   - `About.jsx` - Fetch profile + education data
   - `Experience.jsx` - Fetch experiences data
   - `Projects.jsx` - Fetch projects data  
   - `Skills.jsx` - Fetch skills data
   - `Achievements.jsx` - Fetch achievements data

### API Service Layer
Create `/src/services/api.js`:
```javascript
const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

export const portfolioAPI = {
  getProfile: () => axios.get(`${API_BASE}/profile`),
  getExperiences: () => axios.get(`${API_BASE}/experiences`),
  getProjects: () => axios.get(`${API_BASE}/projects`),
  getSkills: () => axios.get(`${API_BASE}/skills`),
  getAchievements: () => axios.get(`${API_BASE}/achievements`)
};
```

## Implementation Steps

### Phase 1: Backend Development
1. Create MongoDB models for all collections
2. Implement CRUD API endpoints
3. Seed database with current mock data
4. Test all endpoints

### Phase 2: Frontend Integration
1. Create API service layer
2. Replace mock data with API calls
3. Add loading states and error handling
4. Test complete integration

### Phase 3: Enhancement
1. Add data validation
2. Implement proper error boundaries
3. Add admin panel for content management (future)

## Data Migration
- Convert current mock.js data to database seed data
- Maintain exact same data structure for seamless transition
- Ensure no frontend component changes needed initially

## Error Handling Strategy
- Frontend: Show fallback content if API fails
- Backend: Proper HTTP status codes and error messages
- Database: Connection error handling and retries

## Performance Considerations
- Cache frequently accessed data
- Implement pagination for large datasets (if needed)
- Optimize database queries with proper indexing

---

This contract ensures smooth transition from mock data to full database-driven application while maintaining all current functionality and design.