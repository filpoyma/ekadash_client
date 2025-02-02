import { IUser, IUserUpdate } from '../typedefs/models/User.model';
import baseApi from './base.api';

const UserApi = {
  basePath: 'user',

  getUrl(path?: string) {
    return path ? `${this.basePath}/${path}/` : this.basePath;
  },

  getUser(deviceId: string): Promise<IUser> {
    const url = this.getUrl();

    return baseApi.get(url, { searchParams: { deviceId } }).json();
  },

  updateUser(fieldsToUpdate: IUserUpdate): Promise<IUser> {
    const url = this.getUrl('update');

    return baseApi.patch(url, { json: fieldsToUpdate }).json();
  },
};
export default UserApi;
