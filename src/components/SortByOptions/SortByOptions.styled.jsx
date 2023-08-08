import styled from 'styled-components';

import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { HiArrowSmallUp, HiArrowDown } from 'react-icons/hi2';

export const IconUp = styled(HiArrowSmallUp)`
  color: ${p => p.theme.colors.grey};
`;

export const IconDown = styled(HiArrowDown)`
  color: ${p => p.theme.colors.grey};
`;

export const SortIcon = styled(TbAdjustmentsHorizontal)`
  color: ${p => p.theme.colors.dark};
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

  color: ${p => p.theme.colors.dark};
  background-color: white;
  z-index: 1;

  svg {
    color: ${p =>
      p.$showsortoptions ? p.theme.colors.primary : p.theme.colors.dark};
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

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

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

  display: flex;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: ${p => p.theme.colors.grey};
  border-top: 1px solid ${p => p.theme.colors.grey};

  transition: color 250ms ease-in-out;
  padding: 8px 24px;
  cursor: pointer;

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

  padding: 16px 21px;
  color: ${p =>
    p.$showsortoptions ? p.theme.colors.primary : p.theme.colors.dark};
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.priamry};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

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

export const OptionSelectedMob = styled.span`
  color: ${p => p.theme.colors.priamry};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

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
