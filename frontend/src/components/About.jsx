import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="profile-placeholder">
                <span>Your Photo</span>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 3+ years of experience in creating 
              digital experiences that are both functional and beautiful. I specialize in 
              React, Node.js, and modern web technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or enjoying a good cup of coffee while brainstorming 
              the next big idea.
            </p>
            
            <div className="skills-grid">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">React</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">CSS/SASS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;