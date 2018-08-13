import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class TimeOffRequestFormComponent extends Component {
    render() {
        return (
            <View>
                <Text>Time off request form</Text>
            </View>
        );
    }
}

export const TimeOffRequestForm = connect(null, null)(TimeOffRequestFormComponent);
