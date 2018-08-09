// Dependencies
import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';

// Components
import InitializationNavigator from './app/initializationFlow/InitializationNavigator';
import AuthNavigator from './app/authFlow/AuthNavigator';
import MainNavigator from './app/mainFlow/MainNavigator';

const navigatorRoutes = {
    Initialization: InitializationNavigator,
    Auth: AuthNavigator,
    Main: MainNavigator,
};

const navigatorConfig = {
    initialRouteName: 'Initialization',
};

const MainRouterComponent = createSwitchNavigator(navigatorRoutes, navigatorConfig);
export default class MainRouter extends Component {
    render() {
        return <MainRouterComponent />;
    }
}
