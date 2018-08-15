// Dependencies
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// Components
import AppStoreService from '../../AppStore';
import { resetTimeOffRequestModel } from '../../actions/timeOffFormActions';
import { Header } from '../../components';
import {
    RequestHistoryPage,
    RequestPage,
    SettingsPage,
} from './pages';

import DashboardNavigator from './subFlows/dashboardFlow/DashboardNavigator';

const tabNavigatorRoutes = {
    dashboard: {
        screen: DashboardNavigator,
        navigationOptions: {
            tabBarIcon: (props) => <Icon name="tachometer" size={28} color={props.tintColor} />,
            tabBarLabel: 'Dashboard',
        },
    },
    request: {
        screen: RequestPage,
        navigationOptions: {
            tabBarIcon: (props) => <Icon name="calendar" size={28} color={props.tintColor} />,
            tabBarLabel: 'Request Time Off',
            tabBarOnPress: (eventArgs) => {
                AppStoreService.dispatch(resetTimeOffRequestModel());
                eventArgs.defaultHandler();
            },
        },
    },
    history: {
        screen: RequestHistoryPage,
        navigationOptions: {
            tabBarIcon: (props) => <Icon name="history" size={28} color={props.tintColor} />,
            tabBarLabel: 'History',
        },
    },
    settings: {
        screen: SettingsPage,
        navigationOptions: {
            tabBarIcon: (props) => <Icon name="bars" size={28} color={props.tintColor} />,
            tabBarLabel: 'Settings',
        },
    },
};
const tabNavigatorConfig = {
    initialRouteName: 'dashboard',
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
            height: 60,
            paddingBottom: 6,
            paddingTop: 8,
        },
    },
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
