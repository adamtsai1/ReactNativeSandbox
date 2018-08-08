import { combineReducers } from 'redux';
import {
    ACTIVE_TAB_CHANGE,
    API_ERROR,
    API_REQUEST,
    API_SUCCESS,
    SPLASH_COUNTER_INCREMENT,
} from '../actions/appActionTypes';

const INITIAL_STATE = {
    activeTab: 'Dashboard',
    loading: false,
    splashCounter: 0,
};

const activeTab = (state = INITIAL_STATE.activeTab, action) => {
    switch (action.type) {
        case ACTIVE_TAB_CHANGE:
            return action.payload;

        default:
            return state;
    }
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
    activeTab,
    loading,
    splashCounter,
});
