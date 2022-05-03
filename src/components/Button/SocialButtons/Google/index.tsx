import React from 'react';
import { func } from 'prop-types';

import Images from '~/assets/images';

import { Container, Image } from './styles';

const Google: React.FC = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Image source={Images.IconGoogle} />
    </Container>
  );
};

export default Google;

Google.propTypes = {
  onPress: func,
};

Google.defaultProps = {
  onPress: () => {},
};
