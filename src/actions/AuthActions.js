/* eslint-disable arrow-parens */
import { AsyncStorage } from 'react-native';
import {
    API_ERROR,
    API_REQUEST,
    API_SUCCESS,
} from './appActionTypes';

import {
    AUTH_TOKEN_RETRIEVED,
    LOGIN_ERROR,
    LOGIN_INIT,
    LOGIN_PASSWORD_CHANGE,
    LOGIN_SUBMIT,
    LOGIN_SUCCESS,
    LOGIN_USER_NAME_CHANGE,
    PASSWORD_RESET_EMAIL_CHANGE,
    PASSWORD_RESET_INIT,
    PASSWORD_RESET_SUBMIT,
    PASSWORD_RESET_SUCCESS,
} from './authActionTypes';

import { login, resetPassword } from '../api';

export const changePasswordResetEmail = (email) => ({
    type: PASSWORD_RESET_EMAIL_CHANGE,
    payload: email,
});

export const changePasswordText = (password) => ({
    type: LOGIN_PASSWORD_CHANGE,
    payload: password,
});

export const changeUserNameText = (userName) => ({
    type: LOGIN_USER_NAME_CHANGE,
    payload: userName,
});

export const initializeLogin = () => ({
    type: LOGIN_INIT,
});

export const initializePasswordReset = () => ({
    type: PASSWORD_RESET_INIT,
});

export const setAuthToken = (authToken) => ({
    type: AUTH_TOKEN_RETRIEVED,
    payload: authToken,
});

export const submitLogin = (userName, password) => (dispatch) => {
    dispatch({ type: LOGIN_SUBMIT });
    dispatch({ type: API_REQUEST });

    return login(userName, password)
        .then(apiResponse => {
            AsyncStorage.setItem('auth_token', apiResponse.data.token);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: apiResponse.data,
            });

            dispatch({
                type: API_SUCCESS,
                payload: apiResponse.data,
            });
        })
        .catch(apiResponse => {
            dispatch({
                type: LOGIN_ERROR,
                payload: apiResponse.message,
            });

            dispatch({
                type: API_ERROR,
                payload: apiResponse.message,
            });
        });
};

export const submitPasswordReset = (email) => (dispatch) => {
    dispatch({ type: PASSWORD_RESET_SUBMIT });
    dispatch({
        type: API_REQUEST,
        payload: email,
    });

    return resetPassword(email)
        .then(apiResponse => {
            dispatch({ type: PASSWORD_RESET_SUCCESS });
            dispatch({
                type: API_SUCCESS,
                payload: apiResponse.data,
            });
        })
        .catch(apiResponse => {
            dispatch({
                type: API_ERROR,
                payload: apiResponse.error,
            });
        });
};
