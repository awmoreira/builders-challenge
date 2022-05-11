import {
  faCloudRain,
  faSun,
  faThunderstorm,
  faCloudSun,
  faSnowflake,
  faCloud,
  faCloudShowersHeavy,
  faCloudMoon,
} from '@fortawesome/free-solid-svg-icons';

export const weatherConditions = {
  Rain: faCloudShowersHeavy,
  Clear: faSun,
  Thunderstorm: faThunderstorm,
  Clouds: faCloudSun,
  Snow: faSnowflake,
  Drizzle: faCloud,
  Haze: faCloudRain,
  Mist: faCloud,
  default: faCloudMoon,
};
