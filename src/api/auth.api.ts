import baseApi from './base.api';
import { ILoginRequestData, ILoginResponseData } from '~typedefs/api/auth.api';

const AuthApi = {
  basePath: 'users',

  getUrl(path: string) {
    return `${this.basePath}/${path}/`;
  },

  login(data: ILoginRequestData): Promise<ILoginResponseData> {
    const url = this.getUrl('login');

    return baseApi.post(url, { json: data }).json();
  },

  logout() {
    const url = this.getUrl('logout');

    return baseApi.post(url).json();
  },
};

export default AuthApi;
