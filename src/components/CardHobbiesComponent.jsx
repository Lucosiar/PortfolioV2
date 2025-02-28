import React from 'react';
import './CardHobbiesComponent.css';

const CardHobbiesComponent = ({ imgSrc, title, description }) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardHobbiesComponent;

