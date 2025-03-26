import React from 'react';
import './TextAboutMe.css';

const TextAboutMe = () => {
  return (
    <div className="container-AboutMe">
      <div className="image-container">
        <img src="/src/assets/avatar/yo_foto.JPG" alt="Morado" className="image" />
      </div>
      <div className="text-container pl-5">
        <h2>Sobre mí</h2>
        <p>Siempre me ha apasionado el mundo de la informática. Me encanta ayudar a las personas a facilitar su vida mendiante la tecnología. Suelo desarrollar modelos de IA que se puedan implementar en páginas web o aplicaciones móviles. También me gusta desarrollar mis propias aplicaciones móviles.</p>
        <div className="flex space-x-3 mt-4">
                  <div className="icon-container">
                    <a href="https://www.linkedin.com/in/lucia-cosio-artime-c16012022/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/src/assets/img/rrss/linkedin1.png"
                        alt="LinkedIn"
                        className="icon-social"
                      />
                    </a>
                  </div>
                  <div className="icon-container">
                    <a href="https://github.com/Lucosiar" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/src/assets/img/rrss/github.png"
                        alt="GitHub"
                        className="icon-social"
                      />
                    </a>
                  </div>
                  <div className="icon-container">
                    <a href="/src/assets/CV/LuciaCosioCV.pdf" download="CV_Lucia_Cosio">
                      <img
                        src="/src/assets/img/rrss/cv3.png" 
                        alt="Descargar CV"
                        className="icon-social"
                      />
                    </a>
                  </div>
                  <div className="icon-container">
                    <img
                      src="/src/assets/img/rrss/correo.png"
                      alt="GitHub"
                      className="icon-social"
                    />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default TextAboutMe;
