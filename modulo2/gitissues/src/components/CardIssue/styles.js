import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  itemIssue: {
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginVertical: metrics.baseMargin / 2,
  },
  imgIssue: {
    padding: metrics.basePadding,
    marginRight: metrics.baseMargin,
  },
  textContainer: {
    flex: 1,
  },
  titleIssue: {
    color: colors.white,
    fontSize: metrics.baseFontSize,
    fontWeight: 'bold',
  },
  ownerIssue: {
    color: colors.light,
    fontSize: metrics.baseFontSize - 4,
    textTransform: 'capitalize',
  },
  iconIssue: {
    color: colors.light,
  },
  stateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  state: {
    paddingHorizontal: 5,
    color: colors.white,
  },
});

export default styles;
