import React, { useState } from "react";
import "./educa.css";

export default function Educa({isNightMode}) {
  const [selectedLevel, setSelectedLevel] = useState("BTech");

  const educationDetails = {
    BTech: {
      title: "Sri Venkateswara College of Engineering and Technology",
      role: "Bachelor’s of Technology in Computer Science and Engineering",
      duration: "August 2023  - completing in 2027",
      Cgpa: "CGPA: 7.1/10",
    },
    twelfth: {
      title: "High secondary school",
      role: "MPC - Senior Secondary",
      duration: "April 2021  - April 2023",
      CGPA: "CGPA: 8.32/10 ",
    },
    tenth: {
      title: "Kinder Garden High School",
      role: "Secondary school",
      duration: "April 2020 - March 2021",
      Cgpa: "CGPA: 7.5/10",
    },
  };

  return (
    <div id="education" className={`education-journey ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h2 className="education-heading">Education</h2>
      <div className="circle-container">
        <div
          className={`circle ${selectedLevel === "BTech" ? "active" : ""}`}
          onClick={() => setSelectedLevel("BTech")}
        >
          UG
        </div>
        <div
          className={`circle ${selectedLevel === "twelfth" ? "active" : ""}`}
          onClick={() => setSelectedLevel("twelfth")}
        >
          12th
        </div>
        <div
          className={"circle " + (selectedLevel === "tenth" ? "active" : "")}
          onClick={() => setSelectedLevel("tenth")}
        >
          10th
        </div>
      </div>

      <div className="details-box">
        <h3>{educationDetails[selectedLevel].title}</h3>
        <p className="role">{educationDetails[selectedLevel].role}</p>
        <p className="duration">{educationDetails[selectedLevel].duration}</p>
        <p className="gpa">{educationDetails[selectedLevel].gpa}</p>
      </div>
    </div>
  );
}
