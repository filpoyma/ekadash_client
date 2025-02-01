import OneSignalService from '../services/OneSignal.service';
import LocaleService from './Locale.service';
import { OneSignal } from 'react-native-onesignal';
import UserService from './User.service';

const AppService = {
  async initialize() {
    await UserService.initialize();
    LocaleService.initialize();
    await OneSignalService.initialize();
  },
};

export default AppService;
