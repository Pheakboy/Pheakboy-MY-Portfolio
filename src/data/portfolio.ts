import { Project, Skill, BlogPost } from "../types/types";

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
  { name: "React", level: 79, category: "frontend", icon: "Zap" },
  { name: "TypeScript", level: 84, category: "frontend", icon: "Code" },
  { name: "Next.js", level: 85, category: "frontend", icon: "ArrowRight" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "Paintbrush" },
  { name: "JavaScript", level: 72, category: "frontend", icon: "Code2" },
  { name: "HTML5", level: 95, category: "frontend", icon: "FileText" },
  { name: "CSS3", level: 80, category: "frontend", icon: "Square" },
  { name: "Vue.js", level: 72, category: "frontend", icon: "Layers" },
  { name: "Node.js", level: 78, category: "backend", icon: "Server" },
  { name: "Laravel", level: 75, category: "backend", icon: "Package" },
  { name: "Express.js", level: 79, category: "backend", icon: "Terminal" },
  { name: "MongoDB", level: 78, category: "backend", icon: "Database" },
  { name: "PostgreSQL", level: 75, category: "backend", icon: "Database" },
  { name: "Supabase", level: 76, category: "backend", icon: "Database" },
  { name: "Docker", level: 77, category: "tools", icon: "Package" },
  { name: "AWS", level: 74, category: "tools", icon: "Cloud" },
  { name: "Git", level: 87, category: "tools", icon: "GitBranch" },
  { name: "Figma", level: 79, category: "design", icon: "Pen" },
  { name: "Photoshop", level: 80, category: "design", icon: "Image" },
  { name: "Canva", level: 89, category: "design", icon: "Image" },
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
