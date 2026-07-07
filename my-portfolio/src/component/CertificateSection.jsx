import React, { useState } from "react";
import Modal from "react-modal";
import reactCert from "../assets/react.png";
import jsCert from "../assets/javascript.png";
import fullstackCert from "../assets/fullstack.png";
import nptelCert from "../assets/nptel.png";
import mernGenaiCert from "../assets/mern_genai.png";
import workshopCert from "../assets/web_design_workshop.png";
import "./CertificateSection.css";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

Modal.setAppElement("#root");

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development With MERN STACK & GenAI 2026 – Udemy",
    type: "image",
    src: mernGenaiCert,
    link: "https://drive.google.com/file/d/1kryT-SJQC5W4uRNYWBA-P9c_F8Gz8LST/view?usp=sharing",
  },
  {
    id: 2,
    title: "Hands-on React.js From Beginner to Expert",
    type: "image",
    src: reactCert,
  },
  {
    id: 3,
    title: "JavaScript Programming – Infosys Springboard",
    type: "image",
    src: jsCert,
  },
  {
    id: 4,
    title: "Full Stack Development Masterclass – NoviTech R&D Private Limited",
    type: "image",
    src: fullstackCert,
  },
  {
    id: 5,
    title: "Introduction to Industry 4.0 and Industrial Internet of Things – NPTEL",
    type: "image",
    src: nptelCert,
  },
  {
    id: 6,
    title: "Web Designing Workshop",
    type: "image",
    src: workshopCert,
    link: "https://drive.google.com/file/d/1uoBFHE1N-Xq8-e4K7OIvOQkM3e1s6VMC/view?usp=sharing",
  },
];

const CertificateSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);

  const openModal = (cert) => {
    if (cert.type === "link") {
      window.open(cert.link, "_blank", "noopener,noreferrer");
      return;
    }
    setCurrentCert(cert);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentCert(null);
  };

  return (
    <div className="certificate-section">
      <ScrollReveal>
        <h2 className="cert-title">My Certificates</h2>
      </ScrollReveal>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <ScrollReveal key={cert.id} delay={index * 0.1}>
            <TiltCard className="tilt-wrapper">
              <div
                className="certificate-card"
                onClick={() => openModal(cert)}
              >
                {cert.type === "link" ? (
                  <div className="cert-link-placeholder">
                    <FaCertificate className="cert-link-icon" />
                    <span className="cert-badge">
                      Verify Credential <FaExternalLinkAlt className="inline-link-icon" />
                    </span>
                  </div>
                ) : (
                  <img src={cert.src} alt={cert.title} className="cert-thumbnail" />
                )}
                <p className="cert-description">{cert.title}</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-btn" onClick={closeModal}>
          ✖
        </button>

        {currentCert && (
          <img
            src={currentCert.src}
            alt={currentCert.title}
            className="cert-img"
          />
        )}
        {currentCert && (
          <p className="cert-modal-title">
            {currentCert.title}
          </p>
        )}
        {currentCert && currentCert.link && (
          <a
            href={currentCert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-verify-btn"
          >
            Verify Credential <FaExternalLinkAlt size={12} style={{ marginLeft: "6px" }} />
          </a>
        )}
      </Modal>
    </div>
  );
};

export default CertificateSection;
