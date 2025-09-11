import React from 'react';

const Intro = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1>Hello, I am Nagesh</h1>
        <p>I am a software developer</p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/path-to-your-photo.jpg"  // replace with your photo path
          alt="Nagesh"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    backgroundColor: '#888888',  // grey background
    color: 'white',              // so text is readable on grey
    minHeight: '100vh',
  },
  textContainer: {
    flex: 1,
    paddingRight: '2rem',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'right',
  },
  image: {
    maxWidth: '200px',
    borderRadius: '50%',
  },
};

export default Intro;
