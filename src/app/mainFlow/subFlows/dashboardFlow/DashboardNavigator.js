import { createStackNavigator } from 'react-navigation';
import { OverviewPage, RequestViewPage } from './pages';

const navigatorRoutes = {
    overview: {
        screen: OverviewPage,
    },
    requestView: {
        screen: RequestViewPage,
    },
};

const navigatorConfig = {
    headerMode: 'float',
    initialRouteName: 'overview',
    navigationOptions: () => ({
        headerBackTitle: null,
        headerForceInset: { top: 'never', bottom: 'never' },
        headerStyle: { backgroundColor: '#d1de3a' },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 16,
            fontWeight: '600',
        },
        title: 'Dashboard',
    }),
};

export default createStackNavigator(navigatorRoutes, navigatorConfig);
