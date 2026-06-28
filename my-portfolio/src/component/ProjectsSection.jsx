import React from 'react';
import './ProjectSection.css';
import { FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import TiltCard from './TiltCard';
import ScrollReveal from './ScrollReveal';

const ProjectSection = () => {
  const projects = [
    {
      title: "CleanTrack",
      date: "Aug 2025 – Present",
      description:
        "A MERN stack platform for reporting civic issues. Users can submit complaints with images and location details. Admins can monitor and resolve reports through a live dashboard.",
      tech: "MongoDB | Express.js | React.js | Node.js",
      link: null, // ongoing project
    },
    {
      title: "AI Powered Travel Planner",
      date: "Jun 2025 – Present",
      description:
        "An interactive, AI-driven itinerary planner that designs optimized routes, recommends local hotspots, and constructs trip budgets based on user preferences.",
      tech: "React.js | Node.js | OpenAI API | Tailwind CSS",
      link: null, // ongoing project
    },
    {
      title: "URL Shortener",
      date: "May 2025 – Jun 2025",
      description:
        "A lightweight, secure link-shortening service that redirects users, tracks analytics (click counts, devices, locations), and provides QR code generation.",
      tech: "Node.js | Express.js | MongoDB | JavaScript",
      link: "https://github.com/redhu-3/url_shortener",
    },
    {
      title: "Smart Study Planner",
      date: "Apr 2025 – May 2025",
      description:
        "An intelligent dashboard helping students schedule study sessions, set goals, track task progress, and optimize daily study routines using visual calendar analytics.",
      tech: "React.js | Node.js | Express.js | Firebase",
      link: "https://github.com/redhu-3/SmartStudyPlanner",
    },
    {
      title: "Skill Map - Career Readiness Platform",
      date: "Mar 2025 – Apr 2025",
      description:
        "A skill gap analysis platform where users assess their competencies, identify missing skills for target career paths, and receive curated learning recommendations.",
      tech: "React.js | Node.js | Express.js | MongoDB",
      link: "https://github.com/redhu-3/Skill-Gap-Analyse",
    },
    {
      title: "Mini CRM using MERN Stack",
      date: "Jan 2025 – Mar 2025",
      description:
        "A customer relationship management system built with the MERN stack. Includes authentication, contact tracking, and interactive dashboards for businesses.",
      tech: "MongoDB | Express.js | React.js | Node.js",
      link: "https://github.com/redhu-3/mini-crm",
    },
    {
      title: "Library Management System (Java)",
      date: "Feb 2025 – Apr 2025",
      description:
        "A desktop-based Java application to manage library books, issue/return records, and member details efficiently with JDBC integration.",
      tech: "Java | JDBC | MySQL",
      link: "https://github.com/redhu-3/LibraryManagement",
    },
    {
      title: "AlgoArena – Interactive Coding Quiz Platform",
      date: "Jan 2025 – Mar 2025",
      description:
        "A gamified coding quiz platform with real-time code execution, leaderboard, and multiple programming language support using Firebase backend.",
      tech: "HTML | CSS | JavaScript | Firebase",
      link: "https://github.com/redhu-3/Algoarena",
    },
  ];

  return (
    <div className="projects-section">
      <ScrollReveal>
        <h1 className="projects-title">Projects</h1>
      </ScrollReveal>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <TiltCard className="tilt-wrapper">
              <div className="project-card">
                <h2>{proj.title}</h2>
                <p className="project-date">{proj.date}</p>
                <p className="project-desc">{proj.description}</p>
                <p className="project-tech">
                  <FaCodeBranch className="tech-branch-icon" /> {proj.tech}
                </p>

                <div className="project-links">
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      View on GitHub <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <p className="in-progress">🚧 In Progress</p>
                  )}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
