import { IUser } from '../../models/User.model';

export interface IAuthState {
  user: IUser | null;
  deviceId: string | null;
}
