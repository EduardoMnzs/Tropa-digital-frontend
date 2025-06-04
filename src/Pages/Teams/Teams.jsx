import React, { useState } from 'react';
import { TeamsPageContainer, TeamsTitle, HamburgerWrapper, MainContent } from './Teams.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import HamburgerButton from '../../components/HamburgerButton/HamburgerButton';
import { Overlay } from '../../components/Sidebar/Sidebar.styles';

const Teams = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <TeamsPageContainer>
      <HamburgerWrapper>
        <HamburgerButton onClick={toggleSidebar} />
      </HamburgerWrapper>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Overlay className={isSidebarOpen ? 'visible' : ''} onClick={toggleSidebar} />

      <MainContent>
        <TeamsTitle>Teams</TeamsTitle>
      </MainContent>
    </TeamsPageContainer>
  );
};

export default Teams;