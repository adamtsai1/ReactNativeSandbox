import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Label, Textbox } from '../components';

export class FormTextbox extends Component {
    focus() {
        this.textboxRef.focus();
    }

    render() {
        const { errorMessageStyle, rootStyle } = styles;
        return (
            <View style={rootStyle}>
                <Label>{this.props.labelText}</Label>
                <Container>
                    <Textbox
                        {...this.props.textboxProps}
                        ref={(input) => { this.textboxRef = input; }}
                    />
                </Container>
                {this.props.errorMessage && <Text style={errorMessageStyle}>{this.props.errorMessage}</Text>}
            </View>
        );
    }
}

FormTextbox.propTypes = {
    errorMessage: PropTypes.string,
    labelText: PropTypes.string,
    textboxProps: PropTypes.object,
};

const styles = {
    rootStyle: {
        marginBottom: 16,
    },
    errorMessageStyle: {
        color: 'red',
        marginTop: 4,
    },
};
