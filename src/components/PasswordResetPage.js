// Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
import { changePasswordResetEmail, initializePasswordReset, submitPasswordReset } from '../actions/authActions';

// Utility
import { validateEmail } from '../utility';

class PasswordResetPage extends Component {
    constructor() {
        super();
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onSubmitButtonPressed = this.onSubmitButtonPressed.bind(this);
    }

    componentWillMount() {
        this.props.initializePasswordReset();
    }

    onEmailChanged(text) {
        this.props.changePasswordResetEmail(text);
    }

    onSubmitButtonPressed() {
        this.props.submitPasswordReset(this.props.passwordResetEmail);
    }

    render() {
        const submitButtonDisabled = this.props.passwordResetEmail.trim().length === 0 || !validateEmail(this.props.passwordResetEmail);
        const passwordResetContent = !this.props.passwordResetSuccess ? (
            <View>
                <Form>
                    <Label>Email</Label>
                    <Container>
                        <Textbox onChangeText={this.onEmailChanged} />
                    </Container>
                </Form>

                <Container>
                    <Button disabled={submitButtonDisabled} onPress={this.onSubmitButtonPressed}>Submit</Button>
                </Container>
            </View>
        ) : (
            <View>
                <Form>
                    <Container style={{ marginBottom: 16 }}>
                        <Text style={{ flex: 1 }}>
                            {'We\'ve emailed you instructions to reset your password, if an account exists with the email you entered. You should receive them shortly.'}
                        </Text>
                    </Container>

                    <Container>
                        <Text style={{ flex: 1 }}>
                            {'If you don\'t receive an email, please make sure you\'ve entered the address you registered with, and check your spam folder.'}
                        </Text>
                    </Container>
                </Form>

                <Container>
                    <Button onPress={() => this.props.navigation.navigate('Login')}>Login</Button>
                </Container>
            </View>
        );

        return (
            <Page title="Password Reset">
                {passwordResetContent}
            </Page>
        );
    }
}

PasswordResetPage.propTypes = {
    // Navigation
    navigation: PropTypes.object,

    // State
    passwordResetEmail: PropTypes.string,
    passwordResetSuccess: PropTypes.bool,

    // Actions
    changePasswordResetEmail: PropTypes.func,
    initializePasswordReset: PropTypes.func,
    submitPasswordReset: PropTypes.func,
};

const mapStateToProps = (state) => ({
    passwordResetEmail: state.auth.passwordResetEmail,
    passwordResetSuccess: state.auth.passwordResetSuccess,
});

export default connect(mapStateToProps, {
    changePasswordResetEmail,
    initializePasswordReset,
    submitPasswordReset,
})(PasswordResetPage);
