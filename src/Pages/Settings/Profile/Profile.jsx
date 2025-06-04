import React, { useState } from 'react';
import { ProfilePageContainer, ProfileTitle, HamburgerWrapper, MainContent } from './Profile.styles';
import Sidebar from '../../../components/Sidebar/Sidebar';
import HamburgerButton from '../../../components/HamburgerButton/HamburgerButton';
import { Overlay } from '../../../components/Sidebar/Sidebar.styles';

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ProfilePageContainer>
      <HamburgerWrapper>
        <HamburgerButton onClick={toggleSidebar} />
      </HamburgerWrapper>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Overlay className={isSidebarOpen ? 'visible' : ''} onClick={toggleSidebar} />

      <MainContent>
        <ProfileTitle>Profile</ProfileTitle>
      </MainContent>
    </ProfilePageContainer>
  );
};

export default Profile;