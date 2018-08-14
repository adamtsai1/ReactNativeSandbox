import { DatePicker } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';

export default class DatePickerComponent extends Component {
    constructor() {
        super();
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render() {
        const { containerStyle, datepickerPlaceholderTextStyle, datepickerTextStyle } = styles;

        return (
            <View style={containerStyle}>
                <DatePicker
                    {...this.props}
                    placeHolderTextStyle={datepickerPlaceholderTextStyle}
                    textStyle={datepickerTextStyle}
                    formatChosenDate={date => [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')}
                    onDateChange={this.setDate}
                />
            </View>
        );
    }
}

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
