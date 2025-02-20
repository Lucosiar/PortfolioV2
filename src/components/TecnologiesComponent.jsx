import React from 'react';
import { useState } from 'react'
import './TecnologiesComponent.css';


const TecnologiesComponent = () => {

    const categories = {

        BACK: ["/src/assets/img/lenguajes/c-.png", "/src/assets/img/lenguajes/java.png"],
        FRONT: ["/src/assets/img/lenguajes/html.png"],
        IA: ["/src/assets/img/lenguajes/python.png"],
        FRAMEWORKS: ["/src/assets/img/lenguajes/kaggle_icon.png"],
        HERRAMIENTAS: ["/src/assets/img/lenguajes/sql.png"],
    };

    categories["ALL"] = Object.values(categories).flat();

    const [activeTab, setActiveTab] = useState('ALL');


  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-center space-x-2 mb-4">
        {Object.keys(categories).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab ? "bg-gray-200 text-black" : "bg-indigo-700 text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        {categories[activeTab].map((icon, index) => (
          <img key={index} src={icon} alt={activeTab} className="w-12 h-12" />
        ))}
      </div>
    </div>
  );
};

export default TecnologiesComponent;