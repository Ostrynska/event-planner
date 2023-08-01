import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';
// import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=DM+Mono:wght@500&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');



body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #FFFFFF;
    color: #000000;
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

code {
  font-family: 'OpenSans', sans-serif;
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

address {
  all: initial;
  }

  ${({ theme }) => `
    h2 {
      font-size: ${theme.typography.h2.fontSize};
      font-weight: ${theme.typography.h2.fontWeight};
      color: ${theme.colors.mainText};
    }
    h3, h4, h5, h6 {
      font-size: ${theme.typography.title.fontSize};
      font-weight: ${theme.typography.title.fontWeight};
    }
    body {
      font-size: ${theme.typography.body.fontSize};
      font-weight: ${theme.typography.body.fontWeight};
    }
    body {
      font-size: ${theme.typography.body.fontSize};
      font-weight: ${theme.typography.body.fontWeight};
    }
    p {
      font-size: ${theme.typography.caption.fontSize};
      font-weight: ${theme.typography.caption.fontWeight};
    }
`}
`;
