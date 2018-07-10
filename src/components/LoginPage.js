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
import { changePasswordText, changeUserNameText } from '../actions/authActions';

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
                <Form>
                    <Label>User Name</Label>
                    <Container style={{ marginBottom: 16 }}>
                        <Textbox onChangeText={this.onUserNameChanged} />
                    </Container>

                    <Label>Password</Label>
                    <Container>
                        <Textbox secureTextEntry onChangeText={this.onPasswordChanged} />
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
};

const styles = {};

const mapStateToProps = (state) => {
    return {
        password: state.auth.password,
        userName: state.auth.userName,
    };
};

export default connect(mapStateToProps, { changePasswordText, changeUserNameText })(LoginPage);
