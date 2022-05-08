import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '~/components/Button';

import { Container, WrapperTop, WrapperBottom, AnyText } from './styles';
import { Weather } from '~/assets/svgs';
import useLocation from '~/hooks/useLocation';

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const { location } = useLocation();

  function gotToWeather() {
    navigation.navigate('Home', { location });
  }

  return (
    <Container>
      <WrapperTop>
        <AnyText size={28} weight="bold" margin="0 0 30px">
          Seja bem-vindo
        </AnyText>
        <AnyText size={16} margin="0 0 30px">
          Aqui o tempo é todo seu...
        </AnyText>
        <Weather width={200} height={200} color="#748C94" />
      </WrapperTop>
      <WrapperBottom>
        <AnyText size={20} margin="0 0 50px">
          Olá! ;)
        </AnyText>
        <Button
          type="secondary"
          label="Buscar dados climáticos"
          onPress={gotToWeather}
          style={{
            width: '100%',
          }}
        />
      </WrapperBottom>
    </Container>
  );
};

export default Welcome;
