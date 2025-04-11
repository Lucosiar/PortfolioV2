import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import TextAboutMe from './components/TextAboutMe';
import HobbiesComponent from './components/HobbiesComponent';
import CardProyects from './components/CardProyects';
import './App.css'
import ToggleButton from './components/SwitchComponent';
import PCComponent from './components/PCComponent';
import ExperienceComponent from './components/ExperienceComponent';
import TecnologiesComponent from './components/TecnologiesComponent';
import FooterComponent from './components/FooterComponent';
import WaveComponent from './components/WaveComponent';

function App() {
  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const projects=[
    {
      imageSrc: "/assets/img/proyectos/piedra_papel_tijeraaas.png",
      imageAlt: "proyecto1",
      title: "proyecto1",
      description: "descripcion1",
      language:["Django", "HTML", "CSS", "JavaScript"],
      projectUrl: "https://github.com/Lucosiar/Rock_Paper_Scissors",
    },
    {
      imageSrc: "/assets/img/proyectos/dhhotel.png",
      imageAlt: "proyecto2",
      title: "proyecto2",
      description: "descripcion2",
      language:["Django", "React", "TailwindCSS"],
      projectUrl: "https://github.com/Lucosiar/DHHotel",
    },
    {
      imageSrc: "/assets/img/proyectos/tictactoe.png",
      imageAlt: "proyecto3",
      title: "proyecto3",
      description: "descripcion3",
      language:["Django", "React"],
      projectUrl: "https://github.com/Lucosiar/TicTacToeExtrem",
    },
    {
      imageSrc: "/assets/img/proyectos/efi_cura.png",
      imageAlt: "proyecto4",
      title: "proyecto4",
      description: "descripcion4",
      language:["Java", "SQLite", "Android Studio"],
      projectUrl: "https://github.com/Lucosiar/Efi_Cura",
    },
    {
      imageSrc: "/assets/img/proyectos/portfolio.png",
      imageAlt: "proyecto5",
      title: "proyecto5",
      description: "descripcion5",
      language:["Django", "HTML", "CSS", "JavaScript"],
      projectUrl: "https://github.com/Lucosiar/Django-Porfolio",
    },
    {
      imageSrc: "/assets/img/proyectos/notely.png",
      imageAlt: "proyecto6",
      title: "proyecto6",
      description: "descripcion6", 
      language:["Java", "Firebase", "Android Studio"],
      projectUrl: "https://github.com/Lucosiar/AgendaArduino",
    },
    {
      imageSrc: "/assets/img/proyectos/acnh.png",
      imageAlt: "proyecto7",
      title: "proyecto7",
      description: "descripcion7",
      language:["Python", "IA", "Kaggle"],
      projectUrl: "https://www.kaggle.com/code/lcosioa/animalcrossingnewhorizons-fish",
      
    },
    {
      imageSrc: "/assets/img/proyectos/hamilton_records.png",
      imageAlt: "proyecto8",
      title: "proyecto8",
      description: "descripcion8",
      language:["Python", "IA", "Kaggle"],
      projectUrl: "https://www.kaggle.com/code/lcosioa/hamiltonrecords",
    },
    {
      imageSrc: "/assets/img/proyectos/suicidios.png",
      imageAlt: "proyecto9",
      title: "proyecto9",
      description: "descripcion9",
      language:["Python", "IA", "Kaggle"],
      projectUrl: "https://www.kaggle.com/code/lcosioa/analysis-suicide-rates",
    },
    {
      imageSrc: "/assets/img/proyectos/clasificador_tumores.png",
      imageAlt: "proyecto10",
      title: "proyecto10",
      description: "descripcion10",
      language:["Python", "IA", "Kaggle"],
      projectUrl: "https://www.kaggle.com/code/lcosioa/brain-tumor-classificator",
    },
    {
      imageSrc: "/assets/img/proyectos/estudiantes.png",
      imageAlt: "proyecto11",
      title: "proyecto11",
      description: "descripcion11",
      language:["Python", "IA", "Kaggle"],
      projectUrl: "https://www.kaggle.com/code/lcosioa/student-performance-notebook",
    },
    {
      imageSrc: "/assets/img/proyectos/powerBi.png",
      imageAlt: "proyecto12",
      title: "proyecto12",
      description: "descripcion12",
      language:["Power Bi", "M"],
      projectUrl: "",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 150;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const scrollToPosition = targetPosition - offset;

        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });
      }
    };

    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = `👀 ${t("vuelva")}`;
      } else {
        document.title = originalTitle;
      }
    };

    // Scroll listener
    window.addEventListener("scroll", handleScroll);

    // Smooth scroll links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // Visibility change listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <header className={`sticky top-0 z-50 transition-all duration-300 py-7 px-0 ${
        scrolled ? "bg-[#9D85FF] shadow-lg" : "bg-transparent "
      }`}>
        <div className="flex items-center justify-between px-12 h-6">
          <a href="#home" className="flex items-center text-primary hover:text-secondary">
            <img rel="icon" src="/assets/img/serpienteMorada.ico" alt="Icono" className="w-10 h-10"/> 
            <span className="text-3xl font-bold ml-2 ">Lucosiar</span>
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="md:hidden flex flex-col justify-between w-8 h-6 relative">
              <span className={`block h-[3px] w-8 bg-gray-400 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
              <span className={`block h-[3px] w-8 bg-gray-400 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-[3px] w-8 bg-gray-400 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </button>

          </div>

          <nav className={`${menuOpen ? "block" : "hidden"} bg-[#212121] md:bg-transparent md:block absolute top-full left-0 w-full md:static md:w-auto`}>
            <ul className="flex flex-col items-center md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li><a href="#home" className="text-white text-xl">{t("home")}</a></li>
              <li><a href="#about-me" className="text-white text-xl">{t("sobre_mi")}</a></li>
              <li><a href="#experience" className="text-white text-xl">{t("timeline")}</a></li>
              <li><a href="#projects" className="text-white text-xl">{t("proyectos")}</a></li>
              <li><a href="#tecnologies" className="text-white text-xl">{t("tecnologias")}</a></li>
              <li><ToggleButton/></li>
              <li></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        
        <div className="main-container">
          <section id="home">
            <div className="first-section">
              <div className="first-section-left text-center">
                <PCComponent/>
              </div>
              <div className="first-section-right text-center">
                <h1 className="text-white">{t("hola")}</h1>
                <h1 className="text-[#AE99FF] font-bold">{t("soy")}</h1>
                <h3 className="text-[#FFD700]">{t("full_stack")}</h3> 
                <h3 className="text-[#FFD700]">{t("desarrollador_ia")}</h3>
                
                <div className="flex flex-row justify-center items-center space-x-3 mt-4">
                  <div className="icon-container">
                    <a 
                      href="https://www.linkedin.com/in/lucia-cosio-artime-c16012022/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                    <svg width="800px" height="800px" viewBox="0 0 20 20" className="icon-social">
                      <rect x="0" fill="none" width="20" height="20"/>
                      <g>
                        <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"/>
                      </g>
                    </svg>
                    </a>
                  </div>
                  <div className="icon-container">
                    <a href="https://github.com/Lucosiar" target="_blank" rel="noopener noreferrer">
                      <svg 
                        viewBox="0 0 128 128" 
                        className="icon-social"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      <g fill="#000000">
                        <path 
                          fillRule="evenodd" 
                          clipRule="evenodd" 
                          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                        />
                        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                        />
                      </g>
                      </svg>
                    </a>
                  </div>
                  <div className="icon-container">
                    <a href="https://www.kaggle.com/lcosioa" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 128 128" className="icon-social" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M100.402 127.243c-.126.501-.627.752-1.502.752H82.168c-1.007 0-1.876-.438-2.632-1.317L51.91 91.531l-7.706 7.33v27.258c0 1.255-.628 1.881-1.88 1.881h-12.97c-1.254 0-1.88-.626-1.88-1.88V1.876c0-1.25.625-1.877 1.88-1.877h12.97c1.253 0 1.882.628 1.882 1.876v76.501l33.08-33.457c.878-.875 1.755-1.315 2.631-1.315h17.295c.75 0 1.25.315 1.504.937.252.753.19 1.316-.19 1.693L63.561 80.062l36.465 45.3c.499.502.625 1.128.38 1.881"/>
                  </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="about-me">
            <div className="">
              <TextAboutMe/>
            </div>

            <div className="hobbies-component">
              <HobbiesComponent/>
            </div>
          </section>

          <section id="experience">
            <div className="experience">
              <h3 className="text-[2.5rem] text-[#FFD700] pl-8 pb-8 mb-2">TimeLine</h3>
              <ExperienceComponent/>
            </div>
          </section>
          
          <section id="projects">
            <div className="projects">
              <h3 className="text-[2.5rem] text-[#FFD700] pl-8 mt-20">{t("proyectos")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {projects.map((project, index) => (
                  <CardProyects
                    key={index}
                    imageSrc={project.imageSrc}
                    imageAlt={project.imageAlt}
                    title={project.title}
                    description={project.description}
                    languages={project.language}
                    projectUrl={project.projectUrl}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="tecnologies">
            <div className="tecnologies">
              <h3 className="text-[2.5rem] text-[#FFD700] pl-8 mb-2">{t("tecnologias")}</h3>
              <TecnologiesComponent/>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <WaveComponent />
        <FooterComponent />
      </footer>

    </div>
  )
}

export default App
