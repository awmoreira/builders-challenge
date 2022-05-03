import React from 'react';
import { func, bool } from 'prop-types';

import Images from '~/assets/images';

import { WrapperShare, ShareIcon } from './styles';

const ShareButton: React.FC = ({ onPress, big }) => {
  return (
    <WrapperShare onPress={onPress} big>
      <ShareIcon source={Images.IconShare} />
    </WrapperShare>
  );
};

export default ShareButton;

ShareButton.propTypes = {
  onPress: func,
  big: bool,
};

ShareButton.defaultProps = {
  onPress: () => {},
  big: false,
};
