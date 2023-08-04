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
  transition: all 0.5s linear;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 193px;
    padding: 16px 12px 16px 12px;
    display: flex;
  }
  p {
    display: none;
    @media screen and (min-width: ${p => p.theme.screens.tablet}) {
      display: flex;
      color: ${p => p.theme.button.default.color};
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      display: flex;
      align-items: center;
    }
  }
`;

export const ButtonBack = styled.button`
  color: ${p => p.theme.button.back.color};
  font-size: ${p => p.theme.button.back.fontSize};
  font-weight: ${p => p.theme.button.back.fontWeight};
  line-height: 1.5;
  margin-bottom: 17px;
  display: flex;
  align-items: center;
  transition: all 0.5s linear, color 250ms ease-in-out;
`;

export const Icon = styled(BiArrowBack)`
  color: ${p => p.theme.colors.primary};
  margin-right: 8px;
`;

export const IconAdd = styled(IoAdd)`
  color: ${p => p.theme.colors.white};
  margin-right: 16px;
`;
