import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: normal;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  height: 48px;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    pointer-events: none;
    width: ${({ theme }) => theme.spacing.medium};
    height: ${({ theme }) => theme.spacing.medium};
    flex-shrink: 0;
  }
`;