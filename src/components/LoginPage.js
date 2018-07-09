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
        const submitButtonDisabled = this.props.userName.length === 0 || this.props.password.length === 0;

        return (
            <Page title="Login">
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

                <Container style={{ marginBottom: 8 }}>
                    <Button disabled={submitButtonDisabled} onPress={() => alert('Submit')}>
                        Submit
                    </Button>
                </Container>

                <Container>
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
    password: PropTypes.string,
    userName: PropTypes.string,
    changePasswordText: PropTypes.func,
    changeUserNameText: PropTypes.func,
};

const styles = {};

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        password: state.auth.password,
        userName: state.auth.userName,
    };
};

export default connect(mapStateToProps, { changePasswordText, changeUserNameText })(LoginPage);
