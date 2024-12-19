import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
});

export default axiosInstance;
