import React from 'react';

import LoadingIndicator from '../LoadingIndicator';

import { Container, Label } from './styles';

interface IButton {
  testID?: string;
  type: string;
  fontsize?: number;
  style?: object;
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  margin?: string;
  radius?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<IButton> = ({
  testID,
  type = 'primary',
  fontsize = 14,
  label = 'Informe o texto do botão',
  style = {},
  onPress,
  loading = false,
  disabled = false,
  margin = '0',
  radius = '10px',
  icon = null,
}) => (
  <Container
    testID={testID}
    type={type}
    style={style}
    onPress={onPress}
    disabled={disabled}
    margin={margin}
    radius={radius}
  >
    {loading ? (
      <LoadingIndicator color="#262a3a" />
    ) : (
      <>
        {icon}
        <Label type={type} fontsize={fontsize} icon={!!icon}>
          {label}
        </Label>
      </>
    )}
  </Container>
);

export default Button;
