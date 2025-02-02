import deviceIdStorageItem from '../storage/deviceId.storageItem';
import store from '../redux/store';
import { authActions } from '../redux/reducers/auth';
import AuthApi from '../api/auth.api';
import { deviceLocale } from '../utils/days.utils';

const AuthService = {
  async initialize() {
    const deviceIdStorage = await this.getDeviceIdFromStorage();
    const deviceId = deviceIdStorage || (await require('react-native-device-info').getUniqueId());
    store.dispatch(authActions.setDeviceId(deviceId));
    if (!deviceIdStorage) await this.signUp(deviceId);
    else await this.signIn(deviceId);
  },

  saveDeviceIdToStorage(id: string) {
    return deviceIdStorageItem.set(id);
  },

  getDeviceIdFromStorage() {
    return deviceIdStorageItem.get();
  },

  async signUp(deviceId: string) {
    await this.saveDeviceIdToStorage(deviceId);
    const language = deviceLocale();
    const user = await AuthApi.signUp({ deviceId, language });
    store.dispatch(authActions.setUser(user));
  },

  async signIn(deviceId: string) {
    let user = await AuthApi.signIn({ deviceId });
    if (!user) return await this.signUp(deviceId);
    store.dispatch(authActions.setUser(user));
  },
};

export default AuthService;
