import { DatePicker } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

export default class DatePickerComponent extends Component {
    render() {
        const { containerStyle, datepickerPlaceholderTextStyle, datepickerTextStyle } = styles;

        return (
            <View style={containerStyle}>
                <DatePicker
                    {...this.props}
                    placeHolderTextStyle={datepickerPlaceholderTextStyle}
                    textStyle={datepickerTextStyle}
                    formatChosenDate={date => [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')}
                    onDateChange={this.props.onDateChange}
                />
            </View>
        );
    }
}

DatePickerComponent.propTypes = {
    onDateChange: PropTypes.func,
};

const styles = {
    containerStyle: {
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
    },
    datepickerPlaceholderTextStyle: {
        color: '#d3d3d3',
        fontSize: 16,
        padding: 0,
    },
    datepickerTextStyle: {
        fontSize: 16,
        padding: 0,
    },
};
