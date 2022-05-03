import React from 'react';
import { func } from 'prop-types';

import Images from '~/assets/images';

import { Container, Image } from './styles';

const Facebook: React.FC = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Image source={Images.IconFacebook} />
    </Container>
  );
};

export default Facebook;

Facebook.propTypes = {
  onPress: func,
};

Facebook.defaultProps = {
  onPress: () => {},
};
