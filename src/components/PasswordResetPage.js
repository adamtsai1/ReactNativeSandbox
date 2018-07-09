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
import { changePasswordResetEmail } from '../actions/AuthActions';

// Utility
import { validateEmail } from '../utility';

class PasswordResetPage extends Component {
    constructor() {
        super();
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onSubmitButtonPressed = this.onSubmitButtonPressed.bind(this);
    }

    onEmailChanged(text) {
        this.props.changePasswordResetEmail(text);
    }

    onSubmitButtonPressed() {
        
    }

    render() {
        const submitButtonDisabled = this.props.passwordResetEmail.trim().length === 0 || !validateEmail(this.props.passwordResetEmail);
        return (
            <Page title="Password Reset">
                <Form>
                    <Label>Email</Label>
                    <Container>
                        <Textbox onChangeText={this.onEmailChanged} />
                    </Container>
                </Form>

                <Container>
                    <Button disabled={submitButtonDisabled} onPress={this.onSubmitButtonPressed}>Submit</Button>
                </Container>
            </Page>
        );
    }
}

PasswordResetPage.propTypes = {
    changePasswordResetEmail: PropTypes.func,
    passwordResetEmail: PropTypes.string,
};

const mapStateToProps = (state) => ({
    passwordResetEmail: state.auth.passwordResetEmail,
});

export default connect(mapStateToProps, { changePasswordResetEmail })(PasswordResetPage);
