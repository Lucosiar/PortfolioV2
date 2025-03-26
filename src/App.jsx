import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const projects=[
    /* `Pequeña descripción de cada proycto y que queden todas mas o menos en la misma linea. No hablar en primera persona. */
    {
      imageSrc: "/src/assets/img/proyectos/piedra_papel_tijeraaas.png",
      imageAlt: "Piedra Papel Tijera",
      title: "Piedra Papel Tijera",
      description: "El tradicional Piedra, Papel y Tijera, se juega contra un modelo de inteligencia artificial programado para reconocer el gesto que hagas en la cámara y determinar si has ganado o perdido.",
      language:["Django", "HTML", "CSS", "JavaScript"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/dhhotel.png",
      imageAlt: "Gestor de Hoteles",
      title: "Gestor de Hoteles",
      description: "Propuesta de Nacho sobre una API gestora de hoteles. Mi objetivo fue crear una lading page para visualizar la página del hotel. En caso de tener el back, es posible hacer reservas, iniciar sesión y gestionar las habitaciones.",
      language:["Django", "React", "TailwindCSS"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/tictactoe.png",
      imageAlt: "TicTacToe",
      title: "Tic Tac Toe",
      description: "En esta página web encontrarás dos formas diferentes de jugar al 3 en raya. El UltimateTicTacToe se compone de nueve tableros del tres en raya, puedes competir con amigos o jugar contra la IA.",
      language:["Django", "React"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/efi_cura.png",
      imageAlt: "Efi-Cura",
      title: "Efi-Cura",
      description: "Aplicación para la gestión de medicamentos, citas médicas, incluyendo horarios, dosis, etc. Incluye también un historial de síntomas. La aplicación no está terminada, fue mi proyecto de FP DAM.",
      language:["Java", "SQLite", "Android Studio"], 
    },
    {
      imageSrc: "/src/assets/img/proyectos/portfolio.png",
      imageAlt: "Antiguo Portfolio",
      title: "Antiguo Portfolio",
      description: "Lo desarrollé en Django sin casi conocimientos de front. Contiene descripción sobre mí, mis habilidades, proyectos y apartado de contacto. Puede que no sea perfecto pero fue mi primer proyecto con apartado de frontend.",
      language:["Django", "HTML", "CSS", "JavaScript"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/notely.png",
      imageAlt: "",
      title: "Notes",
      description: "Es la primera fase de un proyecto. La aplicación te ayuda a gestionar tus rutinas y eventos. La segunda fase del proyecto es crear un hardware externo para poder usarlo como asistente virtual.", 
      language:["Java", "Firebase", "Android Studio"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/acnh.png",
      imageAlt: "Análisis Animal Crossing",
      title: "Análisis Animal Crossing",
      description: "Analisis sobre los peces en el juego Animal Crossing. Calculé el tiempo o días que un jugador debería jugar para capturar todos los peces. Depende de la habilidad de cada jugador y las cañas que usen.",
      language:["Python", "IA", "Kaggle"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/hamilton_records.png",
      imageAlt: "Análisis Hamilton",
      title: "Análisis Hamilton",
      description: "Analisis sobre Hamilton para homenajear a su nueva trayectoria. Después de 14 años en Mercedes, abre una nueva era con Ferrari. Este proyecto analiza los records de Hamilton a lo largo de su trayectoria por la F1.",
      language:["Python", "IA", "Kaggle"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/suicidios.png",
      imageAlt: "Análisis de suicidios",
      title: "Análisis de suicidios",
      description: "Es un estudio sobre los suicidios entre 1990 y 2022. Se realizo en función del país, los años, edades, sexo, etc. He limpiado los datos y elaborado una gráficas con el propósito de exponer la cantidad de suicidios en el mundo.",
      language:["Python", "IA", "Kaggle"],
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
              <li><a href="#about-me" className="text-white text-xl">Sobre mí</a></li>
              <li><a href="#experience" className="text-white text-xl">TimeLine</a></li>
              <li><a href="#projects" className="text-white text-xl">Proyectos</a></li>
              <li><a href="#tecnologies" className="text-white text-xl">Tecnologías</a></li>
              <li><a href="#certifies" className="text-white text-xl">Certificados</a></li>
              <li><a href="#contact" className="text-white text-xl">Contacto</a></li>
              <li><ToggleButton/></li>
              <li></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        
        <div className="main-container">

          <div className="chatbot">
            <Chatbot />
          </div>

          <section id="home">
            <div className="first-section">
              <div className="first-section-left text-center">
                {/*<img src="/src/assets/img/codee.png" alt="Icono" className="imagen_first_section"/>*/}
                <PCComponent/>
              </div>
              <div className="first-section-right text-center">
                <h1>Hola</h1>
                <h1>soy Lucía Cosío Artime</h1>
                <h3>Full Stack</h3> 
                <h3>Desarrolladora IA</h3>
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
              <h3 className="text-3xl text-[#FFD700] pl-8 mt-20">Proyectos</h3>
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
              <h3 className="text-3xl text-[#FFD700] pl-8 mb-2">Tecnologías</h3>
              <TecnologiesComponent/>
            </div>
          </section>

          <section id="certifies">
            <div className="certifies">
              <h3 className="text-3xl text-[#FFD700] pl-8 mb-2">Certificados</h3>
            </div>
          </section>

          <section>
            <div className="contact">
              <h3 className="text-3xl text-[#FFD700] pl-8 mb-2">Contacto</h3>
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
