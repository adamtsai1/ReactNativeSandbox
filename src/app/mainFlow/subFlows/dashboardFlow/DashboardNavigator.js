import { createStackNavigator } from 'react-navigation';
import { OverviewPage } from './pages';

const navigatorRoutes = {
    overview: {
        screen: OverviewPage,
    },
};

const navigatorConfig = {
    initialRouteName: 'overview',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
};

export default createStackNavigator(navigatorRoutes, navigatorConfig);
