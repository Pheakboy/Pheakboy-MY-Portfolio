import React, { useEffect, useState } from "react";
import { ChevronDown, Code, Sparkles, Zap, Star, Rocket } from "lucide-react";
import { useMousePosition } from "../hooks/useScrollAnimation";
import AnimatedSection from "./AnimatedSection";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const mousePosition = useMousePosition();

  const words = React.useMemo(
    () => [
      "Frontend Developer",
      "React/Next Specialist",
      "UI/UX Enthusiast",
      "Performance Optimizer",
      "Tech Innovator",
    ],
    []
  );

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Mouse-following gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Enhanced Floating Icons */}
        <AnimatedSection animation="fadeInLeft" delay={200}>
          <div className="absolute -top-20 -left-20 opacity-20">
            <Code size={60} className="text-cyan-400 animate-float" />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInRight" delay={400}>
          <div className="absolute -top-10 -right-16 opacity-20">
            <Sparkles
              size={50}
              className="text-purple-400 animate-float delay-500"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" delay={600}>
          <div className="absolute -bottom-16 left-10 opacity-20">
            <Zap
              size={55}
              className="text-yellow-400 animate-float delay-1000"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={800}>
          <div className="absolute top-20 right-20 opacity-20">
            <Star size={45} className="text-pink-400 animate-float delay-700" />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInLeft" delay={1000}>
          <div className="absolute bottom-32 right-32 opacity-20">
            <Rocket
              size={50}
              className="text-green-400 animate-float delay-300"
            />
          </div>
        </AnimatedSection>

        {/* Enhanced Main Content */}
        <div className="mb-8">
          <AnimatedSection animation="slideInUp" delay={200}>
            <div className="mt-10">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 animate-pulse">
                ✨ Available for new opportunities
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2 animate-gradient bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text">
                Hi, I'm
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                SOPHEAKTRA DEV
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="text-xl md:text-2xl lg:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
              <span className="mr-2">A</span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold min-w-[300px] text-left">
                {text}
              </span>
              <span className="animate-blink ml-1 text-cyan-400">|</span>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeInUp" delay={800}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            I craft exceptional digital experiences with cutting-edge
            technologies, transforming complex ideas into intuitive, performant,
            and scalable applications that delight users and drive business
            success. Let's build the future together.
          </p>
        </AnimatedSection>

        {/* Enhanced CTA Buttons */}
        <AnimatedSection animation="scaleIn" delay={1000}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold transition-all duration-500 hover:from-cyan-400 hover:to-blue-500 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center">
                View My Work
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-10 py-5 border-2 border-gray-600 text-white rounded-full font-semibold transition-all duration-500 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/50 hover:-translate-y-2 hover:scale-105 backdrop-blur-sm bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
        </AnimatedSection>

        {/* Enhanced Scroll Indicator */}
        <AnimatedSection animation="fadeInUp" delay={1200}>
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">
              Scroll to explore
            </span>
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-cyan-400/10"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Enhanced Glassmorphism Card */}
      <AnimatedSection animation="fadeInRight" delay={1400}>
        <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 hidden lg:block hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-300 text-sm">Currently Available</span>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-green-400 text-sm font-medium">Online</span>
            </div>
          </div>
          <p className="text-white text-sm mb-3">
            Open for new opportunities and exciting projects. Let's build
            something amazing together!
          </p>
          <div className="flex items-center text-xs text-gray-400">
            <span>Response time: </span>
            <span className="text-cyan-400 ml-1 font-medium">~2 hours</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
    </section>
  );
};

export default Hero;
