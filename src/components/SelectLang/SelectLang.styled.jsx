import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const Select = styled.select`
  position: relative;
  width: 69px;
  height: 48px;
  border-radius: 8px;
  padding: 12px;
  border: none;
  box-shadow: 2px 4px 9px 0px ${theme.colors.shadow};

  font-size: ${theme.typography.fontFamily};
  font-weight: 300;
  font-size: 14px;
  line-height: 1;
  color: #888888;
`;
