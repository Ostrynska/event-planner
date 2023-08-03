import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import { IoAdd } from 'react-icons/io5';

export const ButtonPrimary = styled(Link)`
  width: 193px;
  height: 56px;
  padding: 16px 12px 16px 12px;
  border-radius: 8px;
  color: ${p => p.theme.button.default.color};
  background-color: ${p => p.theme.button.default.backgroundColor};
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
`;

export const Icon = styled(BiArrowBack)`
  color: ${p => p.theme.colors.primary};
  margin-right: 8px;
`;

export const IconAdd = styled(IoAdd)`
  color: ${p => p.theme.colors.white};
  margin-right: 16px;
`;
