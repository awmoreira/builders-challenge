import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { format as formatTz } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowRotateRight,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
} from '@fortawesome/free-solid-svg-icons';

import { weatherConditions } from './helper';

import {
  Container,
  WrapperTop,
  WrapperMiddle,
  WrapperBottom,
  AnyText,
  UpdateButton,
  TagMinMax,
  WrapperTags,
  Line,
} from './styles';
import useStore from '~/store';
import useLocation from '~/hooks/useLocation';
import LoadingIndicator from '~/components/LoadingIndicator';

const Home: React.FC = () => {
  const { weather, setWeather, isLoading } = useStore();

  const { getLocationNow, location } = useLocation();

  useEffect(() => {
    if (location) {
      setWeather({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  }, [location]);

  if (weather === null || weather === undefined || isLoading)
    return (
      <Container>
        <WrapperTop isLoading>
          <LoadingIndicator size="large" />
        </WrapperTop>
      </Container>
    );

  const dayWeek = format(weather?.dt, 'EEEE', {
    locale: pt,
  });

  return (
    <Container>
      <WrapperTop>
        <AnyText size={21} weight="600">
          {weather?.name}
        </AnyText>
        <AnyText size={17} weight="400">
          {weather?.sys?.country === 'BR' ? 'Brasil' : weather?.sys?.country}
        </AnyText>
      </WrapperTop>
      <WrapperMiddle>
        <AnyText size={103} weight="600">
          {`${weather?.main?.temp.toFixed(0)}°c`}
        </AnyText>
        <FontAwesomeIcon
          icon={weatherConditions[weather?.weather[0]?.main ?? 'default']}
          size={158}
        />
        <AnyText size={21} weight="400" margin="11px 0">
          {weather?.weather[0].main}
        </AnyText>
        <AnyText size={17} weight="500">
          {dayWeek?.charAt(0).toUpperCase() + dayWeek?.slice(1)}
        </AnyText>
        <AnyText size={12} weight="400" margin="4px 0">
          {formatTz(weather?.dt, 'dd/MM/yyyy', {
            timeZone: 'America/Sao_Paulo',
          })}
        </AnyText>
      </WrapperMiddle>
      <WrapperBottom>
        <WrapperTags>
          <TagMinMax>
            <FontAwesomeIcon icon={faTemperatureArrowDown} size={21} />
            <AnyText size={11} weight="400" margin="4px 0">
              Mínima
            </AnyText>
            <Line />
            <AnyText size={18} weight="700" margin="4px 0">
              {`${weather?.main?.temp_min.toFixed(0)}°`}
            </AnyText>
          </TagMinMax>
          <TagMinMax>
            <FontAwesomeIcon icon={faTemperatureArrowUp} size={21} />
            <AnyText size={11} weight="400" margin="4px 0">
              Máxima
            </AnyText>
            <Line />
            <AnyText size={18} weight="700" margin="4px 0">
              {`${weather?.main?.temp_max.toFixed(0)}°`}
            </AnyText>
          </TagMinMax>
        </WrapperTags>

        <UpdateButton
          type="secondary"
          label="Recarregar"
          onPress={() => getLocationNow()}
          icon={<FontAwesomeIcon icon={faArrowRotateRight} size={16} />}
        />
      </WrapperBottom>
    </Container>
  );
};

export default Home;
