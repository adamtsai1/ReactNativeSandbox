import { combineReducers } from 'redux';
import {
    AUTH_TOKEN_RETRIEVED,
    LOGIN_ERROR,
    LOGIN_INIT,
    LOGIN_SUBMIT,
    LOGIN_SUCCESS,
    PASSWORD_RESET_EMAIL_CHANGE,
    PASSWORD_RESET_INIT,
    PASSWORD_RESET_SUCCESS,
} from '../actions/authActionTypes';

const INITIAL_STATE = {
    authToken: '',
    loginErrorMessage: '',
    loginPassword: '',
    loginUserName: '',
    passwordResetEmail: '',
    passwordResetSuccess: false,
};

const authToken = (state = INITIAL_STATE.authToken, action) => {
    switch (action.type) {
        case AUTH_TOKEN_RETRIEVED:
            return action.payload;

        case LOGIN_SUCCESS:
            return action.payload.token;

        default:
            return state;
    }
};

const loginErrorMessage = (state = INITIAL_STATE.loginErrorMessage, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            return action.payload;

        case LOGIN_SUBMIT:
        case LOGIN_SUCCESS:
            return '';

        default:
            return state;
    }
};

const passwordResetEmail = (state = INITIAL_STATE.passwordResetEmail, action) => {
    switch (action.type) {
        case PASSWORD_RESET_EMAIL_CHANGE:
            return action.payload;

        case PASSWORD_RESET_INIT:
            return '';

        default:
            return state;
    }
};

const passwordResetSuccess = (state = INITIAL_STATE.passwordResetSuccess, action) => {
    switch (action.type) {
        case PASSWORD_RESET_INIT:
            return false;

        case PASSWORD_RESET_SUCCESS:
            return true;

        default:
            return state;
    }
};

const authReducer = combineReducers({
    authToken,
    loginErrorMessage,
    passwordResetEmail,
    passwordResetSuccess,
});

export default authReducer;
