import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: transparent;
  transition: width ${({ theme }) => theme.transition.duration} ${({ theme }) => theme.transition.ease};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }

  &.collapsible-offcanvas {
    width: 0;
  }
  &.collapsible-icon {
    width: ${({ theme }) => theme.sidebar.widthIcon};
  }
`;

export const SidebarFixed = styled.div`
  position: fixed;
  inset: 0;
  left: 0;
  z-index: 40;
  height: 100vh;
  width: ${({ theme }) => theme.sidebar.width};
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  transition: transform ${({ theme }) => theme.transition.duration} ${({ theme }) => theme.transition.ease};
  box-shadow: ${({ theme }) => theme.shadows.base};

  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    transform: translateX(0);
    position: sticky;
    left: 0;
    top: 0;
    border-right: 1px solid ${({ theme }) => theme.colors.sidebarBorder};
    box-shadow: none;
  }

  &.collapsible-offcanvas {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      left: calc(${({ theme }) => theme.sidebar.width} * -1);
    }
  }
  &.collapsible-icon {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: ${({ theme }) => theme.sidebar.widthIcon};
    }
  }
`;

export const SidebarContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.sidebarBackground};
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;

  &.variant-floating {
    border: 1px solid ${({ theme }) => theme.colors.sidebarBorder};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.base};
  }
`;

export const SidebarMainContent = styled.div`
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  overflow-y: auto;
  padding-left: ${({ theme }) => theme.spacing.p4};
  padding-right: ${({ theme }) => theme.spacing.p4};
`;

export const SidebarFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.p4};
  border-top: 1px solid ${({ theme }) => theme.colors.sidebarBorder};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlayBg};
  z-index: 30;
  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ theme }) => theme.transition.duration} ${({ theme }) => theme.transition.ease},
              visibility ${({ theme }) => theme.transition.duration} ${({ theme }) => theme.transition.ease};

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;