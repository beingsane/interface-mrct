import 'dotenv/config';

import axios from 'axios';
// import { getToken } from './auth';

const token = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://www.orulo.com.br/api/v2',
  timeout: 3000,
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
