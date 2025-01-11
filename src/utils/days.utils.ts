import {isIOS} from '../constants/platform.constants';
import {NativeModules} from 'react-native';

export const deviceLocale = () => {
  const locale = isIOS
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;
  return locale ? locale.replace(/_.*/, '') : 'en';
};
