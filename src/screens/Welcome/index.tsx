import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  WrapperTop,
  WrapperBottom,
  AnyText,
  ButtonWeather,
  AvatarImage,
  FooterImage,
} from './styles';
import useLocation from '~/hooks/useLocation';

import { Avatar, Footer } from '~/assets/images';

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  useLocation();

  function gotToWeather() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <WrapperTop>
        <AvatarImage source={Avatar} />
        <AnyText size={30} weight="bold" margin="32px 0 23px" align="center">
          App Allan do Tempo
        </AnyText>
        <AnyText size={17} weight="300" margin="0 0 30px" align="center">
          Os dados climáticos da sua localização ao apertar de um botão.
        </AnyText>
        <ButtonWeather
          testID="button-see-weather"
          type="primary"
          label="ver previsão do tempo"
          onPress={gotToWeather}
          radius="32px"
          icon={<FontAwesomeIcon icon={faArrowRight} size={14} />}
        />
      </WrapperTop>

      <WrapperBottom>
        <FooterImage source={Footer} />
      </WrapperBottom>
    </Container>
  );
};

export default Welcome;
