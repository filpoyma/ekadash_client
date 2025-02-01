import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View, Platform, NativeModules } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
// import duration from 'dayjs/plugin/duration';
// import customParseFormat from 'dayjs/plugin/customParseFormat';

import AppNavigator from './navigation/App.navigator';
import { Colors } from './constants/colors.constants';

// import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import BootSplash from 'react-native-bootsplash';
import store from './redux/store';
import AppService from './services/App.service';

// dayjs.extend(duration);
// dayjs.extend(customParseFormat);

// dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const App = () => {
  React.useEffect(() => {
    AppService.initialize()
      .finally(() => {
        BootSplash.hide({ fade: true }).catch(console.error);
      })
      .catch(err => {
        console.error('Error during app initialize', err?.message);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar
              barStyle={'dark-content'}
              backgroundColor={'transparent'}
              translucent={true}
            />
            <AppNavigator />
          </View>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
