import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Portfolio API service
export const portfolioAPI = {
  // Profile endpoints
  getProfile: () => api.get('/profile'),
  updateProfile: (data) => api.put('/profile', data),

  // Experience endpoints
  getExperiences: () => api.get('/experiences'),
  createExperience: (data) => api.post('/experiences', data),
  updateExperience: (id, data) => api.put(`/experiences/${id}`, data),
  deleteExperience: (id) => api.delete(`/experiences/${id}`),

  // Project endpoints
  getProjects: () => api.get('/projects'),
  createProject: (data) => api.post('/projects', data),
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/projects/${id}`),

  // Skills endpoints
  getSkills: () => api.get('/skills'),
  createSkills: (data) => api.post('/skills', data),
  updateSkills: (id, data) => api.put(`/skills/${id}`, data),
  deleteSkills: (id) => api.delete(`/skills/${id}`),

  // Achievement endpoints
  getAchievements: () => api.get('/achievements'),
  createAchievement: (data) => api.post('/achievements', data),
  updateAchievement: (id, data) => api.put(`/achievements/${id}`, data),
  deleteAchievement: (id) => api.delete(`/achievements/${id}`),
};

export default api;