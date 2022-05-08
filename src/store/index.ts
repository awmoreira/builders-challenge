import create from 'zustand';

import createWeatherSlice, { IWeatherSlice } from './weatherSlice';

export type MyState = IWeatherSlice;

const useStore = create<MyState>((set, get) => ({
  ...createWeatherSlice(set, get),
}));

export default useStore;
