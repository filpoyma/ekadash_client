import dayjs from 'dayjs';
import store from '../redux/store';

const LocaleService = {
  initialize() {
    const deviceLanguage = store.getState().auth.user?.language;
    console.log('deviceLanguage', deviceLanguage);
    dayjs.locale(deviceLanguage || 'en');
  },
};

export default LocaleService;
