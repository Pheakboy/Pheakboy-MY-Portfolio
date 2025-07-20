import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  Star,
  Calendar,
} from "lucide-react";
import { projects } from "../data/portfolio";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { ref: projectsRef } = useScrollAnimation(0.1);

  const categories = ["all", "web", "mobile"];
  const categoryLabels = {
    all: "All Projects",
    web: "Web Apps",
    mobile: "Mobile Apps",
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const ProjectCard: React.FC<{
    project: (typeof projects)[0];
    index: number;
  }> = ({ project, index }) => (
    <AnimatedSection animation="fadeInUp" delay={index * 150}>
      <div
         onClick={() => setSelectedProject(project.id)}
        className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-700 hover:-translate-y-3 hover:scale-105 ${
          project.featured ? "md:col-span-2 lg:col-span-2" : ""
        }`}
      >
        {/* Enhanced Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />

          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

          {/* Animated Overlay Pattern */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 70%)`,
            }}
          ></div>

          {/* Enhanced Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <a
                href={project.githubUrl}
                className="group/btn p-4 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/40"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="group-hover/btn:animate-spin" />
              </a>
              <a
                href={project.liveUrl}
                className="group/btn p-4 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/40"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  size={20}
                  className="group-hover/btn:animate-bounce"
                />
              </a>
              <button
                onClick={() => setSelectedProject(project.id)}
                className="group/btn p-4 bg-cyan-500/30 backdrop-blur-sm rounded-full text-cyan-400 hover:bg-cyan-500/50 hover:scale-110 transition-all duration-300 border border-cyan-500/40 hover:border-cyan-400"
              >
                <Eye size={20} className="group-hover/btn:animate-pulse" />
              </button>
            </div>
          </div>

          {/* Enhanced Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-sm font-medium animate-pulse">
              <Star size={14} className="mr-1 animate-spin" />
              Featured
            </div>
          )}

          {/* Project Stats */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs flex items-center">
              <Calendar size={12} className="mr-1" />
              2024
            </div>
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="p-6 relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
              {project.description}
            </p>

            {/* Enhanced Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${techIndex * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs text-cyan-400 border border-cyan-500/30 animate-pulse">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            {/* Project metrics */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-white/10">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Active
              </span>
              {/* <span>Last updated: 2 days ago</span> */}
                <span>See more</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900/50 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              A showcase of my recent work and side projects
            </p>

            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Filter className="text-gray-400 mr-2" size={20} />
              {categories.map((category, index) => (
                <AnimatedSection
                  key={category}
                  animation="scaleIn"
                  delay={index * 100}
                >
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-500 overflow-hidden ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
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

        {/* Enhanced Projects Grid */}
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group">
              <p className="text-gray-400 text-lg mb-6">
                Want to see more of my work?
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-500 hover:from-cyan-400 hover:to-purple-500 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-2 hover:scale-105 group/btn"
              >
                <Github
                  className="mr-2 group-hover/btn:animate-spin"
                  size={20}
                />
                View More on GitHub
                <ExternalLink
                  className="ml-2 group-hover/btn:animate-bounce"
                  size={16}
                />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <AnimatedSection animation="scaleIn">
            <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        className="flex items-center px-6 py-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2" size={18} />
                        View Code
                      </a>
                      <a
                        href={project.liveUrl}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white hover:from-cyan-400 hover:to-purple-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2" size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </AnimatedSection>
        </div>
      )}
    </section>
  );
};

export default Projects;
