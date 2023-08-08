import styled from 'styled-components';

import { Form, Field } from 'formik';

import { CiSearch } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

export const FormWrapp = styled(Form)`
  position: relative;
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
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font-weight: 300;
    color: #888888;
  }
  @media screen and (min-width: ${p => p.theme.screens.mobile}) {
    width: 272px;
    margin-top: 24px;
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 368px;
    margin-top: 0;
  }

  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 410px;
  }

  &:hover {
    border: 0.1px solid #888888aa;
  }
`;

export const SearchIcon = styled(CiSearch)`
  position: absolute;
  left: 15px;
  top: 34px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    top: 13px;
  }
  color: ${p => p.theme.colors.primary};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
  }
`;

export const ScrubIcon = styled(RxCross2)`
  color: ${p => p.theme.colors.primary};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
  }
`;

export const SearchBtn = styled.div`
  position: absolute;
  left: 15px;
  top: 34px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    top: 13px;
  }
`;

export const ScrubSearchBtn = styled.div`
  position: absolute;
  top: 39px;

  right: 13px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hover};
  }
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    top: 17px;
  }
`;
