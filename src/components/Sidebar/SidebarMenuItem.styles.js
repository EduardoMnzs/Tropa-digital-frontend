import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuItemWrapper = styled.li`
  position: relative;
`;

export const MenuItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.p2};
  text-align: left;
  outline: none;
  transition: colors 0.2s;
  
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: 100%;
  justify-content: flex-start;
  padding-left: ${({ theme }) => theme.spacing.px3};
  padding-top: ${({ theme }) => theme.spacing.p4};
  padding-bottom: ${({ theme }) => theme.spacing.p4};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  color: ${({ theme }) => theme.colors.gray700};
  background-color: transparent;

  &:hover {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.sidebarAccentForeground};
  }

  &.active,
  &[data-active="true"] {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: ${({ theme }) => theme.borderRadius.small};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: inherit;
  }

  span {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }

  &:disabled,
  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }
`;