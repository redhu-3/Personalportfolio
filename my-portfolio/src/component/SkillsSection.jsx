import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaJava } from 'react-icons/fa';
import {
  SiMongodb, SiFirebase, SiReact, SiNodedotjs,
  SiExpress, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiC,
  SiMysql
} from 'react-icons/si';
import ScrollReveal from './ScrollReveal';

const SkillsSection = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="skill-icon" />,
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ]
    },
    {
      title: "Frameworks",
      icon: <FaLaptopCode className="skill-icon" />,
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> }
      ]
    },
    {
      title: "Web Technologies",
      icon: <FaTools className="skill-icon" />,
      skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "Bootstrap", icon: <SiBootstrap /> }
      ]
    },
    {
      title: "Database & Tools",
      icon: <FaDatabase className="skill-icon" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Git / GitHub", icon: <FaTools /> },
        { name: "VS Code", icon: <FaLaptopCode /> }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay: i * 0.12,
      }
    })
  };

  return (
    <div className="skills-section">
      <ScrollReveal>
        <h1 className="skills-title">Technical Skills</h1>
      </ScrollReveal>

      <div className="skills-grid">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="skill-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5,
                ease: "easeInOut",
                delay: index * 0.4
              }
            }}
          >
            {cat.icon}
            <h2>{cat.title}</h2>
            <ul>
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
