import styled from 'styled-components';

export const EventsPageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.p6};
  background-color: ${({ theme }) => theme.colors.gray50};
`;

export const EventsHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const WelcomeMessage = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.mb2};
`;

export const UserName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const EventsCardWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.card};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.p6};
`;

export const SearchAndActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.mb6};
  gap: ${({ theme }) => theme.spacing.small};
`;

export const SearchInputWrapper = styled.div`
  flex: 1;
  max-width: 320px;
  position: relative;
`;

export const SearchIcon = styled.svg`
  position: absolute;
  left: ${({ theme }) => theme.spacing.px3};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray400};
  width: 16px;
  height: 16px;
`;

export const StyledInput = styled.input`
  display: flex;
  height: 40px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.px3};
  font-size: ${({ theme }) => theme.fontSize.sm};
  
  &:focus-visible {
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
  
  padding-left: 40px;
`;

export const InsertNewButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  white-space: nowrap;
  border: solid 1px ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  transition: colors 0.2s;
  
  height: 40px;
  padding: ${({ theme }) => theme.spacing.px3} ${({ theme }) => theme.spacing.p4};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.spacing.ml4};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }

  svg {
    pointer-events: none;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-right: ${({ theme }) => theme.spacing.small};
  }
`;

export const TableContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-collapse: collapse;

  thead {
    tr {
      transition: colors 0.2s;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  th {
    height: 48px;
    padding: ${({ theme }) => theme.spacing.small};
    text-align: left;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.gray500};
    font-weight: 500;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};

    &:first-of-type {
      padding-right: 0;
    }

    &:last-of-type {
      width: 48px;
      text-align: center;
    }
  }

  tbody {
    tr {
      transition: colors 0.2s;
    }
  }

  td {
    padding: ${({ theme }) => theme.spacing.small};
    vertical-align: middle;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
    
    &:first-of-type {
      padding-right: 0;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray900};
    }
    
    &:not(:first-of-type) {
      color: ${({ theme }) => theme.colors.gray600};
    }

    &:nth-child(3) {
        div {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.spacing.small};
        }
        span {
            color: ${({ theme }) => theme.colors.gray600};
        }
    }

    &:last-of-type {
        button {
            width: 32px;
            height: 32px;
            padding: 0;
            border-radius: ${({ theme }) => theme.borderRadius.medium};
            background-color: transparent;
            border: none;
            cursor: pointer;
            
            &:hover {
                background-color: ${({ theme }) => theme.colors.gray100};
                color: ${({ theme }) => theme.colors.textPrimary};
            }

            &:focus-visible {
                outline: none;
                box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
            }

            svg {
                color: ${({ theme }) => theme.colors.primary};
                width: 16px;
                height: 16px;
                flex-shrink: 0;
            }
        }
    }
  }

  tbody tr:last-child td {
    border-bottom: 0; 
  }
`;

export const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.green500};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.small}; 
  margin-top: ${({ theme }) => theme.spacing.mt6};
`;

export const PaginationButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  transition: colors 0.2s;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100}; 
    color: ${({ theme }) => theme.colors.textPrimary}; 
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.page-number {
    width: 32px; 
    height: 32px; 
    padding: 0; 
  }

  &.page-number.active {
    background-color: ${({ theme }) => theme.colors.primary}; 
    color: ${({ theme }) => theme.colors.white}; 
    border-color: ${({ theme }) => theme.colors.primary}; 

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark}; 
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &:not(.page-number) {
    height: 36px; 
    padding: ${({ theme }) => theme.spacing.px3} 25px; 
  }
`;

export const HamburgerWrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing.medium};
  left: ${({ theme }) => theme.spacing.medium};
  z-index: 50;
`;