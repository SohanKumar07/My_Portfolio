import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Monitor,
  Cloud,
  Shield,
  Zap,
  Layers,
  Star,
  Award,
  TrendingUp,
  Target,
  BookOpen,
  Users,
  Coffee,
  Lightbulb
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe size={32} />,
      color: "#61DAFB",
      description: "Creating beautiful and interactive user interfaces",
      skills: [
        { name: "React", level: 92, icon: "⚛️", experience: "3+ years", projects: 15 },
        { name: "JavaScript", level: 95, icon: "🟨", experience: "4+ years", projects: 25 },
        { name: "TypeScript", level: 88, icon: "🔷", experience: "2+ years", projects: 12 },
        { name: "Next.js", level: 85, icon: "⚫", experience: "2+ years", projects: 8 },
        { name: "Vue.js", level: 75, icon: "🟢", experience: "1+ years", projects: 5 },
        { name: "HTML5", level: 98, icon: "🟠", experience: "5+ years", projects: 30 },
        { name: "CSS3", level: 94, icon: "🔵", experience: "5+ years", projects: 30 },
        { name: "Tailwind CSS", level: 90, icon: "💨", experience: "2+ years", projects: 18 },
        { name: "SASS/SCSS", level: 86, icon: "🎨", experience: "3+ years", projects: 20 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={32} />,
      color: "#68D391",
      description: "Building robust server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢", experience: "3+ years", projects: 20 },
        { name: "Express.js", level: 88, icon: "⚡", experience: "3+ years", projects: 18 },
        { name: "Python", level: 85, icon: "🐍", experience: "2+ years", projects: 12 },
        { name: "Django", level: 78, icon: "🎯", experience: "2+ years", projects: 8 },
        { name: "FastAPI", level: 80, icon: "🚀", experience: "1+ years", projects: 6 },
        { name: "PHP", level: 72, icon: "🐘", experience: "2+ years", projects: 10 },
        { name: "REST APIs", level: 92, icon: "🔗", experience: "3+ years", projects: 22 },
        { name: "GraphQL", level: 76, icon: "💎", experience: "1+ years", projects: 5 },
        { name: "Socket.io", level: 82, icon: "🔌", experience: "2+ years", projects: 7 }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database size={32} />,
      color: "#F6AD55",
      description: "Managing data storage and retrieval systems",
      skills: [
        { name: "MongoDB", level: 87, icon: "🍃", experience: "3+ years", projects: 16 },
        { name: "PostgreSQL", level: 83, icon: "🐘", experience: "2+ years", projects: 12 },
        { name: "MySQL", level: 80, icon: "🐬", experience: "3+ years", projects: 15 },
        { name: "Redis", level: 75, icon: "🔴", experience: "2+ years", projects: 8 },
        { name: "Firebase", level: 88, icon: "🔥", experience: "2+ years", projects: 10 },
        { name: "Supabase", level: 78, icon: "⚡", experience: "1+ years", projects: 6 },
        { name: "Elasticsearch", level: 70, icon: "🔍", experience: "1+ years", projects: 4 },
        { name: "SQLite", level: 85, icon: "💾", experience: "3+ years", projects: 18 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={32} />,
      color: "#9F7AEA",
      description: "Deploying and managing scalable applications",
      skills: [
        { name: "AWS", level: 82, icon: "☁️", experience: "2+ years", projects: 12 },
        { name: "Docker", level: 86, icon: "🐳", experience: "2+ years", projects: 15 },
        { name: "Kubernetes", level: 70, icon: "⎈", experience: "1+ years", projects: 4 },
        { name: "Git/GitHub", level: 96, icon: "🐙", experience: "5+ years", projects: 40 },
        { name: "CI/CD", level: 80, icon: "🔄", experience: "2+ years", projects: 10 },
        { name: "Nginx", level: 77, icon: "🌐", experience: "2+ years", projects: 12 },
        { name: "Linux", level: 84, icon: "🐧", experience: "3+ years", projects: 20 },
        { name: "Vercel", level: 90, icon: "▲", experience: "2+ years", projects: 25 }
      ]
    },
    {
      title: "Mobile & Cross-Platform",
      icon: <Smartphone size={32} />,
      color: "#4FD1C7",
      description: "Creating mobile applications and cross-platform solutions",
      skills: [
        { name: "React Native", level: 78, icon: "📱", experience: "2+ years", projects: 8 },
        { name: "Flutter", level: 72, icon: "💙", experience: "1+ years", projects: 5 },
        { name: "Expo", level: 80, icon: "🚀", experience: "2+ years", projects: 6 },
        { name: "PWA", level: 85, icon: "📲", experience: "2+ years", projects: 10 },
        { name: "Ionic", level: 68, icon: "⚡", experience: "1+ years", projects: 3 },
        { name: "Electron", level: 74, icon: "⚛️", experience: "1+ years", projects: 4 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette size={32} />,
      color: "#ED8936",
      description: "Design tools and development workflow optimization",
      skills: [
        { name: "Figma", level: 88, icon: "🎨", experience: "3+ years", projects: 20 },
        { name: "Adobe XD", level: 75, icon: "🟣", experience: "2+ years", projects: 12 },
        { name: "Photoshop", level: 70, icon: "📸", experience: "2+ years", projects: 15 },
        { name: "VS Code", level: 95, icon: "💙", experience: "5+ years", projects: 50 },
        { name: "Postman", level: 90, icon: "🚀", experience: "3+ years", projects: 30 },
        { name: "Webpack", level: 76, icon: "📦", experience: "2+ years", projects: 12 },
        { name: "Vite", level: 82, icon: "⚡", experience: "2+ years", projects: 15 }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Zap size={24} />, level: 95 },
    { name: "Team Leadership", icon: <Users size={24} />, level: 88 },
    { name: "Communication", icon: <Users size={24} />, level: 92 },
    { name: "Project Management", icon: <Target size={24} />, level: 85 },
    { name: "Critical Thinking", icon: <Lightbulb size={24} />, level: 90 },
    { name: "Adaptability", icon: <TrendingUp size={24} />, level: 93 },
    { name: "Mentoring", icon: <BookOpen size={24} />, level: 82 },
    { name: "Client Relations", icon: <Coffee size={24} />, level: 87 }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon", year: "2023", icon: "☁️" },
    { name: "React Developer Certification", issuer: "Meta", year: "2023", icon: "⚛️" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2022", icon: "🌐" },
    { name: "MongoDB Developer", issuer: "MongoDB", year: "2022", icon: "🍃" }
  ];

  const stats = [
    { label: "Years of Experience", value: "5+", icon: <Award size={24} /> },
    { label: "Projects Completed", value: "50+", icon: <Target size={24} /> },
    { label: "Technologies Mastered", value: "30+", icon: <Code2 size={24} /> },
    { label: "Happy Clients", value: "25+", icon: <Star size={24} /> }
  ];

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="skills-container">
        {/* Header Section */}
        <div className="section-header">
          <h2 className="section-title">My Skills & Expertise</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills, experience, and achievements
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Navigation */}
        <div className="category-nav">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
              style={{ '--category-color': category.color }}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="active-category">
          <div className="category-header">
            <div className="category-icon-large" style={{ background: skillCategories[activeCategory].color }}>
              {skillCategories[activeCategory].icon}
            </div>
            <div className="category-info">
              <h3 className="category-title">{skillCategories[activeCategory].title}</h3>
              <p className="category-description">{skillCategories[activeCategory].description}</p>
            </div>
          </div>

          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-meta">
                      <span className="skill-experience">{skill.experience}</span>
                      <span className="skill-projects">{skill.projects} projects</span>
                    </div>
                  </div>
                  <div className="skill-level">{skill.level}%</div>
                </div>
                
                <div className="skill-progress-container">
                  <div className="skill-progress-bg">
                    <div 
                      className="skill-progress-fill" 
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        background: skillCategories[activeCategory].color
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills-section">
          <h3 className="soft-skills-title">Soft Skills & Competencies</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-card">
                <div className="soft-skill-icon">
                  {skill.icon}
                </div>
                <div className="soft-skill-content">
                  <h4 className="soft-skill-name">{skill.name}</h4>
                  <div className="soft-skill-bar">
                    <div 
                      className="soft-skill-fill"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                  <span className="soft-skill-level">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <h3 className="certifications-title">Certifications & Achievements</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <div className="cert-badge">
                  <Award size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;