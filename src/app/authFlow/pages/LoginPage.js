// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

// Components
import {
    Button,
    Container,
    Form,
    Label,
    Page,
    PageBody,
    Textbox,
} from '../../../components';

// Actions
import {
    changePasswordText,
    changeUserNameText,
    initializeLogin,
    submitLogin,
} from '../../../actions/authActions';

// App
import AppNavigationService from '../../../AppNavigationService';

class LoginPageComponent extends Component {
    constructor() {
        super();
        this.initializePage = this.initializePage.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onSubmitPressed = this.onSubmitPressed.bind(this);
        this.onUserNameChanged = this.onUserNameChanged.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this.initializePage);
    }

    componentDidUpdate() {
        if (this.props.authToken.length > 0) {
            AppNavigationService.navigate('Main');
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
                <PageBody>
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
                </PageBody>
            </Page>
        );
    }
}

LoginPageComponent.propTypes = {
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

export const LoginPage = connect(mapStateToProps, {
    changePasswordText,
    changeUserNameText,
    initializeLogin,
    submitLogin,
})(LoginPageComponent);
