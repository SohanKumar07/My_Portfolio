import React, { useEffect, useState } from 'react';
import { ChevronUp, Loader2 } from 'lucide-react';

// Import all components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import global styles
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Update current section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Preloader component
  const Preloader = () => (
    <div className="preloader">
      <div className="preloader-content">
        <div className="logo-loader">
          <span className="logo-text">Sohan Kumar</span>
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <p className="loading-text">Loading amazing content...</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );

  // Section indicator component
  const SectionIndicator = () => (
    <div className="section-indicator">
      {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
        <button
          key={section}
          className={`indicator-dot ${currentSection === section ? 'active' : ''}`}
          onClick={() => {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
          }}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </div>
  );

  // Show preloader while loading
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Section Indicator */}
      <SectionIndicator />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
      
      {/* Background Elements */}
      <div className="bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
    </div>
  );
}

export default App;