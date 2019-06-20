import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  itemRepo: {
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginVertical: metrics.baseMargin / 2,
  },
  imgRepo: {
    padding: metrics.basePadding,
    marginRight: metrics.baseMargin,
  },
  textContainer: {
    flex: 1,
  },
  titleRepo: {
    color: colors.white,
    fontSize: metrics.baseFontSize,
    fontWeight: 'bold',
  },
  ownerRepo: {
    color: colors.light,
    fontSize: metrics.baseFontSize - 4,
    textTransform: 'capitalize',
  },
  iconRepo: {
    color: colors.light,
  },
});

export default styles;
