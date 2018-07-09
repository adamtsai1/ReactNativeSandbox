// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Button, Container, Label, Page, Textbox } from './common';

// Actions
import { changePasswordText, changeUserNameText } from '../actions/AuthActions';

class LoginPage extends Component {
    constructor() {
        super();
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onUserNameChanged = this.onUserNameChanged.bind(this);
    }

    onPasswordChanged(text) {
        this.props.changePasswordText(text);
    }

    onUserNameChanged(text) {
        this.props.changeUserNameText(text);
    }

    render() {
        const { passwordButtonContainerStyle, submitButtonContainerStyle } = styles;

        return (
            <Page>
                <Container style={{ marginBottom: 4 }}>
                    <Label>User Name</Label>
                </Container>

                <Container style={{ marginBottom: 16 }}>
                    <Textbox onChangeText={this.onUserNameChanged} />
                </Container>

                <Container style={{ marginBottom: 4 }}>
                    <Label>Password</Label>
                </Container>

                <Container style={{ marginBottom: 26 }}>
                    <Textbox secureTextEntry onChangeText={this.onPasswordChanged} />
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
    changePasswordText: PropTypes.func,
    changeUserNameText: PropTypes.func,
};

const styles = {
    passwordButtonContainerStyle: {},
    submitButtonContainerStyle: {
        marginBottom: 8,
    },
};

export default connect(null, { changePasswordText, changeUserNameText })(LoginPage);
