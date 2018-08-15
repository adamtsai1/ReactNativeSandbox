import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../utility';

export class Textbox extends Component {
    focus() {
        this.textInput.focus();
    }

    render() {
        const { textboxStyles } = styles;
        const textboxStylesUpdated = { ...textboxStyles };
        if (this.props.editable === false) {
            textboxStylesUpdated.backgroundColor = Colors.lightestGray;
        }

        return (
            <TextInput
                {...this.props}
                ref={(input) => { this.textInput = input; }}
                secureTextEntry={this.props.secureTextEntry}
                style={textboxStylesUpdated}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
            />
        );
    }
}

Textbox.propTypes = {
    editable: PropTypes.bool,
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

