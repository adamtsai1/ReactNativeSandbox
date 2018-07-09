import { combineReducers } from 'redux';
import { CHANGE_PASSWORD_TEXT, CHANGE_USER_NAME_TEXT } from '../actions/actionTypes';

const INITIAL_STATE = {
    password: '',
    userName: '',
};

const password = (state = INITIAL_STATE.password, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_TEXT:
            return action.payload;

        default:
            return state;
    }
};

const userName = (state = INITIAL_STATE.userName, action) => {
    switch (action.type) {
        case CHANGE_USER_NAME_TEXT:
            return action.payload;

        default:
            return state;
    }
};

const authReducer = combineReducers({
    password,
    userName,
});

export default authReducer;
