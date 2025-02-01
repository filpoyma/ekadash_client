import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { logout } from '../../actions';
import { IUser, IUserUpdate } from '../../../typedefs/models/User.model';
import { IAuthState } from '../../../typedefs/redux/reducers/auth.reducer';

const initialState: IAuthState = {
  deviceId: null,
  user: null,
};

const { reducer: authReducer, actions: authActions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDeviceId(state: IAuthState, action: PayloadAction<string | null>) {
      state.deviceId = action.payload;
    },
    setUser(state: IAuthState, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
    updateUser(state: IAuthState, action: PayloadAction<IUserUpdate>) {
      //@ts-ignore
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, () => initialState);
  },
});

export { authReducer, authActions };
