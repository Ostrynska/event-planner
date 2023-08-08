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
    hover: '#6243ff',

    headerBg: '#fefcff',
  },
  priorityColors: {
    High: '#FF0000',
    Medium: '#E2A300',
    Low: '#6BD475',
  },
  fontFamily: {
    primary: 'Poppins, sans-serif',
    secondary: 'Alata, sans-serif',
  },
  hasIcon: true,
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
