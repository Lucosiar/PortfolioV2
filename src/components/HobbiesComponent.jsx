import React from 'react';
import './TextAboutMe.css';

const HobbiesComponent = () => {
  return (
    <div className="container-AboutMe">
      <div className="text-container pr-5">
        <h2>Sobre mí</h2>
        <p>Siempre me ha apasionado el mundo de la informática. Me encanta ayudar a las personas a facilitar su vida mendiante la tecnología. Suelo desarrollar modelos de IA que se puedan implementar en páginas web o aplicaciones móviles. También me gusta desarrollar mis propias aplicaciones móviles.</p>        
      </div>

      <div className="image-container">
        <img src="/src/assets/img/personajes/morado_fondo.png" alt="Morado" className="image" />
      </div>
    </div>
  );
};

export default HobbiesComponent;
