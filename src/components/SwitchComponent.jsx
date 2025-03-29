import { useState } from "react";
import "./SwitchComponent.css";
import { useTranslation } from "react-i18next";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = isChecked ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleLanguageChange}
      />
      <div
        className={`switch-container ${isChecked ? "bg-uk-flag" : "bg-spain-flag"}`}
      >
        <div className="switch-circle"></div>
      </div>
      {/* BORRAR LUEGO 
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isChecked ? "EN" : "ES"}
      </span>*/}
    </label>
  );
};

export default ToggleButton;
