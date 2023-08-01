import styled from 'styled-components';
import { theme } from '../../theme/theme';

import { Form, Field } from 'formik';

import { CiSearch } from 'react-icons/ci';

export const Input = styled(Field)`
  position: relative;
  width: 410px;
  height: 48px;
  border-radius: 10px;
  padding: 13px 13px 13px 47px;
  box-shadow: 2px 4px 9px 0px ${theme.colors.shadow};

  font-size: ${theme.typography.fontFamily};
  font-weight: 300;
  font-size: 14px;
  line-height: 1;
  color: #888888;
`;

export const SearchIcon = styled(CiSearch)`
  color: ${theme.colors.primary};
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 33px;
  right: 541px;
`;
