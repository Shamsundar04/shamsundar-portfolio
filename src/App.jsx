import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage'; // 1. Import ContactPage

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage /> {/* 2. Add ContactPage here */}
      </main>
    </div>
  );
}

export default App;