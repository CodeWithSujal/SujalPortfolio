import { ElementType } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string[];
  projectLink: String;
  category: 'Modeling' | 'Environment' | 'Game Art' | 'Environment Creation' | 'Green Screen' | 'VFX';
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: string;
  category: 'Software' | 'Core';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ElementType;
}