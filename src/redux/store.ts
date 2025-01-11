import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './reducers/auth';
import { appReducer } from './reducers/app';

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});

export type TStoreState = ReturnType<typeof store.getState>;

export default store;
