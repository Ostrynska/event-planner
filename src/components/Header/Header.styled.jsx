import styled from 'styled-components';

export const HeaderWrapp = styled.header`
  background-color: ${p => p.theme.colors.headerBg};
  border-bottom: 1px solid ${p => p.theme.colors.primary};
  padding: 24px;
`;

export const HeaderContent = styled.div`
  max-height: 168px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    max-height: 92px;
  }
  ${
    '' /* 
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    min-height: 92px;
  } */
  }
`;

export const HeaderLink = styled.a`
  font-family: ${p => p.theme.fontFamily.secondary};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
  color: ${p => p.theme.colors.primary};
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
`;

export const HeaderFormEl = styled.div`
  display: flex; 
  gap: 24px;
   /* max-height: 48px;
`;
