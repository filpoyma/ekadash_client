import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  defaultScreenOptions,
  MainStackParamList,
  Screens,
} from '../constants/navigator.constants';

import MainScreen from '../screens/Main.screen';
import Reminders from '../screens/Remainders.screen';

const AppStack = createStackNavigator<MainStackParamList>();

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={defaultScreenOptions} initialRouteName={Screens.main}>
      <AppStack.Screen name={Screens.main} component={MainScreen} />
      <AppStack.Screen name={Screens.reminders} component={Reminders} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
