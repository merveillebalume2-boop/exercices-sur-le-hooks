import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHook, setActiveHook] = useState(null);
  const [activeSection, setActiveSection] = useState(null); // 'docs', 'profile', 'settings'

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  
  const t = translations[lang] || translations['en'];

  return (
    <AppContext.Provider value={{ 
      theme, toggleTheme, 
      lang, setLang, 
      t, 
      isMenuOpen, toggleMenu, setIsMenuOpen,
      activeHook, setActiveHook,
      activeSection, setActiveSection
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
