import React, { useState } from 'react';
import './certifications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faTimes } from '@fortawesome/free-solid-svg-icons';

import cert1 from '../assets/certificate1.jpeg';
import cert2 from '../assets/certificate2.jpeg';
import cert3 from '../assets/certificate3.png';
import cert4 from '../assets/certificate4.jpeg';
import cert5 from '../assets/certificate5.jpeg';
import cert6 from '../assets/certificate6.jpeg';

const certificationsData = [
  {
    title: "Certificate of Participation - Byte Quest AI Coding Challenge",
    issuer: " Byte Quest",
    date: "10 January, 2026",
    description: "Certificate of Participation for participating 24 hours hackathon of Byte Quest - AI Coding challenge.",
    image: cert1,
    credential: "#"
  },
  {
    title: "Certificate of completion - GEN AI NASSCOM",
    issuer: "BY GOVT OF INDIA / NASSCOM",
    date: "09 February, 2026",
    description: "Certificate of completion - GEN AI NASSCOM course under the Skill Development Program ",
    image: cert2,
    credential: "#"
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SKILLSBUILD",
    date: "21 February, 2025",
    description: "Certificate of completion - Getting Started with Artificial Intelligence course offered by IBM SkillsBuild, covering AI fundamentals, applications, and ethical considerations.",
    image: cert3,
    credential: "#"
  },
  {
    title: "MYSQL Bootcamp ",
    issuer: "LETS UPGRADE",
    date: "21 April,2025",
    description: "MySQL Bootcamp - Comprehensive training on MySQL database management",
    image: cert4,
    credential: "#"
  },
  {
    title: "Course Completion Certificate - Introduction to Prompt Engineering",
    issuer: "BY IBM /EDX",
    date: "25 April,2024",
    description: "Course Completion Certificate - Introduction to Prompt Engineering Offered by IBM",
    image: cert5,
    credential: "#"
  },
  {
    title: "Course Completion Certificate - Excel for Beginners",
    issuer: "DavidsonX / EDX",
    date: "25 April,2024",
    description: "Course Completion Certificate - Excel for Beginners Offered by DavidsonX , an online learning initiative of Davidson College",
    image: cert6,
    credential: "#"
  },
];

const Certifications = ({ isNightMode }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleImageClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div
      id="certifications"
      className={`certifications-container ${isNightMode ? "night-mode" : "day-mode"}`}
    >
      <h1>Certifications</h1>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div className="certification-card" key={index}>
            <div className="cert-image-wrapper" onClick={() => handleImageClick(cert)}>
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <div className="cert-image-overlay">Click to view full size</div>
            </div>
            <div className="cert-content">
              <div className="cert-header">
                <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
                <h2>{cert.title}</h2>
              </div>
              <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
              <p className="cert-description">{cert.description}</p>
              {cert.credential !== "#" && (
                <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Certificate →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Full-Size Certificate */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={handleBackdropClick}>
          <div className="cert-modal-content">
            <button className="cert-modal-close" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
            <p className="cert-modal-title">{selectedCert.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
