import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import { FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // dark-mode is Option A ("Aurora"), light-mode is Option C ("Cyber Mint")
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1N8lFfANbrSBfFTdV-L2mE0BRE7Syzw_6";
    link.download = "Redhu-Darsini-G-resume.pdf";
    link.click();
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
      },
    },
  };

  return (
    <div className="b2">
      {/* 🌗 Theme Toggle */}
      <motion.div 
        className="theme-toggle" 
        onClick={toggleTheme}
        whileHover={{ scale: 1.15, rotate: 15 }}
        whileTap={{ scale: 0.85 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </motion.div>

      <motion.div 
        className="per_info"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="name"
          variants={nameVariants}
        >
          <span>Hi I'm </span>REDHU DARSINI G
        </motion.h1>

        <motion.div 
          className="ab-me"
          variants={fadeUpVariants}
        >
          <h2 className="me">
            Passionate IT student skilled in MERN stack, C, and Java.
            <br />
            Dedicated to building impactful, user-focused web solutions.
          </h2>
        </motion.div>

        {/* ✅ Buttons */}
        <motion.div 
          className="hero-buttons"
          variants={fadeUpVariants}
        >
          <motion.button 
            className="hero-btn getintouch" 
            onClick={handleScrollToContact}
            whileHover={{ scale: 1.05, boxShadow: "var(--glow-cyan)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
          <motion.button 
            className="hero-btn resume-btn" 
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05, boxShadow: "var(--glow-magenta)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>

        {/* ✅ Social Icons */}
        <motion.div 
          className="social-icons"
          variants={fadeUpVariants}
        >
          <motion.a
            href="https://github.com/redhu-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ y: -5, scale: 1.15, color: "var(--color-accent-cyan)" }}
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/redhu-darsini-7385aa296/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ y: -5, scale: 1.15, color: "var(--color-accent-magenta)" }}
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a 
            href="mailto:redhudarsini3@gmail.com" 
            aria-label="Email"
            whileHover={{ y: -5, scale: 1.15, color: "var(--color-accent-violet)" }}
          >
            <FaEnvelope size={28} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
