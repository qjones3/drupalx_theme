import React, { useState } from 'react';

const ColorToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'light' : 'dark');
    const switchIconElement = document.querySelector(
      '.darkmode-switch .material-symbols-outlined'
    );
    switchIconElement?.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
  };

  return (
    <div className="form-check form-switch darkmode-switch d-flex align-items-center">
      <input
        className="form-check-input"
        type="checkbox"
        id="darkModeSwitch"
        checked={isDarkMode}
        onChange={toggleColorMode}
      />
      <label className="form-check-label d-flex align-items-center ms-1" htmlFor="darkModeSwitch">
        Toggle theme
        <span className="material-symbols-outlined ms-1">{isDarkMode ? 'dark_mode' : 'light_mode'}</span>
      </label>
    </div>
  );
};

export default ColorToggle;