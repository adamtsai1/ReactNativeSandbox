import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../utility';

export class Textarea extends Component {
    focus() {
        this.textInput.focus();
    }

    render() {
        const updatedStyles = { ...styles };
        if (this.props.editable === false) {
            updatedStyles.backgroundColor = Colors.lightestGray;
        }

        return (
            <TextInput
                {...this.props}
                multiline
                numberOfLines={4}
                ref={(input) => { this.textInput = input; }}
                style={updatedStyles}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
            />
        );
    }
}

Textarea.propTypes = {
    editable: PropTypes.bool,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};

const styles = {
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    height: 84,
    padding: 10,
};
