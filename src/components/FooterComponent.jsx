import { useTranslation } from "react-i18next";

function FooterComponent() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 p-10 w-full overflow-hidden">
      {/* Contenido del Footer */}
      <div>  
        <div className="relative flex flex-col md:flex-row justify-between items-start mb-8 w-full">
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
            {/** 
            <div className="resources-container">
              <h2 className="mb-6 text-base font-semibold text-white uppercase">{t("resources")}</h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:bg-indigo-700">Flowbite</a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:bg-indigo-700">Tailwind CSS</a>
                </li>
                <li>
                  <a href="https://www.djangoproject.com/" className="hover:bg-indigo-700">Django</a>
                </li>
              </ul>
            </div>*/}

            <div className="resources-container">
              <h2 className="mb-6 text-base font-semibold text-white uppercase">{t("follow_me")}</h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/Lucosiar" className="hover:bg-indigo-700">Github</a>
                </li>
                <li className="mb-4">
                  <a href="https://www.linkedin.com/in/lucia-cosio-artime-c16012022" className="hover:bg-indigo-700">Linkedin</a>
                </li>
                <li>
                  <a href="https://www.kaggle.com/lcosioa" className="hover:bg-indigo-700">Kaggle</a>
                </li>
              </ul>
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
