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
                    <a href="mailto:lucosiar333@gmail.com">
                      <img
                        src="/src/assets/img/rrss/correo.png"
                        alt="Correo"
                        className="icon-social"
                      />
                    </a>
                  </div>
                  <div className="icon-container">
            <a href="https://www.kaggle.com/lucosiar" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 128 128" className="icon-social">
                <path
                  fill="#000000"
                  d="M100.402 127.243c-.126.501-.627.752-1.502.752H82.168c-1.007 0-1.876-.438-2.632-1.317L51.91 91.531l-7.706 7.33v27.258c0 1.255-.628 1.881-1.88 1.881h-12.97c-1.254 0-1.88-.626-1.88-1.88V1.876c0-1.25.625-1.877 1.88-1.877h12.97c1.253 0 1.882.628 1.882 1.876v76.501l33.08-33.457c.878-.875 1.755-1.315 2.631-1.315h17.295c.75 0 1.25.315 1.504.937.252.753.19 1.316-.19 1.693L63.561 80.062l36.465 45.3c.499.502.625 1.128.38 1.881"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAboutMe;
