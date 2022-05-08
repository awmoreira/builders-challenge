import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled(LinearGradient).attrs({
  colors: theme.colors.gradients.background,
})`
  flex: 1;
`;
export const WrapperTop = styled.View`
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: center;
`;
export const WrapperBottom = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 32px;
  padding-bottom: ${({ theme }) => theme.metrics.marginBottom + 32}px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
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

export const WrapperButtons = styled.View`
  flex-direction: column;
`;
