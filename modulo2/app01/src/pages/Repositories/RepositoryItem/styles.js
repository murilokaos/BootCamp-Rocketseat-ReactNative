import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin / 2,
    padding: metrics.basePadding,
  },

  title: {
    color: colors.lighter,
    fontSize: 14,
    fontWeight: 'bold',
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: metrics.baseMargin,
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },

  infoIcon: {
    color: colors.lighter,
  },

  infoText: {
    color: colors.lighter,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },
});

export default styles;
