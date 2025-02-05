export enum Screens {
  main = 'main',
  reminders = 'reminders',
  calendar = 'calendar',
}

export type MainStackParamList = {
  [Screens.main]: undefined;
  [Screens.reminders]: undefined;
  [Screens.calendar]: undefined;
};

export const defaultScreenOptions = {
  headerShown: false,
  // gestureEnabled: true,
  // gestureDirection: 'horizontal',
  // transitionSpec: {
  //   open: {
  //     animation: 'timing',
  //     config: {
  //       duration: 500,
  //       easing: Easing.inOut(Easing.ease),
  //     },
  //   },
  //   close: {
  //     animation: 'timing',
  //     config: {
  //       duration: 500,
  //       easing: Easing.inOut(Easing.ease),
  //     },
  //   },
  // },
  // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  // // cardStyleInterpolator: forFade,
  // //cardStyleInterpolator: forSlide,
};
