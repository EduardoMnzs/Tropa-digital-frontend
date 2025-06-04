import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  LogoWrapper
} from './SidebarHeader.styles';
import logo from '../../assets/images/Tropa-digital-logo.png';

const SidebarHeader = () => {
  return (
    <HeaderContainer data-sidebar="header">
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </LogoWrapper>
    </HeaderContainer>
  );
};

export default SidebarHeader;