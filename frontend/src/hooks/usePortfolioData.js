import { useState, useEffect } from 'react';
import { portfolioAPI } from '../services/api';

// Custom hook for managing portfolio data
export const usePortfolioData = () => {
  const [data, setData] = useState({
    profile: null,
    experiences: [],
    projects: [],
    skills: [],
    achievements: [],
  });
  
  const [loading, setLoading] = useState({
    profile: true,
    experiences: true,
    projects: true,
    skills: true,
    achievements: true,
  });
  
  const [errors, setErrors] = useState({
    profile: null,
    experiences: null,
    projects: null,
    skills: null,
    achievements: null,
  });

  // Fetch profile data
  const fetchProfile = async () => {
    try {
      setLoading(prev => ({ ...prev, profile: true }));
      const response = await portfolioAPI.getProfile();
      setData(prev => ({ ...prev, profile: response.data }));
      setErrors(prev => ({ ...prev, profile: null }));
    } catch (error) {
      console.error('Error fetching profile:', error);
      setErrors(prev => ({ ...prev, profile: error.message }));
    } finally {
      setLoading(prev => ({ ...prev, profile: false }));
    }
  };

  // Fetch experiences data
  const fetchExperiences = async () => {
    try {
      setLoading(prev => ({ ...prev, experiences: true }));
      const response = await portfolioAPI.getExperiences();
      setData(prev => ({ ...prev, experiences: response.data }));
      setErrors(prev => ({ ...prev, experiences: null }));
    } catch (error) {
      console.error('Error fetching experiences:', error);
      setErrors(prev => ({ ...prev, experiences: error.message }));
    } finally {
      setLoading(prev => ({ ...prev, experiences: false }));
    }
  };

  // Fetch projects data
  const fetchProjects = async () => {
    try {
      setLoading(prev => ({ ...prev, projects: true }));
      const response = await portfolioAPI.getProjects();
      setData(prev => ({ ...prev, projects: response.data }));
      setErrors(prev => ({ ...prev, projects: null }));
    } catch (error) {
      console.error('Error fetching projects:', error);
      setErrors(prev => ({ ...prev, projects: error.message }));
    } finally {
      setLoading(prev => ({ ...prev, projects: false }));
    }
  };

  // Fetch skills data
  const fetchSkills = async () => {
    try {
      setLoading(prev => ({ ...prev, skills: true }));
      const response = await portfolioAPI.getSkills();
      setData(prev => ({ ...prev, skills: response.data }));
      setErrors(prev => ({ ...prev, skills: null }));
    } catch (error) {
      console.error('Error fetching skills:', error);
      setErrors(prev => ({ ...prev, skills: error.message }));
    } finally {
      setLoading(prev => ({ ...prev, skills: false }));
    }
  };

  // Fetch achievements data
  const fetchAchievements = async () => {
    try {
      setLoading(prev => ({ ...prev, achievements: true }));
      const response = await portfolioAPI.getAchievements();
      setData(prev => ({ ...prev, achievements: response.data }));
      setErrors(prev => ({ ...prev, achievements: null }));
    } catch (error) {
      console.error('Error fetching achievements:', error);
      setErrors(prev => ({ ...prev, achievements: error.message }));
    } finally {
      setLoading(prev => ({ ...prev, achievements: false }));
    }
  };

  // Fetch all data on mount
  useEffect(() => {
    fetchProfile();
    fetchExperiences();
    fetchProjects();
    fetchSkills();
    fetchAchievements();
  }, []);

  // Refresh functions
  const refresh = {
    profile: fetchProfile,
    experiences: fetchExperiences,
    projects: fetchProjects,
    skills: fetchSkills,
    achievements: fetchAchievements,
    all: () => {
      fetchProfile();
      fetchExperiences();
      fetchProjects();
      fetchSkills();
      fetchAchievements();
    }
  };

  return {
    data,
    loading,
    errors,
    refresh,
  };
};