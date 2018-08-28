// Dependencies
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { connect } from 'react-redux';
import * as Yup from 'yup';

// Components
import {
    Button,
    Container,
    FormTextbox,
    Label,
    Page,
    PageBody,
    Textbox,
} from '../../../components';

// Actions
import {
    initializeLogin,
    submitLogin,
} from '../../../actions/authActions';

// App
import AppNavigationService from '../../../AppNavigationService';

class LoginPageComponent extends Component {
    constructor() {
        super();
        this.initializePage = this.initializePage.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this.initializePage);
    }

    componentDidUpdate() {
        if (this.props.authToken.length > 0) {
            AppNavigationService.navigate('Main');
        }
    }

    _handleSubmit(values) {
        Alert.alert(JSON.stringify(values));
    }

    onSubmitPressed() {
        this.props.submitLogin(this.props.userName, this.props.password);
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
                    <Formik
                        initialValues={{ userName: '', password: '' }}
                        onSubmit={this._handleSubmit}
                        validationSchema={Yup.object().shape({
                            userName: Yup.string()
                                .email('User Name must be a valid email.')
                                .required('User Name is required.'),
                            password: Yup.string()
                                .required('Password is required.'),
                        })}
                        render={({
                            errors,
                            values,
                            handleSubmit,
                            setFieldTouched,
                            setFieldValue,
                            touched,
                        }) => (
                            <View>
                                <View style={{ marginBottom: 26 }}>
                                    <FormTextbox
                                        errorMessage={touched.userName && errors.userName}
                                        labelText="User Name"
                                        ref={input => (this.userNameInput = input)}
                                        textboxProps={{
                                            autoCapitalize: 'none',
                                            name: 'userName',
                                            value: values.userName,
                                            onChangeText: setFieldValue,
                                        }}
                                    />

                                    <FormTextbox
                                        errorMessage={touched.userName && errors.password}
                                        labelText="Password"
                                        ref={input => (this.passwordInput = input)}
                                        textboxProps={{
                                            autoCapitalize: 'none',
                                            name: 'password',
                                            secureTextEntry: true,
                                            value: values.password,
                                            onChangeText: setFieldValue,
                                        }}
                                    />
                                </View>

                                {errorMessage}

                                <Container style={{ marginBottom: 8 }}>
                                    {/* <Button disabled={submitButtonDisabled} onPress={handleSubmit}> */}
                                    <Button onPress={handleSubmit}>
                                        Submit
                                    </Button>
                                </Container>

                                <Container>
                                    <Button onPress={() => this.props.navigation.navigate('PasswordReset')}>
                                        Forgot Password?
                                    </Button>
                                </Container>
                            </View>
                        )}
                    />
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
    initializeLogin,
    submitLogin,
})(LoginPageComponent);
