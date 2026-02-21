import React from 'react';
import ProjectList from './components/ProjectList';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <ProjectList />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
