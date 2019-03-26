/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native';

// eslint-disable-next-line no-undef
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.103' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
