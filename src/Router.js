// Dependencies
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// Components
import DashboardPage from './components/DashboardPage';
import LoginPage from './components/LoginPage';
import PasswordResetPage from './components/PasswordResetPage';
import SplashPage from './components/SplashPage';
import { Header } from './components/common';

const RouterComponent = createStackNavigator({
    Dashboard: DashboardPage,
    Login: LoginPage,
    PasswordReset: PasswordResetPage,
    Splash: SplashPage,
}, {
    initialRouteName: 'Splash',
    navigationOptions: {
        headerTitle: <Header />,
    },
});

export default class Router extends Component {
    render() {
        return <RouterComponent />;
    }
}
