// Dependencies
import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';

// App
import AppNavigationService from './AppNavigationService';
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

const AppRouterComponent = createSwitchNavigator(navigatorRoutes, navigatorConfig);
export default class AppRouter extends Component {
    render() {
        return (
            <AppRouterComponent
                ref={navigatorRef => {
                    AppNavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}
