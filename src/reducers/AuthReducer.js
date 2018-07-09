import { combineReducers } from 'redux';
import { UPDATE_USER_NAME } from '../actions/actionTypes';

const INITIAL_STATE = {
    password: '',
    userName: '',
};

const password = (state = INITIAL_STATE.password, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const userName = (state = INITIAL_STATE.userName, action) => {
    switch (action.type) {
        case UPDATE_USER_NAME:
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
