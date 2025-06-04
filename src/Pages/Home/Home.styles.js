import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.large};
  margin-left: 0;
  padding: 24px;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const HamburgerWrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing.medium};
  left: ${({ theme }) => theme.spacing.medium};
  z-index: 50;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const HomeSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.base};
`;