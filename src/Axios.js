import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://8a5d97df2ab05859.mokky.dev',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('https://8a5d97df2ab05859.mokky.dev/auth')}`
  }
});

export default axiosInstance;