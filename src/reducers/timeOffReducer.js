import { combineReducers } from 'redux';
import {
    PENDING_TIME_OFF_REQUESTS_RECEIVED,
    PENDING_TIME_OFF_REQUESTS_REQUEST,
    UPCOMING_TIME_OFF_REQUESTS_RECEIVED,
    UPCOMING_TIME_OFF_REQUESTS_REQUEST,
} from '../actions/timeOffActionTypes';

const INITIAL_STATE = {
    pendingRequests: [],
    pendingRequestsLoading: false,
    upcomingRequests: [],
    upcomingRequestsLoading: false,
};

const pendingRequests = (state = INITIAL_STATE.pendingRequests, action) => {
    switch (action.type) {
        case PENDING_TIME_OFF_REQUESTS_RECEIVED:
            return action.payload;

        default:
            return state;
    }
};

const pendingRequestsLoading = (state = INITIAL_STATE.pendingRequestsLoading, action) => {
    switch (action.type) {
        case PENDING_TIME_OFF_REQUESTS_RECEIVED:
            return false;

        case PENDING_TIME_OFF_REQUESTS_REQUEST:
            return true;

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

const upcomingRequestsLoading = (state = INITIAL_STATE.upcomingRequestsLoading, action) => {
    switch (action.type) {
        case UPCOMING_TIME_OFF_REQUESTS_RECEIVED:
            return false;
    
        case UPCOMING_TIME_OFF_REQUESTS_REQUEST:
            return true;

        default:
            return state;
    }
};

export default combineReducers({
    pendingRequests,
    pendingRequestsLoading,
    upcomingRequests,
    upcomingRequestsLoading,
});
