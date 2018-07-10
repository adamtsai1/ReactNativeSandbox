/* eslint-disable arrow-parens */
import {
    API_ERROR,
    API_REQUEST,
    API_SUCCESS,
} from './appActionTypes';

import {
    LOGIN_PASSWORD_CHANGE,
    LOGIN_USER_NAME_CHANGE,
    PASSWORD_RESET_EMAIL_CHANGE,
    PASSWORD_RESET_INIT,
    PASSWORD_RESET_SUBMIT,
    PASSWORD_RESET_SUCCESS,
} from './authActionTypes';

import { resetPassword } from '../api';

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

export const initializePasswordReset = () => ({
    type: PASSWORD_RESET_INIT,
});

export const submitPasswordReset = (email) => (dispatch) => {
    dispatch({ type: PASSWORD_RESET_SUBMIT });
    dispatch({
        type: API_REQUEST,
        payload: email,
    });

    resetPassword(email)
        .then(response => {
            dispatch({ type: PASSWORD_RESET_SUCCESS });
            dispatch({
                type: API_SUCCESS,
                payload: response.data,
            });
        })
        .catch(response => {
            dispatch({
                type: API_ERROR,
                payload: response.error,
            });
        });
};
