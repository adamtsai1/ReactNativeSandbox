import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// Components
import { Page } from '../../../components';

class RequestPageComponent extends Component {
    render() {
        return (
            <Page title="Request Time Off" navigate={this.props.navigation.navigate} style={{ borderWidth: 1, borderColor: 'red' }}>
                <Text>Request Time Off</Text>
            </Page>
        );
    }
}

RequestPageComponent.propTypes = {
    navigation: PropTypes.object,
};

export const RequestPage = connect(null, null)(RequestPageComponent);
