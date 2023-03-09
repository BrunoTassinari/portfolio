import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextThemeProvider } from './utils/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextThemeProvider>
      <App />
    </ContextThemeProvider>
  </React.StrictMode>
);
