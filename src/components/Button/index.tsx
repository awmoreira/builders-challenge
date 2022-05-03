import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '~/components/LoadingIndicator';

import { Container, Label } from './styles';

const Button: React.FC = ({ type, fontsize, label, style, onPress, loading, disabled, margin }) => (
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

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  fontsize: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.object),
  label: PropTypes.string,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  fontsize: 14,
  style: {},
  label: 'Informe o texto do botão',
  onPress: () => {},
  loading: false,
  disabled: false,
  margin: '0',
};

export default Button;
