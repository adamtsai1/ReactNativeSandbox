import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

// App
import { Colors } from '../utility';

export const CircleWithLabel = ({ circleColor, circleText, labelColor, labelText }) => {
    const {
        circleStyle,
        circleTextStyle,
        labelStyle,
        outerContainerStyle,
    } = styles;

    return (
        <View style={outerContainerStyle}>
            <Text style={labelStyle}>
                {labelText}
            </Text>

            <View style={[{ borderColor: circleColor }, circleStyle]}>
                <Text style={[{ color: labelColor }, circleTextStyle]}>
                    {circleText}
                </Text>
            </View>
        </View>
    );
};

CircleWithLabel.propTypes = {
    circleColor: PropTypes.string,
    circleText: PropTypes.string,
    labelColor: PropTypes.string,
    labelText: PropTypes.string,
};

const styles = {
    circleStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        borderWidth: 2,
        height: 80,
        justifyContent: 'center',
        width: 80,
    },
    circleTextStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    labelStyle: {
        alignSelf: 'center',
        color: Colors.lightGray,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    outerContainerStyle: {
        width: 110,
    },
};
