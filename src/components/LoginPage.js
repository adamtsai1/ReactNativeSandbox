import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Header from './common/Header';

export default class LoginPage extends Component {
    render() {
        console.log('props', this.props);

        return (
            <View>
                <Text>Login Page</Text>
                <Button
                    title="Go to Dashboard"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>
        );
    }
}
