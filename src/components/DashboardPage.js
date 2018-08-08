import React, { Component } from 'react';
import { Text } from 'react-native';

// Components
import { Page } from './common';

export default class DashboardPage extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <Page title="Dashboard">
                <Text>Dashboard Page</Text>
            </Page>
        );
    }
}
