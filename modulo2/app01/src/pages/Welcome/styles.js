import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: metrics.basePadding * 2,
  },

  error: {
    color: colors.danger,
    fontSize: 16,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    color: colors.light,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
