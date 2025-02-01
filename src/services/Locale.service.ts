import { deviceLocale } from '../utils/days.utils';
import dayjs from 'dayjs';

const LocaleService = {
  initialize() {
    const deviceLanguage = deviceLocale();
    console.log('deviceLanguage', deviceLanguage);
    dayjs.locale(deviceLanguage);
  },
};

export default LocaleService;
