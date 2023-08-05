import styled from 'styled-components';

export const CardDetailsWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardDetailsContent = styled.div`
  width: 628px;
  height: 492px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const CardDetailsImage = styled.div`
  img {
    width: 628px;
    height: 492px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const CardDetailsInf = styled.div`
  padding: 20px 16px 40px 10px;
`;

export const CardDetailsText = styled.p`
  margin-bottom: 33px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
`;

export const CardDetailsBtnsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
