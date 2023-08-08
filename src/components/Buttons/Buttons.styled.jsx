import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import { IoAdd } from 'react-icons/io5';

export const ButtonPrimary = styled(Link)`
  width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${p => p.theme.button.default.backgroundColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 193px;
    padding: 16px 12px 16px 12px;
    display: flex;
    justify-content: center;
  }
  p {
    display: none;
    @media screen and (min-width: ${p => p.theme.screens.tablet}) {
      display: flex;
      color: ${p => p.theme.button.default.color};
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      align-items: center;
    }
  }
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const ButtonPrimaryFull = styled.button`
  width: 240px;
  padding: 16px 12px;
  border-radius: 8px;
  background-color: ${p => p.theme.button.default.backgroundColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 193px;
  }
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const ButtonPrimaryText = styled.p`
  display: flex;
  color: ${p => p.theme.button.default.color};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export const ButtonBack = styled.button`
  color: ${p => p.theme.button.back.color};
  font-size: ${p => p.theme.button.back.fontSize};
  font-weight: ${p => p.theme.button.back.fontWeight};
  line-height: 1.5;
  margin-bottom: 17px;
  display: flex;
  align-items: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
    svg {
      transform: translateX(-20%);
    }
  }

  svg {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${p => p.theme.colors.hover};
  }
`;

export const Icon = styled(BiArrowBack)`
  color: ${p => p.theme.colors.primary};
  margin-right: 8px;
`;

export const IconAdd = styled(IoAdd)`
  color: ${p => p.theme.colors.white};
  margin-right: 16px;
`;

export const ButtonCard = styled(ButtonPrimary)`
  width: 114px;
  height: 40px;
  margin-left: auto;
  display: block;
  padding: 10px 24px;
  text-align: center;

  font-size: 14px;
  line-height: 1.4;
  color: ${p => p.theme.button.default.color};
`;

export const ButtonCardDetails = styled.button`
  width: 108px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: ${p => p.theme.button.default.color};
  background-color: ${p => p.theme.button.default.backgroundColor};
  border: none;
  text-align: center;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const ButtonCardDetailsBorder = styled.div`
  width: 108px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: ${p => p.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${p => p.theme.button.default.backgroundColor};
  text-align: center;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
    font-weight: 600;
    background-color: transparent;
    border-color: ${p => p.theme.colors.hover};
  }

  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    display: block;
    width: 100%;
  }
`;
