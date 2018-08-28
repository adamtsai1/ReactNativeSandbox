// Dependencies
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
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
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this.initializePage);
    }

    componentDidUpdate() {
        if (this.props.authToken.length > 0) {
            AppNavigationService.navigate('Main');
        }
    }

    submit(values) {
        this.props.submitLogin(values.userName, values.password);
    }

    initializePage() {
        this.userNameInput.focus();
        // this.props.initializeLogin();
    }

    render() {
        const { errorMessageContainerStyle, errorMessageTextStyle } = styles;
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
                        onSubmit={this.submit}
                        validationSchema={Yup.object().shape({
                            userName: Yup.string()
                                .email('User Name must be a valid email.')
                                .required('User Name is required.'),
                            password: Yup.string()
                                .required('Password is required.'),
                        })}
                        render={({
                            errors,
                            handleSubmit,
                            isValid,
                            setFieldTouched,
                            setFieldValue,
                            touched,
                            values,
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
                                            onTouch: setFieldTouched,
                                        }}
                                    />

                                    <FormTextbox
                                        errorMessage={touched.password && errors.password}
                                        labelText="Password"
                                        ref={input => (this.passwordInput = input)}
                                        textboxProps={{
                                            autoCapitalize: 'none',
                                            name: 'password',
                                            secureTextEntry: true,
                                            value: values.password,
                                            onChangeText: setFieldValue,
                                            onTouch: setFieldTouched,
                                        }}
                                    />
                                </View>

                                {errorMessage}

                                <Container style={{ marginBottom: 8 }}>
                                    <Button disabled={!isValid} onPress={handleSubmit}>
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
});

export const LoginPage = connect(mapStateToProps, {
    initializeLogin,
    submitLogin,
})(LoginPageComponent);
