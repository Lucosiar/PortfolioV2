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

function App() {

  const projects=[
    /* `Pequeña descripción de cada proycto y que queden todas mas o menos en la misma linea. No hablar en primera persona. */
    {
      imageSrc: "/src/assets/img/proyectos/piedra_papel_tijerateta.png",
      imageAlt: "Piedra Papel Tijera",
      title: "Piedra Papel Tijera",
      description: "El tradicional juego de Piedra, Papel y Tijera, se juega contra un modelo de inteligencia artificial programado para reconocer el gesto que hagas en la cámara y determinar si has ganado o perdido.",
      language:["Python", "HTML", "CSS", "JavaScript"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/dhhotel.png",
      imageAlt: "Gestor de Hoteles",
      title: "Gestor de Hoteles",
      description: "Propuesta de Nacho sobre una API gestora de hoteles. Mi objetivo fue crear una lading page para visualizar la página del hotel. En caso de tener el back, es posible hacer reservas, iniciar sesión y gestionar las habitaciones.",
      language:["Python", "React", "TailwindCSS"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/efi_cura.png",
      imageAlt: "Efi-Cura",
      title: "Efi-Cura",
      description: "Aplicación para la gestión de medicamentos, citas médicas, incluyendo horarios, dosis, etc. Incluye también un historial de síntomas. La aplicación no está terminada, fue mi proyecto de FP DAM.",
      language:["Java"], 
    },
    {
      imageSrc: "/src/assets/img/proyectos/suicidios.png",
      imageAlt: "Análisis de suicidios",
      title: "Análisis de suicidios",
      description: "Es un estudio sobre los suicidios entre 1990 y 2022. Se realizo en función del país, los años, edades, sexo, etc. He limpiado los datos y elaborado una gráficas con el propósito de exponer la cantidad de suicidios en el mundo.",
      language:["Python", "IA"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/73shots_so.png",
      imageAlt: "",
      title: "Notes",
      description: "Es la primera fase de un proyecto. La aplicación te ayuda a gestionar tus rutinas y eventos. La segunda fase del proyecto es crear un hardware externo para poder usarlo como asistente virtual.", 
      language:["Java"],
    },
    {
      imageSrc: "/src/assets/img/proyectos/acnh.png",
      imageAlt: "Análisis Animal Crossing",
      title: "Análisis Animal Crossing",
      description: "Estudio sobre los peces en el juego Animal Crossing. Calculé el tiempo o días que un jugador debería jugar para capturar todos los peces. Depende de la habilidad de cada jugador para capturar los peces y las cañas que usen.",
      language:["Python", "IA"],
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
      <header className="bg-black shadow-lg py-7 px-5 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between px-4 h-10">
          <a href="#home" className="flex items-center text-primary hover:text-secondary">
            <img rel="icon" src="/src/assets/img/serpienteMorada.ico" alt="Icono" className="w-10 h-10"/> 
            <span className="text-3xl font-bold ml-2 ">Lucosiar</span>
          </a>
          <div className="md:hidden">
            <button id="menu-toggle"
                          className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                      </svg>
            </button>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 h-10">
              <li><a href="#about-me" className="hover:text-primary transition-colors duration-300 text-2xl">Sobre mí</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors duration-300 text-2xl">TimeLine</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors duration-300 text-2xl">Proyectos</a></li>
              
              <li><a href="#tecnologies" className="hover:text-primary transition-colors duration-300 text-2xl">Tecnologías</a></li>
              <li><a href="#certifies" className="hover:text-primary transition-colors duration-300 text-2xl">Certificados</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors duration-300 text-2xl">Contacto</a></li>
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
                {/*<h3>Ayudo a las startups a digitalizar y automatizar procesos.  </h3>*/}
              </div>
            </div>
          </section>
          

          <section id="about-me">
            <div className="about-me">
              <TextAboutMe/>
            </div>

            <div className="hobbies">
              <HobbiesComponent/>
            </div>
          </section>

          <section id="experience">
            <div className="experience">
              <h3 className="text-3xl text-[#FFD700] pl-8 mb-2">TimeLine</h3>
              <h4 className="pl-8">Mi linea del tiempo</h4>
              <ExperienceComponent/>
            </div>
          </section>
          
          <section id="projects">
            <div className="projects">
              <h3 className="text-3xl text-[#FFD700] pl-8 mt-10">Proyectos</h3>
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
              <h1>Contacto</h1>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <h1>FOOTER</h1>
      </footer>

    </div>
  )
}

export default App
