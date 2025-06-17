import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Zap,
  ArrowRight,
} from "lucide-react";
import { ContactForm } from "../types/types";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const { ref: contactRef } = useScrollAnimation(0.2);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@alexchen.dev",
      href: "mailto:alex@alexchen.dev",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>
        </AnimatedSection>

        <div
          ref={contactRef}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div>
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white">
                    Get in Touch
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate
                  with talented people. Whether you have a project in mind, need
                  consultation, or just want to say hello, I'd love to hear from
                  you.
                </p>
              </div>
            </AnimatedSection>

            {/* Enhanced Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="fadeInLeft"
                    delay={300 + index * 150}
                  >
                    <a
                      href={info.href}
                      className="group flex items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10 flex items-center w-full">
                        <div
                          className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${info.color} bg-opacity-20 rounded-xl mr-4 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12`}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm mb-1">
                            {info.label}
                          </div>
                          <div className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">
                            {info.value}
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="w-5 h-5 text-cyan-400" />
                        </div>
                      </div>
                    </a>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Enhanced Availability */}
            <AnimatedSection animation="fadeInLeft" delay={600}>
              <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 group relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-green-400 font-semibold flex items-center">
                      Currently Available
                      <Zap className="w-4 h-4 ml-2 animate-bounce" />
                    </span>
                  </div>
                  <p className="text-gray-300">
                    I'm open to new opportunities and interesting projects.
                    Typical response time:{" "}
                    <span className="text-cyan-400 font-medium">24 hours</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Enhanced Contact Form */}
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden group">
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

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm font-medium mb-2 group-focus-within/input:text-cyan-400 transition-colors duration-300"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="group/input">
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm font-medium mb-2 group-focus-within/input:text-cyan-400 transition-colors duration-300"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 text-sm font-medium mb-2 group-focus-within/input:text-cyan-400 transition-colors duration-300"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group/input">
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-medium mb-2 group-focus-within/input:text-cyan-400 transition-colors duration-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none hover:bg-white/15 hover:border-white/30"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group/btn w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-500 relative overflow-hidden ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
                  } text-white`}
                >
                  {/* Button background animation */}
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  )}

                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send
                          className="mr-2 group-hover/btn:animate-bounce"
                          size={18}
                        />
                        Send Message
                        <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </>
                    )}
                  </span>
                </button>

                {/* Enhanced Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 animate-fadeIn">
                    <CheckCircle className="mr-3 animate-bounce" size={20} />
                    <span>
                      Message sent successfully! I'll get back to you soon. 🚀
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 animate-fadeIn">
                    <AlertCircle className="mr-3 animate-pulse" size={20} />
                    <span>Something went wrong. Please try again. 😔</span>
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
