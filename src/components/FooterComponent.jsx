import { useTranslation } from "react-i18next";

function FooterComponent() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 p-10 w-full overflow-hidden">
      {/* Contenido del Footer */}
      <div>  
        <div className="relative flex flex-col md:flex-row justify-between items-center mb-8 w-full">
          <div className="flex items-center mb-8 md:mb-0 md:w-1/4">
            <div className="mr-6">
              <h1 className="text-2xl text-yellow-400">Lucía Cosío Artime</h1>
              <h2 className="text-lg">Full Stack Developer</h2>
              <h2 className="text-lg">AI Developer</h2>
            </div>
            <img rel="icon" src="/src/assets/img/serpienteMorada.ico" alt="Icono" className="w-12 h-12 mr-8"/>
          </div>

          <ul className="flex-1 flex flex-wrap justify-center gap-6 list-none p-0 mb-8 text-b text-center md:w-1/2">
            <li><a href="#home" className="hover:text-primary transition-colors duration-300 text-lg">{t("home")}</a></li>
            <li><a href="#about-me" className="hover:text-primary transition-colors duration-300 text-lg">{t("sobre_mi")}</a></li>
            <li><a href="#experience" className="hover:text-primary transition-colors duration-300 text-lg">{t("timeline")}</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors duration-300 text-lg">{t("proyectos")}</a></li>
            <li><a href="#tecnologies" className="hover:text-primary transition-colors duration-300 text-lg">{t("tecnologias")}</a></li>
          </ul>

          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12 w-full md:w-1/4 mt-8 md:mt-0 md:justify-end">
            <div className="resources-container">
              <div className="flex space-x-3">
                  <div className="">
                    <a href="https://www.linkedin.com/in/lucia-cosio-artime-c16012022/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/src/assets/img/rrss/linkedin1.png"
                        alt="LinkedIn"
                        className="icon-social"
                      />
                    </a>
                  </div>
                  <div className="">
                    <a href="https://github.com/Lucosiar" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/src/assets/img/rrss/github.png"
                        alt="GitHub"
                        className="icon-social"
                      />
                    </a>
                  </div>
                  <div className="">
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
        </div>
      </div>
      <p className="text-base mt-6 mb-4 text-center w-full relative">
        &copy; 2025 Lucosiar&reg; {t("derechos_reservados")}
      </p>
    </div>
  );
}

export default FooterComponent;
