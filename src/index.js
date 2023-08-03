import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

import { EventProvider } from './hooks/useEventData';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <EventProvider>
          <App />
        </EventProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
