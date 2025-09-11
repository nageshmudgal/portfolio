import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>Projects</li>
        <li style={styles.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',   // fixes navbar at top of viewport
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem 2rem',
    backgroundColor: 'transparent',  // fully transparent
    zIndex: 1000, // keep it on top
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
    color: 'white', // or whatever color suits your background
    cursor: 'pointer',
  },
  navItem: {
    fontWeight: 'bold',
  }
};

export default Navbar;
