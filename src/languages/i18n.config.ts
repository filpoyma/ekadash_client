import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/translationEn.json';
import translationRu from './locales/translationRu.json';
import { deviceLocale } from '../utils/days.utils';

const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: deviceLocale(),
    //language to use if translations in user language are not available
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  })
  .catch(console.error);

export default i18n;
