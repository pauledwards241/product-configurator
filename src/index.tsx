import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { ProductConfigurator } from './components/ProductConfigurator';

import { theme } from './theme';
import { GlobalStyle } from './index.style';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductConfigurator />
    </ThemeProvider>
  </React.StrictMode>
);
