// src/components/Logo/Logo.jsx
import React from 'react';
import { LogoContainer, LogoImage } from './Logo.styles';
import tropaDigitalLogo from '../../assets/images/Tropa-digital-logo.png';

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage src={tropaDigitalLogo} alt="Tropa Digital Logo" />
        </LogoContainer>
    );
};

export default Logo;