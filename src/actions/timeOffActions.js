import { PENDING_TIME_OFF_REQUESTS_RECEIVED, UPCOMING_TIME_OFF_REQUESTS_RECEIVED } from '../actions/timeOffActionTypes';
import { fetchTimeOffRequests } from '../api/timeOffRequest';

export const fetchPendingRequests = (userId) => (dispatch) => {
    return fetchTimeOffRequests(userId, 'pending')
        .then(response => {
            dispatch({
                type: PENDING_TIME_OFF_REQUESTS_RECEIVED,
                payload: response.data,
            });
        });
};

export const fetchUpcomingRequests = (userId) => (dispatch) => {
    return fetchTimeOffRequests(userId, 'upcoming')
        .then(response => {
            dispatch({
                type: UPCOMING_TIME_OFF_REQUESTS_RECEIVED,
                payload: response.data,
            });
        });
};
