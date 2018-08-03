// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Button,
    Container,
    Form,
    Label,
    Page,
    Textbox,
} from './common';

// Actions
import {
    changePasswordText,
    changeUserNameText,
    initializeLogin,
    submitLogin,
} from '../actions/authActions';

class LoginPage extends Component {
    constructor() {
        super();
        this.initializePage = this.initializePage.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onSubmitPressed = this.onSubmitPressed.bind(this);
        this.onUserNameChanged = this.onUserNameChanged.bind(this);
    }

    componentDidMount() {
        if (this.props.authToken.length > 0) {
            // Redirect to dashboard
        }

        this.props.navigation.addListener('didFocus', this.initializePage);
    }

    componentDidUpdate() {
        if (this.props.authToken.length > 0) {
            // Redirect to dashboard

            debugger
        }
    }

    onPasswordChanged(text) {
        this.props.changePasswordText(text);
    }

    onSubmitPressed() {
        this.props.submitLogin(this.props.userName, this.props.password);
    }

    onUserNameChanged(text) {
        this.props.changeUserNameText(text);
    }

    initializePage() {
        this.userNameInput.focus();
        // this.props.initializeLogin();
    }

    render() {
        const { errorMessageContainerStyle, errorMessageTextStyle } = styles;
        const submitButtonDisabled = this.props.userName.length === 0 || this.props.password.length === 0;
        const errorMessage = this.props.errorMessage.length > 0 ? (
            <Container style={errorMessageContainerStyle}>
                <Label style={errorMessageTextStyle}>{this.props.errorMessage}</Label>
            </Container>
        ) : null;

        return (
            <Page title="Login">
                <Form>
                    <Label>User Name</Label>
                    <Container style={{ marginBottom: 16 }}>
                        <Textbox
                            ref={(input) => { this.userNameInput = input; }}
                            value={this.props.userName}
                            onChangeText={this.onUserNameChanged}
                        />
                    </Container>

                    <Label>Password</Label>
                    <Container>
                        <Textbox
                            secureTextEntry
                            value={this.props.password}
                            onChangeText={this.onPasswordChanged}
                        />
                    </Container>
                </Form>

                {errorMessage}

                <Container style={{ marginBottom: 8 }}>
                    <Button disabled={submitButtonDisabled} onPress={this.onSubmitPressed}>
                        Submit
                    </Button>
                </Container>

                <Container>
                    <Button onPress={() => this.props.navigation.navigate('PasswordReset')}>
                        Forgot Password?
                    </Button>
                </Container>
            </Page>
        );
    }
}

LoginPage.propTypes = {
    // Dependencies
    navigation: PropTypes.object,

    // Properties
    authToken: PropTypes.string,
    errorMessage: PropTypes.string,
    password: PropTypes.string,
    userName: PropTypes.string,

    // Actions
    changePasswordText: PropTypes.func,
    changeUserNameText: PropTypes.func,
    submitLogin: PropTypes.func,
};

const styles = {
    errorMessageContainerStyle: {
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: -20,
    },
    errorMessageTextStyle: {
        color: 'red',
    },
};

const mapStateToProps = (state) => ({
    authToken: state.auth.authToken,
    errorMessage: state.auth.loginErrorMessage,
    password: state.auth.loginPassword,
    userName: state.auth.loginUserName,
});

export default connect(mapStateToProps, {
    changePasswordText,
    changeUserNameText,
    initializeLogin,
    submitLogin,
})(LoginPage);
