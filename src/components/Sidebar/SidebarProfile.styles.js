import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: 20px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.px2} ${({ theme }) => theme.spacing.px2};
`;

export const AvatarContainer = styled.span`
  position: relative;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  width: 40px;
  height: 40px;
`;

export const AvatarImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  aspect-ratio: square;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const UserDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserRole = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.grayLight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileMenu = styled.ul`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  padding-inline: ${({ theme }) => theme.spacing.p2};
  gap: ${({ theme }) => theme.spacing.small};
  & > li:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
  list-style: none;
`;

export const ProfileMenuItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.p2};
  text-align: left;
  outline: none;
  transition: colors 0.2s;

  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: 100%;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.p2};
  border-radius: ${({ theme }) => theme.borderRadius.rounded};

  color: ${({ theme }) => theme.colors.gray600};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.sidebarAccentForeground};
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
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