import { TStoreState } from './store';

export const selectOverlayState = (state: TStoreState) => state.app.isOverlayShown;

export const selectUser = (state: TStoreState) => state.auth.user;
