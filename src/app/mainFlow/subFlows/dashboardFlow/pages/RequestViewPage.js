import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import { Page, TimeOffRequestForm } from '../../../../../components';

export const RequestViewPage = ({ timeOffRequest }) => {
    return (
        <View>
            <TimeOffRequestForm />
        </View>
    );
};

RequestViewPage.propTypes = {
    timeOffRequest: PropTypes.object,
};
