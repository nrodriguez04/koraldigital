import React from 'react';

//Style import
import '../styles/KoralHeader.css'

//Image imports
import Reef from '../assets/reef.mp4'


const KoralHeader = () => {
  return (
    <header className="koral-header">
      <video className="video-background" autoPlay loop muted>
        <source src={ Reef } type="video/mp4" />
      </video>
      <div className="koral-overlay"></div>
        <div className="koral-text">
            <h4>Building a better tomorrow</h4>
            <h1>The Koral Initiative</h1>
            <p>Coral reefs are important for a number of reasons. They are home to a diverse array of marine life, including many species of fish, invertebrates, and other organisms. Coral reefs also provide important ecosystem services, such as protecting coastlines from storms and erosion, providing food for local communities, and supporting tourism and recreation. In addition, coral reefs are important indicators of the health of the ocean and play a crucial role in the global carbon cycle. They absorb and store large amounts of carbon dioxide from the atmosphere, helping to mitigate the impacts of climate change.</p>
        </div>
  </header>
  );
};

export default KoralHeader;
