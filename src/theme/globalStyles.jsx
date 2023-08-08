import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

import Poppins600 from './fonts/Poppins/Poppins-SemiBold.ttf';
import Poppins500 from './fonts/Poppins/Poppins-Medium.ttf';
import Poppins400 from './fonts/Poppins/Poppins-Regular.ttf';
import Poppins300 from './fonts/Poppins/Poppins-Light.ttf';
import Alata400 from './fonts/Alata/Alata-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {font-family: 'Poppins';
  src: url(${Poppins300}), url(${Poppins400}), url(${Poppins500}), url(${Poppins600});
    }

@font-face {
  font-family: 'Alata'; src: url(${Alata400})
  }

body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

${modernNormalize}

#root {
    scroll-behavior: smooth;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  font-family: 'Poppins', sans-serif !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
p, button {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

button, input {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

  ${({ theme }) => `
    h2 {
      font-size: ${theme.typography.h2.fontSize};
      font-weight: ${theme.typography.h2.fontWeight};
      color: ${theme.colors.mainText};
    },
    h3, h4, h5, h6 {
      font-size: ${theme.typography.title.fontSize};
      font-weight: ${theme.typography.title.fontWeight};
    },
    body {
      font-family: ${theme.fontFamily.primary};
      font-size: ${theme.typography.body.fontSize};
      font-weight: ${theme.typography.body.fontWeight};
    },
    p {
      font-size: ${theme.typography.caption.fontSize};
      font-weight: ${theme.typography.caption.fontWeight};
    }
`}
`;
