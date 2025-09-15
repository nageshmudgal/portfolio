import React from 'react';
import profileImg from '../static_images/profilepic.png'
import './Intro.css';

const Intro = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>Hello🙋, I am Nagesh👋</h1>
        <p>I am a software developer</p>
      </div>
      <div className="image-container">
        <img src={profileImg} alt="Nagesh" className="image" />
      </div>
    </div>

  );
};

export default Intro;
