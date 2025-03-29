import React from 'react';
import { useTranslation } from "react-i18next";
import './TextAboutMe.css';

const TextAboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="container-AboutMe">
      <div className="image-container">
        <img src="/src/assets/avatar/yo_foto.JPG" alt="Morado" className="image" />
      </div>
      <div className="text-container pl-5">
        <h2>{t("sobre_mi")}</h2>
        <p>{t("quien_soy")}</p>
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
