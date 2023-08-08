import styled from 'styled-components';

export const HeaderWrapp = styled.header`
  background-color: ${p => p.theme.colors.headerBg};
  border-bottom: 1px solid ${p => p.theme.colors.primary};
  padding: 24px 0;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    padding: 26px 0 18px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    padding: 22px 0;
  }
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
`;

export const HeaderLink = styled.a`
  font-family: ${p => p.theme.fontFamily.secondary} !important;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
  color: ${p => p.theme.colors.primary};
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.06);
    color: ${p => p.theme.colors.hover};
  }
`;

export const HeaderFormEl = styled.div`
  display: flex;
  gap: 24px;
`;
