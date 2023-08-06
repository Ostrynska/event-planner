import { GlobalStyle } from './globalStyles';

const theme = {
  colors: {
    primary: '#7B61FF',
    secondary: '#FF2B77',
    warning: '#E2A300',
    success: '#6BD475',
    error: '#FF0000',
    white: '#FFFFFF',
    dark: '#3F3F3F',
    grey: '#ACA7C3',
    mainText: '#000000',
    titleText: '#1C1B1F',
    captionText: '#49454F',
    shadow: '#a68dae47',

    headerBg: '#fefcff',
  },
  priorityColors: {
    High: '#FF0000',
    Medium: '#E2A300',
    Low: '#6BD475',
  },
  space: [
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
    40, 42, 44, 46, 48, 64,
  ],
  fontSizes: [8, 10, 12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontFamily: {
    primary: 'Poppins, sans-serif',
    secondary: 'Alata, sans-serif',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    max: '100%',
  },
  radii: {
    langButton: '8px',
    button: '8px',
    input: '8px',
  },

  borders: { main: '1px solid #7b61ff' },
  hasIcon: true,

  shadows: {
    langButton: '2px 4px 9px 0px rgba(166, 141, 174, 0.28)',
    inputShadow: '2px 4px 9px 0px rgba(166, 141, 174, 0.28)',
    button: '2px 4px 9px 0px rgba(166, 141, 174, 0.28);',
  },

  screens: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h2: {
      fontSize: '32px',
      fontWeight: '600',
    },
    title: {
      fontSize: '16px',
      fontWeight: '500',
    },
    body: {
      fontSize: '14px',
      fontWeight: '500',
    },
    caption: {
      fontSize: '14px',
      fontWeight: '400',
    },
  },
  button: {
    default: {
      color: 'white',
      backgroundColor: '#7B61FF',
    },
    hover: {
      backgroundColor: '#6243FF',
    },
    disabled: {
      backgroundColor: '#ACA7C3',
      cursor: 'not-allowed',
    },
    back: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#7B61FF',
    },
  },
};

export { theme, GlobalStyle };
