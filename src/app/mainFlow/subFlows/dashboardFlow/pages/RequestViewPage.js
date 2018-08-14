import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView } from 'react-native';
import { TimeOffRequestForm } from '../../../../../components';

export const RequestViewPage = ({ navigation }) => {
    const { containerStyle } = styles;
    const timeOffRequest = navigation.state.params.timeOffRequest;

    return (
        <ScrollView style={containerStyle}>
            <TimeOffRequestForm timeOffRequest={timeOffRequest} />
        </ScrollView>
    );
};

RequestViewPage.propTypes = {
    navigation: PropTypes.object,
};

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 18,
    },
};
