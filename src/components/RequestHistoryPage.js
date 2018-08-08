import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// Components
import { Page } from '../components/common';

class RequestHistoryPage extends Component {
    render() {
        return (
            <Page title="Request History" navigate={this.props.navigation.navigate}>
                <Text>Request History</Text>
            </Page>
        );
    }
}

RequestHistoryPage.propTypes = {
    navigation: PropTypes.object,
};

export default connect(null, null)(RequestHistoryPage);
