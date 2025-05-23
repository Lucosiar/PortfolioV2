import React, { useState, useCallback  } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from "react-i18next";
import CardHobbiesComponent from './CardHobbiesComponent';
import './HobbieComponent.css';
import './TextAboutMe.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const HobbiesComponent = () => {
  const { t } = useTranslation();
  // RELACION DE LA FOTO 2:3
  const hobbies = [
    {
      imgSrc: '/assets/img/hobbies/av_v4-10.jpg',
      title: 'hob1_title',
      description: 'hob1_description',
    },
    {
      imgSrc: '/assets/img/hobbies/videojuegos.jpeg',
      title: 'hob2_title',
      description: 'hob2_description',
    },
    {
      imgSrc: '/assets/img/hobbies/av_v4-10.jpg',
      title: 'hob3_title',
      description: 'hob3_description',
    },
    {
      imgSrc: '/assets/img/hobbies/softball.jpg',
      title: 'hob4_title',
      description: 'hob4_description', 
    },
    {
      imgSrc: '/assets/img/hobbies/programacion.jpeg',
      title: 'hob5_title',
      description: 'hob5_description',
    },
    {
      imgSrc: '/assets/img/hobbies/estudiar.jpeg',
      title: 'hob6_title',
      description: 'hob6_description',
    },
    {
      imgSrc: '/assets/img/hobbies/comer.jpeg',
      title: 'hob7_title',
      description: 'hob7_description',
    },
    {
      imgSrc: '/assets/img/hobbies/coche_v2-8.jpg',
      title: 'hob8_title',
      description: 'hob8_description',
    },
    {
      imgSrc: '/assets/img/hobbies/modelismo.jpeg',
      title: 'hob9_title',
      description: 'hob9_description',
    },
    {
      imgSrc: '/assets/img/hobbies/av_v4-10.jpg',
      description: 'hob10_description',
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
  
  const [centerImage, setCenterImage] = useState('/assets/img/hobbies/proyecto.png');
  const [selectedHobby, setSelectedHobby] = useState(hobbies[0]);

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
    onHover: useCallback((event, chartElement) => {
      if (chartElement.length > 0) {
        const index = chartElement[0].index;
        if (index !== hobbies.indexOf(selectedHobby)) {
          const newHobby = hobbies[index];
          if (newHobby !== selectedHobby) {
            setCenterImage(getImageForHobby(index));
            setSelectedHobby(newHobby);
          }
        }
      }
    }, [hobbies]),
  };

  const getImageForHobby = (index) => {
    switch (index) {
      case 0:
        return '/assets/img/hobbies/libro-comico.png';
      case 1:
        return '/assets/img/hobbies/consola-de-juego.png';
      case 2:
        return '/assets/img/hobbies/camara-de-fotos.png';
      case 3:
        return '/assets/img/hobbies/beisbol.png';
      case 4:
        return '/assets/img/hobbies/proyecto.png';
      case 5:
        return '/assets/img/hobbies/aprender-en-linea.png';
      case 6:
        return '/assets/img/hobbies/buenas-vibraciones.png';
      case 7:
        return '/assets/img/hobbies/carreras.png';
      case 8:
        return '/assets/img/hobbies/piezas.png';
      default:
        return '/assets/img/hobbies/proyecto.png';
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
                title={t(selectedHobby.title)}
                description={t(selectedHobby.description)}
                imageOnLeft={true}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HobbiesComponent;

