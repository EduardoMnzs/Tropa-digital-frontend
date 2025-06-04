import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.medium};
`;

export const LoginCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.xLarge};
  box-shadow: ${(props) => props.theme.shadows.base};
  overflow: hidden;
  max-width: 960px;
  width: 100%;
  display: grid;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const LoginFormSection = styled.div`
  padding: ${(props) => props.theme.spacing.large};
  padding-block: 80px;

  @media (min-width: 900px) {
    padding: ${(props) => props.theme.spacing.xxLarge};
    padding-block: 80px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WelcomeTextContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xxLarge};
`;

export const WelcomeTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize['2xl']};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const WelcomeSubtitle = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xxLarge};
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};
`;

export const LoginImageSection = styled.div`
  background: linear-gradient(to bottom right, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.primary});
  padding: ${(props) => props.theme.spacing.large};
  margin: 15px;
  border-radius: ${(props) => props.theme.borderRadius.xLarge};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledLoginImage = styled.img`
  position: absolute;
  bottom: 0px;
  left: -55px;
  width: 450px;
  height: auto;
  object-fit: contain;
  z-index: 20;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ImageContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AbstractShapeContainer = styled.div`
  position: relative;
`;

export const MainCircle = styled.div`
  position: relative;
  z-index: 10;
  width: 192px;
  height: 192px;
  background-color: ${(props) => props.theme.colors.pinkLight};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerCircle = styled.div`
  width: 96px;
  height: 96px;
  background-color: ${(props) => props.theme.colors.pinkMedium};
  border-radius: ${(props) => props.theme.borderRadius.full};
  position: relative;
`;

export const InnerShapeTopLeft = styled.div`
  position: absolute;
  -top: ${(props) => props.theme.spacing.small};
  -left: ${(props) => props.theme.spacing.small};
  width: 112px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.pinkDark};
  border-radius: ${(props) => props.theme.borderRadius.full};
`;

export const Eye = styled.div`
  position: absolute;
  top: ${(props) => props.theme.spacing.medium};
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.theme.borderRadius.full};
`;

export const Mouth = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 8px;
  background-color: ${(props) => props.theme.colors.pinkStrong};
  border-radius: ${(props) => props.theme.borderRadius.full};
`;

export const BlueShape = styled.div`
  position: absolute;
  top: 80px;
  width: 64px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.blueLight};
  border-top-left-radius: ${(props) => props.theme.borderRadius.full};
  border-top-right-radius: ${(props) => props.theme.borderRadius.full};
`;

export const GrayShape1 = styled.div`
  position: absolute;
  top: 128px;
  width: 80px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.textPrimary};
  border-radius: ${(props) => props.theme.borderRadius.small};
`;

export const GrayShape1Top = styled.div`
  width: 100%;
  height: 32px;
  background-color: ${(props) => props.theme.colors.textSecondary};
  border-top-left-radius: ${(props) => props.theme.borderRadius.small};
  border-top-right-radius: ${(props) => props.theme.borderRadius.small};
`;

export const WhiteCircleGrayShape1 = styled.div`
  position: absolute;
  top: ${(props) => props.theme.spacing.small};
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.full};
`;

export const GrayShape2 = styled.div`
  position: absolute;
  top: 64px;
  -right: ${(props) => props.theme.spacing.xLarge};
  width: 32px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.textPrimary};
  border-radius: ${(props) => props.theme.borderRadius.small};
`;

export const GrayShape2Top = styled.div`
  width: 100%;
  height: 32px;
  background-color: ${(props) => props.theme.colors.textSecondary};
  border-top-left-radius: ${(props) => props.theme.borderRadius.small};
  border-top-right-radius: ${(props) => props.theme.borderRadius.small};
`;

export const FloatingBlueShape = styled.div`
  position: absolute;
  -top: ${(props) => props.theme.spacing.xLarge};
  -left: ${(props) => props.theme.spacing.xLarge};
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.blueLight};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FloatingBlueShapeInner = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.small};
  transform: rotate(45deg);
`;

export const FloatingRedShape = styled.div`
  position: absolute;
  -bottom: ${(props) => props.theme.spacing.xLarge};
  -right: ${(props) => props.theme.spacing.xLarge};
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.redLight};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FloatingRedShapeInner = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.full};
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 64px;
  left: ${(props) => props.theme.spacing.xLarge};
  display: flex;
  gap: ${(props) => props.theme.spacing.small};
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.theme.colors.textPrimary};
  border-radius: ${(props) => props.theme.borderRadius.full};
`;