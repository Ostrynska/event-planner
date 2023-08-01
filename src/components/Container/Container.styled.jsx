import styled from 'styled-components';

export const MainContainer = styled.div`
  ${'' /* width: 100%; */}
  ${'' /* margin: 0 auto; */}
margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 480px) {
    ${'' /* max-width: 480px; */}
  }
  @media screen and (min-width: 768px) {
    ${'' /* max-width: 768px; */}
    margin: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    ${'' /* max-width: 1200px; */}
    margin: 0 80px;
  }
`;
