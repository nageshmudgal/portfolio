import React from 'react';
import ProjectList from './components/ProjectList';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <ProjectList />
    </div>
  );
}

export default App;
