import React from 'react';
import { Text, View } from 'react-native';
import { DatePicker, Label } from '../components';

export const TimeOffRequestForm = ({ timeOffRequest }) => {
    const { datepickerStyle } = styles;
    return (
        <View>
            <Label>Start Date</Label>
            <DatePicker />
        </View>
    );
};

const styles = {
    datepickerStyle: {
        
    },
};

// export const TimeOffRequestForm = connect(null, null)(TimeOffRequestFormComponent);
