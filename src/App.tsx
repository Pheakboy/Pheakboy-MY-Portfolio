// import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <ParallaxBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;