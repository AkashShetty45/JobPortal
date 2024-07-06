import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Job Portal</h1>
        <p>Find your dream job here!</p>
        <div className="home-search">
          <input type="text" placeholder='enter the company name'/>
        </div>
        <a href="/jobs" className="home-btn">Browse Jobs</a>
      </header>
    </div>
  );
};

export default Home;
