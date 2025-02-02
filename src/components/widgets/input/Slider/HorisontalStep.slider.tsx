import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { HeaderText } from '../../../../components/shared/text';
import { Colors } from '../../../../constants/colors.constants';

const ThumbComponent = () => <View style={styles.thumb} />;

const TrackMarkComponent = () => (
  <View style={styles.trackContainer}>
    <View style={styles.trackBrPoints} />
  </View>
);

const HorizontalSlider = ({
  name,
  onSlidingComplete,
  initialPoints = 0,
  maxPoints = 0,
}: {
  name: string;
  onSlidingComplete: (name: string, value: number) => void;
  initialPoints?: number;
  maxPoints: number;
}) => {
  const [sliderValue, setSliderValue] = useState(initialPoints);

  const trackMarks = [(maxPoints * 33.33) / 100, (maxPoints * 66.66) / 100, maxPoints];
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };
  const { width } = useWindowDimensions();
  const onSlidingCompleteHandler = (value: number[]) => {
    onSlidingComplete(name, Math.round(value[0]));
  };
  return (
    <View style={styles.container}>
      <Slider
        trackStyle={trackStyles(width).container}
        step={1}
        renderThumbComponent={ThumbComponent}
        renderTrackMarkComponent={TrackMarkComponent}
        trackMarks={trackMarks}
        minimumValue={0}
        maximumValue={maxPoints}
        value={sliderValue}
        onValueChange={handleSliderChange}
        onSlidingComplete={onSlidingCompleteHandler}
        minimumTrackTintColor={'#fdcea7'}
        maximumTrackTintColor={'#ffe3bb'}
      />
      {/*<HeaderText size="h2" style={styles.text}>*/}
      {/*  {Math.round(sliderValue)}*/}
      {/*</HeaderText>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  thumb: {
    marginTop: 5,
    width: 27,
    height: 30,
    backgroundColor: '#6a6c63',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#718986',
  },
  trackContainer: {
    marginLeft: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackBrPoints: {
    width: 6,
    height: 6,
    backgroundColor: '#6a6c63',
    borderRadius: 3,
  },
  text: { marginLeft: 10, width: 60 },
  shadow: {
    shadowColor: '#708983',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.26,
    shadowRadius: 5.68,

    elevation: 9,
  },
});

const trackStyles = (width: number) =>
  StyleSheet.create({
    container: {
      height: 11,
      borderRadius: 6,
      width: width - 200,
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
  });

export default HorizontalSlider;
