import React, { useState } from "react";
import {
  Upload,
  X,
  Calendar,
  User,
  Heart,
  MessageCircle,
  Share2,
  Search,
  Plus,
  Lock,
  Eye,
  ChevronRight,
  Sparkles,
  Coffee,
  BookOpen,
  Briefcase,
  Clock,
  Tag,
} from "lucide-react";
import { Story, StoryFormData } from "../types/types";
import { stories as initialStories } from "../data/stories";
import AnimatedSection from "./AnimatedSection";

const StoryPortal: React.FC = () => {
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState<StoryFormData>({
    password: "",
    title: "",
    content: "",
    category: "work",
    mood: "excited",
    tags: "",
    image: undefined,
  });

  const categories = [
    {
      id: "all",
      label: "All Stories",
      icon: Sparkles,
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "work",
      label: "Work Life",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "school",
      label: "Learning",
      icon: BookOpen,
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "love",
      label: "Personal",
      icon: Heart,
      color: "from-rose-500 to-pink-600",
    },
    {
      id: "everyday",
      label: "Daily Life",
      icon: Coffee,
      color: "from-amber-500 to-orange-600",
    },
  ];

  const moods = [
    {
      id: "excited",
      label: "Excited",
      emoji: "⚡",
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    },
    {
      id: "peaceful",
      label: "Peaceful",
      emoji: "🌸",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      id: "thoughtful",
      label: "Thoughtful",
      emoji: "💭",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
    {
      id: "happy",
      label: "Happy",
      emoji: "✨",
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    },
    {
      id: "nostalgic",
      label: "Nostalgic",
      emoji: "🌅",
      color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    },
  ];

  const filteredStories = stories.filter((story) => {
    const matchesCategory =
      selectedCategory === "all" || story.category === selectedCategory;
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple password check (in real app, this would be server-side)
    if (formData.password !== "Pheakboyloy@0079696") {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);

    // Simulate upload
    setTimeout(() => {
      const newStory: Story = {
        id: Date.now().toString(),
        title: formData.title,
        content: formData.content,
        image: formData.image
          ? URL.createObjectURL(formData.image)
          : "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: formData.category,
        mood: formData.mood,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        date: new Date().toISOString().split("T")[0],
        author: "Alex Chen",
      };

      setStories((prev) => [newStory, ...prev]);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setShowUploadModal(false);

      // Reset form
      setFormData({
        password: "",
        title: "",
        content: "",
        category: "work",
        mood: "excited",
        tags: "",
        image: undefined,
      });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 2000);
  };

  const getMoodInfo = (moodId: string) => {
    return moods.find((mood) => mood.id === moodId) || moods[0];
  };

  const getCategoryInfo = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId) || categories[0];
  };

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Unique Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/40 rounded-full animate-float"
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
              <div className="flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full">
                <Sparkles className="w-5 h-5 text-indigo-400 mr-2 animate-pulse" />
                <span className="text-sm font-medium text-indigo-300">
                  Personal Chronicles
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Digital{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Journal
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Capturing moments, thoughts, and experiences in my personal
              digital space
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <AnimatedSection
                    key={category.id}
                    animation="scaleIn"
                    delay={index * 100}
                  >
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`group flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                          : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 border border-white/20 hover:border-white/40"
                      }`}
                    >
                      <IconComponent size={18} className="mr-2" />
                      {category.label}
                    </button>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setShowUploadModal(true)}
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-500 hover:from-indigo-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 hover:scale-105"
              >
                <Plus
                  className="mr-2 group-hover:rotate-90 transition-transform duration-300"
                  size={20}
                />
                Create New Story
              </button>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search your stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stories Grid or Empty State */}
        {filteredStories.length === 0 ? (
          <AnimatedSection animation="fadeInUp">
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-12 h-12 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No Stories Yet
              </h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                {searchTerm
                  ? "No stories match your search."
                  : "Start your digital journal by creating your first story."}
              </p>
              {!searchTerm && (
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                >
                  <Plus className="mr-2" size={18} />
                  Write Your First Story
                </button>
              )}
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredStories.map((story, index) => {
              const moodInfo = getMoodInfo(story.mood);
              const categoryInfo = getCategoryInfo(story.category);

              return (
                <AnimatedSection
                  key={story.id}
                  animation="fadeInUp"
                  delay={index * 150}
                >
                  <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-indigo-500/50 transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div
                          className={`flex items-center px-3 py-1 bg-gradient-to-r ${categoryInfo.color} text-white rounded-full text-sm font-medium shadow-lg`}
                        >
                          <categoryInfo.icon size={14} className="mr-1" />
                          {categoryInfo.label}
                        </div>
                      </div>

                      {/* Date */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {new Date(story.date).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                          {story.title}
                        </h3>
                        <div
                          className={`flex items-center px-2 py-1 rounded-full text-xs font-medium border ${moodInfo.color} ml-2 flex-shrink-0`}
                        >
                          <span className="mr-1">{moodInfo.emoji}</span>
                          {moodInfo.label}
                        </div>
                      </div>

                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <User size={14} className="mr-1" />
                        <span className="mr-4">{story.author}</span>
                        <Clock size={14} className="mr-1" />
                        <span>{new Date(story.date).toLocaleDateString()}</span>
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                        {story.content}
                      </p>

                      {/* Tags */}
                      {story.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {story.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors cursor-default"
                            >
                              <Tag size={10} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                          {story.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs font-medium">
                              +{story.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center text-gray-400 hover:text-rose-400 transition-colors group/btn">
                            <Heart
                              size={16}
                              className="mr-1 group-hover/btn:animate-pulse"
                            />
                            <span className="text-sm">
                              {Math.floor(Math.random() * 50) + 10}
                            </span>
                          </button>
                          <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors group/btn">
                            <MessageCircle
                              size={16}
                              className="mr-1 group-hover/btn:animate-bounce"
                            />
                            <span className="text-sm">
                              {Math.floor(Math.random() * 20) + 5}
                            </span>
                          </button>
                          <button className="flex items-center text-gray-400 hover:text-green-400 transition-colors group/btn">
                            <Share2
                              size={16}
                              className="group-hover/btn:animate-spin"
                            />
                          </button>
                        </div>
                        <button className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium group/read">
                          Read More
                          <ChevronRight
                            size={14}
                            className="ml-1 group-hover/read:translate-x-1 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {filteredStories.length > 0 && (
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Showing {filteredStories.length}{" "}
              {filteredStories.length === 1 ? "story" : "stories"}
            </p>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <AnimatedSection animation="scaleIn">
            <div className="bg-gray-900 border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Upload className="w-6 h-6 text-indigo-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Create Your Story
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Password */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                    <Lock size={16} className="mr-2" />
                    Access Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter upload password"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Story Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter your story title"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Category and Mood */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="work">Work Life</option>
                      <option value="school">Learning</option>
                      <option value="love">Personal</option>
                      <option value="everyday">Daily Life</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mood *
                    </label>
                    <select
                      name="mood"
                      value={formData.mood}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      {moods.map((mood) => (
                        <option key={mood.id} value={mood.id}>
                          {mood.emoji} {mood.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Story Content *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Share your story..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tags (optional)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="e.g., technology, breakthrough, inspiration"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate tags with commas
                  </p>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Story Image (optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg"
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating...
                      </div>
                    ) : (
                      "Create Story"
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    <Eye className="mr-3" size={20} />
                    <span>Story created successfully! 🎉</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    <X className="mr-3" size={20} />
                    <span>Invalid password. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      )}
    </section>
  );
};

export default StoryPortal;
