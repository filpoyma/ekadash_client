import { OneSignal } from 'react-native-onesignal';
import onsignalEnabledStorageItem from '../storage/onsignalEnabled.storage';
import store from '../redux/store';
import { Alert } from 'react-native';

const OneSignalService = {
  async initialize() {
    OneSignal.initialize(process.env.ONESIGNAL_APP_ID!);

    // Handle notifications received while the app is in the foreground
    // OneSignal.Notifications.addEventListener('foregroundWillDisplay', event => {
    //   const notification = event.getNotification();
    //   console.log('Notification received in foreground:', notification);
    //   // event.preventDefault(); // Prevent default notification display
    //   // Optionally, you can display your own in-app notification UI here
    //   // event.display(); // Display the notification
    // });

    // Handle notifications opened by the user
    OneSignal.Notifications.addEventListener('click', event => {
      const notification = event.notification;
      // console.log('Notification clicked:', notification);
      Alert.alert(notification.title || '', notification.body, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    });

    this.setExternalUserId();
  },

  setEmailSubscription(email: string) {
    OneSignal.User.addEmail(email);
  },

  setExternalUserId() {
    const deviceId = store.getState().auth.deviceId;
    console.log('file-OneSignal.service.ts setID:', deviceId);
    if (deviceId) OneSignal.login(deviceId);
  },

  async disableSubscription() {
    // Disable push notifications
    OneSignal.User.pushSubscription.optOut();
    await onsignalEnabledStorageItem.set(false);
  },

  async enableSubscription() {
    // Enable push notifications
    OneSignal.User.pushSubscription.optIn();
    await onsignalEnabledStorageItem.set(true);
  },

  isPushEnabled() {
    return onsignalEnabledStorageItem.get();
  },

  async requestPermissions() {
    await OneSignal.Notifications.requestPermission(true);
  },

  getPermission() {
    return OneSignal.Notifications.getPermissionAsync();
  },
};

export default OneSignalService;
