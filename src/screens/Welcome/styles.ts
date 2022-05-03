import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled(LinearGradient).attrs({
  colors: theme.colors.gradients.background,
})`
  flex: 1;
`;
