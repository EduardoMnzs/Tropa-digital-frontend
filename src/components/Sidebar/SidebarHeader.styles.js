import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.p6};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const LogoIconSquare = styled.div`
  width: ${({ theme }) => theme.spacing.xLarge};
  height: ${({ theme }) => theme.spacing.xLarge};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoIconInner = styled.div`
  width: ${({ theme }) => theme.spacing.medium};
  height: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
`;

export const LogoTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const LogoTextPrimary = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const LogoTextSecondary = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.orange100 || '#FFF7ED'};
  padding: ${({ theme }) => theme.spacing.py05} ${({ theme }) => theme.spacing.px2};
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
`;