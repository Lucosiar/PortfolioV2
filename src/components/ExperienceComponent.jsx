import React from 'react';
import { useTranslation } from 'react-i18next';
import './ExperienceComponent.css';

const ExperienceComponent = () => {

  const { t } = useTranslation();

  const experiences = [
    {
      title: t("exp1_title"),
      dateRange: t("exp1_date"),
      where: t("exp1_where"),
      description: t("exp1_desc"),
      type: "work"
    },
    {
      title: t("exp2_title"),
      dateRange: t("exp2_date"),
      where: t("exp2_where"),
      description: t("exp2_desc"),
      type: "education"
    },
    {
      title: t("exp3_title"),
      dateRange: t("exp3_date"),
      where: t("exp3_where"),
      description: t("exp3_desc"),
      type: "education"
    },
    {
      title: t("exp4_title"),
      dateRange: t("exp4_date"),
      where: t("exp4_where"),
      description: t("exp4_desc"),
      type: "work"
    },
    {
      title: t("exp5_title"),
      dateRange: t("exp5_date"),
      where: t("exp5_where"),
      description: t("exp5_desc"),
      type: "education"
    },
    {
      title: t("exp6_title"),
      dateRange: t("exp6_date"),
      where: t("exp6_where"),
      description: t("exp6_desc"),
      type: "work"
    },
    {
      title: t("exp7_title"),
      dateRange: t("exp7_date"),
      where: t("exp7_where"),
      description: t("exp7_desc"),
      type: "work"
    },
    {
      title: t("exp8_title"),
      dateRange: t("exp8_date"),
      where: t("exp8_where"),
      description: t("exp8_desc"),
      type: "education"
    },
  ];

  return (
    <div className="timeline-container">
      <div className='timeline-header'>
        <h1>{t("estudios")}</h1>
        <h1>{t("experiencia")}</h1>
      </div>
      <div className="timeline-line"></div>
      {experiences.map((experience, index) => (
        <div key={index} className={`timeline-item ${experience.type}`}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="text-lg font-bold text-white">{experience.title}</h3>
            <p className='text-white'>{experience.where}</p>
            <p className="text-sm text-gray-200">{experience.dateRange}</p>
            <p className="text-gray-300">{experience.description}</p>
          </div>
        </div>
         ))}
    </div>
  );
};

export default ExperienceComponent;