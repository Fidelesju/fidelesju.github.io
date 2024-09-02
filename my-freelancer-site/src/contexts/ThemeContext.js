import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  background: '#000000',  // Fundo principal
  second: '#141414',  // Fundo principal
  text: '#FFFFFF',        // Texto principal
  primary: '#F0E7D8',     // Cor primária (Header, Footer, botões principais)
  secondary: '#92817A',   // Cor secundária (botões secundários, ícones)
  accent: '#00b8e4',      // Cor de destaque (links, ícones)
  accentDark: '#436436',  // Cor de acento (títulos, bordas)
};

const darkTheme = {
  background: '#0A2342',  // Fundo principal no modo escuro
  text: '#FFFFFF',        // Texto principal no modo escuro
  primary: '#0A2342',     // Cor primária
  secondary: '#92817A',   // Cor secundária
  accent: '#84BC9C',      // Cor de destaque
  accentDark: '#436436',  // Cor de acento
};


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
