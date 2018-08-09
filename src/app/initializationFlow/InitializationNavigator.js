// Dependencies
import PropTypes from 'prop-types';
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

const InitializationNavigatorComponent = createStackNavigator(navigatorRoutes, navigatorConfig);

const InitializationNavigator = ({ navigation }) => <InitializationNavigatorComponent screenProps={{ rootNavigator: navigation }} />;
InitializationNavigator.propTypes = { navigation: PropTypes.object };
export default InitializationNavigator;
