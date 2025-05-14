import analytics from '@react-native-firebase/analytics';

analytics().logEvent('screen_view', {
  screen_name: 'Home',
});
