import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { theme, GlobalStyle } from './theme/theme';

// import i18n from './i18n';
// import { I18nextProvider } from 'react-i18next';
// import { I18nProvider } from './i18nContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Suspense fallback={<div>Loading...</div>}>
//         <ThemeProvider theme={theme}>
//           <GlobalStyle />
//           <I18nextProvider i18n={i18n}>
//             <I18nProvider>
//               <App />
//             </I18nProvider>
//           </I18nextProvider>
//         </ThemeProvider>
//       </Suspense>
//     </BrowserRouter>
//   </React.StrictMode>
// );
