import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:9999/api/v1/',
});
