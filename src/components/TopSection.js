import React from 'react';
import Navbar from './Navbar.js';
import '../styles/TopSection.css';

function TopSection() {
  return(
      <section className='top'>
          <Navbar />
          <h1 className="home-header">Welcome to 5 star cooking</h1>
          <button className='let-me'>Let me see more</button>
      </section>
  );
}

export default TopSection;
