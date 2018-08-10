import { combineReducers } from 'redux';
import {
    PENDING_TIME_OFF_REQUESTS_RECEIVED,
    UPCOMING_TIME_OFF_REQUESTS_RECEIVED,
} from '../actions/timeOffActionTypes';

const INITIAL_STATE = {
    pendingRequests: [],
    upcomingRequests: [],
};

const pendingRequests = (state = INITIAL_STATE.pendingRequests, action) => {
    switch (action.type) {
        case PENDING_TIME_OFF_REQUESTS_RECEIVED:
            return action.payload;

        default:
            return state;
    }
};

const upcomingRequests = (state = INITIAL_STATE.upcomingRequests, action) => {
    switch (action.type) {
        case UPCOMING_TIME_OFF_REQUESTS_RECEIVED:
            return action.payload;

        default:
            return state;
    }
};

export default combineReducers({
    pendingRequests,
    upcomingRequests,
});
