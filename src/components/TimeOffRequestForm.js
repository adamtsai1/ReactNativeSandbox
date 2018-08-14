import { DatePicker } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';

export const TimeOffRequestForm = ({ timeOffRequest }) => {
    const { datepickerStyle } = styles;
    return (
        <View>
            <Text>Start Date</Text>
            <DatePicker style/>
        </View>
    );
};

const styles = {
    datepickerStyle: {

    },
};

// export const TimeOffRequestForm = connect(null, null)(TimeOffRequestFormComponent);
