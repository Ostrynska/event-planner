import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const EventFormWrapp = styled.div`
  width: 1280px;
  height: 490px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.shadow};
  padding: 40px 40px 54px;
`;

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 42px;
  grid-row-gap: 20px;
`;

export const GridItem1 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 372px;
  grid-area: 1 / 1 / 2 / 2;
`;

export const GridItem2 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 372px;
  grid-area: 1 / 2 / 2 / 3;
`;

export const GridItem3 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 372px;
  grid-area: 1 / 3 / 2 / 4;
`;

export const GridItem4 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  grid-area: 2 / 1 / 4 / 2;
`;

export const GridItem5 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 372px;
  grid-area: 2 / 2 / 3 / 3;
`;

export const GridItem6 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 372px;
  grid-area: 2 / 3 / 3 / 4;
`;

export const GridItem7 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 372px;
  grid-area: 3 / 2 / 4 / 3;
`;

export const GridItem8 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 372px;
  grid-area: 3 / 3 / 4 / 4;
`;

export const Title = styled.label`
  color: #7b61ff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
`;

export const Input = styled(Field)`
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid #aca7c3;

  color: #3f3f3f;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  ${
    '' /* &::placeholder {
  } */
  }
`;
