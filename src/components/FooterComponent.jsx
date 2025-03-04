function FooterComponent() {
  return (
    <div className="about-us relative z-10 mt-10 p-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8"> {/* Cambiado a flex-col para dispositivos pequeños */}
        {/* Sección Izquierda */}
        <div className="flex items-center mb-8 md:mb-0"> {/* Añadido margen inferior para dispositivos pequeños */}
          <div className="mr-6">
            <h1 className="text-2xl text-yellow-400">Lucía Cosío Artime</h1>
            <h2 className="text-lg">Full Stack Developer</h2>
            <h2 className="text-lg">AI Developer</h2>
          </div>
          <img rel="icon" src="/src/assets/img/serpienteMorada.ico" alt="Icono" className="w-12 h-12 mr-8"/>
        </div>

        {/* Menú Central */}
        <ul className="flex flex-wrap justify-center gap-6 list-none p-0 mb-8 text-yellow-600">
          <li><a href="#home-principal" className="hover:text-primary transition-colors duration-300 text-lg">Inicio</a></li>
          <li><a href="#about-me" className="hover:text-primary transition-colors duration-300 text-lg">Sobre mí</a></li>
          <li><a href="#experience" className="hover:text-primary transition-colors duration-300 text-lg">TimeLine</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors duration-300 text-lg">Proyectos</a></li>
          <li><a href="#tecnologies" className="hover:text-primary transition-colors duration-300 text-lg">Tecnologías</a></li>
          <li><a href="#certifies" className="hover:text-primary transition-colors duration-300 text-lg">Certificados</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors duration-300 text-lg">Contacto</a></li>
        </ul>

        {/* Sección Derecha */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12 w-full md:w-auto mt-8 md:mt-0"> {/* Añadido flex-col y margen superior para dispositivos pequeños */}
          <div className="resources-container">
            <h2 className="mb-6 text-base font-semibold text-white uppercase">Resources</h2>
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
          </div>

          <div className="resources-container">
            <h2 className="mb-6 text-base font-semibold text-white uppercase">Follow me</h2>
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
      <p className="text-base mt-6 mb-4 text-center">
          &copy; 2025 Lucosiar&reg; - Todos los derechos reservados
      </p>
    </div>
  );
};

export default FooterComponent;
