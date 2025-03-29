import React from 'react';
import { Card } from 'flowbite-react';
import { useTranslation } from 'react-i18next';

function CardProyects({ imageSrc, imageAlt, title, description, languages }) {
  const { t } = useTranslation();
  return (
    <Card className="cardProyects max-w-sm flex flex-col items-center bg-black border-2 border-black">
      <div className="rounded-lg pb-2"> 
        <img
          width={340}
          height={340}
          src={imageSrc}
          alt={imageAlt}
          className="rounded-lg"
        />
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-white mb-2">
        {t(title)}
      </h5>
      <p className="font-normal text-white text-justify">
        {t(description)}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {languages.map((language, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 text-sm font-semibold text-white bg-indigo-700 rounded-full"
          >
            {language}
          </span>
        ))}
      </div>
    </Card>
  );
}

export default CardProyects;
