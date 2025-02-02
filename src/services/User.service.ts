import { IUserUpdate } from '../typedefs/models/User.model';
import UserApi from '../api/user.api';
import store from '../redux/store';
import { authActions } from '../redux/reducers/auth';

const UserService = {
  updateUser(data: IUserUpdate) {
    store.dispatch(authActions.updateUser(data));
    return UserApi.updateUser(data);
  },
};

export default UserService;
