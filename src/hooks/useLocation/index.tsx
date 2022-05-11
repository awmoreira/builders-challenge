import { useState, useEffect } from 'react';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { Alert } from 'react-native';

interface ICoords {
  latitude: number;
  longitude: number;
}
export interface ILocation {
  getLocationNow: () => ICoords;
  location: ICoords;
}

const useLocation = () => {
  const [location, setLocation] = useState<GeolocationResponse | undefined>();

  function getLocationNow() {
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        setLocation(position);
        return position;
      },
      (error) => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  useEffect(() => {
    getLocationNow();
  }, []);

  return { location, getLocationNow };
};

export default useLocation;
