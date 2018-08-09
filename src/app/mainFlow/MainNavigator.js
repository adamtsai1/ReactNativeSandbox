// Dependencies
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// Components
import { Header, MenuBar, MenuIcon } from '../../components';
import {
    DashboardPage,
    RequestHistoryPage,
    RequestPage,
    SettingsPage,
} from './pages';

const tabNavigatorRoutes = {
    Dashboard: {
        screen: DashboardPage,
        navigationOptions: {
            tabBarIcon: (props) => <MenuIcon {...props} iconName="tachometer" />,
        },
    },
    'Request Time Off': {
        screen: RequestPage,
        navigationOptions: {
            tabBarIcon: (props) => <MenuIcon {...props} iconName="calendar" />,
        },
    },
    History: {
        screen: RequestHistoryPage,
        navigationOptions: {
            tabBarIcon: (props) => <MenuIcon {...props} iconName="history" />,
        },
    },
    Settings: {
        screen: SettingsPage,
        navigationOptions: {
            tabBarIcon: (props) => <MenuIcon {...props} iconName="bars" />,
        },
    },
};
const tabNavigatorConfig = {
    initialRouteName: 'Dashboard',
    tabBarOptions: {
        activeTintColor: '#fff',
        iconStyle: {},
        inactiveTintColor: '#d1de3a',
        labelStyle: {
            marginTop: 4,
        },
        showIcon: true,
        style: {
            backgroundColor: '#555',
            height: 54,
            paddingTop: 8,
        },
    },

    // tabBarComponent: props => <MenuBar {...props} />,
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
