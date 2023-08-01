import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { Link } from 'react-router-dom';

export const HeaderWrapp = styled.header`
  background-color: #${theme.colors.headerBg};
  border-bottom: 1px solid ${theme.colors.primary};
`;

export const HeaderContent = styled.div`
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLink = styled(Link)`
    font-family: 'Alata', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.4;
    color: ${theme.colors.primary};
    transition-property: transform;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.06);
`;

export const HeaderFormEl = styled.div`
  display: flex;
  gap: 24px;
  max-height: 48px;
`;
