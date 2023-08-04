import styled from 'styled-components';

import { Link } from 'react-router-dom';

const priorityColors = {
  High: p => p.theme.colors.error,
  Medium: p => p.theme.colors.warning,
  Low: p => p.theme.colors.success,
};

export const Card = styled.div`
  width: 271px;
  max-height: 480px;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.shadow};
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: ${p => p.theme.screens.tablet}) {
    width: 332px;
  }
  @media screen and (min-width: ${p => p.theme.screens.desktop}) {
    width: 302px;
  }
`;

export const EventImageWrapp = styled.div`
  position: relative;
`;

export const EventImage = styled.img`
  position: relative;

  width: 100%;
  height: 336px;
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
  background-color: ${p => p.theme.colors.white};
`;

export const EventPriority = styled.p`
  font-weight: ${p => p.theme.typography.body.fontWeight};
  font-size: ${p => p.theme.typography.body.fontSize};
  line-height: 1.43;
  color: ${p => p.theme.colors.primary};
  color: ${p => priorityColors[p.priority]};
`;

export const EventCategory = styled.p`
  font-weight: ${p => p.theme.typography.body.fontWeight};
  font-size: ${p => p.theme.typography.body.fontSize};
  line-height: 1.43;
  color: ${p => p.theme.colors.primary};
`;

export const EventDes = styled.div`
  padding: 8px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.8);
`;

export const EventLocation = styled.p`
  font-weight: ${p => p.theme.typography.caption.fontWeight};
  font-size: ${p => p.theme.typography.caption.fontSize};
  color: ${p => p.theme.colors.primary};
  line-height: 1.8;
`;
export const EventDate = styled.p`
  font-weight: ${p => p.theme.typography.caption.fontWeight};
  font-size: ${p => p.theme.typography.caption.fontSize};
  color: ${p => p.theme.colors.primary};
  line-height: 1.8;
`;

export const EventText = styled.div`
  background-color: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const EventTitle = styled.h3`
  padding: 16px 16px 8px;
  color: ${p => p.theme.colors.titleText};
  font-weight: 500;
  font-size: ${p => p.theme.typography.title.fontSize};
  line-height: 1.5;
`;

export const EventSupText = styled.p`
  padding: 8px 16px;
  height: 88px;
  color: ${p => p.theme.colors.captionText};
  font-weight: ${p => p.theme.typography.caption.fontWeight};
  font-size: ${p => p.theme.typography.caption.fontSize};
  line-height: 1.4;
`;

export const EventInf = styled.div`
  transform: translateY(-40px);
  transition: transform 250ms ease-in-out;
  ${Card}:hover & {
    transform: translateY(-97px);
  }
`;

export const CardBtnWrapp = styled.div`
  display: none;
  ${Card}:hover & {
    display: flex;
    padding: 8px 16px 16px;
  }
`;
export const CardMoreBtn = styled(Link)`
  width: 114px;
  margin-left: auto;
  display: block;
  padding: 10px 24px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  width: 114px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;
`;
