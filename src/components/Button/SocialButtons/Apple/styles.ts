import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({ delayPressIn: 0 })`
  width: 55px;
  height: 55px;
  background-color: #f1f1f17f;
  border: 2px solid #f1f1f17f;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0 5px;
`;

export const Image = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 28px;
  height: 28px;
  transform: translateY(-2px);
`;
