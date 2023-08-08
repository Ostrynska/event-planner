import styled from 'styled-components';

import { BiFilterAlt } from 'react-icons/bi';

export const CategoryIcon = styled(BiFilterAlt)`
  color: ${p => p.theme.colors.dark};
`;

export const CategoryWrapp = styled.div`
  position: relative;
`;

export const CategoryBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  padding: 16px;
  border: none;
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.shadow};

  color: ${p => p.theme.colors.dark};
  background-color: white;

  svg {
    color: ${p =>
      p.$showcategory ? p.theme.colors.primary : p.theme.colors.dark};
    transform: ${p => (p.$showcategory ? 'translateX(99px)' : 'translateX(0)')};
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
    width: 143px;
    justify-content: space-around;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const CategoryOptions = styled.p`
  position: absolute;
  width: 158px;
  height: 100%;
  top: 0;
  left: 0;

  display: block;
  text-align: start;

  padding: 16px 21px;
  color: ${p =>
    p.$showcategory ? p.theme.colors.primary : p.theme.colors.dark};
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.priamry};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  opacity: ${p => (p.$showcategory ? 1 : 0)};
  transform: ${p => (p.$showcategory ? 'translateX(0)' : 'translateX(-72px)')};
  transition: all 0.5s linear;
  z-index: 10;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 143px;
    transform: translate(0);
    transition: all 0.5s linear;
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const CategorySelected = styled.p`
  display: none;
  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: flex;

    font-size: 16px;
    font-weight: 500;
    line-height: 1;

    z-index: 11;
    transition: all 0.5s linear;
  }
`;

export const CategorySelectedMob = styled.span`
  color: ${p => p.theme.colors.priamry};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: none;
  }
`;

export const CategoryList = styled.ul`
  position: absolute;

  width: 158px;
  top: 56px;
  left: 0;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  opacity: ${p => (p.$showcategory ? 1 : 0)};
  transform: ${p => (p.$showcategory ? 'translateY(0)' : 'translateY(5%)')};
  transition: all 0.5s linear;
  z-index: 10;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 143px;
    top: 56px;
    left: 0;
    transform: translate(0);
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const CategoryItem = styled.li`
  width: 100%;
  padding-top: 8px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: ${p => p.theme.colors.grey};
  border-top: 1px solid ${p => p.theme.colors.grey};

  transition: color 250ms ease-in-out;
  padding: 8px 24px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;
