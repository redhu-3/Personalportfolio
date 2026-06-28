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
      link: null, // ongoing project – no link yet
    },
    {
      title: "Mini CRM using MERN Stack",
      date: "Apr 2025 – Jun 2025",
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
    {
      title: "Nanman – Fertilizer Usage Optimizer",
      date: "Oct 2024 – Dec 2024",
      description:
        "A mobile-friendly web app that recommends fertilizers based on soil and crop type, designed for rural farmers with simple UI and multi-language support.",
      tech: "HTML | CSS | JavaScript | Firebase",
      link: "https://github.com/redhu-3/Nanman",
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
