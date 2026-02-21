import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate software developer with a strong interest in building web applications 
            that solve real-world problems. I love learning new technologies and continuously 
            improving my craft.
          </p>
          <p>
            With experience in both frontend and backend development, I enjoy creating seamless 
            user experiences combined with robust backend systems. I'm a quick learner and thrive 
            in collaborative environments.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the community.
          </p>
        </div>
        <div className="about-highlights">
          <div className="highlight-item">
            <h3>Problem Solver</h3>
            <p>I enjoy tackling challenging problems and finding elegant solutions</p>
          </div>
          <div className="highlight-item">
            <h3>Quick Learner</h3>
            <p>Always eager to learn new technologies and best practices</p>
          </div>
          <div className="highlight-item">
            <h3>Team Player</h3>
            <p>I believe in the power of collaboration and open communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
