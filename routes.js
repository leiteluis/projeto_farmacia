import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import index from './src/pages/index';
import janeiro from './src/pages/janeiro';
export default createAppContainer(
    createSwitchNavigator({
      index,
      janeiro,
    })
  );