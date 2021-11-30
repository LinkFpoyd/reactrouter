import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/About">About</Link>{' '}
          <Link to="/Contact">Contact</Link>{' '}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*"    element={<NotFound/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
