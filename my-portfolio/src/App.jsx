import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import SkillsSection from "./component/SkillsSection";
import CertificateSection from "./component/CertificateSection"; // ✅ Added import
import ProjectSection from "./component/ProjectsSection";
import ContactSection from "./component/ContactSection";
import BackgroundMesh from "./component/BackgroundMesh";
import CustomCursor from "./component/CustomCursor";

import "./App.css";

const App = () => {
  return (
    <div>
      <BackgroundMesh />
      <CustomCursor />
      <Navbar />

      {/* ✅ Home Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ✅ About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* ✅ Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* ✅ Certificates Section (Newly Added) */}
      <section id="certificates">
        <CertificateSection />
      </section>

      {/* ✅ Projects Section */}
      <section id="projects">
        <ProjectSection />
      </section>

      {/* ✅ Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default App;
