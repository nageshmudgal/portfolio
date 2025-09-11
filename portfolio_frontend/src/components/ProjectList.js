import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const projectsUrl = 'https://portfolio-3-86qh.onrender.com/api/projects/'
  // projectsUrl = 'http://localhost:8000/api/projects/'

  useEffect(() => {
    axios.get(projectsUrl)
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && <a href={project.link}>View Project</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
