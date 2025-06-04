// src/components/Sidebar/SidebarMenu.styles.js
import styled from 'styled-components';

export const MenuGroupContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.small};
`;

export const MenuLabel = styled.div`
  display: flex;
  height: 32px;
  flex-shrink: 0;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  padding-left: ${({ theme }) => theme.spacing.px2};
  padding-right: ${({ theme }) => theme.spacing.px2};
  outline: none;
  transition: margin ${({ theme }) => theme.transition.duration} ${({ theme }) => theme.transition.ease},
              opacity ${({ theme }) => theme.transition.duration} ${({ theme }) => theme.transition.ease};
  
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grayLight};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const MenuList = styled.ul`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  list-style: none;
  & > li:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;