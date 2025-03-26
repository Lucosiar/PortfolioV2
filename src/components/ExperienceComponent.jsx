import React from 'react';
import './ExperienceComponent.css';

const ExperienceComponent = () => {

    const experiences = [
        {
          title: "Freelance Developer",
          dateRange: "Febrero 2025 - Abril 2025",
          where: "Llana Consultores",
          description: "Desarrollé una api que rellena etiquetas en un PPTX automáticamente con los datos enviados por ChatGPT. Automatización de unificación de varios Excels con un programa en Python. Visualización y análisis de datos con Power Bi en la empresa.",
          type: "work"
        },
        {
            title: "Curso de PowerBi",
            dateRange: "Febrero 2025 - Abril 2025",
            where: "IBM",
            description: "Aprendí a visualizar datos y crear dashboards completos con Power Bi.",
            type: "education"
        },
        {
            title: "Scrum Master",
            dateRange: "Diciembre 2024 - Enero 2025",
            where: "Tokio School",
            description: "Aprendí como gestionar y sacarle valor a cada persona en el equipo.",
            type: "education"
        },
        {
            title: "Junior AI Developer",
            dateRange: "Octubre 2024 - Febrero 2025",
            where: "Daroma Innovation SL",
            description: "Desarrollé un clasificador de correos para la empresa con N8N, además de gestionar el tratamiento desde la página web a la base de datos. Desarrollé una api que refactoriza el texto que el usuario intruce para pasarselo a otra IA y que esté bien estructurado con Google Cloud (Python). Desarrollé una api que rellena las etiquetas de un PPTX automaticamente con los datos de la base de datos.",
            type: "work"
        },
        {
            title: "Especialización en IA, ML y DL",
            dateRange: "Junio 2023 - Junio 2025",
            where: "Tokio School",
            description: "Aprendí todo lo relacionado con la creación de las inteligenciar artificiales, desde modelos simples hasta modelos complejos junto con las redes neuronales y los algoritmos de aprendizaje automático.",
            type: "education"
        },
        {
          title: "Freelance Developer",
          dateRange: "Septiembre 2023 - Presente",
          where: "",
            description: "Automatización de pequeñas tareas con un programa en Python. Cree una aplicación de teléfono que ayuda al usuario a contar monedas sin necesidad de usar una calculadora. Cree una aplicación de  escritorio que ayuda a juntar PDF, fotos y otros formatos de archivos en un solo archivo. Todo para diferentes empresas de diferentes sectores.",
          type: "work"
        },
        {
            title: "Junior FullStack Developer",
            dateRange: "Marzo 2023 - Junio 2023",
            where: "Sico SL",
            description: "Actualizar, corregir y añadir funcionalidades a una página web que tenía la empresa, hecha con Angular y .NET.",
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
      <div className='timeline-header'>
        <h1>Estudios</h1>
        <h1>Experiencia</h1>
      </div>
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