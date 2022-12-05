import { createGlobalStyle } from 'styled-components';

// Types
import { Theme } from './types';

// Utils
import { hslToCss } from './utils/style';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html, body {
    font-family: Roboto, sans-serif;
    color: ${(props) => hslToCss(props.theme.typography.body1)};
  }
  
  h1 {
    color: ${(props) => hslToCss(props.theme.typography.h1)};
  }
`;
