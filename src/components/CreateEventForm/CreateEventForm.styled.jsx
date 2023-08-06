import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 372px;
  height: 100px;
  grid-area: 1 / 1 / 2 / 2;
`;

export const GridItem2 = styled.li`
  display: flex;
  flex-direction: column;
  width: 372px;
  grid-area: 1 / 2 / 2 / 3;
`;

export const GridItem3 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 372px;
  height: 80px;
  grid-area: 1 / 3 / 2 / 4;
`;

export const GridItem4 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 202px;
  grid-area: 2 / 1 / 4 / 2;
`;

export const GridItem5 = styled.li`
  display: flex;
  flex-direction: column;
  width: 372px;
  grid-area: 2 / 2 / 3 / 3;
`;

export const GridItem6 = styled.li`
  display: flex;
  flex-direction: column;
  width: 372px;
  grid-area: 2 / 3 / 3 / 4;
`;

export const GridItem7 = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 372px;
  height: 100px;
  grid-area: 3 / 2 / 4 / 3;
`;

export const GridItem8 = styled.li`
  display: flex;
  flex-direction: column;
  width: 372px;
  grid-area: 3 / 3 / 4 / 4;
`;

export const Title = styled.label`
  margin-bottom: 8px;
  color: #7b61ff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
`;

export const Input = styled(Field)`
  ${'' /* display: ${p => (p.$showcategory ? 'none' : 'block')}; */}
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${p => (p.error ? p.theme.colors.error : '#aca7c3')};

  color: #3f3f3f;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid #7b61ff;
  }
`;

export const InputTextArea = styled(Input)`
  resize: none;
  width: 372px;
  height: 180px;
  &::placeholder {
    color: #3f3f3f;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
`;
export const Error = styled(ErrorMessage)`
  margin-top: 4px;
  padding-right: 19px;

  color: #ff2b77;
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`;

export const ScrubIcon = styled(IoIosArrowDown)`
  color: ${p => (p.error ? p.theme.colors.error : p.theme.colors.primary)};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => (p.error ? p.theme.colors.error : p.theme.colors.primary)};
  }
`;

export const ScrubInputBtn = styled.div`
  position: absolute;
  top: 39px;

  right: 13px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => (p.error ? p.theme.colors.error : p.theme.colors.primary)};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    top: 44px;
  }
`;

export const CategoryIcon = styled(IoIosArrowUp)`
  color: #7b61ff;
`;

export const CategoryWrapp = styled.div`
  position: relative;
`;

export const CategoryBtn = styled.button`
  top: -82px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  background: #fff;

  svg {
    color: ${p => p.$showcategory && p.theme.colors.primary};
    transform: ${p =>
      p.$showcategory ? 'translateX(199px)' : 'translateX(0)'};
    transition: all 0.5s linear;
    z-index: 11;

    @media (min-width: ${p => p.theme.screens.tablet}) {
      transform: translate(0);
    }
  }

  &:hover,
  &:focus {
    p {
      color: ${p => p.theme.colors.primary};
    }
    svg {
      color: ${p => p.theme.colors.primary};
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    ${'' /* width: 143px; */}
    ${'' /* justify-content: space-around; */}
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
  }
`;

// export const CategoryOptions = styled.p`
//   position: absolute;
//   ${'' /* display: flex; */}
//   padding: 0px 16px;
//   ${'' /* flex-direction: column; */}
//   ${'' /* align-items: flex-start; */}
//   border-radius: 8px;
//   background: #fff;
//   box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

//   height: 100%;
//   top: 0;
//   left: 0;

//   display: block;
//   text-align: start;

//   ${'' /* padding: ${p => p.theme.space[8]}px 21px; */}

//   color: ${p => (p.$showcategory ? p.theme.colors.primary : '#3f3f3f')};
//   background-color: ${p => p.theme.colors.white};
//   border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};
//   border-top-left-radius: ${p => p.theme.radii.button};
//   border-top-right-radius: ${p => p.theme.radii.button};
//   box-shadow: ${p => p.theme.shadows.button};

//   opacity: ${p => (p.$showcategory ? 1 : 0)};
//   transform: ${p => (p.$showcategory ? 'translateX(0)' : 'translateX(-72px)')};
//   transition: all 0.5s linear;
//   z-index: 10;
//   &:hover,
//   &:focus {
//     color: ${p => p.theme.colors.primary};
//   }

//   @media (min-width: ${p => p.theme.screens.tablet}) {
//     width: 143px;
//     transform: translate(0);
//     transition: all 0.5s linear;
//   }
//   @media (min-width: ${p => p.theme.screens.desktop}) {
//     width: 372px;
//   }
// `;

export const CategorySelected = styled.p`
  color: #7b61ff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;

  z-index: 11;
  transition: all 0.5s linear;
`;

// export const CategorySelectedMob = styled.span`
//   color: ${p => p.theme.colors.priamry};
//   font-size: ${p => p.theme.fontSizes[4]}px;
//   font-weight: ${p => p.theme.fontWeights.medium};
//   line-height: ${p => p.theme.lineHeights.normal};

//   @media (min-width: ${p => p.theme.screens.tablet}) {
//     display: none;
//   }
// `;

export const CategoryList = styled.ul`
  position: absolute;

  ${'' /* width: 158px; */}
  ${'' /* top: 56px; */}
  top: -18px;
  left: 0;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$showcategory ? 1 : 0)};
  transform: ${p => (p.$showcategory ? 'translateY(0)' : 'translateY(5%)')};
  transition: all 0.5s linear;
  z-index: 10;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    ${'' /* width: 143px; */}
    ${'' /* top: 56px; */}
    ${'' /* left: 0; */}

    transform: translate(0);
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 372px;
  }
`;

export const CategoryItem = styled.li`
  width: 100%;
  padding: 16px 0px;

  color: #3f3f3f;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  border-top: 1px solid #aca7c3;

  transition: color 250ms ease-in-out;
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
