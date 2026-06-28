import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  useEffect(() => {
    // Keep it dark-mode (Aurora theme) permanently as requested
    document.body.className = "dark-mode";
  }, []);

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1LjRKDQfLMIY8TAcRXKKzW_iDccR-DrMw/view?usp=sharing", "_blank");
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

  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="b2">
      {/* Dynamic Glowing Core */}
      <div className="hero-glow-core"></div>

      <motion.div 
        className="per_info"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="name"
          variants={nameContainerVariants}
        >
          <motion.span
            className="intro-span"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi I'm 
          </motion.span>
          {"REDHU DARSINI G".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              whileHover={{ y: -12, color: "var(--color-accent-cyan)", scale: 1.15 }}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

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

      {/* Animated Scroll Down Indicator */}
      <motion.div 
        className="scroll-indicator-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="mouse-wheel"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
