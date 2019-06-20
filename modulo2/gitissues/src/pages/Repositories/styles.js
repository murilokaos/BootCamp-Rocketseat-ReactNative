import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
  },
  containerInput: {
    padding: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: colors.primary,
    flex: 1,
    backgroundColor: colors.light,
    fontSize: metrics.baseFontSize - 2,
    borderRadius: metrics.baseRadius,
    height: 36,
    padding: metrics.basePadding / 2,
  },
  icon: {
    color: colors.primary,
    marginLeft: metrics.baseMargin * 2,
  },
  repos: {
    flex: 1,
    borderTopColor: '#F2F2F21F',
    borderTopWidth: StyleSheet.hairlineWidth,
    marginHorizontal: metrics.baseMargin * 2,
    paddingTop: metrics.basePadding / 2,
  },
  notFound: {
    color: colors.danger,
    fontSize: metrics.baseFontSize,
    textAlign: 'center',
  },
});

export default styles;
