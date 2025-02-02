import OneSignalService from '../services/OneSignal.service';
import LocaleService from './Locale.service';
import AuthService from './Auth.service';

const AppService = {
  async initialize() {
    await AuthService.initialize();
    LocaleService.initialize();
    await OneSignalService.initialize();
  },
};

export default AppService;
