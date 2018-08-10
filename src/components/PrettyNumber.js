import React from 'react';
import { Text, View } from 'react-native';

export const PrettyNumber = ({ label }) => {
    const { circleStyle, labelStyle, outerContainerStyle } = styles;

    return (
        <View style={outerContainerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <View style={circleStyle}>
                <Text>11.0</Text>
            </View>
        </View>
    );
};

const styles = {
    circleStyle: {
        height: 80,
        width: 80,
    },
    labelStyle: {
        alignSelf: 'center',
        color: '#999',
    },
    outerContainerStyle: {
        borderColor: 'red',
        borderWidth: 1,
    },
};
