import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_scenes/login';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
};

const Authnavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default Authnavigator;
