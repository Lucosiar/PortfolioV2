import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './TextAboutMe.css';

const ContactComponent = () => {
  return (
    <div className="social-buttons-container flex items-center justify-center  gap-8">
      <div className="text-left">
        <p>Si quieres ponerte en contacto conmigo, puedes hacerlo de la siguiente manera:</p>
        <div className="flex justify-start gap-6 mt-4">
          <div className="icon-container">
            <a href="https://www.linkedin.com/in/lucia-cosio-artime-c16012022/" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/img/rrss/linkedin1.png" alt="LinkedIn" className="icon-social" />
            </a>
          </div>
          <div className="icon-container">
            <a href="https://github.com/Lucosiar" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/img/rrss/github.png" alt="GitHub" className="icon-social" />
            </a>
          </div>
          <div className="icon-container">
            <a href="mailto:lucosiar333@gmail.com">
              <img src="/src/assets/img/rrss/correo.png" alt="Correo" className="icon-social" />
            </a>
          </div>
        </div>
      </div>
      <DotLottieReact
  src="https://lottie.host/b392a075-3f85-466f-8f40-1ee9e0c2bce2/V5hcoKzjxl.lottie"
  loop
  autoplay
  className="w-96"
/>

    </div>
  );
};

export default ContactComponent;
