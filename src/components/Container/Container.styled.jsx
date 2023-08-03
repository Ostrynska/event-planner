import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: ${p => p.theme.screens.mobile}) {
    max-width: ${p => p.theme.screens.mobile};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    max-width: ${p => p.theme.screens.tablet};
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    max-width: ${p => p.theme.screens.desktop};
  }
`;
