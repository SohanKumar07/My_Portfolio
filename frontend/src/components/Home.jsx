import React from 'react';
import './Home.css';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi, I'm <span className="gradient-text">Sohan Kumar</span>
            </h1>
            <h2 className="home-role">Full Stack Developer</h2>
            <p className="home-description">
              I create beautiful, responsive web applications using modern technologies. 
              Passionate about clean code, user experience, and bringing ideas to life through code.
            </p>
            <div className="home-buttons">
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="home-visual">
            <div className="profile-image-container">
              <img 
                src={profile} 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;