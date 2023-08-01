import { GlobalStyle } from './globalStyles';

const theme = {
  colors: {
    primary: '#7B61FF',
    secondary: '#FF2B77',
    warning: '#E2A300',
    success: '#6BD475',
    white: '#FFFFFF',
    dark: '#3F3F3F',
    grey: '#ACA7C3',
    mainText: '#000000',
    shadow: '#a68dae47',

    headerBg: '#fefcff',
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
  },
};

export { theme, GlobalStyle };
