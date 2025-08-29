import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Architecture from './solutions/Architecture';
import Construction from './solutions/Construction';
import HeavyEngineering from './solutions/HeavyEngineering';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div style={{ paddingTop: '80px' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/solutions/architecture" element={<Architecture />} />
          <Route path="/solutions/construction" element={<Construction />} />
          <Route path="/solutions/heavy-engineering" element={<HeavyEngineering />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
