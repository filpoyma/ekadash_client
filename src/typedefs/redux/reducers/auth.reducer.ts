import { IUser } from '../../models/User.model';

export interface IAuthState {
  token: string | null;
  user: IUser | null;
  isLoggedIn: boolean;
}
