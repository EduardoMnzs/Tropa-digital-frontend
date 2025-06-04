import React, { useState } from 'react';
import { HomePageContainer, MainContent, HomeTitle, HamburgerWrapper } from './Home.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import HamburgerButton from '../../components/HamburgerButton/HamburgerButton';
import { Overlay } from '../../components/Sidebar/Sidebar.styles';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HomePageContainer>
      <HamburgerWrapper>
        <HamburgerButton onClick={toggleSidebar} />
      </HamburgerWrapper>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Overlay className={isSidebarOpen ? 'visible' : ''} onClick={toggleSidebar} />

      <MainContent>
        <HomeTitle>Home</HomeTitle>
      </MainContent>
    </HomePageContainer>
  );
};

export default Home;