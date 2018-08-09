// Dependencies
import React from 'react';
import { createStackNavigator } from 'react-navigation';

// App
import { Header } from '../../components';
import { SplashPage } from './pages';

const navigatorRoutes = { Splash: SplashPage };
const navigatorConfig = {
    initialRouteName: 'Splash',
    navigationOptions: {
        headerTitle: <Header />,
    },
};

export default createStackNavigator(navigatorRoutes, navigatorConfig);
