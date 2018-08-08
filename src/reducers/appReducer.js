import { combineReducers } from 'redux';
import {
    API_ERROR,
    API_REQUEST,
    API_SUCCESS,
    SPLASH_COUNTER_INCREMENT,
} from '../actions/appActionTypes';

const INITIAL_STATE = {
    loading: false,
    splashCounter: 0,
};

const loading = (state = INITIAL_STATE.loading, action) => {
    switch (action.type) {
        case API_ERROR:
            return false;

        case API_REQUEST:
            return true;

        case API_SUCCESS:
            return false;

        default:
            return state;
    }
};

const splashCounter = (state = INITIAL_STATE.splashCounter, action) => {
    switch (action.type) {
        case SPLASH_COUNTER_INCREMENT:
            return state + 1;

        default:
            return state;
    }
};

export default combineReducers({
    loading,
    splashCounter,
});
