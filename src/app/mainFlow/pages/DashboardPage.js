import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Components
import { Page, PrettyNumber } from '../../../components';

export class DashboardPage extends Component {
    componentWillMount() {
    }

    render() {
        const { overviewContainerStyle } = styles;
        return (
            <Page title="Dashboard">
                <View style={overviewContainerStyle}>
                    <PrettyNumber label="Used" />
                    <PrettyNumber label="Days Available" />
                    <PrettyNumber label="Accrued" />
                </View>
            </Page>
        );
    }
}

DashboardPage.propTypes = {
    navigation: PropTypes.object,
};

const styles = {
    overviewContainerStyle: {
        backgroundColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        paddingTop: 10,
    },
};
