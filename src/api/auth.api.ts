import baseApi from './base.api';
import { ILoginRequestData, ISignUpRequestData } from '../typedefs/api/auth.api';
import { IUser } from '../typedefs/models/User.model';

const AuthApi = {
  basePath: 'auth',

  getUrl(path: string) {
    return `${this.basePath}/${path}/`;
  },

  signIn(data: ILoginRequestData): Promise<IUser> {
    const url = this.getUrl('signIn');

    return baseApi.post(url, { json: data }).json();
  },

  signUp(data: ISignUpRequestData): Promise<IUser> {
    const url = this.getUrl('signUp');

    return baseApi.post(url, { json: data }).json();
  },

  logout() {
    const url = this.getUrl('logout');

    return baseApi.post(url).json();
  },
};

export default AuthApi;
