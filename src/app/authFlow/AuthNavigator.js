// Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { createStackNavigator } from 'react-navigation';

// App
import { Header } from '../../components';
import { LoginPage, PasswordResetPage } from './pages';

const navigatorRoutes = {
    Login: LoginPage,
    PasswordReset: PasswordResetPage,
};

const navigatorConfig = {
    initialRouteName: 'Login',
    navigationOptions: {
        headerTitle: <Header />,
    },
};

export default createStackNavigator(navigatorRoutes, navigatorConfig);
