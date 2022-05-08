import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from 'react-native-dotenv';

export const baseURL = API_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/json';

  return config;
});

export default api;
