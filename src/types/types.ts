export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: "web" | "mobile" | "desktop";
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon: string;
}
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: number;
  publishDate: string;
  tags: string[];
  image: string;
  slug: string;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  image: string;
  category: 'work' | 'school' | 'love' | 'everyday';
  mood: 'excited' | 'peaceful' | 'thoughtful' | 'happy' | 'nostalgic';
  tags: string[];
  date: string;
  author: string;
}

export interface StoryFormData {
  password: string;
  title: string;
  content: string;
  category: 'work' | 'school' | 'love' | 'everyday';
  mood: 'excited' | 'peaceful' | 'thoughtful' | 'happy' | 'nostalgic';
  tags: string;
  image?: File;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}