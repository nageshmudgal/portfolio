import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectList.css'; // Create this CSS file for styling

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const projectsUrl = 'https://portfolio-3-86qh.onrender.com/api/projects/';

  useEffect(() => {
    axios.get(projectsUrl)
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="project-container">
      <h2>My Projects</h2>
        <div className="project-grid-wrapper">
          <div className="project-grid">
          {projects.map(project => (
            
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-button"
                >
                  Read More
                </a>
              )}
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default ProjectList;
