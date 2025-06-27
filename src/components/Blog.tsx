import React from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Eye,
} from "lucide-react";
import { blogPosts } from "../data/portfolio";
import AnimatedSection from "./AnimatedSection";

const Blog: React.FC = () => {
  return (
    <section
      id="blog"
      className="py-20 bg-gray-900/50 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development and
              technology
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <AnimatedSection
              key={post.id}
              animation="fadeInUp"
              delay={index * 150}
            >
              <article className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-700 hover:-translate-y-3 hover:scale-105 relative">
                {/* Enhanced Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-all duration-500"></div>

                  {/* Enhanced Reading Time Badge */}
                  <div className="absolute top-4 right-4 flex items-center px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm border border-white/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                    <Clock
                      size={14}
                      className="mr-1 group-hover:animate-spin"
                    />
                    {post.readTime} min
                  </div>

                  {/* View count */}
                  <div className="absolute top-4 left-4 flex items-center px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                    <Eye size={14} className="mr-1" />
                    {Math.floor(Math.random() * 5000) + 1000}
                  </div>

                  {/* Trending indicator */}
                  {index === 0 && (
                    <div className="absolute bottom-4 left-4 flex items-center px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-sm font-medium animate-pulse">
                      <TrendingUp size={14} className="mr-1 animate-bounce" />
                      Trending
                    </div>
                  )}
                </div>

                {/* Enhanced Content */}
                <div className="p-6 relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Enhanced Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${tagIndex * 100}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Enhanced Excerpt */}
                    <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                      {post.excerpt}
                    </p>

                    {/* Enhanced Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.publishDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>

                      <button className="group/btn flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                        Read More
                        <ArrowRight
                          size={14}
                          className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced Blog Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              value: "50+",
              label: "Articles Published",
              color: "from-cyan-500 to-blue-500",
            },
            {
              value: "100K+",
              label: "Total Views",
              color: "from-purple-500 to-pink-500",
            },
            {
              value: "5K+",
              label: "Monthly Readers",
              color: "from-green-500 to-emerald-500",
            },
          ].map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index * 150}
            >
              <div
                className={`bg-gradient-to-r ${stat.color} bg-opacity-10 rounded-2xl p-6 border border-white/10 text-center hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:scale-105 group`}
              >
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:animate-pulse`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced View All Articles */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-1 hover:scale-105"
            >
              <BookOpen className="mr-2 group-hover:animate-bounce" size={20} />
              View All Articles
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={16}
              />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;
