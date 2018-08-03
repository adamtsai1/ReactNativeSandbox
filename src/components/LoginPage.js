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
import { changePasswordText, changeUserNameText, initializeLogin } from '../actions/authActions';

class LoginPage extends Component {
    constructor() {
        super();
        this.initializePage = this.initializePage.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onUserNameChanged = this.onUserNameChanged.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this.initializePage);
    }

    onPasswordChanged(text) {
        this.props.changePasswordText(text);
    }

    onUserNameChanged(text) {
        this.props.changeUserNameText(text);
    }

    initializePage() {
        this.userNameInput.focus();
        // this.props.initializeLogin();
    }

    render() {
        const submitButtonDisabled = this.props.userName.length === 0 || this.props.password.length === 0;

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

                <Container style={{ marginBottom: 8 }}>
                    <Button disabled={submitButtonDisabled} onPress={() => alert('Submit')}>
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
    navigation: PropTypes.object,
    password: PropTypes.string,
    userName: PropTypes.string,
    changePasswordText: PropTypes.func,
    changeUserNameText: PropTypes.func,
    initializeLogin: PropTypes.func,
};

const styles = {};

const mapStateToProps = (state) => ({
    password: state.auth.loginPassword,
    userName: state.auth.loginUserName,
});

export default connect(mapStateToProps, {
    changePasswordText,
    changeUserNameText,
    initializeLogin,
})(LoginPage);
