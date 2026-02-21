import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Python', 'Django', 'REST APIs', 'Database Design', 'SQL']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Axios', 'NPM']
    }
  ];

  return (
    <div className="skills-container" id="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
