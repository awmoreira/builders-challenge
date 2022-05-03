import React from 'react';
import { func } from 'prop-types';

import { Text } from '~/theme/components';
import { Filter } from '~/assets/svgs';

import { Button } from './styles';

const FilterButton: React.FC = ({ onPress }) => {
  return (
    <Button onPress={onPress}>
      <Filter />
      <Text fontWeight={500} fontSize={13} color="#455154">
        Filtrar
      </Text>
    </Button>
  );
};

export default FilterButton;

FilterButton.propTypes = {
  onPress: func,
};

FilterButton.defaultProps = {
  onPress: () => {},
};
