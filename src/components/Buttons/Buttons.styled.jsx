import styled from 'styled-components';
import { theme } from '../../theme/theme';

import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import { IoAdd } from 'react-icons/io5';

export const ButtonPtimary = styled(Link)`
  width: 193px;
  height: 56px;
  padding: 16px 12px 16px 12px;
  border-radius: 8px;
  color: ${theme.button.default.color};
  background-color: ${theme.button.default.backgroundColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export const ButtonBack = styled.button`
  color: ${theme.button.back.color};
  font-size: ${theme.button.back.fontSize};
  font-weight: ${theme.button.back.fontWeight};
  line-height: 1.5;
  margin-bottom: 17px;
  display: flex;
  align-items: center;
`;

export const Icon = styled(BiArrowBack)`
  color: ${theme.colors.primary};
  margin-right: 8px;
`;

export const IconAdd = styled(IoAdd)`
  color: ${theme.colors.white};
  margin-right: 16px;
`;
