import { API_REQUEST, API_SUCCESS } from './appActionTypes';
import {
    DAYS_OUT_CHANGE,
    DAYS_USED_CHANGE,
    DETAILS_CHANGE,
    END_DATE_CHANGE,
    MANAGER_COMMENTS_CHANGE,
    RETURN_DATE_CHANGE,
    START_DATE_CHANGE,
    TIME_OFF_REQUEST_CREATE,
    TIME_OFF_REQUEST_MODEL_LOAD,
    TIME_OFF_REQUEST_MODEL_RESET,
} from './timeOffFormActionTypes';

import * as timeOffRequestService from '../api/timeOffRequest';

export const changeDaysOutValue = (daysOut) => ({
    type: DAYS_OUT_CHANGE,
    payload: daysOut,
});

export const changeDaysUsedValue = (daysUsed) => ({
    type: DAYS_USED_CHANGE,
    payload: daysUsed,
});

export const changeDetailsText = (details) => ({
    type: DETAILS_CHANGE,
    payload: details,
});

export const changeEndDateValue = (endDate) => ({
    type: END_DATE_CHANGE,
    payload: endDate,
});

export const changeManagerCommentsText = (manageComments) => ({
    type: MANAGER_COMMENTS_CHANGE,
    payload: manageComments,
});

export const changeReturnDateValue = (returnDate) => ({
    type: RETURN_DATE_CHANGE,
    payload: returnDate,
});

export const changeStartDateValue = (startDate) => ({
    type: START_DATE_CHANGE,
    payload: startDate,
});

export const createTimeOffRequest = (timeOffRequest) => (dispatch) => {
    dispatch({ type: API_REQUEST });
    timeOffRequestService.createTimeOffRequest(timeOffRequest)
        .then(response => {
            dispatch({ type: API_SUCCESS });
            dispatch({
                type: TIME_OFF_REQUEST_CREATE,
                payload: response.data,
            });
        });
};

export const loadTimeOffRequestModel = (timeOffRequest) => ({
    type: TIME_OFF_REQUEST_MODEL_LOAD,
    payload: timeOffRequest,
});

export const resetTimeOffRequestModel = () => ({
    type: TIME_OFF_REQUEST_MODEL_RESET,
});

export const updateTimeOffRequest = (timeOffRequest) => (dispatch) => {

};
