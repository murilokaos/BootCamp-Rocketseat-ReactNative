import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  baseFontSize: 16,

  width: width < height ? width : height,
  height: width < height ? height : width,
};
