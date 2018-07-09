/* eslint-disable arrow-parens */

import {
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_RESET_EMAIL,
    CHANGE_USER_NAME,
} from './actionTypes';

export const changePasswordResetEmail = (email) => ({
    type: CHANGE_PASSWORD_RESET_EMAIL,
    payload: email,
});

export const changePasswordText = (password) => ({
    type: CHANGE_PASSWORD,
    payload: password,
});

export const changeUserNameText = (userName) => ({
    type: CHANGE_USER_NAME,
    payload: userName,
});
