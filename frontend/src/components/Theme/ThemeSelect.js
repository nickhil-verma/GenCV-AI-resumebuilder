import React from 'react';
import { useResume } from '../../Context';
import ThemeOption from './ThemeOption';
import './ThemeSelect.css';

const ThemeSelect = () => {
  const options = ['rgba(85, 72, 249, 0.64)', 'green', 'rgba(62, 255, 245, 0.64)', 'rgba(245, 49, 145, 0.17)', 'red', 'orange', '#F15BA6','#a3a3a3'];

  const { theme, setTheme } = useResume();

  const handleChange = (value) => {
    setTheme(value);
  };

  return (
    <div className="theme-select">
      {options.map((value) => (
        <ThemeOption
          key={value}
          isChecked={theme === value}
          onChange={() => handleChange(value)}
        >
          {value}
        </ThemeOption>
      ))}
    </div>
  );
};

export default ThemeSelect;
