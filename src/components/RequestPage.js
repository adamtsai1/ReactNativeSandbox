import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// Components
import { Page } from '../components/common';

class RequestPage extends Component {
    render() {
        return (
            <Page title="Request Time Off" navigate={this.props.navigation.navigate}>
                <Text>Request Time Off</Text>
            </Page>
        );
    }
}

RequestPage.propTypes = {
    navigation: PropTypes.object,
};

export default connect(null, null)(RequestPage);
