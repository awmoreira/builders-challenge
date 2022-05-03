import React from 'react';
import { func } from 'prop-types';

import Images from '~/assets/images';

import { Container, Image } from './styles';

const Apple: React.FC = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Image source={Images.IconApple} />
    </Container>
  );
};

export default Apple;

Apple.propTypes = {
  onPress: func,
};

Apple.defaultProps = {
  onPress: () => {},
};
