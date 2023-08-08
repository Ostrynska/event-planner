import styled, { css } from 'styled-components';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const LanguageWrapp = styled.div`
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
  cursor: pointer;

  &:hover,
  &:focus {
    p {
      color: ${p => p.theme.colors.primary};
    }
    svg {
      color: ${p => p.theme.colors.primary};
    }
  }
`;

export const Select = styled.button`
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    color: ${p => p.theme.colors.grey};
  }
`;

export const LanguageIcon = styled(IoIosArrowDown)`
  color: ${p => p.theme.colors.dark};
  margin-left: 4px;
  z-index: 9;
`;
export const LanguageIconUp = styled(IoIosArrowUp)`
  color: ${p => p.theme.colors.dark};
  margin-left: 4px;
  z-index: 9;
`;

export const LanguageList = styled.ul`
  opacity: 0;
  position: absolute;
  bottom: 52px;

  ${p =>
    p.$showlanguage &&
    css`
      position: absolute;
      top: 54px;
      left: 0;
      display: flex;
      width: 69px;
      height: 88px;
      background: white;
      box-shadow: 2px 4px 9px rgba(165.57, 140.85, 174.25, 0.28);
      border-radius: 8px;
      flex-direction: column;
      gap: 8px;
      padding: 16px 12px;
      z-index: 10;
      opacity: 1;
      transform: translateY(0);
      transition: all 0.5s linear, opacity 0.5s ease-in-out;
    `}
`;

export const LanguageItem = styled.li`
  width: 100%;
  text-align: start;
  color: ${p => p.theme.colors.grey};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  padding-bottom: 4px;
  border-bottom: 1px solid ${p => p.theme.colors.grey};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;
