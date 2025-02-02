import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

import ScreenView from '../components/shared/view/Screen.view';
import { AppText, HeaderText } from '../components/shared/text';
import dayjs from 'dayjs';
import { BaseButton } from '../components/shared/buttons';
import { BackButtonHeader } from '../components/widgets/headers';
import { RemindersScreenProps } from '../typedefs/screens/remainders.screen';
import HorizontalSlider from '../components/widgets/input/Slider/HorisontalStep.slider';
import { dayToText } from '../utils/days.utils';
import TextInputLabeled from '../components/widgets/input/TextInputLabeled.component';
import OneSignalService from '../services/OneSignal.service';
import UserService from '../services/User.service';
import { IUserUpdate } from '../typedefs/models/User.model';
import { emailRegex } from '../constants/regex.constants';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';

const valuesData = {
  daysRemindPush: 0,
  email: 'soom@mail.com',
  emailError: '',
  tg: '',
};

const Reminders: React.FC<RemindersScreenProps> = ({ navigation }) => {
  const [remindersValues, setRemindersValues] = React.useState<typeof valuesData>(valuesData);
  const user = useSelector(selectUser);

  React.useEffect(() => {
    if (remindersValues.daysRemindPush > 0) {
      (async () => {
        const isPushEnabled = await OneSignalService.isPushEnabled();
        if (!isPushEnabled) OneSignalService.enableSubscription().catch(console.error);
        try {
          const isPushPermission = await OneSignalService.getPermission();
          if (!isPushPermission) await OneSignalService.requestPermissions();
        } catch (err) {
          console.error('Push permission err:', err);
        }
      })();
    } else OneSignalService.disableSubscription().catch(console.error);
  }, [remindersValues.daysRemindPush]);

  const updateUser = (user: IUserUpdate) => {
    if (!emailRegex.test(remindersValues.email))
      return setRemindersValues(prevValues => ({
        ...prevValues,
        emailError: 'true',
      }));
    UserService.updateUser(user).catch(console.error);
  };
  const updateUserDebounced = useDebouncedCallback(updateUser, 800);

  const onChangeHandler = async (name: string, value: number | string) => {
    setRemindersValues(prev => {
      const data = { ...prev, [name]: value, [name + 'Error']: '' };

      updateUserDebounced(data);
      return data;
    });
  };
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
            Настройки уведомлений
          </HeaderText>
          <View
            style={{
              paddingTop: 38,
              gap: 35,
              width: 250,
            }}>
            <View>
              <HorizontalSlider
                name={'daysRemindPush'}
                onSlidingComplete={onChangeHandler}
                maxPoints={3}
                initialPoints={user?.daysRemindPush}
              />
              <HeaderText centered={false} size={'h3'} style={{ paddingTop: 8 }}>
                {remindersValues.daysRemindPush
                  ? `Уведомлять за ${remindersValues.daysRemindPush} ${
                      remindersValues.daysRemindPush === 1 ? 'день.' : 'дня.'
                    }`
                  : 'Пуш уведомления отключены'}
              </HeaderText>
              {remindersValues.daysRemindPush ? (
                <HeaderText centered={false} size={'h4'}>
                  Пуш ведомление придет за {dayToText(remindersValues.daysRemindPush)} до
                  экадаши.
                </HeaderText>
              ) : null}
            </View>
            <View style={{ opacity: 0.5 }}>
              <TextInputLabeled
                value={remindersValues.email}
                onChangeTextNamed={onChangeHandler}
                name={'email'}
                labelError={remindersValues.emailError}
                hideBottomLabel={true}
                disable={true}
                keyboardType={'email-address'}
              />
              <HeaderText
                centered={false}
                size={'h3'}
                style={{ paddingTop: 8, paddingLeft: 3 }}>
                Уведомлять на почту
              </HeaderText>
            </View>
            <View style={{ opacity: 0.5 }}>
              <TextInputLabeled
                value={'@soon'}
                onChangeTextNamed={() => {}}
                name={'tg'}
                disable={true}
              />
              <HeaderText
                centered={false}
                size={'h3'}
                style={{ paddingTop: 8, paddingLeft: 3 }}>
                Уведомлять в телеграмм
              </HeaderText>
            </View>
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
            <BaseButton text={'Назад'} onPress={navigation.goBack} />
          </View>
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

export default Reminders;
