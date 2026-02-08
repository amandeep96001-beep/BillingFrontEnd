import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle-track">
        <span className="theme-toggle-icon theme-toggle-sun">☀️</span>
        <span className="theme-toggle-icon theme-toggle-moon">🌙</span>
        <div className="theme-toggle-thumb" />
      </div>
    </button>
  );
};

export default ThemeToggle;
