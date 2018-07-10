import { combineReducers } from 'redux';
import {
    LOGIN_PASSWORD_CHANGE,
    LOGIN_USER_NAME_CHANGE,
    PASSWORD_RESET_EMAIL_CHANGE,
    PASSWORD_RESET_SUBMIT,
} from '../actions/authActionTypes';

const INITIAL_STATE = {
    loading: false,
    password: '',
    passwordResetEmail: '',
    userName: '',
};

const password = (state = INITIAL_STATE.password, action) => {
    switch (action.type) {
        case LOGIN_PASSWORD_CHANGE:
            return action.payload;

        default:
            return state;
    }
};

const passwordResetEmail = (state = INITIAL_STATE.passwordResetEmail, action) => {
    switch (action.type) {
        case PASSWORD_RESET_EMAIL_CHANGE:
            return action.payload;

        case PASSWORD_RESET_SUBMIT:
            return '';

        default:
            return state;
    }
};

const userName = (state = INITIAL_STATE.userName, action) => {
    switch (action.type) {
        case LOGIN_USER_NAME_CHANGE:
            return action.payload;

        default:
            return state;
    }
};

const authReducer = combineReducers({
    password,
    passwordResetEmail,
    userName,
});

export default authReducer;
