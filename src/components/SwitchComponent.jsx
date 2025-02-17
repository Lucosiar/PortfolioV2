import { useState } from "react";
import "./SwitchComponent.css";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div
        className={`switch-container ${isChecked ? "bg-uk-flag" : "bg-spain-flag"}`}
      >
        <div className="switch-circle"></div>
      </div>
      {/* BORRAR LUEGO */}
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isChecked ? "ES" : "EN"}
      </span>
    </label>
  );
};

export default ToggleButton;
