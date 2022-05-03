import styled from 'styled-components/native';

export const WrapperShare = styled.TouchableOpacity.attrs({ delayPressIn: 0 })`
  background: rgba(246, 246, 246, 0.5);
  border-radius: 5px;
  width: ${(props) => (props.big ? 38 : 30)}px;
  height: ${(props) => (props.big ? 38 : 30)}px;
  align-items: center;
  justify-content: center;
`;

export const ShareIcon = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 12px;
`;
