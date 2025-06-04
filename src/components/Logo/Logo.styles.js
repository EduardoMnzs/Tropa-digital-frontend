import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.xxLarge};
`;

export const LogoImage = styled.img`
  width: ${({ theme }) => theme.logoSize.big};
  height: ${({ theme }) => theme.logoSize.small};
  object-fit: contain;
`;