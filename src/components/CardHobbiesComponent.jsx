import React from 'react';
import './CardHobbiesComponent.css';

const CardHobbiesComponent = ({ imgSrc, title, description, imageOnLeft = true }) => {
  return (
    <div className={`card-container ${imageOnLeft ? 'image-left' : 'image-right'}`}>
      <img src={imgSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardHobbiesComponent;
