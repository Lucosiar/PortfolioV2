import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TextAboutMe from './components/TextAboutMe';
import HobbiesComponent from './components/HobbiesComponent';
import CardProyects from './components/CardProyects';
import './App.css'
import ToggleButton from './components/SwitchComponent';
import PCComponent from './components/PCComponent';
import ExperienceComponent from './components/ExperienceComponent';
import TecnologiesComponent from './components/TecnologiesComponent';
import Chatbot from './components/ChatBot';
import ContacComponent from './components/ContacComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const projects=[
    /* `Pequeña descripción de cada proycto y que queden todas mas o menos en la misma linea. No hablar en primera persona. */
    {
      imageSrc: "/src/assets/img/proyectos/piedra_papel_tijeraaas.png",
      imageAlt: "proyecto1",
      title: "proyecto1",
      description: "descripcion1",
      language:["Django", "HTML", "CSS", "JavaScript"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/dhhotel.png",
      imageAlt: "proyecto2",
      title: "proyecto2",
      description: "descripcion2",
      language:["Django", "React", "TailwindCSS"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/tictactoe.png",
      imageAlt: "proyecto3",
      title: "proyecto3",
      description: "descripcion3",
      language:["Django", "React"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/efi_cura.png",
      imageAlt: "proyecto4",
      title: "proyecto4",
      description: "descripcion4",
      language:["Java", "SQLite", "Android Studio"], 
    },
    {
      imageSrc: "/src/assets/img/proyectos/portfolio.png",
      imageAlt: "proyecto5",
      title: "proyecto5",
      description: "descripcion5",
      language:["Django", "HTML", "CSS", "JavaScript"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/notely.png",
      imageAlt: "proyecto6",
      title: "proyecto6",
      description: "descripcion6", 
      language:["Java", "Firebase", "Android Studio"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/acnh.png",
      imageAlt: "proyecto7",
      title: "proyecto7",
      description: "descripcion7",
      language:["Python", "IA", "Kaggle"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/hamilton_records.png",
      imageAlt: "proyecto8",
      title: "proyecto8",
      description: "descripcion8",
      language:["Python", "IA", "Kaggle"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/suicidios.png",
      imageAlt: "proyecto9",
      title: "proyecto9",
      description: "descripcion9",
      language:["Python", "IA", "Kaggle"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/clasificador_tumores.png",
      imageAlt: "proyecto10",
      title: "proyecto10",
      description: "descripcion10",
      language:["Python", "IA", "Kaggle"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/estudiantes.png",
      imageAlt: "proyecto11",
      title: "proyecto11",
      description: "descripcion11",
      language:["Python", "IA", "Kaggle"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/suicidios.png",
      imageAlt: "proyecto12",
      title: "proyecto12",
      description: "descripcion12",
      language:["Power Bi", "M"],
    },
  ];

  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 150;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const scrollToPosition = targetPosition - offset;

        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);


  return (
    <div className="relative min-h-screen">
      {/*<header class="bg-[#9D85FF] shadow-lg py-7 px-5 sticky top-0 z-50 transition-all duration-300">*/}
      <header className="bg-black shadow-lg py-7 px-0 sticky top-0 z-50 transition-all duration-300">
        <div className="flex items-center justify-between px-12 h-6">
          <a href="#home" className="flex items-center text-primary hover:text-secondary">
            <img rel="icon" src="/src/assets/img/serpienteMorada.ico" alt="Icono" className="w-10 h-10"/> 
            <span className="text-3xl font-bold ml-2 ">Lucosiar</span>
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="md:hidden flex flex-col justify-between w-8 h-6 relative">
              <span className={`block h-[3px] w-8 bg-gray-400 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
              <span className={`block h-[3px] w-8 bg-gray-400 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-[3px] w-8 bg-gray-400 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </button>

          </div>

          <nav className={`${menuOpen ? "block" : "hidden"} md:block absolute top-full left-0 w-full bg-black shadow-lg md:static md:w-auto`}>
            <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li><a href="#about-me" className="text-white text-xl">{t("sobre_mi")}</a></li>
              <li><a href="#experience" className="text-white text-xl">{t("timeline")}</a></li>
              <li><a href="#projects" className="text-white text-xl">{t("proyectos")}</a></li>
              <li><a href="#tecnologies" className="text-white text-xl">{t("tecnologias")}</a></li>
              <li><a href="#certifies" className="text-white text-xl">{t("certificados")}</a></li>
              <li><a href="#contact" className="text-white text-xl">{t("contacto")}</a></li>
              <li><ToggleButton/></li>
              <li></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        
        <div className="main-container">

        {/** 
          <div className="chatbot">
            <Chatbot />
          </div>*/}

          <section id="home">
            <div className="first-section">
              <div className="first-section-left text-center">
                {/*<img src="/src/assets/img/codee.png" alt="Icono" className="imagen_first_section"/>*/}
                <PCComponent/>
              </div>
              <div className="first-section-right text-center">
                <h1>{t("hola")}</h1>
                <h1>{t("soy")}</h1>
                <h3>{t("full_stack")}</h3> 
                <h3>{t("desarrollador_ia")}</h3>
                <div>
                <div className="flex space-x-3">
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
                </div>
                </div>
                {/*<h3>Ayudo a las startups a digitalizar y automatizar procesos.  </h3>*/}
              </div>
            </div>
          </section>
          
          <section id="about-me">
            <div className="">
              <TextAboutMe/>
            </div>

            <div className="">
              <HobbiesComponent/>
            </div>
          </section>

          <section id="experience">
            <div className="experience">
              <h3 className="text-3xl text-[#FFD700] pl-8 pb-8 mb-2">TimeLine</h3>
              <ExperienceComponent/>
            </div>
          </section>
          
          <section id="projects">
            <div className="projects">
              <h3 className="text-3xl text-[#FFD700] pl-8 mt-20">{t("proyectos")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {projects.map((project, index) => (
                  <CardProyects
                    key={index}
                    imageSrc={project.imageSrc}
                    imageAlt={project.imageAlt}
                    title={project.title}
                    description={project.description}
                    languages={project.language}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="tecnologies">
            <div className="tecnologies">
              <h3 className="text-3xl text-[#FFD700] pl-8 mb-2">{t("tecnologias")}</h3>
              <TecnologiesComponent/>
            </div>
          </section>

          <section id="certifies">
            <div className="certifies">
              <h3 className="text-3xl text-[#FFD700] pl-8 mb-2">{t("certificados")}</h3>
            </div>
          </section>

          <section>
            <div className="contact">
              <h3 className="text-3xl text-[#FFD700] pl-8 mb-2">{t("contacto")}</h3>
              <ContacComponent />
            </div>
          </section>
        </div>
      </main>

      <footer>
        <FooterComponent />
      </footer>

    </div>
  )
}

export default App
