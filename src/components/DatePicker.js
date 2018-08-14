import { DatePicker } from 'native-base';
import React from 'react';
import { View } from 'react-native';

export default (props) => {
    const { containerStyle, datepickerStyle } = styles;
    return (
        <View style={containerStyle}>
            <DatePicker {...props} style={datepickerStyle} />
        </View>
    );
};

const styles = {
    containerStyle: {
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
    },
    datepickerStyle: {},
};
