import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import LoginSignup from './Components/login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/jobs" Component={Jobs} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Login" Component={LoginSignup}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
