import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: ${p => p.theme.screens.mobile}) {
    padding: 0 24px;
    max-width: ${p => p.theme.screens.mobile};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    padding: 0 40px;
    max-width: ${p => p.theme.screens.tablet};
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    padding: 0;
    max-width: ${p => p.theme.screens.desktop};
  }
`;
