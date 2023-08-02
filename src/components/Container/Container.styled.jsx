import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const MainContainer = styled.div`
  ${'' /* width: 100%; */}
  margin: 0 auto;
  ${'' /* padding: 0 15px; */}
  @media screen and (min-width: ${theme.screens.mobile}) {
    max-width: ${theme.screens.mobile};
  }
  @media screen and (min-width: ${theme.screens.tablet}) {
    max-width: ${theme.screens.tablet};
  }

  @media screen and (min-width: ${theme.screens.desktop}) {
    max-width: ${theme.screens.desktop};
  }
`;
