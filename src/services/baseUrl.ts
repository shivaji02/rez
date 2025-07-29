import axios from 'axios';

const baseURL = 'http://10.0.102.35:5000'; // 👈 Use this for Android emulator

const api = axios.create({
  baseURL,
});
console.log(`API Base URL>>>rez app: ${baseURL}`);

api.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default api;
