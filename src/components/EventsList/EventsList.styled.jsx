import styled from 'styled-components';

export const EventsListWrapp = styled.ul`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, 271px);
  grid-gap: 24px;

  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    grid-template-columns: repeat(auto-fit, 332px);
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    grid-template-columns: repeat(auto-fit, 302px);
    grid-gap: 40px 24px;
  }
`;
