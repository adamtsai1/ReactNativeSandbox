import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// App
import { Page } from '../../../components';

class RequestHistoryPageComponent extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <Page title="Request History" navigate={this.props.navigation.navigate}>
                <Text>Request History</Text>
            </Page>
        );
    }
}

RequestHistoryPageComponent.propTypes = {
    navigation: PropTypes.object,
};

export const RequestHistoryPage = connect(null, null)(RequestHistoryPageComponent);
