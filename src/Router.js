// Dependencies
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// Components
import DashboardPage from './components/DashboardPage';
import LoginPage from './components/LoginPage';
import { Header } from './components/common';

const RouterComponent = createStackNavigator({
    Dashboard: DashboardPage,
    Login: LoginPage,
}, {
    initialRouteName: 'Login',
    navigationOptions: {
        headerTitle: <Header />,
    },
});

export default class Router extends Component {
    render() {
        return <RouterComponent />;
    }
}
