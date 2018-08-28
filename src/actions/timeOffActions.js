import moment from 'moment/src/moment';
import {
    PENDING_TIME_OFF_REQUESTS_RECEIVED,
    PENDING_TIME_OFF_REQUESTS_REQUEST,
    UPCOMING_TIME_OFF_REQUESTS_RECEIVED,
    UPCOMING_TIME_OFF_REQUESTS_REQUEST,
} from '../actions/timeOffActionTypes';
import { fetchTimeOffRequests } from '../api/timeOffRequest';

export const fetchPastRequests = (userId) => (dispatch) => {
    dispatch({ type: UPCOMING_TIME_OFF_REQUESTS_REQUEST });

    return fetchTimeOffRequests(userId, 'approved')
        .then(response => {
            dispatch({
                type: UPCOMING_TIME_OFF_REQUESTS_RECEIVED,
                payload: response.data.filter(request => {
                    const startDate = moment(request.start_date, 'YYYY-MM-DD');
                    return startDate.isSameOrBefore(moment());
                }),
            });
        });
};


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

    return fetchTimeOffRequests(userId, 'approved')
        .then(response => {
            dispatch({
                type: UPCOMING_TIME_OFF_REQUESTS_RECEIVED,
                payload: response.data.filter(request => moment(request.start_date, 'YYYY-MM-DD').isAfter(moment())),
            });
        });
};
