import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAppState } from '../../../typedefs/redux/reducers/app.reducer';

const initialState: IAppState = {
  isOverlayShown: false,
  isNewVersionAvailable: false,
};

const { reducer: appReducer, actions: appActions } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOverlayShown(state: IAppState, action: PayloadAction<boolean>) {
      state.isOverlayShown = action.payload;
    },
    setVersionStatus(state: IAppState, action: PayloadAction<boolean>) {
      state.isNewVersionAvailable = action.payload;
    },
  },
});

export { appReducer, appActions };
