import dayjs from 'dayjs';
import store from '../redux/store';
import i18n from 'i18next';
import { deviceLocale } from '../utils/days.utils';

const LocaleService = {
  initialize() {
    const systemLanguage = deviceLocale();
    const userLanguage = store.getState().auth.user?.language;
    const defaultLanguage = userLanguage || systemLanguage || 'en';
    console.log('userLanguage', userLanguage);
    console.log('systemLanguage:', systemLanguage);
    dayjs.locale(defaultLanguage);
    i18n.changeLanguage(defaultLanguage).catch(console.error);
  },
};

export default LocaleService;
