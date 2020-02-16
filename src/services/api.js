import axios from 'axios';
import { getToken } from '../config/auth';

const api = axios.create({
  baseURL: 'https://www.orulo.com.br/api/v2/buildings',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
