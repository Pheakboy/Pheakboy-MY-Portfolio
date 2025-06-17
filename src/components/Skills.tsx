import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import { skills } from "../data/portfolio";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills: React.FC = () => {
  const [visibleBars, setVisibleBars] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.2);

  const categories = ["all", "frontend", "backend", "tools", "design"];
  const categoryLabels = {
    all: "All Skills",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & DevOps",
    design: "Design",
  };

  useEffect(() => {
    if (!skillsVisible) return;

    const filteredSkills =
      selectedCategory === "all"
        ? skills
        : skills.filter((skill) => skill.category === selectedCategory);

    // Animate skill bars with staggered delays
    filteredSkills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBars((prev) => new Set([...prev, index]));
      }, index * 100);
    });
  }, [skillsVisible, selectedCategory]);

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getIcon = (iconName: keyof typeof LucideIcons) => {
    const IconComponent = LucideIcons[iconName] as
      | React.ComponentType<{ size?: number }>
      | undefined;
    return IconComponent ? (
      <IconComponent size={24} />
    ) : (
      <LucideIcons.Code size={24} />
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      frontend: "from-cyan-500 to-blue-500",
      backend: "from-green-500 to-emerald-500",
      tools: "from-purple-500 to-pink-500",
      design: "from-orange-500 to-red-500",
      all: "from-cyan-500 to-purple-500",
    };
    return colors[category as keyof typeof colors] || colors.all;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Technologies and tools I use to bring ideas to life
            </p>

            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <AnimatedSection
                  key={category}
                  animation="scaleIn"
                  delay={index * 100}
                >
                  <button
                    onClick={() => {
                      setSelectedCategory(category);
                      setVisibleBars(new Set());
                    }}
                    className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-500 overflow-hidden ${
                      selectedCategory === category
                        ? `bg-gradient-to-r ${getCategoryColor(
                            category
                          )} text-white shadow-lg shadow-cyan-500/25 scale-105`
                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {selectedCategory === category && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                    <span className="relative z-10">
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </span>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <AnimatedSection
              key={`${skill.name}-${selectedCategory}`}
              animation="fadeInUp"
              delay={index * 100}
            >
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                {/* Animated background based on skill level */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(
                    skill.category
                  )} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                  style={{
                    transform: `scaleX(${
                      visibleBars.has(index) ? skill.level / 100 : 0
                    })`,
                    transformOrigin: "left",
                  }}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${getCategoryColor(
                        skill.category
                      )} bg-opacity-20 rounded-xl mr-4 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12`}
                    >
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {getIcon(skill.icon as keyof typeof LucideIcons)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-gray-400 capitalize">
                        {skill.category}
                      </span>
                    </div>
                    <span
                      className={`text-lg font-bold bg-gradient-to-r ${getCategoryColor(
                        skill.category
                      )} bg-clip-text text-transparent`}
                    >
                      {visibleBars.has(index) ? skill.level : 0}%
                    </span>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                      <div
                        className={`h-full bg-gradient-to-r ${getCategoryColor(
                          skill.category
                        )} rounded-full transition-all duration-1500 ease-out relative overflow-hidden ${
                          visibleBars.has(index) ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          width: visibleBars.has(index)
                            ? `${skill.level}%`
                            : "0%",
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(
                        skill.category
                      )} rounded-full opacity-20 blur-sm transition-all duration-1500 ease-out`}
                      style={{
                        width: visibleBars.has(index)
                          ? `${skill.level}%`
                          : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced Learning Section */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
                `,
                }}
              ></div>
            </div>

            <div className="text-center relative z-10">
              <div className="flex items-center justify-center mb-6">
                <LucideIcons.BookOpen className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold text-white">
                  Always Learning
                </h3>
                <LucideIcons.TrendingUp className="w-8 h-8 text-purple-400 ml-3 animate-pulse delay-500" />
              </div>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly
                exploring new frameworks, languages, and tools to stay at the
                cutting edge. Currently diving deep into WebAssembly, AI
                integration, and advanced performance optimization techniques.
              </p>

              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center px-4 py-3 bg-green-500/20 border border-green-500/30 rounded-xl hover:bg-green-500/30 transition-all duration-300 group/item">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-400 font-medium">
                    Learning: Rust
                  </span>
                  <LucideIcons.Zap className="w-4 h-4 text-green-400 ml-2 group-hover/item:animate-bounce" />
                </div>
                <div className="flex items-center justify-center px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl hover:bg-blue-500/30 transition-all duration-300 group/item">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse delay-300"></div>
                  <span className="text-blue-400 font-medium">
                    Exploring: WebGPU
                  </span>
                  <LucideIcons.Cpu className="w-4 h-4 text-blue-400 ml-2 group-hover/item:animate-spin" />
                </div>
                <div className="flex items-center justify-center px-4 py-3 bg-purple-500/20 border border-purple-500/30 rounded-xl hover:bg-purple-500/30 transition-all duration-300 group/item">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse delay-500"></div>
                  <span className="text-purple-400 font-medium">
                    Mastering: AI/ML
                  </span>
                  <LucideIcons.Brain className="w-4 h-4 text-purple-400 ml-2 group-hover/item:animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
