// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        /* Bienvenida  */
        "hola": "Hola",
        "soy": "Soy Lucía Cosío Artime",
        "full_stack": "Full Stack",
        "desarrollador_ia": "Desarrolladora IA",


        /* Sobre mí  */
        "quien_soy": "Soy una apasionada de la informática con conocimiento en el mundo del desarrollo fullstack e IA. He hecho diversas aplicaciones móviles, páginas web, apis y modelos de IA. Así como visualizaciones de los datos con diversas herramientas. Me motiva aprender y explorar nuevas tecnologías, buscando siempre un nuevo reto.",

        /* Hobbies  */
        "hob1_title": "Leer y escuchar",
        "hob1_description": "Disfruto leyendo mangas, historias de aventuras y ciencia ficción. Además suelo leer libros sobre programación y desarrollo profesional. También me gusta leer blogs y escuchar postcast sobre nuevas tecnologías.",

        "hob2_title": "Videojuegos",
        "hob2_description": "Me encanta jugar videojuegos, simuladores de carreras, de historia como Assasin\'s Creed, Far Cry y otros. Además, soy una fanática de los juegos de Nintendo.",

        "hob3_title": "Fotografía",
        "hob3_description": "Me apasiona el mundo de la fotografía. Me gusta hacer fotos cuando voy de viaje, en eventos, o en situaciones diarias. Suelo juntar varios gustos con la fotografía ya que a veces me dedico a fotografiar coches.",

        "hob4_title": "Softball",
        "hob4_description": "LLevo aproximadamente desde el 2016 jugando este deporte. Solemos entrenar todas las semanas y de vez en cuando viajar por la península jugando contra otros equipos y en otras competiciones. Es un mundo poco conocido pero apasionante.",

        "hob5_title": "Proyectos personales",
        "hob5_description": "A parte del trabajo, me gusta dedicar mi tiempo a proyectos personales. No solo de IA, sino que también creo páginas web, aplicaciones móviles, arduinos, etc. Tengo un par de amigos con lo que desarrollamos aplicaciones web y móviles para luego compartirlas.",

        "hob6_title": "Estudios",
        "hob6_description": "No me basta con lo que sé, me gusta seguir aprendiendo y expandir mis horizontes. Soy una persona autodidacta pero también suelo apuntarme a cursos.",

        "hob7_title": "Familia y amigos",
        "hob7_description": "Suelo pasar tiempo con mi familia y amigos. Ya sea para ir a comer por ahí, jugar algún deporte, ir a la playa, animar al equipo de fútbol de mi ciudad, etc.",

        "hob8_title": "Coches",
        "hob8_description": "Soy una apasionada del motor y de la gasolina. Me gusta la fórmula 1, los rallyes, la carreras de resistencia. Además, en el norte de España se lleva mucho los rallyes y las quedadas para mostrar los coches.",

        "hob9_title": "Maquetas",
        "hob9_description": "Sonará extraño pero también me gusta el montaje de maquetas. Suelo centrarme en el montaje de aviones y coches. Es un hobbie que no mucha gente hace pero es entretenido y relajante.",
        
        "hob10_description": "Si quieres saber más sobre mis hobbies, puedes pasar el ratón por encima o clickar en el donut y obtener más información.",


        /* TimeLine  */
        "estudios": "Estudios",
        "experiencia": "Experiencia",

        "exp1_title": "Desarrollador Freelance",
        "exp1_date": "Febrero 2025 - Presente",
        "exp1_where": "Llana Consultores",
        "exp1_desc": "Desarrollé una api que rellena etiquetas en un PPTX automáticamente con los datos enviados por ChatGPT. Automatización de unificación de varios Excels con un programa en Python. Visualización y análisis de datos con Power Bi en la empresa.",
        
        "exp2_title": "Curso de PowerBi",
        "exp2_date": "Febrero 2025 - Abril 2025",
        "exp2_where": "IBM",
        "exp2_desc": "Aprendí a visualizar datos y crear dashboards completos con Power BI.",

        "exp3_title": "Scrum Master",
        "exp3_date": "Diciembre 2024 - Enero 2025",
        "exp3_where": "Tokio School",
        "exp3_desc": "Aprendí como gestionar y sacarle valor a cada persona en el equipo.",

        "exp4_title": "Junior AI Developer",
        "exp4_date": "Octubre 2024 - Febrero 2025",
        "exp4_where": "Daroma Innovation SL",
        "exp4_desc": "Desarrollé un clasificador de correos para la empresa con N8N, además de gestionar el tratamiento desde la página web a la base de datos. Desarrollé una api que refactoriza el texto que el usuario intruce para pasarselo a otra IA y que esté bien estructurado con Google Cloud (Python). Desarrollé una api que rellena las etiquetas de un PPTX automaticamente con los datos de la base de datos.",
        
        "exp5_title": "Especialización en IA, ML y DL",
        "exp5_date": "Junio 2023 - Junio 2025",
        "exp5_where": "Tokio School",
        "exp5_desc": "Aprendí todo lo relacionado con la creación de las inteligenciar artificiales, desde modelos simples hasta modelos complejos junto con las redes neuronales y los algoritmos de aprendizaje automático.",
        
        "exp6_title": "Freelance Developer",
        "exp6_date": "Septiembre 2023 - Presente",
        "exp6_where": "",
        "exp6_desc": "Automatización de pequeñas tareas con un programa en Python. Cree una aplicación de teléfono que ayuda al usuario a contar monedas sin necesidad de usar una calculadora. Cree una aplicación de  escritorio que ayuda a juntar PDF, fotos y otros formatos de archivos en un solo archivo. Todo para diferentes empresas de diferentes sectores.",
        
        "exp7_title": "Junior FullStack Developer",
        "exp7_date": "Marzo 2023 - Junio 2023",
        "exp7_where": "Sico SL",
        "exp7_desc": "Actualizar, corregir y añadir funcionalidades a una página web que tenía la empresa, hecha con Angular y .NET.",

        "exp8_title": "Técnico superior desarrollo aplicaciones multiplataforma",
        "exp8_date": "Septiembre 2021 - Junio 2023",
        "exp8_where": "TuniverS Formación",
        "exp8_desc": "",

        /* Proyectos  */
        "proyecto1": "Piedra Papel Tijera",
        "proyecto2": "Gestor de Hoteles",
        "proyecto3": "Tic Tac Toe",
        "proyecto4": "Efi-Cura",
        "proyecto5": "Antiguo Portfolio",
        "proyecto6": "Notely",
        "proyecto7": "Análisis Animal Crossing",
        "proyecto8": "Análisis Hamilton",
        "proyecto9": "Análisis de suicidios",
        "proyecto10": "Análisis de tumores cerebrales",
        "proyecto11": "Análisis estudiantil", 
        "proyecto12": "Dashboard PowerBi",

        "descripcion1": "El tradicional Piedra, Papel y Tijera, se juega contra un modelo de inteligencia artificial programado para reconocer el gesto que hagas en la cámara y determinar si has ganado o perdido.",
        "descripcion2": "Propuesta de Nacho sobre una API gestora de hoteles. Mi objetivo fue crear una landing page para visualizar la página del hotel. En caso de tener el back, es posible hacer reservas, iniciar sesión y gestionar las habitaciones.",
        "descripcion3": "En esta página web encontrarás dos formas diferentes de jugar al 3 en raya. El UltimateTicTacToe se compone de nueve tableros del tres en raya, puedes competir con amigos o jugar contra la IA.",
        "descripcion4": "Aplicación para la gestión de medicamentos, citas médicas, incluyendo horarios, dosis, etc. Incluye también un historial de síntomas. La aplicación no está terminada, fue mi proyecto de FP DAM.",
        "descripcion5": "Lo desarrollé en Django sin casi conocimientos de front. Contiene descripción sobre mí, mis habilidades, proyectos y apartado de contacto. Puede que no sea perfecto pero fue mi primer proyecto con apartado de frontend.",
        "descripcion6": "Es la primera fase de un proyecto. La aplicación te ayuda a gestionar tus rutinas y eventos. La segunda fase del proyecto es crear un hardware externo para poder usarlo como asistente virtual.",
        "descripcion7": "Análisis sobre los peces en el juego Animal Crossing. Calculé el tiempo o días que un jugador debería jugar para capturar todos los peces. Depende de la habilidad de cada jugador y las cañas que usen.",
        "descripcion8": "Análisis sobre Hamilton para homenajear a su nueva trayectoria. Después de 14 años en Mercedes, abre una nueva era con Ferrari. Este proyecto analiza los récords de Hamilton a lo largo de su trayectoria por la F1.",
        "descripcion9": "Es un estudio sobre los suicidios entre 1990 y 2022. Se realizó en función del país, los años, edades, sexo, etc. He limpiado los datos y elaborado unas gráficas con el propósito de exponer la cantidad de suicidios en el mundo.",
        "descripcion10": "Se compone de una red convolucional neuronal que se entrena con imágenes de varios tipos de tumores. El objetivo es clasificar el tipo de tumor en función de las características de la imagen.",
        "descripcion11": "Explora el desempeño de los estudiantes en función de diversas características. Usa datos de estudiantes de secundaria y aplicamos un análisis exploratorio (EDA) para identificar patrones y correlaciones.",
        "descripcion12": "Proyecto de fin de curso Power BI. Limpieza de datos, visualización de datos y análisis exploratorio.",

        /* Tecnologías  */
        "desde": "Desde",
        "años": "años",

        /* Certificados  */

        /* Contacto  */

        /* Footer / Header  */
        "sobre_mi": "Sobre mí",
        "timeline": "TimeLine",
        "proyectos": "Proyectos",
        "tecnologias": "Tecnologías",
        "certificados": "Certificados",
        "contacto": "Contacto",
      }
    },
    en: {
      translation: {
        /* Bienvenida  */
        "hola": "Hello",
        "soy": "I'm Lucía Cosío Artime",
        "full_stack": "Full Stack",
        "desarrollador_ia": "IA Developer",

        /* Sobre mí  */
        "quien_soy": "I am a passionate computer scientist with knowledge in the world of fullstack development and AI. I have made several mobile applications, web pages, apis and AI models. As well as data visualizations with various tools. I am motivated to learn and explore new technologies, always looking for a new challenge.",

        /* Hobbies  */
        "hob1_title": "Reading and Listening",
        "hob1_description": "I enjoy reading manga, adventure stories, and science fiction. I also tend to read books on programming and professional development. I also like reading blogs and listening to podcasts about new technologies.",

        "hob2_title": "Video Games",
        "hob2_description": "I love playing video games, especially racing simulators and historical games like Assassin's Creed, Far Cry, and others. I'm also a big fan of Nintendo games.",

        "hob3_title": "Photography",
        "hob3_description": "I'm passionate about photography. I enjoy taking photos when I travel, at events, or in everyday situations. I often combine my love for other hobbies with photography, as I sometimes take photos of cars.",

        "hob4_title": "Softball",
        "hob4_description": "I've been playing this sport since 2016. We usually train every week and occasionally travel across the country to play against other teams and compete in other tournaments. It's a lesser-known but fascinating world.",

        "hob5_title": "Personal Projects",
        "hob5_description": "Besides work, I like to dedicate my time to personal projects. Not only AI-related, but I also create websites, mobile apps, Arduino projects, etc. I have a couple of friends with whom we develop web and mobile applications to share them.",

        "hob6_title": "Studies",
        "hob6_description": "I'm never satisfied with what I know; I like to keep learning and expand my horizons. I'm a self-taught person, but I also tend to sign up for courses.",

        "hob7_title": "Family and Friends",
        "hob7_description": "I like spending time with my family and friends, whether it's to go out to eat, play sports, go to the beach, or cheer for my city's soccer team, etc.",

        "hob8_title": "Cars",
        "hob8_description": "I'm passionate about motors and gasoline. I enjoy Formula 1, rallies, and endurance racing. Additionally, in the north of Spain, rallies and car meetups are very popular.",

        "hob9_title": "Model Building",
        "hob9_description": "It may sound strange, but I also enjoy building models. I focus on assembling airplanes and cars. It's a hobby that not many people do, but it's entertaining and relaxing.",

        "hob10_description": "If you want to know more about my hobbies, you can hover over or click on the donut to get more information.",

        /* TimeLine  */
        "studies": "Studies",
        "experience": "Experience",

        "exp1_title": "Freelance Developer",
        "exp1_date": "February 2025 - Present",
        "exp1_where": "Llana Consultores",
        "exp1_desc": "I developed an API that fills PPTX tags automatically with the data sent by ChatGPT. Automated the unification of multiple Excel files with a Python program. Data visualization and analysis with Power BI in the company.",

        "exp2_title": "Power BI Course",
        "exp2_date": "February 2025 - April 2025",
        "exp2_where": "IBM",
        "exp2_desc": "I learned to visualize data and create complete dashboards with Power BI.",

        "exp3_title": "Scrum Master",
        "exp3_date": "December 2024 - January 2025",
        "exp3_where": "Tokio School",
        "exp3_desc": "I learned how to manage and maximize the value of each team member.",

        "exp4_title": "Junior AI Developer",
        "exp4_date": "October 2024 - February 2025",
        "exp4_where": "Daroma Innovation SL",
        "exp4_desc": "I developed an email classifier for the company using N8N, in addition to managing data processing from the website to the database. I created an API that restructures user input text before passing it to another AI, ensuring proper formatting using Google Cloud (Python). I also developed an API that automatically fills PPTX tags with database data.",

        "exp5_title": "Specialization in AI, ML, and DL",
        "exp5_date": "June 2023 - June 2025",
        "exp5_where": "Tokio School",
        "exp5_desc": "I learned everything related to artificial intelligence development, from simple models to complex models, including neural networks and machine learning algorithms.",

        "exp6_title": "Freelance Developer",
        "exp6_date": "September 2023 - Present",
        "exp6_where": "",
        "exp6_desc": "Automated small tasks with a Python program. Created a mobile application that helps users count coins without using a calculator. Developed a desktop application that merges PDFs, images, and other file formats into a single document. Worked with various companies across different sectors.",

        "exp7_title": "Junior FullStack Developer",
        "exp7_date": "March 2023 - June 2023",
        "exp7_where": "Sico SL",
        "exp7_desc": "Updated, fixed, and added new functionalities to the company's website, which was built using Angular and .NET.",

        "exp8_title": "Higher Technician in Multi-platform Application Development",
        "exp8_date": "September 2021 - June 2023",
        "exp8_where": "TuniverS Formación",
        "exp8_desc": "",

        /* Proyectos  */
        "proyecto1": "Rock Paper Scissors",
        "proyecto2": "Hotel Manager",
        "proyecto3": "Tic Tac Toe",
        "proyecto4": "Efi-Cura",
        "proyecto5": "Old Portfolio",
        "proyecto6": "Notely",
        "proyecto7": "Animal Crossing Analysis",
        "proyecto8": "Hamilton Analysis",
        "proyecto9": "Suicide Analysis",
        "proyecto10": "Brain Tumor Analysis",
        "proyecto11": "Student Performance Analysis",
        "proyecto12": "Power BI Dashboard",

        "descripcion1": "The traditional Rock, Paper, Scissors game is played against an artificial intelligence model programmed to recognize the gesture you make in the camera and determine if you have won or lost.",
        "descripcion2": "Nacho's proposal for a hotel management API. My goal was to create a landing page to visualize the hotel's website. If the backend is available, it is possible to make reservations, log in, and manage rooms.",
        "descripcion3": "On this website, you will find two different ways to play Tic Tac Toe. The UltimateTicTacToe consists of nine Tic Tac Toe boards, where you can compete with friends or play against AI.",
        "descripcion4": "An application for managing medications, medical appointments, including schedules, doses, etc. It also includes a symptom history. The application is not finished; it was my FP DAM project.",
        "descripcion5": "I developed it in Django with little front-end knowledge. It contains a description about me, my skills, projects, and a contact section. It may not be perfect, but it was my first project with a front-end component.",
        "descripcion6": "This is the first phase of a project. The application helps you manage your routines and events. The second phase of the project is to create an external hardware device to use it as a virtual assistant.",
        "descripcion7": "Analysis of fish in the Animal Crossing game. I calculated the time or days a player should play to catch all the fish. It depends on each player's skill and the fishing rods they use.",
        "descripcion8": "An analysis of Hamilton to honor his new career path. After 14 years at Mercedes, he begins a new era with Ferrari. This project analyzes Hamilton's records throughout his F1 career.",
        "descripcion9": "A study on suicides between 1990 and 2022. It was conducted based on country, years, ages, gender, etc. I cleaned the data and created graphs to expose the number of suicides worldwide.",
        "descripcion10": "It consists of a convolutional neural network trained with images of various types of tumors. The goal is to classify the type of tumor based on image characteristics.",
        "descripcion11": "It explores student performance based on various characteristics. It uses secondary school student data and applies exploratory data analysis (EDA) to identify patterns and correlations.",
        "descripcion12": "Final project for the Power BI course. Data cleaning, data visualization, and exploratory data analysis.",

        /* Tecnologías  */
        "desde": "Since",
        "años": "years",

        /* Certificados  */

        /* Contacto  */

        /* Footer / Header  */
        "sobre_mi": "About me",
        "timeline": "TimeLine",
        "proyectos": "Projects",
        "tecnologias": "Technologies",
        "certificados": "Certifications",
        "contacto": "Contact",

      },
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
