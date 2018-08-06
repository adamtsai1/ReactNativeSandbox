// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';

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
    setAuthToken,
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
        AsyncStorage.getItem('auth_token')
            .then(item => {
                if (item) {
                    Reactotron.log(`Auth token: ${item}`);

                    Reactotron.display({
                        name: 'Oh hi',
                        important: true,
                        preview: 'this is a test',
                        value: { a: 1, b: 2, c: 3 },
                        image: 'http://placekitten.com/g/400/400',
                    });

                    this.props.setAuthToken(item);
                }
            });

        this.props.navigation.addListener('didFocus', this.initializePage);
    }

    componentDidUpdate() {
        if (this.props.authToken.length > 0) {
            // this.props.navigation.navigate('Dashboard');

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
            });
            this.props.navigation.dispatch(resetAction);
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
    setAuthToken: PropTypes.func,
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
    setAuthToken,
    submitLogin,
})(LoginPage);
