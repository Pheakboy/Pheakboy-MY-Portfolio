import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Award,
  Code,
  Rocket,
  Star,
  Zap,
  Trophy,
  BookOpen,
  Users,
  Target,
  Sparkles,
  ChevronRight,
  Play,
  Pause,
  Clock,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface JourneyItem {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: "work" | "education" | "milestone" | "project";
  icon: React.ElementType;
  color: string;
  image?: string;
}

const Journey: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: journeyRef, isVisible: journeyVisible } =
    useScrollAnimation(0.2);

  const journeyData: JourneyItem[] = [
    {
      id: "1",
      year: "2018",
      title: "Started My Coding Journey",
      company: "Self-Taught",
      location: "San Francisco, CA",
      description:
        "Discovered my passion for programming through online courses and tutorials. Built my first website using HTML, CSS, and JavaScript.",
      achievements: [
        "Completed 100+ coding challenges",
        "Built 5 personal projects",
        "Learned fundamentals of web development",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      type: "education",
      icon: BookOpen,
      color: "from-green-400 to-emerald-500",
    },
    {
      id: "2",
      year: "2019",
      title: "Junior Frontend Developer",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      description:
        "First professional role where I learned React and modern development practices. Worked on user-facing features for a SaaS platform.",
      achievements: [
        "Improved page load speed by 40%",
        "Implemented responsive design system",
        "Mentored 2 intern developers",
      ],
      technologies: ["React", "TypeScript", "Sass", "Webpack"],
      type: "work",
      icon: Code,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: "3",
      year: "2020",
      title: "Frontend Developer",
      company: "InnovateLab",
      location: "Remote",
      description:
        "Promoted to mid-level developer. Led frontend architecture decisions and implemented complex UI components for enterprise clients.",
      achievements: [
        "Led team of 4 developers",
        "Reduced bundle size by 60%",
        "Implemented automated testing pipeline",
      ],
      technologies: ["React", "Next.js", "GraphQL", "Jest"],
      type: "work",
      icon: Rocket,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "4",
      year: "2021",
      title: "Open Source Contributor",
      company: "Various Projects",
      location: "Global",
      description:
        "Started contributing to major open source projects. Created my own library that gained 10k+ GitHub stars.",
      achievements: [
        "Created popular React library",
        "Contributed to 15+ open source projects",
        "Spoke at 3 tech conferences",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Docker"],
      type: "milestone",
      icon: Star,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "5",
      year: "2022",
      title: "Senior Frontend Developer",
      company: "TechFlow Inc.",
      location: "San Francisco, CA",
      description:
        "Senior role focusing on performance optimization and team leadership. Built scalable applications serving millions of users.",
      achievements: [
        "Architected micro-frontend system",
        "Improved Core Web Vitals by 80%",
        "Led technical interviews",
      ],
      technologies: ["React", "Next.js", "TypeScript", "AWS"],
      type: "work",
      icon: Trophy,
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "6",
      year: "2023",
      title: "Tech Lead & Mentor",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      description:
        "Leading a team of 8 developers while mentoring junior developers. Focus on AI integration and modern web technologies.",
      achievements: [
        "Built AI-powered development tools",
        "Mentored 20+ developers",
        "Increased team productivity by 150%",
      ],
      technologies: ["React", "AI/ML", "WebAssembly", "Rust"],
      type: "work",
      icon: Users,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "7",
      year: "2024",
      title: "Freelance & Innovation",
      company: "Independent",
      location: "San Francisco, CA",
      description:
        "Currently working on cutting-edge projects, exploring AI integration, and building the future of web development.",
      achievements: [
        "Launched 3 successful products",
        "Generated $500k+ in revenue",
        "Building next-gen development tools",
      ],
      technologies: ["React", "AI/ML", "WebGPU", "Quantum Computing"],
      type: "milestone",
      icon: Sparkles,
      color: "from-cyan-400 to-purple-500",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay || !journeyVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % journeyData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, journeyVisible, journeyData.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Code className="w-4 h-4" />;
      case "education":
        return <BookOpen className="w-4 h-4" />;
      case "milestone":
        return <Star className="w-4 h-4" />;
      case "project":
        return <Rocket className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "education":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "milestone":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "project":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                My Journey Through{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Time & Tech
                </span>
              </h2>
              <Zap className="w-8 h-8 text-yellow-400 ml-3 animate-pulse delay-500" />
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              From curious beginner to tech leader - a timeline of growth,
              learning, and innovation
            </p>

            {/* Auto-play controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                  isAutoPlay
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-white/10 text-gray-400 border border-white/20"
                } hover:scale-105`}
              >
                {isAutoPlay ? (
                  <Pause size={16} className="mr-2" />
                ) : (
                  <Play size={16} className="mr-2" />
                )}
                {isAutoPlay ? "Pause" : "Play"} Timeline
              </button>
              <span className="text-gray-500 text-sm">
                {currentIndex + 1} of {journeyData.length}
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div ref={journeyRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>

          {/* Animated progress line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
            style={{
              height: journeyVisible
                ? `${((currentIndex + 1) / journeyData.length) * 100}%`
                : "0%",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
            }}
          ></div>

          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;
              const isActive = index === currentIndex;

              return (
                <AnimatedSection
                  key={item.id}
                  animation="fadeInUp"
                  delay={index * 150}
                >
                  <div
                    className={`relative flex items-center ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
                      <div
                        className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-700 cursor-pointer relative overflow-hidden ${
                          isActive
                            ? "border-cyan-500/50 bg-cyan-500/10 shadow-2xl shadow-cyan-500/25 scale-105"
                            : "border-white/10 hover:border-cyan-500/30 hover:bg-white/10 hover:-translate-y-2 hover:scale-105"
                        }`}
                        onClick={() =>
                          setSelectedItem(
                            selectedItem === item.id ? null : item.id
                          )
                        }
                      >
                        {/* Animated background */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        ></div>

                        {/* Glow effect for active item */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
                        )}

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center mb-2">
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                                    item.type
                                  )} mr-3`}
                                >
                                  {getTypeIcon(item.type)}
                                  <span className="ml-1 capitalize">
                                    {item.type}
                                  </span>
                                </span>
                                <span className="text-cyan-400 font-bold text-lg">
                                  {item.year}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                                {item.title}
                              </h3>
                              <div className="flex items-center text-gray-400 text-sm mb-2">
                                <span className="font-medium text-purple-400">
                                  {item.company}
                                </span>
                                <span className="mx-2">•</span>
                                <MapPin size={14} className="mr-1" />
                                {item.location}
                              </div>
                            </div>
                            <ChevronRight
                              size={20}
                              className={`text-gray-400 transition-transform duration-300 ${
                                selectedItem === item.id
                                  ? "rotate-90"
                                  : "group-hover:translate-x-1"
                              }`}
                            />
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.technologies
                              .slice(0, 4)
                              .map((tech, techIndex) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                                  style={{
                                    animationDelay: `${techIndex * 100}ms`,
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            {item.technologies.length > 4 && (
                              <span className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs text-cyan-400 border border-cyan-500/30">
                                +{item.technologies.length - 4}
                              </span>
                            )}
                          </div>

                          {/* Expanded Content */}
                          {selectedItem === item.id && (
                            <div className="mt-4 pt-4 border-t border-white/10 animate-fadeIn">
                              <h4 className="text-white font-semibold mb-3 flex items-center">
                                <Award className="w-4 h-4 text-yellow-400 mr-2" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {item.achievements.map(
                                  (achievement, achIndex) => (
                                    <li
                                      key={achIndex}
                                      className="flex items-start text-gray-300 text-sm"
                                    >
                                      <Target className="w-3 h-3 text-green-400 mr-2 mt-1 flex-shrink-0" />
                                      {achievement}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div
                        className={`relative transition-all duration-500 ${
                          isActive ? "scale-125" : "hover:scale-110"
                        }`}
                      >
                        {/* Outer glow ring */}
                        <div
                          className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-full opacity-20 animate-pulse`}
                        ></div>

                        {/* Main node */}
                        <div
                          className={`relative w-12 h-12 bg-gradient-to-r ${
                            item.color
                          } rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg transition-all duration-300 ${
                            isActive ? "shadow-cyan-500/50" : "hover:shadow-lg"
                          }`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute inset-0 w-12 h-12 border-2 border-cyan-400 rounded-full animate-ping"></div>
                        )}
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div
                      className={`w-5/12 ${
                        isLeft ? "pl-36 text-left" : "pr-36 text-right"
                      }`}
                    >
                      <div
                        className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} bg-opacity-20 rounded-full border border-white/20 backdrop-blur-sm`}
                      >
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-white mr-2" />
                          <span className="text-white font-bold">
                            {item.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Stats Summary */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {[
              {
                label: "Years of Experience",
                value: "6+",
                icon: Calendar,
                color: "from-cyan-400 to-blue-500",
              },
              {
                label: "Technologies Mastered",
                value: "25+",
                icon: Code,
                color: "from-purple-400 to-pink-500",
              },
              {
                label: "Projects Delivered",
                value: "150+",
                icon: Rocket,
                color: "from-green-400 to-emerald-500",
              },
              {
                label: "Developers Mentored",
                value: "20+",
                icon: Users,
                color: "from-yellow-400 to-orange-500",
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 text-center"
                >
                  <div
                    className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fadeInUp" delay={800}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group">
              <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-spin" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for the Next Chapter?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                My journey continues to evolve with new technologies,
                challenges, and opportunities. Let's build something amazing
                together!
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group/btn px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-500 hover:from-cyan-400 hover:to-purple-500 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-2 hover:scale-105"
              >
                <span className="flex items-center">
                  Let's Connect
                  <ChevronRight
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Journey;
