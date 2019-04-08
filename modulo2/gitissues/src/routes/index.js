import { createAppContainer, createStackNavigator } from 'react-navigation';

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';

import { colors } from '~/styles';
// import styles from './styles';

const Routes = () => createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues,
    },
    {
      initialRouteName: 'Repositories',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flexGrow: 1 },
      },
    },
  ),
);

export default Routes;
