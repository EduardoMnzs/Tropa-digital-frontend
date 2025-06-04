import React, { useState } from 'react';
import { DashboardPageContainer, DashboardTitle, HamburgerWrapper, MainContent } from './Dashboard.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import HamburgerButton from '../../components/HamburgerButton/HamburgerButton';
import { Overlay } from '../../components/Sidebar/Sidebar.styles';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardPageContainer>
      <HamburgerWrapper>
        <HamburgerButton onClick={toggleSidebar} />
      </HamburgerWrapper>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Overlay className={isSidebarOpen ? 'visible' : ''} onClick={toggleSidebar} />

      <MainContent>
        <DashboardTitle>Dashboard</DashboardTitle>
      </MainContent>
    </DashboardPageContainer>
  );
};

export default Dashboard;