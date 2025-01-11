export enum Screens {
  main = 'main',
}

export type MainStackParamList = {
  [Screens.main]: undefined;
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
