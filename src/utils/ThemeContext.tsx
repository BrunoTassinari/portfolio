import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export type ThemeContextType = {
  toggleTheme: () => void;
};

const ContextTheme = React.createContext({});

const ContextThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = React.useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('userTheme');

    if (localTheme) setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('userTheme', theme);
  }, [theme]);

  return (
    <ContextTheme.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme == 'light' ? light : dark}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
};

export { ContextTheme, ContextThemeProvider };
