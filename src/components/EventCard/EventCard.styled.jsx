import styled from 'styled-components';
import { theme } from '../../theme/theme';

const priorityColors = {
  High: p => p.theme.colors.error,
  Medium: p => p.theme.colors.warning,
  Low: p => p.theme.colors.success,
};

export const Card = styled.div`
  width: 302px;
  height: 480px;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px ${theme.colors.shadow};
`;

export const EventImage = styled.div`
  position: relative;
  border-radius: 12px 12px 0 0;
`;

export const EventCategoryList = styled.ul`
  position: absolute;
  top: 10px;
  left: 13px;
  display: flex;
  gap: 12px;
`;

export const EventCategoryItem = styled.li`
  height: 32px;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: ${theme.colors.white};
`;

export const EventPriority = styled.p`
  font-weight: ${theme.typography.body.fontWeight};
  font-size: ${theme.typography.body.fontSize};
  line-height: 1.43;
  color: ${theme.colors.primary};
  color: ${props => priorityColors[props.priority]};
`;

export const EventCategory = styled.p`
  font-weight: ${theme.typography.body.fontWeight};
  font-size: ${theme.typography.body.fontSize};
  line-height: 1.43;
  color: ${theme.colors.primary};
`;

export const EventLocation = styled.div`
  width: 302px;
  position: absolute;
  top: 407px;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.8);

  p {
    color: ${theme.colors.primary};
    font-weight: ${theme.typography.caption.fontWeight};
    font-size: ${theme.typography.caption.fontSize};
  }
`;

export const EventDes = styled.div`
  width: 100%;
  button {
    margin-top: 10px;
  }
`;

export const EventInf = styled.div`
  padding: 16px;
  h3 {
    margin-bottom: 17px;
    color: ${theme.colors.titleText};
    font-weight: ${theme.typography.title.fontWeight};
    font-size: ${theme.typography.title.fontSize};
    line-height: 1.5;
  }
  p {
    ${'' /* padding: 8px 0 16px 0; */}
    color: ${theme.colors.captionText};
    font-weight: ${theme.typography.caption.fontWeight};
    font-size: ${theme.typography.caption.fontSize};
    line-height: 1.4;
  }
`;
