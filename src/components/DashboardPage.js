import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Components
import { MenuBar } from './common';

export default class DashboardPage extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <View>
                <MenuBar />
                <Text>Dashboard Page</Text>
            </View>
        );
    }
}
