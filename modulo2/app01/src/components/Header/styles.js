import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '~/styles';

const height = () => (Platform.OS === 'ios' ? getStatusBarHeight() : 0);

const styles = StyleSheet.create({
  container: {
    height: 54 + height(),
    backgroundColor: colors.secondary,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: height(),
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    color: colors.primary,
    fontSize: 16,
  },
});

export default styles;
