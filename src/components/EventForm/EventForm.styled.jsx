import styled, { keyframes } from 'styled-components';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

const animation = keyframes`
  from {
    transform: translateY(150px);
    opacity: 0;
  }
  to {
      transform: translateY(0);
      opacity: 1;
  }
`;

export const EventFormWrapp = styled.div`
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.shadow};
  width: 272px;
  height: 1056px;
  padding: 40px 16px;

  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 688px;
    height: 656px;
    padding: 40px 24px;
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 1280px;
    height: 490px;
    padding: 40px 40px 54px;
  }
`;

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;

  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 42px;
    grid-row-gap: 20px;
  }
`;

export const GridItem1 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: 1 / 1 / 2 / 2;
  width: 240px;
  height: 80px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
    grid-area: 1 / 1 / 2 / 2;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const GridItem2 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: 2 / 1 / 3 / 2;
  width: 240px;

  height: 180px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
    grid-area: 2 / 1 / 4 / 2;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
    grid-area: 2 / 1 / 4 / 2;
  }
`;

export const GridItem3 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: 3 / 1 / 4 / 2;

  height: 80px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
    grid-area: 4 / 1 / 5 / 2;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
    grid-area: 1 / 2 / 2 / 3;
  }
`;

export const GridItem4 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: 4 / 1 / 5 / 2;
  width: 240px;
  height: 80px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
    grid-area: 5 / 1 / 6 / 2;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    grid-area: 2 / 2 / 3 / 3;
    width: 372px;
  }
`;

export const GridItem5 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: 5 / 1 / 6 / 2;
  width: 240px;
  height: 80px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
    grid-area: 1 / 2 / 2 / 3;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
    grid-area: 3 / 2 / 4 / 3;
  }
`;

export const GridItem6 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: 6 / 1 / 7 / 2;
  width: 240px;
  height: 80px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
    grid-area: 2 / 2 / 3 / 3;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    grid-area: 1 / 3 / 2 / 4;
    width: 372px;
  }
`;

export const GridItem7 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: 7 / 1 / 8 / 2;
  width: 240px;
  height: 80px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
    grid-area: 3 / 2 / 4 / 3;
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
    grid-area: 2 / 3 / 3 / 4;
  }
`;

export const GridItem8 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: 8 / 1 / 9 / 2;
  width: 240px;
  height: 80px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
    grid-area: 4 / 2 / 5 / 3;
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
    grid-area: 3 / 3 / 4 / 4;
  }
`;

export const Title = styled.label`
  margin-bottom: 8px;
  color: ${p => p.theme.colors.primary};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
  ${p =>
    p.disabled &&
    `
    cursor: not-allowed;
    pointer-events: none;
    color: #ACA7C3;
  `}
`;

export const Input = styled.input`
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid
    ${p => (p.error ? p.theme.colors.error : p.theme.colors.grey)};

  color: ${p => p.theme.colors.dark};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid
      ${p => (p.error ? p.theme.colors.error : p.theme.colors.primary)};
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${p => p.theme.colors.grey};
    pointer-events: none;
    color: ${p => p.theme.colors.grey};
  }
`;

export const InputSelect = styled(Input)`
  position: relative;
  display: ${p => (p.$showcategory || p.$showpriority ? 'none' : 'flex')};
`;

export const InputTextArea = styled(Input)`
  resize: none;

  height: 180px;
  &::placeholder {
    color: ${p => p.theme.colors.dark};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
  &:hover,
  &:focus {
    border: 1px solid ${p =>
      p.error ? p.theme.colors.error : p.theme.colors.primary}
`;
export const Error = styled.div`
  margin-top: 4px;
  padding-right: 19px;

  color: ${p => p.theme.colors.secondary};
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`;

export const ScrubIcon = styled(RxCross2)`
  color: ${p => (p.error ? p.theme.colors.error : p.theme.colors.primary)};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => (p.error ? p.theme.colors.error : p.theme.colors.primary)};
  }
`;

export const ScrubInputBtn = styled.div`
  position: absolute;
  top: 46px;
  right: 15px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => (p.error ? p.theme.colors.error : p.theme.colors.primary)};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    top: 44px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    top: 45px;
  }
`;

export const CloseIcon = styled(IoIosArrowUp)`
  left: 204px;
  top: 43px;
  position: absolute;
  color: ${p => p.theme.colors.primary};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    left: 271px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    left: 339px;
  }
`;

export const CloseIconSelect = styled(CloseIcon)`
  top: 18px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    left: 271px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    left: 339px;
  }
`;

export const OpenIcon = styled(IoIosArrowDown)`
  position: absolute;
  left: 209px;
  top: 44px;
  color: ${p => p.theme.colors.primary};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: ${p => (p.$showcategory ? 'none' : 'flex')};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    left: 273px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    left: 336px;
  }
  ${p =>
    p.disabled &&
    `
    cursor: not-allowed;
    pointer-events: none;
    color: #ACA7C3;
  `}

  ${p =>
    p.$showtime &&
    `
    display: none;
  `}
`;

export const CategoryWrapp = styled.div`
  position: relative;
`;

export const CategoryBtn = styled.button`
  animation: ${animation} 0.3s ease-in-out;
  top: -26px;
  width: 240px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.grey};
  background: ${p => p.theme.colors.white};
  height: 56px;
  opacity: ${p => (p.$showcategory ? 0 : 1)};
  z-index: 40;

  svg {
    color: ${p => p.$showcategory && p.theme.colors.primary};
  }

  &:hover,
  &:focus {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    p {
      color: ${p => p.theme.colors.primary};
    }
    svg {
      color: ${p => p.theme.colors.primary};
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
  }
`;

export const CategorySelected = styled.p`
  color: ${p => p.theme.colors.primary};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;

  z-index: 11;
  transition: all 0.5s linear;
`;

export const CategoryList = styled.ul`
  animation: ${animation} 0.3s ease-in-out;
  position: absolute;
  width: 240px;
  top: 40px;
  left: 0;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  z-index: 50;
  opacity: ${p => (p.$showcategory ? 1 : 0)};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
    top: 40px;
  }
`;

export const CategoryItem = styled.li`
  width: 100%;
  padding: 16px 0px;

  color: ${p => p.theme.colors.dark};
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  border-top: 1px solid ${p => p.theme.colors.grey};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:first-child {
    border-top: none;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;

export const PriorityWrapp = styled.div`
  position: relative;
`;

export const PriorityBtn = styled.button`
  animation: ${animation} 0.3s ease-in-out;
  top: -26px;
  width: 240px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.grey};
  background: ${p => p.theme.colors.white};
  height: 56px;
  opacity: ${p => (p.$showpriority ? 0 : 1)};
  z-index: 20;

  svg {
    color: ${p => p.$showpriority && p.theme.colors.primary};
  }

  &:hover,
  &:focus {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    p {
      color: ${p => p.theme.colors.primary};
    }
    svg {
      color: ${p => p.theme.colors.primary};
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
  }
`;
export const PrioritySelected = styled.p`
  color: ${p => p.theme.colors.primary};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;

  z-index: 11;
  transition: all 0.5s linear;
`;

export const PriorityList = styled.ul`
  animation: ${animation} 0.3s ease-in-out;
  position: absolute;
  width: 240px;
  top: 30px;
  left: 0;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  z-index: 10;
  opacity: ${p => (p.$showpriority ? 1 : 0)};
  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 308px;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
  }
`;

export const PriorityItem = styled.li`
  width: 100%;
  padding: 16px 0px;

  color: ${p => p.theme.colors.dark};
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  border-top: 1px solid ${p => p.theme.colors.grey};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:first-child {
    border-top: none;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;

export const BtnWrapp = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    margin-top: 60px;
  }
`;

export const DataWrapp = styled.div`
  position: absolute;
  z-index: 100;
  top: -24px;
  width: 372px;
`;
