import axios from 'axios';
// import { token } from '../config/auth';

const token = 'a8vZ5ZYVb9c4TyaPwhKTfx8ilehxmPG6lp86KASiHgU';

const api = axios.create({
  baseURL: 'https://www.orulo.com.br/api/v2/buildings',
  timeout: 3000,
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
