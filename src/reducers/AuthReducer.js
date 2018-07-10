import { combineReducers } from 'redux';
import {
    LOGIN_PASSWORD_CHANGE,
    LOGIN_USER_NAME_CHANGE,
    PASSWORD_RESET_EMAIL_CHANGE,
    PASSWORD_RESET_INIT,
    PASSWORD_RESET_SUCCESS,
} from '../actions/authActionTypes';

const INITIAL_STATE = {
    loading: false,
    loginPassword: '',
    loginUserName: '',
    passwordResetEmail: '',
    passwordResetSuccess: false,
};

const loginPassword = (state = INITIAL_STATE.loginPassword, action) => {
    switch (action.type) {
        case LOGIN_PASSWORD_CHANGE:
            return action.payload;

        default:
            return state;
    }
};

const loginUserName = (state = INITIAL_STATE.loginUserName, action) => {
    switch (action.type) {
        case LOGIN_USER_NAME_CHANGE:
            return action.payload;

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
    loginPassword,
    loginUserName,
    passwordResetEmail,
    passwordResetSuccess,
});

export default authReducer;
