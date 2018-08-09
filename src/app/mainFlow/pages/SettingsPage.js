// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';

// Components
import { Page } from '../../../components';

export class SettingsPage extends Component {
    render() {
        return (
            <Page title="Settings" navigate={this.props.navigation.navigate}>
                <Text>Settings Page</Text>
            </Page>
        );
    }
}

SettingsPage.propTypes = {
    navigation: PropTypes.object,
};
