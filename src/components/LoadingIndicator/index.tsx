import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import Colors from '~/global/colors';

const LoadingIndicator: React.FC<ActivityIndicatorProps> = ({ size = 'small', color = Colors.white }) => (
  <ActivityIndicator color={color} size={size} />
);

export default LoadingIndicator;
