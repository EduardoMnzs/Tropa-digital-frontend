import React from 'react';
import {
  ProfileWrapper,
  UserInfoContainer,
  AvatarContainer,
  AvatarImage,
  UserDetails,
  UserName,
  UserRole,
  ProfileMenu,
  ProfileMenuItemLink
} from './SidebarProfile.styles';
import { User, LogOut } from 'lucide-react';
import ProfileImage from '../../assets/images/profile.png';

const SidebarProfile = () => {
  return (
    <ProfileWrapper data-sidebar="footer">
      <div className="space-y-3">
        <UserInfoContainer>
          <AvatarContainer>
            <AvatarImage src={ProfileImage} alt="Kaique Steck" />
          </AvatarContainer>
          <UserDetails>
            <UserName>Kaique Steck</UserName>
            <UserRole>Administrador</UserRole>
          </UserDetails>
        </UserInfoContainer>
        <ProfileMenu data-sidebar="menu">
          <li data-sidebar="menu-item">
            <ProfileMenuItemLink to="/settings/profile">
              <User size={16} />
              <span>Alterar dados</span>
            </ProfileMenuItemLink>
          </li>
          <li data-sidebar="menu-item">
            <ProfileMenuItemLink to="/login">
              <LogOut size={16} />
              <span>Sair</span>
            </ProfileMenuItemLink>
          </li>
        </ProfileMenu>
      </div>
    </ProfileWrapper>
  );
};

export default SidebarProfile;