import styled, { css } from 'styled-components';

import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { HiArrowSmallUp, HiArrowDown } from 'react-icons/hi2';

export const IconUp = styled(HiArrowSmallUp)`
  color: #3f3f3f;
`;

export const IconDown = styled(HiArrowDown)`
  color: #3f3f3f;
`;

export const SortIcon = styled(TbAdjustmentsHorizontal)`
  color: #3f3f3f;
`;

export const SortWrapp = styled.div`
  position: relative;
`;

export const SortBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  padding: 16px;
  border: none;
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.shadow};

  color: #3f3f3f;
  background-color: white;
  z-index: 9;

  svg {
    color: ${p => (p.$showsortoptions ? p.theme.colors.primary : '#3f3f3f')};
    transform: ${p =>
      p.$showsortoptions ? 'translateX(99px)' : 'translateX(0)'};
    transition: all 0.5s linear;
    z-index: 8;

    @media (min-width: ${p => p.theme.screens.tablet}) {
      transform: translate(0);
    }
  }

  &:hover,
  &:focus {
    p {
      color: ${p => p.theme.colors.primary};
    }
    svg {
      color: ${p => p.theme.colors.primary};
    }
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 143px;
    justify-content: space-around;
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const SortList = styled.ul`
  position: absolute;

  width: 158px;
  top: 56px;
  left: 0;

  border-bottom-left-radius: ${p => p.theme.radii.button};
  border-bottom-right-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$showsortoptions ? 1 : 0)};
  transform: ${p => (p.$showsortoptions ? 'translateY(0)' : 'translateY(5%)')};
  transition: all 0.5s linear;
  z-index: 1;

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 143px;
    top: 56px;
    left: 0;

    transform: translate(0);
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const SortItem = styled.li`
  width: 100%;
  padding-top: 8px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #aca7c3;
  border-top: 1px solid #aca7c3;

  transition: color 250ms ease-in-out;
  padding: 8px 24px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
    border-bottom-color: ${p => p.theme.colors.primary};
  }
`;

export const SortOptions = styled.p`
  position: absolute;
  width: 158px;
  height: 100%;
  top: 0;
  left: 0;

  display: block;
  text-align: start;

  padding: ${p => p.theme.space[8]}px 21px;
  color: ${p => (p.$showsortoptions ? p.theme.colors.primary : '#3f3f3f')};
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.sortListItemColor};
  border-top-left-radius: ${p => p.theme.radii.button};
  border-top-right-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.button};

  opacity: ${p => (p.$showsortoptions ? 1 : 0)};
  transform: ${p =>
    p.$showsortoptions ? 'translateX(0)' : 'translateX(-100px)'};
  transition: all 0.5s linear, opacity 0.5s ease-in-out;
  z-index: 0;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
  }

  @media (min-width: ${p => p.theme.screens.tablet}) {
    width: 143px;
    transform: translate(0);
    transition: all 0.5s linear;
  }
  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 148px;
  }
`;

export const OptionSelectedMob = styled.p`
  color: ${p => p.theme.colors.priamry};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.normal};

  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: none;
  }
`;

export const SortTitle = styled.p`
  display: none;
  @media (min-width: ${p => p.theme.screens.tablet}) {
    display: flex;

    font-size: 16px;
    font-weight: 500;
    line-height: 1;

    z-index: 1;
    transition: all 0.5s linear;
  }
`;
