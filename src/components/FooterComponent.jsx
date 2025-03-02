
function FooterComponent() {
  return (
    <div className="about-us relative z-10 mt-10 p-12">
      <h1 className="text-yellow-400">Lucía Cosío Artime</h1>
      <h2 className="">Full Stack Developer</h2>
      <h2 className="">AI Developer</h2>
      <img rel="icon" src="/src/assets/img/serpienteMorada.ico" alt="Icono" className="w-10 h-10"/> 
    <div className="menu_footer">
      <ul className="flex justify-center gap-6 list-none p-0 mb-4 text-yellow-600">
        <li><a href="#home-principal" className="hover:text-primary transition-colors duration-300">Inicio</a></li>
        <li><a href="#about-me" className="hover:text-primary transition-colors duration-300 ">Sobre mí</a></li>
        <li><a href="#experience" className="hover:text-primary transition-colors duration-300">TimeLine</a></li>
        <li><a href="#projects" className="hover:text-primary transition-colors duration-300">Proyectos</a></li>
        <li><a href="#tecnologies" className="hover:text-primary transition-colors duration-300">Tecnologías</a></li>
        <li><a href="#certifies" className="hover:text-primary transition-colors duration-300">Certificados</a></li>
        <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contacto</a></li>
      </ul>

      <div className="flex justify-center mb-5">
        <div className="grid grid-cols-2 w-1xl gap-10"> 
          <div className="resources-container">
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">Resources</h2>
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
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">Follow me</h2>
            <ul className="text-gray-300 font-medium">
              <li className="mb-4">
                <a href="https://github.com/Lucosiar" className="hover:bg-indigo-700">Github</a>
              </li>
              <li className="mb-4">
                <a href="www.linkedin.com/in/lucia-cosio-artime-c16012022" className="hover:bg-indigo-700">Linkedin</a>
              </li>
              <li>
                <a href="https://www.kaggle.com/lcosioa" className="hover:bg-indigo-700">Kaggle</a>
              </li>
            </ul>
          </div>              
        </div>

      </div>
      <p className="text-sm mt-4 mb-2 text-center">
          &copy; 2025 Lucosiar&reg; - Todos los derechos reservados
      </p>
    </div>
  </div>
  );
};

export default FooterComponent;
