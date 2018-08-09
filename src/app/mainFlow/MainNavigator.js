// Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { createStackNavigator } from 'react-navigation';

// Components
import { Header } from '../../components';
import {
    DashboardPage,
    RequestHistoryPage,
    RequestPage,
    SettingsPage,
} from './pages';

const navigatorRoutes = {
    Dashboard: DashboardPage,
    Request: RequestPage,
    RequestHistory: RequestHistoryPage,
    Settings: SettingsPage,
};

const navigatorConfig = {
    initialRouteName: 'Dashboard',
    navigationOptions: {
        headerTitle: <Header />,
    },
};

const MainNavigatorComponent = createStackNavigator(navigatorRoutes, navigatorConfig);
const MainNavigator = ({ navigation }) => <MainNavigatorComponent screenProps={{ rootNavigator: navigation }} />;
MainNavigator.propTypes = { navigation: PropTypes.object };
export default MainNavigator;
