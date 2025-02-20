import React from 'react';
import './ExperienceComponent.css';

const ExperienceComponent = () => {

    const experiences = [
        {
            title: "Curso de PowerBi",
            dateRange: "Febrero 2025 - Abril 2025",
            where: "IBM",
            description: "",
            type: "education"
        },
        {
            title: "Scrum Master",
            dateRange: "Diciembre 2024 - Enero 2025",
            where: "Tokio School",
            description: "",
            type: "education"
        },
        {
            title: "Freelance Developer",
            dateRange: "Septiembre 2023 - Presente",
            where: "",
            description: "Automatización de pequeñas tareas con IA, aplicaciones de escritorio y móviles para pymes de diferentes sectores.",
            type: "work"
        },
        {
            title: "Junior Developer Prácticas",
            dateRange: "Octubre 2024 - Febrero 2025",
            where: "Daroma Innovation SL",
            description: "Automatización de tareas para pequeñas empresas con n8n, Google Cloud (Python).",
            type: "work"
        },
        {
            title: "Especialización en IA, ML y DL",
            dateRange: "Junio 2023 - Junio 2025",
            where: "Tokio School",
            description: "",
            type: "education"
        },
        {
            title: "Junior Developer Prácticas",
            dateRange: "Marzo 2023 - Junio 2023",
            where: "Sico SL",
            description: "Actualizar y corregir funciones de una página web que tenía la empresa, hecha con Angular y .NET.",
            type: "work"
        },
        {
            title: "Técnico superior desarrollo aplicaciones multiplataforma",
            dateRange: "Septiembre 2021 - Junio 2023",
            where: "TuniverS Formación",
            description: "",
            type: "education"
        },
      ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {experiences.map((experience, index) => (
        <div key={index} className={`timeline-item ${experience.type}`}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="text-lg font-bold">{experience.title}</h3>
            <p>{experience.where}</p>
            <p className="text-sm text-gray-500">{experience.dateRange}</p>
            <p className="text-gray-700">{experience.description}</p>
          </div>
        </div>
         ))}
    </div>
  );
};

export default ExperienceComponent;