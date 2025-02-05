import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import IconButton from '../../../assets/icons/arrowLeftShort.svg';
import { AppText } from '../../shared/text';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useSharedValue(0);
  const toggleMenu = (btnNum: number) => {
    console.log('file-FloatingButton.tsx btnNum:', btnNum);
    animation.value = withSpring(isOpen ? 0 : 1, { damping: 10, stiffness: 90 });
    setIsOpen(!isOpen);
  };

  const pinStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animation.value }, { translateY: animation.value * -70 }],
    };
  });
  const pinStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animation.value }, { translateY: animation.value * -140 }],
    };
  });
  // const pinStyle3 = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ scale: animation.value }, { translateY: animation.value * -210 }],
  //   };
  // });

  const textOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animation.value, [0, 1], [1, 0]),
    };
  });

  const mainButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: 1 + animation.value * 0.1 }], // Slight expansion
    };
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => toggleMenu(0)} style={styles.button}>
        <Animated.View style={[styles.button, mainButtonStyle, styles.shadow]}>
          <ImageBackground
            source={require('../../../assets/images/langButton.png')}
            style={styles.buttonImage}>
            <Animated.View style={textOpacityStyle}>
              <AppText>En</AppText>
            </Animated.View>
          </ImageBackground>
        </Animated.View>
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.menu, pinStyle1, styles.shadow]}>
        <ImageBackground
          source={require('../../../assets/images/langButton.png')}
          style={styles.buttonImage}>
          <AppText onPress={() => toggleMenu(1)}>En</AppText>
        </ImageBackground>
      </Animated.View>

      <Animated.View style={[styles.menu, pinStyle2, styles.shadow]}>
        <ImageBackground
          source={require('../../../assets/images/langButton.png')}
          style={styles.buttonImage}>
          <AppText onPress={() => toggleMenu(2)}>Ru</AppText>
        </ImageBackground>
      </Animated.View>

      {/*<Animated.View style={[styles.menu, pinStyle3, styles.shadow]}>*/}
      {/*  <IconButton*/}
      {/*    onPress={() => {*/}
      {/*      toggleMenu(3);*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</Animated.View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    left: 24,
    zIndex: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
  },
  menu: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#708983',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingButton;
