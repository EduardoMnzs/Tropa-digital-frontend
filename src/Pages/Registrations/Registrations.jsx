import React, { useState } from 'react';
import { RegistrationsPageContainer, RegistrationsTitle, HamburgerWrapper, MainContent } from './Registrations.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import HamburgerButton from '../../components/HamburgerButton/HamburgerButton';
import { Overlay } from '../../components/Sidebar/Sidebar.styles';

const Registrations = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <RegistrationsPageContainer>
      <HamburgerWrapper>
        <HamburgerButton onClick={toggleSidebar} />
      </HamburgerWrapper>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Overlay className={isSidebarOpen ? 'visible' : ''} onClick={toggleSidebar} />

      <MainContent>
        <RegistrationsTitle>Registrations</RegistrationsTitle>
      </MainContent>
    </RegistrationsPageContainer>
  );
};

export default Registrations;