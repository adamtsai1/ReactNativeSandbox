// Dependencies
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// Components
import { Header, MenuBar } from '../../components';
import {
    DashboardPage,
    RequestHistoryPage,
    RequestPage,
    SettingsPage,
} from './pages';

const tabNavigatorRoutes = {
    Dashboard: DashboardPage,
    Request: RequestPage,
    RequestHistory: RequestHistoryPage,
    Settings: SettingsPage,
};
const tabNavigatorConfig = {
    initialRouteName: 'Dashboard',
    tabBarComponent: MenuBar,
};
const tabNavigator = createBottomTabNavigator(tabNavigatorRoutes, tabNavigatorConfig);

const stackNavigatorRoutes = {
    main: tabNavigator,
};

const stackNavigatorConfig = {
    initialRouteName: 'main',
    navigationOptions: {
        headerTitle: <Header />,
    },
};

export default createStackNavigator(stackNavigatorRoutes, stackNavigatorConfig);
