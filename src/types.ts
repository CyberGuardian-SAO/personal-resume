export interface Award {
  title: Record<'zh' | 'en', string>;
  year: string;
}

export interface Project {
  id: string;
  title: Record<'zh' | 'en', string>;
  name?: string; // compatibility
  description: Record<'zh' | 'en', string>;
  longDescription: Record<'zh' | 'en', string>;
  tags: Record<'zh' | 'en', string[]>;
  category: 'software' | 'mobile' | 'ai' | 'design';
  image: string; // Dynamic path or premium icon representation
  imageUrl?: string; // raw image from user
  demoUrl?: string; // compatibility mapping
  trialUrl?: string; // direct visit URL
  githubUrl?: string; // compatible
  keyFeatures: Record<'zh' | 'en', string[]>;
  publishDate: string; // "YYYY.MM"
  logo?: string; // Lucide icon identifier
  detailVideoUrl?: string; // demonstration video MP4
  detailImages?: string[]; // detail page images array
}

export interface Experience {
  id: string;
  role: Record<'zh' | 'en', string>;
  company: Record<'zh' | 'en', string>;
  period: string;
  description: Record<'zh' | 'en', string[]>;
  skills: string[];
}

export interface Skill {
  name: { zh: string; en: string };
  level: number; // 0-100 percentage
  category: 'Frontend' | 'Backend' | 'AI / Data' | 'Tools & Design';
  description?: { zh: string; en: string };
  color?: string; // e.g. '#3b82f6'
  relatedProjects?: string[]; // IDs
  relatedExperiences?: string[]; // IDs
}

export interface DiverseExperience {
  id: string;
  title: Record<'zh' | 'en', string>;
  period: string;
  description: Record<'zh' | 'en', string>;
}

export interface NewsItem {
  id: string;
  date: string;
  title: Record<'zh' | 'en', string>;
  description: Record<'zh' | 'en', string>;
  status: 'completed' | 'in_progress';
  link?: string;
}

export interface PortfolioData {
  name: Record<'zh' | 'en', string>;
  title: Record<'zh' | 'en', string>;
  subtitle: Record<'zh' | 'en', string>;
  bio: Record<'zh' | 'en', string>;
  aboutBullets: Record<'zh' | 'en', string[]>;
  stats: {
    label: Record<'zh' | 'en', string>;
    value: string;
  }[];
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  diverseExperiences?: DiverseExperience[];
  awards?: Award[];
  photos?: string[];
  latestNews?: NewsItem[];
}
