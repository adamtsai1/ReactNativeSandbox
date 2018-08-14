import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

export class Textarea extends Component {
    focus() {
        this.textInput.focus();
    }

    render() {
        const { textareaStyles } = styles;

        return (
            <TextInput
                multiline
                numberOfLines={4}
                ref={(input) => { this.textInput = input; }}
                style={textareaStyles}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
            />
        );
    }
}

Textarea.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};

const styles = {
    textareaStyles: {
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        height: 84,
        padding: 10,
    },
};

