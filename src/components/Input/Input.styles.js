import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: normal;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const StyledInput = styled.input`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  height: 48px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PasswordInputContainer = styled.div`
  position: relative;
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.medium};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  svg {
    width: ${({ theme }) => theme.spacing.medium};
    height: ${({ theme }) => theme.spacing.medium};
  }
`;