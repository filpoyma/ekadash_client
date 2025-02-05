import { API_URL } from '../constants/api.constants';

export const isNetworkAvailable = async (url = 'https://1.1.1.1') => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 800);
  const response = await fetch(url, { signal: controller.signal });
  clearTimeout(timeoutId);
  return response;
};
export const isServerAvailable = () => {
  return isNetworkAvailable(API_URL);
};
