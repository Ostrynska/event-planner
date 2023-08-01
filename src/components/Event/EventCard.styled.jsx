import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const Card = styled.div`
  width: 302px;
  height: 480px;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 2px 4px 9px 0px ${theme.colors.shadow};
`;

export const EventCategoryList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const EventCategoryItem = styled.li`
  height: 32px;
  border-radius: 8px;
  padding: 6px, 12px, 6px, 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.white};
`;
