import React, { useState } from "react";
import Modal from "react-modal";
import reactCert from "../assets/react.png";
import jsCert from "../assets/javascript.png";
import fullstackCert from "../assets/fullstack.png";
import nptelCert from "../assets/nptel.png";
import "./CertificateSection.css";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";

Modal.setAppElement("#root");

const certificates = [
  {
    id: 1,
    title: "Hands-on React.js From Beginner to Expert",
    type: "image",
    src: reactCert,
  },
  {
    id: 2,
    title: "JavaScript Programming – Infosys Springboard",
    type: "image",
    src: jsCert,
  },
  {
    id: 3,
    title: "Full Stack Development Masterclass – NoviTech R&D Private Limited",
    type: "image",
    src: fullstackCert,
  },
  {
    id: 4,
    title: "Introduction to Industry 4.0 and Industrial Internet of Things – NPTEL",
    type: "image",
    src: nptelCert,
  },
];

const CertificateSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);

  const openModal = (cert) => {
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
                <img src={cert.src} alt={cert.title} className="cert-thumbnail" />
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
      </Modal>
    </div>
  );
};

export default CertificateSection;
