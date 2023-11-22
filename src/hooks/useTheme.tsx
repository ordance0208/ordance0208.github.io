import { useState, useEffect } from 'react';
import Theme from '../models/Theme';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>();

  const toggleTheme = () => {
    const nextState = theme === 'light' ? 'dark' : 'light';
    setTheme(nextState);
    localStorage.setItem('theme', nextState);
  };

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(
      theme === 'dark' ? 'light' : 'dark'
    );
  }, [theme]);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setTheme(theme as Theme);
  }, []);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
