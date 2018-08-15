import {
    DAYS_OUT_CHANGE,
    DAYS_USED_CHANGE,
    DETAILS_CHANGE,
    END_DATE_CHANGE,
    MANAGER_COMMENTS_CHANGE,
    RETURN_DATE_CHANGE,
    START_DATE_CHANGE,
} from './timeOffFormActionTypes';

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
