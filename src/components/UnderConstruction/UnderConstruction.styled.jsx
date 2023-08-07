import styled from 'styled-components';

export const Text = styled.p`
  margin-top: 15px;
  margin-bottom: 35px;
  width: 100%;

  font-weight: 400;
  font-size: 20px;
  line-height: 160%;

  text-align: center;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 455px;
  }
`;
export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 365px;
  height: 211px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 365px;
    height: 211px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 417.68px;
    height: 234.17px;
  }
`;
