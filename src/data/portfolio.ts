import { Project, Skill, Testimonial, BlogPost } from "../types/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Neural Commerce Platform",
    description:
      "AI-powered e-commerce platform with predictive analytics and personalized recommendations",
    longDescription:
      "A revolutionary e-commerce platform that leverages machine learning to provide personalized shopping experiences. Built with Next.js, TypeScript, and integrated with multiple AI services for inventory management, customer behavior analysis, and dynamic pricing optimization.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Next.js",
      "TypeScript",
      "TensorFlow.js",
      "GraphQL",
      "PostgreSQL",
      "Redis",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://neural-commerce.demo",
    featured: true,
    category: "web",
  },
  {
    id: "2",
    title: "Quantum Design System",
    description:
      "Enterprise-grade design system with 200+ components and comprehensive documentation",
    longDescription:
      "A complete design system built for scale, featuring atomic design principles, accessibility-first components, and comprehensive documentation. Includes React components, design tokens, and Figma integration for seamless designer-developer collaboration.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "Storybook",
      "Styled Components",
      "Figma API",
      "TypeScript",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://quantum-design.demo",
    featured: true,
    category: "web",
  },
  {
    id: "3",
    title: "Mindful Meditation App",
    description:
      "React Native app with biometric tracking and personalized meditation programs",
    longDescription:
      "A comprehensive meditation and mindfulness app that tracks user progress, provides personalized content recommendations, and integrates with health devices. Features real-time biometric monitoring and AI-powered mood analysis.",
    image:
      "https://images.pexels.com/photos/3820320/pexels-photo-3820320.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "HealthKit",
      "Machine Learning",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://apps.apple.com/mindful",
    featured: true,
    category: "mobile",
  },
  {
    id: "4",
    title: "CodeFlow IDE Extension",
    description:
      "VS Code extension with AI-powered code completion and refactoring suggestions",
    longDescription:
      "An intelligent IDE extension that enhances developer productivity through AI-powered code analysis, automated refactoring suggestions, and intelligent code completion. Supports multiple programming languages with contextual awareness.",
    image:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "TypeScript",
      "VS Code API",
      "OpenAI API",
      "Node.js",
      "Webpack",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://marketplace.visualstudio.com",
    featured: false,
    category: "desktop",
  },
  {
    id: "5",
    title: "Crypto Portfolio Tracker",
    description:
      "Real-time cryptocurrency portfolio management with advanced analytics",
    longDescription:
      "A sophisticated cryptocurrency portfolio management application featuring real-time price tracking, advanced analytics, automated trading strategies, and comprehensive reporting. Built with performance and security as top priorities.",
    image:
      "https://images.pexels.com/photos/6771027/pexels-photo-6771027.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "React",
      "D3.js",
      "WebSocket",
      "Node.js",
      "MongoDB",
      "Docker",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://crypto-tracker.demo",
    featured: false,
    category: "web",
  },
  {
    id: "6",
    title: "Smart Home Dashboard",
    description:
      "IoT device management with predictive automation and energy optimization",
    longDescription:
      "An intelligent home automation dashboard that connects and manages IoT devices, provides predictive automation based on usage patterns, and optimizes energy consumption. Features voice control integration and mobile app companion.",
    image:
      "https://images.pexels.com/photos/4966996/pexels-photo-4966996.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Vue.js",
      "IoT.js",
      "MQTT",
      "InfluxDB",
      "Grafana",
      "Raspberry Pi",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://smart-home.demo",
    featured: false,
    category: "web",
  },
];

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend", icon: "Zap" },
  { name: "TypeScript", level: 92, category: "frontend", icon: "Code" },
  { name: "Next.js", level: 90, category: "frontend", icon: "ArrowRight" },
  { name: "Vue.js", level: 85, category: "frontend", icon: "Layers" },
  { name: "Svelte", level: 78, category: "frontend", icon: "Sparkles" },
  { name: "Node.js", level: 88, category: "backend", icon: "Server" },
  { name: "Python", level: 82, category: "backend", icon: "Terminal" },
  { name: "PostgreSQL", level: 85, category: "backend", icon: "Database" },
  { name: "GraphQL", level: 87, category: "backend", icon: "Share2" },
  { name: "Docker", level: 83, category: "tools", icon: "Package" },
  { name: "AWS", level: 80, category: "tools", icon: "Cloud" },
  { name: "Git", level: 93, category: "tools", icon: "GitBranch" },
  { name: "Figma", level: 88, category: "design", icon: "Pen" },
  { name: "Adobe XD", level: 85, category: "design", icon: "Palette" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "TechFlow Inc.",
    content:
      "Working with Alex was an absolute game-changer for our product. Their attention to detail and innovative approach to frontend development helped us increase user engagement by 150%. The code quality and performance optimizations were exceptional.",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Alex delivered a complex e-commerce platform ahead of schedule and under budget. Their expertise in React and TypeScript, combined with their problem-solving skills, made them an invaluable team member. I would hire them again without hesitation.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Design Lead",
    company: "Creative Studios",
    content:
      "The collaboration between Alex and our design team was seamless. They transformed our complex designs into pixel-perfect, interactive experiences. Their understanding of both design principles and technical implementation is remarkable.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Founder",
    company: "InnovateLab",
    content:
      "Alex helped us scale our application from 1,000 to 100,000+ users without breaking a sweat. Their expertise in performance optimization and scalable architecture saved us months of development time and thousands in infrastructure costs.",
    avatar:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: AI-Powered Code Generation",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we write code and build applications. From GitHub Copilot to GPT-powered development workflows.",
    readTime: 8,
    publishDate: "2024-01-15",
    tags: ["AI", "Development", "Future Tech"],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "future-of-web-development-ai",
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Lessons from the Trenches",
    excerpt:
      "After building 50+ React applications, here are the patterns, tools, and techniques that consistently deliver maintainable and performant results.",
    readTime: 12,
    publishDate: "2024-01-08",
    tags: ["React", "Architecture", "Best Practices"],
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "scalable-react-applications",
  },
  {
    id: "3",
    title: "The Psychology of User Interface Design",
    excerpt:
      "Understanding human behavior and cognitive patterns to create interfaces that feel intuitive and delightful. A deep dive into UX psychology principles.",
    readTime: 10,
    publishDate: "2024-01-01",
    tags: ["UX", "Psychology", "Design"],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "psychology-of-ui-design",
  },
];
