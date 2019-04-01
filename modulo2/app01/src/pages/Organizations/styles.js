import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },

  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
