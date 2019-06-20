import { createAppContainer, createStackNavigator } from 'react-navigation';

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';

import { colors } from '~/styles';

const Routes = () => createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues,
    },
    {
      initialRouteName: 'Repositories',
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
      },
    },
  ),
);

export default Routes;
