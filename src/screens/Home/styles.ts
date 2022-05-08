import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '~/theme';

export const Container = styled(LinearGradient).attrs({
  colors: theme.colors.gradients.background,
})`
  flex: 1;
`;

export const WrapperTop = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;
export const WrapperMiddle = styled.View`
  height: 20%;
  padding-horizontal: 20px;
`;
export const WrapperBottom = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BoxWeather = styled.View`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  shadow-color: '#000';
  text-shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  border-radius: 30px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 20px;
`;

export const LineVertical = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  width: 5px;
  border-radius: 5px;
`;

export const BoxInfo = styled.View`
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

interface IAnyText {
  size?: number;
  weight?: string | number;
  margin?: string;
  padding?: string;
  color?: string;
}

export const AnyText = styled.Text<IAnyText>`
  font-size: ${({ size }) => size ?? 16}px;
  font-weight: ${({ weight }) => weight ?? 500};
  margin: ${({ margin }) => margin ?? 0};
  padding: ${({ padding }) => padding ?? 0};
  font-family: ${({ theme }) => theme.fonts.SourceSansPro[500]};
  color: ${({ color }) => color ?? '#000'};
`;

export const IconWeather = styled.Image`
  width: 200px;
  height: 200px;
`;

export const UpdateButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 25px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;
