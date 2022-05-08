import React from 'react';

import LoadingIndicator from '../LoadingIndicator';

import { Container, Label } from './styles';
interface IButton {
  type: string;
  fontsize?: number;
  style?: object;
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  margin?: string;
}

const Button: React.FC<IButton> = ({
  type = 'primary',
  fontsize = 14,
  label = 'Informe o texto do botão',
  style = {},
  onPress,
  loading = false,
  disabled = false,
  margin = '0',
}) => (
  <Container type={type} style={style} onPress={onPress} disabled={disabled} margin={margin}>
    {loading ? (
      <LoadingIndicator color="#262a3a" />
    ) : (
      <Label type={type} fontsize={fontsize}>
        {label}
      </Label>
    )}
  </Container>
);

export default Button;
