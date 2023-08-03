import styled, { css } from 'styled-components';

import { BiFilterAlt } from 'react-icons/bi';

export const CategoryWrapp = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const CategoryBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  padding: 16px;
  border: none;
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.shadow};
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #3f3f3f;
  align-items: center;

  ${p =>
    p.showcategory &&
    css`
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    `}

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};

    svg {
      color: ${p => p.theme.colors.primary};
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 143px;
    justify-content: flex-end;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const CategoryIcon = styled(BiFilterAlt)`
  color: #3f3f3f;
  margin-left: 16px;
`;

export const CategoryList = styled.ul`
  display: none;

  ${p =>
    p.showcategory &&
    css`
      position: absolute;
      top: 56px;
      left: 0;

      display: flex;
      width: 100%;
      max-width: 158px;
      background: white;
      box-shadow: 2px 4px 9px rgba(165.57, 140.85, 174.25, 0.28);
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
      border-bottom-right-radius: 8px;
      border-bottom-right-radius: 8px;
      flex-direction: column;
      justify-content: center;

      z-index: 15;
      color: white;
      @media (min-width: ${p => p.theme.screens.tablet}) {
        top: 56px;
        left: 0;
        max-width: 143px;
      }
      @media (min-width: ${p => p.theme.screens.desktop}) {
        max-width: 148px;
      }
    `}
`;

export const CategoryItem = styled.li`
  width: 100%;
  color: #aca7c3;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  padding-top: 8px;
  border-top: 1px solid #aca7c3;

  padding: 8px 24px;

  &:hover {
    color: ${p => p.theme.colors.primary};
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;
