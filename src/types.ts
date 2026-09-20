import React from 'react';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  clientLocation?: string;
  techStack: string[];
  category: 'microservices' | 'fullstack' | 'ecommerce' | 'realtime';
  featured: boolean;
  image: string;
  highlights: string[];
  architectureDetails: string;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  metrics?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship' | 'Trainee';
  current?: boolean;
  summary: string;
  responsibilities: string[];
  skills: string[];
  impactMetrics?: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'backend' | 'frontend' | 'database' | 'devops' | 'realtime';
  level: number; // 0-100
  iconName: string;
  yearsOfExp?: string;
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link?: string;
  badgeText: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  projectRelation: string;
}

export interface SimulationStep {
  id: string;
  timestamp: string;
  stepName: string;
  type: 'gateway' | 'auth' | 'cache' | 'queue' | 'db' | 'payment' | 'dlq';
  status: 'pending' | 'success' | 'warning' | 'retry' | 'failed';
  message: string;
  latencyMs: number;
}

export interface CommandHistory {
  command: string;
  output: string | React.ReactNode;
  type: 'text' | 'json' | 'error' | 'success';
}
