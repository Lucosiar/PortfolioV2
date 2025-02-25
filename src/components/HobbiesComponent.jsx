import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import CardHobbiesComponent from './CardHobbiesComponent';
import './TextAboutMe.css';

// Registrar los elementos necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

const HobbiesComponent = () => {

  // RELACION DE LA FOTO 2:3
  const hobbies = [
    {
      imgSrc: '/src/assets/img/hobbies/av_v4-10.jpg',
      title: 'Leer y escuchar',
      description: 'Disfruto leyendo mangas, historias de aventuras y ciencia ficción. Además suelo leer libros sobre programación y desarrollo profesional. También me gusta leer blogs y escuchar postcast sobre nuevas tecnologías.',
    },
    {
      imgSrc: '/src/assets/img/hobbies/videojuegos.jpeg',
      title: 'Videojuegos',
      description: 'Me encanta jugar videojuegos, simuladores de carreras, de historia como Assasin\'s Creed, Far Cry y otros. Además, soy una fanática de los juegos de Nintendo.',
    },
    {
      imgSrc: '/src/assets/img/hobbies/av_v4-10.jpg',
      title: 'Fotografía',
      description: 'Me apasiona el mundo de la fotografía. Me gusta hacer fotos cuando voy de viaje, en eventos, o en situaciones diarias. Suelo juntar varios gustos con la fotografía ya que a veces me dedico a fotografiar coches.',
    },
    {
      imgSrc: '/src/assets/img/hobbies/softball.jpg',
      title: 'Softball',
      description: 'LLevo aproximadamente desde el 2016 jugando este deporte. Solemos entrenar todas las semanas y de vez en cuando viajar por la península jugando contra otros equipos y en otras competiciones. Es un mundo poco conocido pero apasionante.', 
    },
    {
      imgSrc: '/src/assets/img/hobbies/programacion.jpeg',
      title: 'Proyectos personales',
      description: 'A parte del trabajo, me gusta dedicar mi tiempo a proyectos personales. No solo de IA, sino que también creo páginas web, aplicaciones móviles, arduinos, etc. Tengo un par de amigos con lo que desarrollamos aplicaciones web y móviles para luego compartirlas.',
    },
    {
      imgSrc: '/src/assets/img/hobbies/estudiar.jpeg',
      title: 'Estudios',
      description: 'No me basta con lo que sé, me gusta seguir aprendiendo y expandir mis horizontes. Soy una persona autodidacta pero también suelo apuntarme a cursos.',
    },
    {
      imgSrc: '/src/assets/img/hobbies/comer.jpeg',
      title: 'Familia y amigos',
      description: 'Suelo pasar tiempo con mi familia y amigos. Ya sea para ir a comer por ahí, jugar algún deporte, ir a la playa, animar al equipo de fútbol de mi ciudad, etc.',
    },
    {
      imgSrc: '/src/assets/img/hobbies/coche_v2-8.jpg',
      title: 'Coches',
      description: 'Soy una apasionada del motor y de la gasolina. Me gusta la fórmula 1, los rallyes, la carreras de resistencia. Además, en el norte de España se lleva mucho los rallyes y las quedadas para mostrar los coches.',
    },
    {
      imgSrc: '/src/assets/img/hobbies/modelismo.jpeg',
      title: 'Modelismo',
      description: 'Sonará extraño pero también me gusta el modelismo. Suelo centrarme en el montaje de aviones y coches. Es un hobbie que no mucha gente hace pero es entretenido y relajante.',
    },
    {
      imgSrc: '/src/assets/img/hobbies/av_v4-10.jpg',
      description: 'Si quieres saber más sobre mis hobbies, puedes pasar el ratón por encima del donut y obtener más información.',
    },
  ];

  const data = {
    labels: ['Leer', 'Videojuegos', 'Fotografía', 'Softball', 'Proyectos personales', 'Estudios', 'Familia y Amigos', 'Coches', 'Modelismo'],
    datasets: [
      {
        data: [5, 5, 5, 13, 24, 28, 14, 5, 1],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
          '#DA8FF3', '#ff9000', '#8FE388', '#CA2D2B', '#7578A9'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
          '#DA8FF3', '#ff9000', '#8FE388', '#CA2D2B', '#7578A9'],
      },
    ],
  };
  
  const [centerImage, setCenterImage] = useState('/src/assets/img/hobbies/proyecto.png');
  const [selectedHobby, setSelectedHobby] = useState(hobbies[9]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = data.labels[tooltipItem.dataIndex];
            const value = data.datasets[0].data[tooltipItem.dataIndex];
            return `${label}: ${value}%`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length > 0) {
        const index = chartElement[0].index;
        setCenterImage(getImageForHobby(index));
        setSelectedHobby(hobbies[index]);
      }
    },
  };

  const getImageForHobby = (index) => {
    switch (index) {
      case 0:
        return '/src/assets/img/hobbies/libro-comico.png';
      case 1:
        return '/src/assets/img/hobbies/consola-de-juego.png';
      case 2:
        return '/src/assets/img/hobbies/camara-de-fotos.png';
      case 3:
        return '/src/assets/img/hobbies/beisbol.png';
      case 4:
        return '/src/assets/img/hobbies/proyecto.png';
      case 5:
        return '/src/assets/img/hobbies/aprender-en-linea.png';
      case 6:
        return '/src/assets/img/hobbies/buenas-vibraciones.png';
      case 7:
        return '/src/assets/img/hobbies/carreras.png';
      case 8:
        return '/src/assets/img/hobbies/piezas.png';
      default:
        return '/path/to/default-image.png';
    }
  };

  return (
    <div className="container-Hobbies">
      <div className="text-container pr-5">
        <h2>Hobbies</h2>
        <div className="hobbies-layout">
          <div className="doughnut-container">
            <div className="center-image">
              <img src={centerImage} alt="Center" />
            </div>
            <Doughnut data={data} options={options} />
          </div>
          {selectedHobby && (
            <div className="cards-container-hobbies">
              <CardHobbiesComponent
                imgSrc={selectedHobby.imgSrc}
                title={selectedHobby.title}
                description={selectedHobby.description}
                imageOnLeft={true} // Puedes cambiar esto según tus necesidades
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HobbiesComponent;

