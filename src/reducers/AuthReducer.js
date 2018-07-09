import { combineReducers } from 'redux';
import {
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_RESET_EMAIL,
    CHANGE_USER_NAME,
} from '../actions/actionTypes';

const INITIAL_STATE = {
    password: '',
    passwordResetEmail: '',
    userName: '',
};

const password = (state = INITIAL_STATE.password, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return action.payload;

        default:
            return state;
    }
};

const passwordResetEmail = (state = INITIAL_STATE.passwordResetEmail, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_RESET_EMAIL:
            return action.payload;

        default:
            return state;
    }
};

const userName = (state = INITIAL_STATE.userName, action) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
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
