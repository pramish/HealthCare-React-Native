import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const TabNavigationConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
};
const AppNavigator = createBottomTabNavigator(
  RouteConfigs,
  TabNavigationConfig,
);

export default AppNavigator;
