import React from 'react';
import './TextAboutMe.css';

const TextAboutMe = () => {
  return (
    <div className="container-AboutMe">
      <div className="image-container">
        <img src="/src/assets/img/personajes/morado_fondo.png" alt="Morado" className="image" />
      </div>
      <div className="text-container pl-5">
        <h2>Sobre mí</h2>
        <p>Siempre me ha apasionado el mundo de la informática. Me encanta ayudar a las personas a facilitar su vida mendiante la tecnología. Suelo desarrollar modelos de IA que se puedan implementar en páginas web o aplicaciones móviles. También me gusta desarrollar mis propias aplicaciones móviles.</p>
        <div>
          <button className="buttons"><img src="/src/assets/img/rrss/cv.png" alt="CV" className="h-10 w-10"/></button>
          <button className="buttons"><img src="/src/assets/img/rrss/github.png" alt="GitHub" className="h-10 w-10"/></button>
          <button className="buttons"><img src="/src/assets/img/rrss/linkedin.png" alt="LinkedIn" className="h-10 w-10"/></button>
          <button className="buttons"><img src="/src/assets/img/rrss/kaggle_icon.png" alt="Kaggle" className="h-10 w-10"/></button>
        </div>
        
      </div>
    </div>
  );
};

export default TextAboutMe;
