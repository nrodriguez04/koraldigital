import React, { useState } from 'react';

//Style import
import '../styles/serviceCard.css'

const Card = ({ image, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {isOpen && (
        <div className="service-description">
          {description}
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default Card;
