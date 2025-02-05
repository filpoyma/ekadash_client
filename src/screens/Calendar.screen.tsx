import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Pressable,
} from 'react-native';
import ScreenView from '../components/shared/view/Screen.view';
import { AppText, HeaderText } from '../components/shared/text';
import dayjs from 'dayjs';
import { BaseButton } from '../components/shared/buttons';
import { BackButtonHeader } from '../components/widgets/headers';
import langBtn from '../assets/images/langButton.png';
import calendarDateBg from '../assets/images/calendarDate2.png';
import { calendarScreenProps } from '../typedefs/screens/calendar.screen';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const CalendarScreen: React.FC<calendarScreenProps> = ({ navigation }) => {
  return (
    <ScreenView fullArea={true} screenPaddings={false}>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={{ flex: 1 }}
        resizeMode={'cover'}>
        <View
          style={{
            flexGrow: 1,
            alignItems: 'center',
            padding: 16,
          }}>
          <BackButtonHeader
            onBackButtonPress={navigation.goBack}
            title={dayjs().format("DD MMMM [']YY")}
          />
          <HeaderText size={'h2'} style={{ paddingTop: 38, width: 250 }}>
            Календарь прездников
          </HeaderText>
          <View
            style={{
              paddingTop: 38,
              gap: 35,
              width: '90%',
            }}>
            <View>
              <Calendar
                hideExtraDays={true}
                enableSwipeMonths={true}
                style={{
                  // borderWidth: 1,
                  borderRadius: 24,
                  // height: 350,
                  backgroundColor: '#e3d3ba',
                  shadowColor: '#000', // Shadow color
                  shadowOffset: { width: 0, height: 2 }, // Shadow offset
                  shadowOpacity: 0.25, // Shadow opacity
                  shadowRadius: 3.84, // Shadow radius
                  elevation: 5, // Elevation for Android
                }}
                theme={{
                  calendarBackground: 'transparent',
                }}
                markedDates={{
                  '2025-02-01': { selected: true, marked: true, selectedColor: 'blue' },
                  '2025-02-02': { marked: true },
                  '2025-02-03': { marked: true, dotColor: 'red', activeOpacity: 0 },
                  '2025-02-04': { disabled: true, disableTouchEvent: true },
                }}
                dayComponent={({ date, state }) => {
                  console.log('file-Calendar.screen.tsx state:', state);
                  return (
                    <Pressable
                      onPress={() => {
                        console.log(date);
                      }}>
                      <ImageBackground
                        source={state === 'today' ? langBtn : calendarDateBg}
                        resizeMode="cover"
                        style={styles.image}>
                        <Text style={styles.text}>{date?.day}</Text>
                      </ImageBackground>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: 35,
              justifyContent: 'flex-end',
              paddingBottom: 30,
              gap: 8,
              width: 200,
            }}>
            <BaseButton text={'Назад'} onPress={navigation.goBack} />
          </View>
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    justifyContent: 'center',
    height: 45,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#3885FF',
  },
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6,
  },
});

export default CalendarScreen;
