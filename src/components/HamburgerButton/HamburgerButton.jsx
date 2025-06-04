// src/components/HamburgerButton/HamburgerButton.jsx
import React from 'react';
import { StyledHamburgerButton } from './HamburgerButton.styles';
import { Menu } from 'lucide-react'; // Ícone de hambúrguer da Lucide

const HamburgerButton = ({ onClick }) => {
  return (
    <StyledHamburgerButton onClick={onClick}>
      <Menu /> {/* Ícone de hambúrguer */}
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;