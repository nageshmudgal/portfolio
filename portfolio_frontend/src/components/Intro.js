import React from 'react';
import profileImg from '../static_images/profilepic.png'
import './Intro.css';

const Intro = () => {
  return (
    <div className="container" id="home">
      <div className="text-container">
        <h1>Hello�, I'm Nagesh</h1>
        <p>Full Stack Developer | Building Beautiful Web Experiences</p>
        <p className="intro-subtitle">Crafting scalable applications with modern technologies</p>
      </div>
      <div className="image-container">
        <img src={profileImg} alt="Nagesh" className="image" />
      </div>
    </div>

  );
};

export default Intro;
