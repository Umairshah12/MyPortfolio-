export type SkillCategory = 'all' | 'development' | 'systems' | 'aviation';

export type SkillLevel = 'Advanced' | 'Proficient' | 'Operational' | 'Core Competency';

export interface Skill {
  name: string;
  category: 'development' | 'systems' | 'aviation';
  icon: string;
  level: SkillLevel;
  highlight?: boolean;
  context?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  description: string;
  keyResponsibilities: string[];
  operationalImpact: string[];
  skillsApplied: string[];
  accentColor?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'software' | 'it-solutions' | 'creative';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  keyCourses: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  dateOrStatus: string;
  badgeCode?: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export type ThemeAccent = 'cyan' | 'blue' | 'purple' | 'emerald';

