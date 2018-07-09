// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, Container, Label, Page, Textbox } from './common';

export default class LoginPage extends Component {
    render() {
        const { passwordButtonContainerStyle, submitButtonContainerStyle } = styles;

        return (
            <Page>
                <Container style={{ marginBottom: 4 }}>
                    <Label>Username</Label>
                </Container>

                <Container style={{ marginBottom: 16 }}>
                    <Textbox />
                </Container>

                <Container style={{ marginBottom: 4 }}>
                    <Label>Password</Label>
                </Container>

                <Container style={{ marginBottom: 26 }}>
                    <Textbox />
                </Container>

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
            </Page>
        );
    }
}

LoginPage.propTypes = {
    navigation: PropTypes.object,
};

const styles = {
    passwordButtonContainerStyle: {},
    submitButtonContainerStyle: {
        marginBottom: 8,
    },
};
