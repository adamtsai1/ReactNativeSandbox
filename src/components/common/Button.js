import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

/* eslint-disable import/prefer-default-export */
export const Button = ({ children, onPress }) => {
    const { buttonStyle, buttonTextStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} textStyle={buttonTextStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
};

const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#d1de3a',
        borderRadius: 5,
        flex: 1,
    },
    buttonTextStyle: {
        color: '#fff',
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10,
    },
};
