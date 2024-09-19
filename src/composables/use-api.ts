import { Cookies } from 'quasar';
import axios, { AxiosRequestConfig } from 'axios';

export function useApi(BaseURL: string) {
  const axiosInstance = axios.create({ baseURL: BaseURL });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = Cookies.get('token');
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  //* Get Method Function
  async function get(path: string, params?: object, conf?: AxiosRequestConfig) {
    const { data } = await axiosInstance.get(`${BaseURL}${path}`, {
      ...conf,
      params,
      headers: conf?.headers,
    });
    return data;
  }
  //* Post Method Function
  async function post(path: string, payload: object, conf?: AxiosRequestConfig) {
    const { data } = await axiosInstance.post(`${BaseURL}${path}`, payload, {
      ...conf,
      headers: conf?.headers,
    });
    return data;
  }
  //* PUT Method Function
  async function put(path: string, payload: object, conf?: AxiosRequestConfig) {
    const { data } = await axiosInstance.put(`${BaseURL}${path}`, payload, {
      ...conf,
      headers: conf?.headers,
    });
    return data;
  }

  //* Patch Method Function
  async function patch(path: string, payload: object, conf?: AxiosRequestConfig) {
    const { data } = await axiosInstance.patch(`${BaseURL}${path}`, payload, {
      ...conf,
      headers: conf?.headers,
    });
    return data;
  }

  return {
    get,
    put,
    post,
    patch,
  };
}
