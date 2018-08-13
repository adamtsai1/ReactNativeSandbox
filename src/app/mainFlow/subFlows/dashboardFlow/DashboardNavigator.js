import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { OverviewPage, RequestViewPage } from './pages';

const navigatorRoutes = {
    overview: OverviewPage,
    requestView: RequestViewPage,
};

const navigatorConfig = {
    initialRouteName: 'overview',
    // headerMode: 'none',
    navigationOptions: {
        // headerVisible: false,
        header: () => (
            <Text
                style={{
                    backgroundColor: '#d1de3a',
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '600',
                    padding: 10,
                    textAlign: 'center',
                }}
            >Dashboard</Text>
        ),
    },
};

export default createStackNavigator(navigatorRoutes, navigatorConfig);
