// Dependencies
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

// Components
import { Button, Container } from './common';

// Styles
import commonStyles from '../styles/common';

export default class LoginPage extends Component {
    render() {
        const { containerStyle, passwordButtonContainerStyle, submitButtonContainerStyle } = styles;

        return (
            <View style={[commonStyles.container, containerStyle]}>
                {/* <Text>Login Page</Text> */}

                <Container style={submitButtonContainerStyle}>
                    <Button onPress={() => alert('Submit')}>
                        Submit
                    </Button>
                </Container>

                <Container style={passwordButtonContainerStyle}>
                    <Button onPress={() => alert('Forgot password')}>
                        Forgot Password?
                    </Button>
                </Container>
            </View>
        );
    }
}

LoginPage.propTypes = {
    navigation: PropTypes.object,
};

const styles = {
    containerStyle: {},
    passwordButtonContainerStyle: {},
    submitButtonContainerStyle: {
        marginBottom: 8,
    },
};
