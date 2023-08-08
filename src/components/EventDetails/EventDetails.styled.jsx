import styled from 'styled-components';

export const CardDetailsWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 272px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    max-width: 688px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    max-width: 628px;
  }
`;

export const CardDetailsContent = styled.div`
  width: 272px;
  height: 464px;
  border-radius: 8px;
  background: ${p => p.theme.colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 688px;
    height: 504px;
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 628px;
    height: 492px;
  }
`;

export const CardDetailsImage = styled.div`
  img {
    width: 272px;
    height: 168px;
    object-fit: cover;
    border-radius: 8px;
    @media screen and (min-width: ${p => p.theme.screens.tablet}) {
      width: 688px;
      height: 272px;
    }

    @media screen and (min-width: ${p => p.theme.screens.desktop}) {
      width: 628px;
      height: 272px;
    }
  }
`;

export const CardDetailsInf = styled.div`
  padding: 24px 16px 40px 16px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    padding: 24px 24px 40px 24px;
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    padding: 20px 16px 40px 10px;
  }
`;
export const Title = styled.h2`
  text-again: start;
  margin-bottom: 14px;
  color: ${p => p.theme.colors.dark};
  font-size: 24px;
  font-weight: 600;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    font-size: 32px;
  }
`;

export const CardDetailsText = styled.p`
  margin-bottom: 24px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    margin-bottom: 33px;
  }
`;

export const CardDetailsBtnsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 40px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    gap: 16px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    margin-top: 24px;
  }
`;
