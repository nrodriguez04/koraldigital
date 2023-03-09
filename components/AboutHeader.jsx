import React from 'react';
import { Link } from 'react-router-dom';

//Style import
import '../styles/AboutHeader.css'

//Icon imports
import { GiBrain, GiPaperPlane } from 'react-icons/gi'
import { HiLightBulb } from 'react-icons/hi'

//Image imports
import Work from '../assets/work.mp4'


const AboutPageHeader = () => {
  return (
    <header className="about-header">
      <video className="video-background" autoPlay loop muted>
        <source src={ Work } type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="about-text">
        <h4>Creative Thoughts. Creative Actions.</h4>
        <h1>Koral Digital</h1>
        <Link to="/contact">
          <button className="contact-btn">Start Building</button>
        </Link>
      </div>
      <div className="cards-container">
          <div className="card">
          <GiPaperPlane />
            <h3>Creative Concepts</h3>
            <p>Concepts to help build your business.</p>
          </div>
          <div className="card">
          <GiBrain />
            <h3>Creative Strategies</h3>
            <p>Strategies to implement our concepts.</p>
          </div>
          <div className="card">
          <HiLightBulb />
            <h3>Creative Solutions</h3>
            <p>Solution to all of your business needs.</p>
          </div>
      </div>
    </header>
  );
};

export default AboutPageHeader;
