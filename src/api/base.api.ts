import ky, { HTTPError } from 'ky';

import { API_URL } from '../constants/api.constants';
import store from '../redux/store';

const baseApi = ky.create({
  prefixUrl: API_URL,
  timeout: 15000,
});

const tokenInterceptor = (request: Request) => {
  const key = process.env.SERVER_KEY!;
  const token = store.getState().auth.deviceId;

  if (token !== null && request.headers)
    request.headers.set('authorization', `Bearer ${token}`);

  request.headers.set('x-api-key', key);
};

const errorInterceptor = async (error: HTTPError) => {
  const { response } = error;
  const contentType = response.headers.get('content-type');
  if (!contentType) return error;
  error.message =
    contentType?.indexOf('application/json') !== -1
      ? await response.json()
      : await response.text();
  return error;
};

const api = baseApi.extend({
  hooks: {
    beforeRequest: [tokenInterceptor],
    beforeError: [errorInterceptor],
  },
});

export default api;
