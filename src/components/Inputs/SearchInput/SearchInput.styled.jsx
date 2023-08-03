import styled from 'styled-components';

import { Form, Field } from 'formik';

import { CiSearch } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

export const FormWrapp = styled(Form)`
  position: relative;
  width: 100%;
`;

export const Input = styled(Field)`
  height: 48px;
  position: relative;
  border-radius: 10px;
  padding: 13px 13px 13px 47px;
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.shadow};

  font-size: ${p => p.theme.typography.fontFamily};
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: ${p => p.theme.colors.primary};
  &::placeholder {
    font-weight: 300;
    color: #888888;
  }
  @media screen and (min-width: ${p => p.theme.screens.mobile}) {
    width: 100%;
    min-width: 272px;
    margin-top: 24px;
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 368px;
    margin-top: 0;
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 410px;
  }
`;

export const SearchIcon = styled(CiSearch)`
  color: ${p => p.theme.colors.primary};
`;

export const ScrubIcon = styled(RxCross2)`
  color: ${p => p.theme.colors.primary};
`;

export const SearchBtn = styled.button`
  position: absolute;
  left: 15px;
  top: 34px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    top: 13px;
  }
`;

export const ScrubSearchBtn = styled.button`
  position: absolute;
  top: 39px;

  right: 13px;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    top: 17px;
  }
`;
