import { secureStorage, SecureStorageKeys } from '@/services/storage';
import axios from 'axios'

const BASE_URL = 'https://www.superyachttimes.com/api/v2';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  async (config) => {
    const token = await secureStorage.getItem(SecureStorageKeys.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized. You might want to redirect or log out.')
    }
    return Promise.reject(error)
  }
)

export default api
