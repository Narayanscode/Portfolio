import myPic from "../assets/narayan.jpg";
import "./home.css";
import React, { useState, useEffect } from "react";

export default function Home({ isNightMode }) {
  const texts = [
    "Software Engineer",
    "AI Enthusiast",
    "Web Developer",
    "Tech Explorer",
  ];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 3000);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResumeClick = () => {
    // 👉 Replace this link with your actual resume link (Google Drive / GitHub / PDF)
    window.open("https://your-resume-link.com", "_blank");
  };

  return (
    <main
      id="home"
      className={`home ${isNightMode ? "night-mode" : "day-mode"}`}
    >
      <div className={`home-container ${isMobile ? "mobile" : ""}`}>
        <div className="profile-pic">
          <img src={myPic} alt="Narayan Sharma" />
        </div>

        <section className="intro">
          <h2 className="welcome">Welcome to my portfolio website!</h2>
          <h1 className="hero">
            Hey folks, I'm <span className="hero2">{currentText}</span>
          </h1>
          <h2 className="aboutme">
            I am Narayan Sharma, a passionate Software Engineer in the making
            with interests in AI, Web Development, and building creative
            projects.
          </h2>

          <div className="buttons">
            <button className="quote-btn" onClick={handleResumeClick}>
              View My Resume
            </button>
            <button className="quote-btn" onClick={scrollToContact}>
              Connect
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
