import deviceIdStorageItem from '../storage/deviceId.storageItem';
import store from '../redux/store';
import { authActions } from '../redux/reducers/auth';

const UserService = {
  async initialize() {
    const deviceIdStorage = await deviceIdStorageItem.get();
    const deviceId =
      deviceIdStorage || (await (await import('react-native-device-info')).default.getUniqueId());
    store.dispatch(authActions.setDeviceId(deviceId));
    if (!deviceIdStorage) await this.saveIdToStorage(deviceId);
    console.log('file-User.service.ts deviceId:', deviceId);
  },

  saveIdToStorage(id: string) {
    return deviceIdStorageItem.set(id);
  },

  getIdFromStorage() {
    return deviceIdStorageItem.get();
  },
};

export default UserService;
