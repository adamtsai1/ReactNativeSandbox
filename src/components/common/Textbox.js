import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

/* eslint-disable import/prefer-default-export */
// export const Textbox = ({ value, secureTextEntry, onChangeText }) => {
//     const { textboxStyles } = styles;

//     return (
//         <TextInput
//             secureTextEntry={secureTextEntry}
//             style={textboxStyles}
//             value={value}
//             onChangeText={onChangeText}
//         />
//     );
// };

export class Textbox extends Component {
    focus() {
        this.textInput.focus();
    }

    render() {
        const { textboxStyles } = styles;

        return (
            <TextInput
                ref={(input) => { this.textInput = input; }}
                secureTextEntry={this.props.secureTextEntry}
                style={textboxStyles}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
            />
        );
    }
}

// = ({ value, secureTextEntry, onChangeText }) =>

Textbox.propTypes = {
    secureTextEntry: PropTypes.bool,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
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

