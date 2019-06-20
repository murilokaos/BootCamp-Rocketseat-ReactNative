import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
  },
  issues: {
    flex: 1,
    marginHorizontal: metrics.baseMargin * 2,
    // paddingTop: metrics.basePadding / 2,
  },
  buttons: {
    padding: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flex: 1,
  },
  firstButton: {
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  lastButton: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  textButton: {
    color: colors.secundary,
  },
  selected: {
    color: colors.white,
  },
});

export const firstButton = StyleSheet.flatten([styles.firstButton, styles.button]);
export const lastButton = StyleSheet.flatten([styles.lastButton, styles.button]);

export default styles;
