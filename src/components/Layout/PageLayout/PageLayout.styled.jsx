import styled from 'styled-components';

import bgImage from '../../../images/background.svg';

export const Section = styled.section`
  padding-top: 44px;
  padding-bottom: 136px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  min-height: 100vh;
  ${p =>
    p.$show &&
    `
      padding-top: 42px;
      padding-bottom: 0;
  `}

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    padding-top: 40px;
    padding-bottom: 125px;
    ${p =>
      p.$show &&
      `
      padding-top: 41px;
      padding-bottom: 0;
  `}
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    min-height: 100vh;
    padding-top: 60px;
    padding-bottom: 77px;

    ${p =>
      p.$show &&
      `
      padding-top: 18px;
      padding-bottom: 0;
  `}
  }
`;

export const TitleWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 44px;
  @media (min-width: ${p => p.theme.screens.desktop}) {
    justify-content: space-between;
  }
`;

export const TitleHome = styled.h2`
  display: none;
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    display: inline-flex;
  }
`;

export const Title = styled.h2`
  margin-bottom: 25px;
`;

export const BtnsWrapp = styled.div`
  display: flex;
  gap: 24px;
`;
