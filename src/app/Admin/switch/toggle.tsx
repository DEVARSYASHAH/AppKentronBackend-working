import React, { FC } from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  label: string;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ label }) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
