import React from 'react';
import { func } from 'prop-types';

import { Text } from '~/global/components';
import { Sort } from '~/assets/svgs';

import { Button } from './styles';

const SortButton: React.FC = ({ onPress }) => {
  return (
    <Button onPress={onPress}>
      <Sort />
      <Text fontWeight={500} fontSize={13} color="#455154" m="0 0 0 9px">
        Ordenar
      </Text>
    </Button>
  );
};

export default SortButton;

SortButton.propTypes = {
  onPress: func,
};

SortButton.defaultProps = {
  onPress: () => {},
};
