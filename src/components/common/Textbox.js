import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

/* eslint-disable import/prefer-default-export */
export const Textbox = ({ value, secureTextEntry, onChangeText }) => {
    const { textboxStyles } = styles;

    return (
        <TextInput
            secureTextEntry={secureTextEntry}
            style={textboxStyles}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

Textbox.propTypes = {
    children: PropTypes.object,
};

const styles = {
    textboxStyles: {
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        padding: 10,
    },
};

