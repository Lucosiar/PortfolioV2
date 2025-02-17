import { Card } from "flowbite-react";

function CardProyects({ imageSrc, imageAlt, title, description, languages}) {
  return (
    <Card
      className="max-w-sm flex flex-col items-center"
      renderImage={() => (
        <img
          width={300}
          height={300}
          src={imageSrc}
          alt={imageAlt}
        />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-white mb-2">
        {title}
      </h5>
      <p className="font-normal text-white text-justify">
        {description}
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