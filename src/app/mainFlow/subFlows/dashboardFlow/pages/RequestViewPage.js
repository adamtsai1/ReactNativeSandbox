import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { TimeOffRequestForm } from '../../../../../components';

export const RequestViewPage = ({ navigation }) => {
    const { containerStyle } = styles;
    const timeOffRequest = navigation.state.params.timeOffRequest;

    return (
        <View style={containerStyle}>
            <TimeOffRequestForm timeOffRequest={timeOffRequest} />
        </View>
    );
};

RequestViewPage.propTypes = {
    navigation: PropTypes.object,
};

const styles = {
    containerStyle: {
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 18,
    },
};
