import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css'
import HeaderNav from './components/Nav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';

function App() {
return (
    <Router>
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </Router>
  )
}

export default App
