import React from 'react';
import {
  SidebarContainer,
  SidebarFixed,
  SidebarContentWrapper,
  SidebarMainContent,
  SidebarFooterContainer
} from './Sidebar.styles';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import SidebarProfile from './SidebarProfile';

const Sidebar = ({ isOpen }) => {
  const desktopSidebarClasses = "";

  return (
    <SidebarContainer className={`group peer ${desktopSidebarClasses}`}>
      <SidebarFixed className={`${isOpen ? 'open' : ''} ${desktopSidebarClasses}`}>
        <SidebarContentWrapper data-sidebar="sidebar">
          <SidebarHeader />
          <SidebarMainContent data-sidebar="content">
            <SidebarMenu />
          </SidebarMainContent>
          <SidebarFooterContainer>
            <SidebarProfile />
          </SidebarFooterContainer>
        </SidebarContentWrapper>
      </SidebarFixed>
    </SidebarContainer>
  );
};

export default Sidebar;