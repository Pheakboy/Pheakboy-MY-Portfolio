import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-cyan-400",
    },
    {
      icon: Mail,
      href: "mailto:alex@alexchen.dev",
      label: "Email",
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "Resume", href: "/resume.pdf" },
    { name: "Portfolio Guide", href: "/guide" },
    { name: "Design System", href: "/design-system" },
    { name: "Code Snippets", href: "/snippets" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Brand */}
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="lg:col-span-1">
              <div className="mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Alex Chen
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Frontend Developer passionate about creating exceptional digital
                experiences with modern technologies and thoughtful design.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 bg-white/10 rounded-lg text-gray-400 ${social.color} hover:bg-white/20 hover:border-cyan-500/30 transition-all duration-300 border border-white/10 hover:scale-110 hover:-translate-y-1`}
                      aria-label={social.label}
                    >
                      <IconComponent
                        size={18}
                        className="group-hover:animate-bounce"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Enhanced Quick Links */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                Quick Links
                <ArrowUp className="w-4 h-4 ml-2 text-cyan-400 animate-bounce" />
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="group text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-left flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Enhanced Resources */}
          <AnimatedSection animation="fadeInUp" delay={300}>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="group text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {resource.name}
                      </span>
                      <ExternalLink
                        size={12}
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Enhanced Newsletter */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div>
              <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get notified about new projects and articles
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all duration-300 hover:bg-white/15"
                />
                <button className="group px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 text-sm hover:scale-105">
                  <span className="flex items-center justify-center">
                    Subscribe
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Enhanced Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <AnimatedSection animation="fadeInLeft">
              <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
                <span>by Sopheaktra dev</span>
                <span className="mx-2">•</span>
                <button
                  onClick={scrollToTop}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                >
                  Back to top
                  <ArrowUp className="w-4 h-4 ml-1 group-hover:animate-bounce" />
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <span>&copy; 2024 Sopheaktra dev. All rights reserved.</span>
                <a
                  href="/privacy"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
