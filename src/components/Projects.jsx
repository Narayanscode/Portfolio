import React from 'react';
import './projects.css'; // Include the custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import gfgLogo from '../assets/gfgLogo.png';

import pro6 from '../assets/pro6.png'

const projectsData = [
  
    
{
    title: "Portfolio Website",
    technologies: ["React JS", "HTML", "CSS", "JSX"],
    description: "A sleek and responsive portfolio website built with React JS, showcasing my projects, skills, and experiences. It is optimized for all devices, offering a smooth and engaging user experience.",
    githubLink: "https://github.com/Narayanscode/Portfolio",
    deploymentLink: "https://narayanscode.github.io/Portfolio/",
    status: "Completed",
    image: pro6,
}

  
  
];

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return <FontAwesomeIcon icon={faCheckCircle} className="icon-status-completed-icon" title="Completed" />;
    case "In Progress":
      return <FontAwesomeIcon icon={faSpinner} className="status-progress-icon" spin title="In Progress" />;
    default:
      return null;
  }
};

const Projects = ({isNightMode}) => {
  return (
    <div id="projects" className={`projects-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <p key={idx} className="tech-chip">
                  {tech}
                </p>
              ))}
            </div>
            <p className="short-description">{project.description}</p>
            <div className="project-icons">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FontAwesomeIcon icon={faGithub} className="icon-github-icon" title="GitHub" />
                  
                </a>
              )}
              {project.deploymentLink && (
                <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FontAwesomeIcon icon={faGlobe} className="icon-deployment-icon" title="Deployed Site" />
                </a>
              )}
              <p className="status-icon">{getStatusIcon(project.status)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
