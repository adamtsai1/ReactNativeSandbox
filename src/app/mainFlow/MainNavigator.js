// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// Components
import { Header, MenuBar } from '../../components';
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
const MainNavigator = ({ navigation }) => {
    const { contentContainerStyle, outerContainerStyle } = styles;

    return (
        <View style={outerContainerStyle}>
            <View style={contentContainerStyle}>
                <MainNavigatorComponent screenProps={{ rootNavigator: navigation }} />
            </View>

            <MenuBar activeTab={'dashboard'} navigate={navigation.navigate} />
        </View>
    );
};

MainNavigator.propTypes = {
    navigation: PropTypes.object,
};

const styles = {
    contentContainerStyle: {
        flex: 1,
    },
    outerContainerStyle: {
        flex: 1,
    },
};

export default MainNavigator;
