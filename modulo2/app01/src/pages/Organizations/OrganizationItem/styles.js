import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    marginTop: metrics.baseMargin,
    width: (metrics.screenWidth - 60) / 2,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: metrics.baseRadius,
  },
  title: {
    color: colors.lighter,
    fontSize: 16,
    marginTop: metrics.baseMargin,
  },
});

export default styles;
