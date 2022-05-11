import { GetState, SetState } from 'zustand';
import { MyState } from './index';
import api from '~/services/api';
import { API_KEY } from 'react-native-dotenv';

interface ICoord {
  latitude: number;
  longitude: number;
}

interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherSlice {
  weather: IWeather | null;
  setWeather: (location: ICoord) => void;
  isLoading: boolean;
}

export async function getWeather(location: ICoord) {
  try {
    const { data } = await api.get(
      `weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric&lang=pt_br`,
    );
    return data;
  } catch (err) {
    console.log('err', err);
  }
}

const createWeatherSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
  weather: null,
  isLoading: false,
  setWeather: async (location: ICoord) => {
    set(() => ({ isLoading: true }));
    const weather = await getWeather(location);
    set(() => ({ weather, isLoading: false }));
  },
});

export default createWeatherSlice;
