import { createSwitchNavigator } from 'react-navigation';
//
import LoginScreen from '../screens/Login';

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
});

export default AppNavigator;