import { IUser } from '../../models/User.model';

export interface IAuthState {
  deviceId: string | null;
  user: IUser | null;
}
