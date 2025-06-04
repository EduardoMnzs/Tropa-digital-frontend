import React from 'react';
import { MenuGroupContainer, MenuLabel, MenuList } from './SidebarMenu.styles';
import SidebarMenuItem from './SidebarMenuItem';
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserPlus
} from 'lucide-react';

const SidebarMenu = () => {
  return (
    <MenuGroupContainer data-sidebar="group">
      <MenuLabel data-sidebar="group-label">MENU</MenuLabel>
      <div data-sidebar="group-content">
        <MenuList data-sidebar="menu">
          <SidebarMenuItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            to="/dashboard"
            isActive={false}
          />
          <SidebarMenuItem
            icon={<Calendar size={20} />}
            label="Eventos"
            to="/events"
            isActive={true}
          />
          <SidebarMenuItem
            icon={<Users size={20} />}
            label="Equipes"
            to="/teams"
            isActive={false}
          />
          <SidebarMenuItem
            icon={<UserPlus size={20} />}
            label="Inscrições"
            to="/registrations"
            isActive={false}
          />
        </MenuList>
      </div>
    </MenuGroupContainer>
  );
};

export default SidebarMenu;