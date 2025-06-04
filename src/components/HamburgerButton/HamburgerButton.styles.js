// src/components/HamburgerButton/HamburgerButton.styles.js
import styled from 'styled-components';

export const StyledHamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing.xxLarge}; /* Ajuste o tamanho conforme necessário (ex: 48px) */
  height: ${({ theme }) => theme.spacing.xxLarge}; /* Ajuste o tamanho conforme necessário */
  background: none;
  border: none;
  cursor: pointer;
  z-index: 50; /* Garante que fique acima de outros elementos */
  color: ${({ theme }) => theme.colors.textPrimary}; /* Cor do ícone */
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  /* Oculta em telas maiores */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }

  svg {
    width: ${({ theme }) => theme.spacing.large}; /* Tamanho do ícone (ex: 24px) */
    height: ${({ theme }) => theme.spacing.large};
  }
`;