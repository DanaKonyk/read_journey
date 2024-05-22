import axios from 'axios';

export const instance = axios.create({
  baseUrl: 'https://readjourney.b.goit.study/api',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};
