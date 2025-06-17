import React from "react";
import {
  Award,
  Coffee,
  Calendar,
  Heart,
  Zap,
  Target,
  Users,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About: React.FC = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);

  const stats = [
    {
      icon: Award,
      label: "Years Experience",
      value: "6+",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Coffee,
      label: "Projects Completed",
      value: "150+",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "50+",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Calendar,
      label: "Code Commits",
      value: "10K+",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const values = [
    "Innovation",
    "Quality",
    "Performance",
    "Accessibility",
    "User Experience",
    "Scalability",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate frontend developer with over 6 years of
                  experience building scalable web applications and user
                  interfaces. My journey began with a curiosity about how
                  websites work, and it has evolved into a deep expertise in
                  modern JavaScript frameworks and cutting-edge web
                  technologies.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  I specialize in React, TypeScript, and Next.js, with a strong
                  focus on performance optimization, accessibility, and user
                  experience. I believe that great software is not just about
                  writing code—it's about solving real problems and creating
                  meaningful experiences for users.
                </p>

                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, mentoring
                  aspiring developers, or sharing my knowledge through technical
                  writing and speaking at conferences.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={400}>
              <div className="flex flex-wrap gap-3 mt-8">
                {values.map((value, index) => (
                  <span
                    key={value}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Enhanced Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="scaleIn"
                  delay={index * 150}
                >
                  <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                    {/* Animated background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${
                          stat.color
                        } bg-clip-text text-transparent mb-1 ${
                          statsVisible ? "animate-pulse" : ""
                        }`}
                      >
                        {statsVisible ? stat.value : "0"}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Enhanced Personal Touch */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-white/10 relative overflow-hidden hover:border-cyan-500/30 transition-all duration-500 group">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
                }}
              ></div>
            </div>

            <div className="text-center relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-pink-400 mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold text-white">
                  Beyond the Code
                </h3>
                <Zap className="w-8 h-8 text-yellow-400 ml-3 animate-pulse delay-500" />
              </div>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                I'm a firm believer in continuous learning and staying at the
                forefront of technology. Outside of development, I enjoy
                photography, hiking, and exploring the intersection of
                technology and creativity. I'm also passionate about mentoring
                the next generation of developers and giving back to the tech
                community through open-source contributions and knowledge
                sharing.
              </p>

              {/* Learning indicators */}
              <div className="flex flex-wrap justify-center items-center mt-8 gap-6 text-sm">
                <div className="flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400">
                    Currently Learning: Rust & WebAssembly
                  </span>
                </div>
                <div className="flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse delay-300"></div>
                  <span className="text-blue-400">
                    Exploring: AI/ML Integration
                  </span>
                </div>
                <div className="flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                  <Target className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-purple-400">
                    Goal: Contributing to Web Standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
