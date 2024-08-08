import React from 'react';
import './ThemeOption.css';

const ThemeOption = ({ children, isChecked, onChange }) => {
  return (
    <label className="theme-option-label">
      <input
        type="radio"
        className="theme-option-input"
        checked={isChecked}
        onChange={onChange}
      />
      <div
        className={`theme-option-checkbox ${isChecked ? 'checked' : ''}`}
        style={{ backgroundColor: children }}
      >
      </div>
    </label>
  );
};

export default ThemeOption;
