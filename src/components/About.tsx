import React from "react";
import {
  Award,
  Coffee,
  Calendar,
  Heart,
  Zap,
  Target,
  Users,
  Code,
  Sparkles,
  Star,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Image from "../../public//images/img.jpg";

const About: React.FC = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);

  const stats = [
    {
      icon: Award,
      label: "Years Experience",
      value: "1+",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Coffee,
      label: "Projects Completed",
      value: "5+",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "10+",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Calendar,
      label: "Code Commits",
      value: "1K+",
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

  const achievements = [
    {
      icon: Star,
      color: "text-yellow-400",
    },
    { icon: Code, color: "text-cyan-400" },
    {
      icon: Sparkles,
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-900/50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-14">
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Enhanced Image Section */}
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div className="relative group">
              {/* Image Container with Multiple Effects */}
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                {/* Main image container */}
                <div className="relative bg-gray-900 rounded-3xl p-2 overflow-hidden">
                  <img
                    src={Image}
                    alt="Alex Chen - Frontend Developer"
                    className="w-full h-[500px] object-cover rounded-2xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-2 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating info cards on image */}
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">
                        Available for work
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-200">
                    <div className="flex items-center space-x-2">
                      <Code className="w-4 h-4 text-cyan-400" />
                      <span className="text-white text-sm font-medium">
                        Frontend Developer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating achievement badges */}
                <div className="absolute -right-4 top-1/4 space-y-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <AnimatedSection
                        key={index}
                        animation="fadeInRight"
                        delay={400 + index * 200}
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group/badge">
                          <IconComponent
                            className={`w-5 h-5 ${achievement.color} group-hover/badge:animate-pulse`}
                          />
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced Content Section */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInRight" delay={300}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 text-cyan-400 mr-3 animate-pulse" />
                  My Journey
                </h3>
                <div className="prose prose-lg text-gray-300 space-y-4">
                  <p className="text-lg leading-relaxed">
                    I'm a passionate frontend developer with over 1 years of
                    experience building scalable web applications and user
                    interfaces. My journey began with a curiosity about how
                    websites work, and it has evolved into a deep expertise in
                    modern JavaScript frameworks and cutting-edge web
                    technologies.
                  </p>

                  <p className="text-lg leading-relaxed">
                    I specialize in React, TypeScript, and Next.js, with a
                    strong focus on performance optimization, accessibility, and
                    user experience. I believe that great software is not just
                    about writing code—it's about solving real problems and
                    creating meaningful experiences for users.
                  </p>

                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects,
                    mentoring aspiring developers, or sharing my knowledge
                    through technical writing and speaking at conferences.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={500}>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-pink-400 mr-2 animate-pulse" />
                  Core Values
                </h4>
                <div className="flex flex-wrap gap-3">
                  {values.map((value, index) => (
                    <span
                      key={value}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 cursor-default hover:shadow-lg hover:shadow-cyan-500/25"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 150}
              >
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></div>

                  <div className="relative z-10">
                    <div
                      className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white group-hover:animate-pulse" />
                    </div>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${
                        stat.color
                      } bg-clip-text text-transparent mb-2 ${
                        statsVisible ? "animate-pulse" : ""
                      }`}
                    >
                      {statsVisible ? stat.value : "0"}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Enhanced Personal Touch Section */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-white/10 relative overflow-hidden hover:border-cyan-500/30 transition-all duration-500 group">
            {/* Enhanced Animated background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
                  `,
                }}
              ></div>
            </div>

            {/* Floating orbs */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="text-center relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-pink-400 mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold text-white">
                  Beyond the Code
                </h3>
                <Zap className="w-8 h-8 text-yellow-400 ml-3 animate-pulse delay-500" />
              </div>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
                I believe in always learning and keeping up with new technology.
                When I'm not coding, I enjoy photography, hiking, and finding
                ways to mix technology with creativity. I also love helping new
                developers grow and giving back to the tech community by sharing
                what I know and contributing to open-source projects
              </p>

              {/* Enhanced Learning indicators */}
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center px-4 py-3 bg-green-500/20 border border-green-500/30 rounded-full hover:bg-green-500/30 hover:scale-105 transition-all duration-300 group/indicator">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-400 font-medium">
                    Currently Learning: Node js & laravel
                  </span>
                  <Sparkles className="w-4 h-4 text-green-400 ml-2 opacity-0 group-hover/indicator:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-full hover:bg-blue-500/30 hover:scale-105 transition-all duration-300 group/indicator">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse delay-300"></div>
                  <span className="text-blue-400 font-medium">
                    Exploring: AI/ML Integration
                  </span>
                  <Code className="w-4 h-4 text-blue-400 ml-2 opacity-0 group-hover/indicator:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center px-4 py-3 bg-purple-500/20 border border-purple-500/30 rounded-full hover:bg-purple-500/30 hover:scale-105 transition-all duration-300 group/indicator">
                  <Target className="w-4 h-4 text-purple-400 mr-3" />
                  <span className="text-purple-400 font-medium">
                    Goal: Contributing to Web Standards
                  </span>
                  <Star className="w-4 h-4 text-purple-400 ml-2 opacity-0 group-hover/indicator:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fadeInUp" delay={800}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer group">
              <span className="mr-3">Want to work together?</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
