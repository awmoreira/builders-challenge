import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { format as formatTz } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import {
  Container,
  WrapperTop,
  WrapperMiddle,
  WrapperBottom,
  AnyText,
  BoxWeather,
  LineVertical,
  BoxInfo,
  IconWeather,
  UpdateButton,
} from './styles';
import useStore from '~/store';
import useLocation from '~/hooks/useLocation';
import LoadingIndicator from '~/components/LoadingIndicator';
import { Update } from '~/assets/svgs';

const Home: React.FC = () => {
  const { weather, setWeather } = useStore();

  const { getLocationNow, location } = useLocation();

  useEffect(() => {
    if (location) {
      setWeather({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  }, [location]);

  if (weather === null || weather === undefined)
    return (
      <Container>
        <WrapperTop>
          <LoadingIndicator color="#748C94" size="large" />
        </WrapperTop>
      </Container>
    );

  const dayWeek = format(weather?.dt, 'EEEE', {
    locale: pt,
  });

  return (
    <Container>
      <WrapperTop>
        <IconWeather
          source={{
            uri: `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`,
          }}
        />
        <AnyText size={34} margin="20px 0 10px" color="white">
          {weather?.weather[0].main}
        </AnyText>
        <AnyText size={22} color="white">
          {weather?.weather[0].description}
        </AnyText>
      </WrapperTop>
      <WrapperMiddle>
        <BoxWeather>
          <BoxInfo>
            <AnyText size={74}>{`${weather?.main?.temp.toFixed(0)}°`}</AnyText>
          </BoxInfo>
          <LineVertical />
          <BoxInfo>
            <AnyText size={16}>{dayWeek?.charAt(0).toUpperCase() + dayWeek?.slice(1)}</AnyText>
            <AnyText size={16}>
              {formatTz(weather?.dt, 'dd/MM/yyyy', {
                timeZone: 'America/Sao_Paulo',
              })}
            </AnyText>
            <AnyText size={16} margin="10px 0">{`Mínima: ${weather?.main?.temp_min.toFixed(
              0,
            )}°`}</AnyText>
            <AnyText size={16}>{`Máxima: ${weather?.main?.temp_max.toFixed(0)}°`}</AnyText>
          </BoxInfo>
          <UpdateButton onPress={() => getLocationNow()}>
            <Update width={30} height={30} />
          </UpdateButton>
        </BoxWeather>
      </WrapperMiddle>
      <WrapperBottom>
        <AnyText size={24} color="white" margin="10px 0">{`Cidade: ${weather?.name}`}</AnyText>
        <AnyText size={20} color="white">{`País: ${weather?.sys?.country}`}</AnyText>
      </WrapperBottom>
    </Container>
  );
};

export default Home;
