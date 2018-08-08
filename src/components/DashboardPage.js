import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';

// Components
import { Page } from './common';

export default class DashboardPage extends Component {
    componentWillMount() {
    }

    render() {
        return (
            <Page title="Dashboard" navigate={this.props.navigation.navigate}>
                <Text>Dashboard Page</Text>
            </Page>
        );
    }
}

DashboardPage.propTypes = {
    navigation: PropTypes.object,
};
