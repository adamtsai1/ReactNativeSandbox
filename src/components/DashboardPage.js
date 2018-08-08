import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Components
import { MenuBar, Page } from './common';

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
