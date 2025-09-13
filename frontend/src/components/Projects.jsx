import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      image: "🛒"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      techStack: ["React", "Firebase", "Material-UI", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      image: "📋"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      techStack: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "#",
      liveUrl: "#",
      image: "🌤️"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, smooth animations, and contact form integration.",
      techStack: ["React", "CSS3", "Framer Motion", "Netlify"],
      githubUrl: "#",
      liveUrl: "#",
      image: "💼"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "Social networking platform with posts, comments, likes, and real-time messaging functionality.",
      techStack: ["React Native", "Express", "PostgreSQL", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      image: "📱"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Educational platform with course creation, student enrollment, progress tracking, and assessments.",
      techStack: ["Vue.js", "Django", "PostgreSQL", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      image: "🎓"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.githubUrl} className="project-link">
                    <Github size={18} />
                    GitHub
                  </a>
                  <a href={project.liveUrl} className="project-link">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;