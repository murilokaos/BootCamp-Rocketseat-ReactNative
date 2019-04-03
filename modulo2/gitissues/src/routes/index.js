import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repositories from '~/components/Repositories';
// import styles from './styles';

const Routes = () => createAppContainer(
  createSwitchNavigator(
    {
      Repositories,
    },
    {
      initialRouteName: 'Repositories',
    },
  ),
);

export default Routes;
