import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { format as formatTz } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudSunRain,
  faArrowRotateRight,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
} from '@fortawesome/free-solid-svg-icons';

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

  // if (weather === null || weather === undefined)
  //   return (
  //     <Container>
  //       <WrapperTop>
  //         <LoadingIndicator size="large" />
  //       </WrapperTop>
  //     </Container>
  //   );

  // const dayWeek = format(weather?.dt, 'EEEE', {
  //   locale: pt,
  // });

  return (
    <Container>
      <WrapperTop>
        <AnyText size={21} weight="600">
          {/* {weather?.name} */}
          São José dos Pinhais
        </AnyText>
        <AnyText size={17} weight="300">
          {/* {weather?.sys?.country === 'BR' ? 'Brasil' : weather?.sys?.country} */}
          Brasil
        </AnyText>
      </WrapperTop>
      <WrapperMiddle>
        <AnyText size={103} weight="600">
          {/* {`${weather?.main?.temp.toFixed(0)}°`} */}
          14°c
        </AnyText>
        <FontAwesomeIcon icon={faCloudMoon} size={158} />
        <AnyText size={21} weight="300" margin="11px 0">
          {/* {weather?.weather[0].main} */}
          Nublado
        </AnyText>
        <AnyText size={17} weight="500">
          {/* {dayWeek?.charAt(0).toUpperCase() + dayWeek?.slice(1)} */}
          Segunda-feira
        </AnyText>
        <AnyText size={11} weight="300" margin="4px 0">
          {/* {formatTz(weather?.dt, 'dd/MM/yyyy', {
            timeZone: 'America/Sao_Paulo',
          })} */}
          (08/05/2022)
        </AnyText>
      </WrapperMiddle>
      <WrapperBottom>
        <WrapperTags>
          <TagMinMax>
            <FontAwesomeIcon icon={faTemperatureArrowDown} size={21} />
            <AnyText size={11} weight="300" margin="4px 0">
              Mínima
            </AnyText>
            <Line />
            <AnyText size={18} weight="700" margin="4px 0">
              {/* {`${weather?.main?.temp_min.toFixed(0)}°`} */}
              14º
            </AnyText>
          </TagMinMax>
          <TagMinMax>
            <FontAwesomeIcon icon={faTemperatureArrowUp} size={21} />
            <AnyText size={11} weight="300" margin="4px 0">
              Máxima
            </AnyText>
            <Line />
            <AnyText size={18} weight="700" margin="4px 0">
              {/* {`${weather?.main?.temp_max.toFixed(0)}°`} */}
              15º
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
