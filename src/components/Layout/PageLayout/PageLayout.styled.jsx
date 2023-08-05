import styled from 'styled-components';

// import bgDesktop from '../../images/bgDesktop@1x.png';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 42px;
  ${
    '' /* background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  background-size: cover; */
  }
  width: 100%;
  position: relative;
  ${p =>
    p.show &&
    `
      padding-top: 42px;
  `}

  @media screen and (min-width: 768px) {
    padding-top: 38px;
    padding-bottom: 125px;
    ${p =>
      p.show &&
      `
      padding-top: 41px;
  `}
  }

  @media screen and (min-width: 1280px) {
    min-height: 85vh;
    padding-top: 65px;
    padding-bottom: 75px;

    ${p =>
      p.show &&
      `
      padding-top: 18px;
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

export const Title = styled.h2`
  display: none;
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    display: inline-flex;
    ${p => p.showtitle && `margin-bottom: 25px`}
  }
`;

export const BtnsWrapp = styled.div`
  display: flex;
  gap: 24px;
`;
