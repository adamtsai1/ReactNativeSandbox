import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';

// Components
import { Page } from '../../../components';

export class DashboardPage extends Component {
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

DashboardPage.propTypes = {
    navigation: PropTypes.object,
};
