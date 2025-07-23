import { Project, Skill, BlogPost } from "../types/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Learn With Pheak",
    description: "A Web UI design project built with Vite and React",
    longDescription:
      "A modern web application designed to enhance learning experiences, featuring a responsive UI, interactive components, and seamless navigation. Built with Vite for fast development and optimized performance.",
    image: "/images/learn_with_pheak.png",
    technologies: ["React.js", "vite", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Pheakboy/my-vite-project",
    liveUrl: "https://learn-with-pheak.netlify.app/",
    featured: true,
    category: "web",
  },
  {
    id: "2",
    title: "Movie Tons",
    description:
      "A movie ui with react js with responsive design and modern UI components",
    longDescription:
      "A dynamic movie discovery platform that allows users to explore and search. Features include a responsive design, modern UI components, and integration with a movie database API for real-time data.",
    image: "/images/move_ton.png",
    technologies: ["React JS", "CSS", "JavaScript", "API"],
    githubUrl: "https://github.com/Pheakboy/my-react-app",
    liveUrl: "https://movies-tons.netlify.app/",
    featured: true,
    category: "web",
  },
  {
    id: "3",
    title: "TodoList App",
    description: "A task management app built with React js",
    longDescription:
      "A comprehensive meditation and mindfulness app that tracks user progress, provides personalized content recommendations, and integrates with health devices. Features real-time biometric monitoring and AI-powered mood analysis.",
    image: "/images/TodoList.png",
    technologies: [
      "React Js",
      "Vite",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Pheakboy/TodoList_TypeScript",
    liveUrl: "https://todo-list-type-script-eight.vercel.app/",
    featured: true,
    category: "web",
  },
  {
    id: "4",
    title: "Burger app UI",
    description: "A burger app UI built with React js and TypeScript",
    longDescription:
      "A sophisticated burger app UI featuring a modern design, interactive components, and seamless user experience. Built with performance and scalability in mind.",
    image: "/images/burgerui.png",
    technologies: ["React js", "TypeScript", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Pheakboy/UI",
    liveUrl: "https://burgerui.vercel.app/",
    featured: false,
    category: "web",
  },
  {
    id: "5",
    title: "E-commerce Ui website",
    description: "An e-commerce UI website built with React js and TypeScript",
    longDescription:
      "A feature-rich e-commerce UI website that provides a seamless shopping experience with modern design elements, responsive layouts, and interactive components. Built with React and TypeScript for enhanced performance.",
    image: "/images/ecommerweb.png",
    technologies: ["React js", "TypeScript", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Pheakboy/TypeScript_learn",
    liveUrl: "https://type-script-learn-chi.vercel.app/",
    featured: false,
    category: "web",
  },
  {
    id: "6",
    title: "Crud App UI with api",
    description: "A CRUD application UI built with React js and TypeScript",
    longDescription:
      "A robust CRUD application UI that allows users to create, read, update, and delete data with a modern design and responsive layout. Built with React and TypeScript for enhanced type safety and performance.",
    image: "/images/react_crud.png",
    technologies: ["React js", "TypeScript", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Pheakboy/React_With_API",
    liveUrl: "",
    featured: false,
    category: "web",
  },
];

export const skills: Skill[] = [
  { name: "React", level: 75, category: "frontend", icon: "Zap" },
  { name: "TypeScript", level: 77, category: "frontend", icon: "Code" },
  { name: "Next.js", level: 79, category: "frontend", icon: "ArrowRight" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "Paintbrush" },
  { name: "JavaScript", level: 72, category: "frontend", icon: "Code2" },
  { name: "HTML", level: 95, category: "frontend", icon: "FileText" },
  { name: "CSS", level: 90, category: "frontend", icon: "Square" },
  { name: "Node.js", level: 50, category: "backend", icon: "Server" },
  { name: "Laravel", level: 50, category: "backend", icon: "Package" },
  { name: "Express.js", level: 55, category: "backend", icon: "Terminal" },
  { name: "MongoDB", level: 55, category: "backend", icon: "Database" },
  { name: "Supabase", level: 50, category: "backend", icon: "Database" },
  { name: "Git", level: 85, category: "tools", icon: "GitBranch" },
  { name: "Postman", level: 80, category: "tools", icon: "Package" },
  { name: "Figma", level: 65, category: "design", icon: "Pen" },
  { name: "Photoshop", level: 50, category: "design", icon: "Image" },
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
