import {
    PENDING_TIME_OFF_REQUESTS_RECEIVED,
    PENDING_TIME_OFF_REQUESTS_REQUEST,
    UPCOMING_TIME_OFF_REQUESTS_RECEIVED,
    UPCOMING_TIME_OFF_REQUESTS_REQUEST,
} from '../actions/timeOffActionTypes';
import { fetchTimeOffRequests } from '../api/timeOffRequest';

export const fetchPendingRequests = (userId) => (dispatch) => {
    dispatch({ type: PENDING_TIME_OFF_REQUESTS_REQUEST });

    return fetchTimeOffRequests(userId, 'pending')
        .then(response => {
            dispatch({
                type: PENDING_TIME_OFF_REQUESTS_RECEIVED,
                payload: response.data,
            });
        });
};

export const fetchUpcomingRequests = (userId) => (dispatch) => {
    dispatch({ type: UPCOMING_TIME_OFF_REQUESTS_REQUEST });

    return fetchTimeOffRequests(userId, 'upcoming')
        .then(response => {
            dispatch({
                type: UPCOMING_TIME_OFF_REQUESTS_RECEIVED,
                payload: response.data,
            });
        });
};
