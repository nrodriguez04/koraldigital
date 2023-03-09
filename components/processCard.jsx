import React from 'react';

//Style import
import '../styles/ProcessCard.css'

const ProcessCard = ({ number, title, description, deliverables }) => {
  return (
    <div className="process">
      <h3 className='number'>{number}</h3>
      <h3>{title}</h3>
      <p>{description}</p>
      <h5>Deliverables:</h5>
      <ul>
        {deliverables.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessCard;
