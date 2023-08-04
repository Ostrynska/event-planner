import styled, { css } from 'styled-components';

import { IoIosArrowDown } from 'react-icons/io';

export const LanguageWrapp = styled.button`
  position: relative;
  display: flex;
  justify-content: center;

  width: 69px;
  height: 48px;
  border-radius: 8px;
  padding: 12px;
  border: none;
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.shadow};

  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  align-items: center;
`;

export const Select = styled.button``;

export const LanguageIcon = styled(IoIosArrowDown)`
  color: #3f3f3f;
  margin-left: 4px;
`;

export const LanguageList = styled.ul`
  display: none;

  ${p =>
    p.$showlanguage &&
    css`
      position: absolute;
      top: 78px;
      right: 178px;

      display: flex;
      width: 69px;
      height: 88px;
      background: white;
      box-shadow: 2px 4px 9px rgba(165.57, 140.85, 174.25, 0.28);
      border-radius: 8px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;
      padding: 16px 12px;
      z-index: 10;
      @media screen and (min-width: ${p => p.theme.screens.tablet}) {
        right: 198px;
      }

      @media screen and (min-width: ${p => p.theme.screens.desktop}) {
        right: 218px;
      }
    `}
`;

export const LanguageItem = styled.li`
  width: 100%;
  color: #aca7c3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  padding-bottom: 4px;
  border-bottom: 1px solid #aca7c3;

  &:hover {
    color: ${p => p.theme.colors.primary};
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;
