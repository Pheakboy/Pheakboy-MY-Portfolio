import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Play,
  Pause,
} from "lucide-react";
import { testimonials } from "../data/portfolio";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } =
    useScrollAnimation(0.3);

  useEffect(() => {
    if (!isAutoPlay || !testimonialsVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonialsVisible]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlay(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <section
      id="testimonials"
      className="py-14 bg-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What people say about working with me
            </p>
          </div>
        </AnimatedSection>

        <div ref={testimonialsRef} className="relative max-w-5xl mx-auto">
          {/* Enhanced Main Testimonial */}
          <AnimatedSection animation="scaleIn" delay={200}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
              {/* Enhanced Background Quote */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote size={120} className="text-cyan-400 animate-pulse" />
              </div>

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                                   radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                {/* Enhanced Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={28}
                      className="text-yellow-400 fill-current animate-pulse mx-1 hover:scale-125 transition-transform duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Enhanced Content */}
                <blockquote className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-8 relative">
                  <span className="text-cyan-400 text-4xl absolute -top-4 -left-4 opacity-50">
                    "
                  </span>
                  {testimonials[currentIndex].content}
                  <span className="text-cyan-400 text-4xl absolute -bottom-8 -right-4 opacity-50">
                    "
                  </span>
                </blockquote>

                {/* Enhanced Author */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full border-2 border-cyan-400/50 mr-6 hover:border-cyan-400 transition-colors duration-300 hover:scale-110 transform"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 animate-pulse"></div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-xl mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-lg">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-cyan-400 font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced Navigation */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex items-center justify-center mt-8 space-x-6">
              <button
                onClick={prevTestimonial}
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 hover:scale-110"
              >
                <ChevronLeft size={24} className="group-hover:animate-bounce" />
              </button>

              {/* Enhanced Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`relative transition-all duration-500 ${
                      index === currentIndex
                        ? "w-12 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full scale-125"
                        : "w-4 h-4 bg-white/30 hover:bg-white/50 rounded-full hover:scale-110"
                    }`}
                  >
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 hover:scale-110"
              >
                <ChevronRight
                  size={24}
                  className="group-hover:animate-bounce"
                />
              </button>

              {/* Auto-play toggle */}
              <button
                onClick={toggleAutoPlay}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isAutoPlay
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-white/10 text-gray-400 border border-white/20"
                } hover:scale-110`}
              >
                {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>
          </AnimatedSection>

          {/* Enhanced All Testimonials Preview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.id}
                animation="fadeInUp"
                delay={index * 100}
              >
                <button
                  onClick={() => goToTestimonial(index)}
                  className={`group p-4 bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-500 text-left hover:-translate-y-2 hover:scale-105 ${
                    index === currentIndex
                      ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/25"
                      : "border-white/10 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h5 className="text-white text-sm font-semibold">
                        {testimonial.name}
                      </h5>
                      <p className="text-gray-400 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-2">
                    {testimonial.content}
                  </p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group">
              <p className="text-gray-400 text-lg mb-6">
                Ready to start your project?
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
                  Let's Work Together
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
