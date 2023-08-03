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
  z-index: -1;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
    padding-bottom: 125px;
  }

  @media screen and (min-width: 1440px) {
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

export const TitleWrapp = styled.h2`
  display: flex;
`;

export const Title = styled.h2`
  margin-bottom: 44px;
  ${p => p.show && `margin-bottom: 25px;`}
`;
