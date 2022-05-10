import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const WrapperTop = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 74px;
  padding-horizontal: 77px;
`;

export const WrapperBottom = styled.View`
  width: 375px;
  height: 271px;
  position: absolute;
  bottom: 0;
`;

interface IAnyText {
  size?: number;
  weight?: string | number;
  margin?: string;
  padding?: string;
  color?: string;
  align?: string;
}

export const AnyText = styled.Text<IAnyText>`
  font-size: ${({ size }) => size ?? 16}px;
  font-weight: ${({ weight }) => weight ?? 500};
  margin: ${({ margin }) => margin ?? 0};
  padding: ${({ padding }) => padding ?? 0};
  font-family: ${({ theme }) => theme.fonts.SourceSansPro[500]};
  color: ${({ color }) => color ?? '#000'};
  text-align: ${({ align }) => align ?? 'left'};
`;

export const AvatarImage = styled.Image`
  height: 104px;
  width: 104px;
  margin-top: 54px;
`;

export const ButtonWeather = styled(Button)``;

export const FooterImage = styled.Image`
  height: 100%;
  width: 100%;
`;
