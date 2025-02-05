import { isIOS } from '../constants/platform.constants';
import { NativeModules } from 'react-native';
import dayjs from 'dayjs';

export const deviceLocale = () => {
  const locale = isIOS
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;
  return locale ? locale.replace(/_.*/, '') : 'en';
};

export const dayToText = (day: number) => {
  switch (day) {
    case 0:
      return 'ноль';
    case 1:
      return 'один день';
    case 2:
      return 'два дня';
    case 3:
      return 'три дня';
  }
};

const convertToMoscowTime = (date: Date | string | number) => {
  return dayjs(date).tz('Europe/Moscow');
};
