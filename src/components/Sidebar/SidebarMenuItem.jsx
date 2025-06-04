import React from 'react';
import { MenuItemWrapper, MenuItemLink } from './SidebarMenuItem.styles';
import { useLocation } from 'react-router-dom';

const SidebarMenuItem = ({ icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <MenuItemWrapper data-sidebar="menu-item">
      <MenuItemLink
        to={to}
        data-active={isActive ? 'true' : 'false'}
        className={({ isActive: routerIsActive }) => (routerIsActive ? 'active' : '')}
      >
        {icon}
        <span>{label}</span>
      </MenuItemLink>
    </MenuItemWrapper>
  );
};

export default SidebarMenuItem;