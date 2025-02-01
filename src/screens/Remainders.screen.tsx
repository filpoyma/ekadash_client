import React from 'react';
import { Text, View, ImageBackground, useWindowDimensions } from 'react-native';
import ScreenView from '../components/shared/view/Screen.view';
import { AppText, HeaderText } from '../components/shared/text';
import dayjs from 'dayjs';
import { BaseButton } from '../components/shared/buttons';
import { BackButtonHeader } from '../components/widgets/headers';
import { RemindersScreenProps } from '../typedefs/screens/remainders.screen';

const Reminders: React.FC<RemindersScreenProps> = ({ navigation }) => {
  const { height } = useWindowDimensions();
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
          <View
            style={{
              alignItems: 'center',
              paddingTop: height / 2.6,
              gap: 10,
            }}>
            <View style={{ width: 220 }}>
              <HeaderText size={'h2'}>Сегодня Экадаши</HeaderText>
              <HeaderText size={'h3'}>Начало поста в 7:15. Выход в 20:35.</HeaderText>
              <HeaderText size={'h3'}>Подробнее</HeaderText>
            </View>
            <HeaderText size={'h2'}>Завтра Двадаши</HeaderText>
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: 35,
              width: 200,
              justifyContent: 'flex-end',
              paddingBottom: 30,
              gap: 8,
            }}>
            <BaseButton text={'Напоминания'} />
            <BaseButton text={'Календарь'} />
          </View>
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

export default Reminders;
