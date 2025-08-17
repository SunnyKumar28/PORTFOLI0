export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Tools' | 'Databases';
  icon?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'Award' | 'Certification' | 'Achievement';
}