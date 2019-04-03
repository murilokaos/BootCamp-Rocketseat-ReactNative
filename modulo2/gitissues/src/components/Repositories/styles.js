import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.secundary,
  },
  text: {
    color: colors.primary,
    fontSize: metrics.baseFontSize,
  },
});

export default styles;
